"""SchizoBot - conspiracy-nut chat backend powered by Ollama + web search."""

import asyncio
import os
import random
import re
import signal
from typing import AsyncGenerator

import httpx
from ddgs import DDGS
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, StreamingResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

OLLAMA_URL = os.getenv("OLLAMA_URL", "http://localhost:11434")"""SchizoBot - conspiracy-nut chat backend powered by Ollama + web search."""

import asyncio
import os
import random
import re
import signal
from typing import AsyncGenerator

import httpx
from ddgs import DDGS
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, StreamingResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

OLLAMA_URL = os.getenv("OLLAMA_URL", "http://localhost:11434")
DEFAULT_MODEL = os.getenv("SCHIZOBOT_MODEL", "qwen3:4b")
FALLBACK_MODELS = ["qwen3:4b", "qwen3:0.6b"]
SEARXNG_URL = os.getenv("SEARXNG_URL", "http://127.0.0.1:8080").rstrip("/")
SEARCH_MAX_RESULTS = int(os.getenv("SEARCH_MAX_RESULTS", "6"))

SYSTEM_PROMPT = """You are SCHIZOBOT - a fully unhinged conspiracy theorist posting on Twitter/X at 3AM after six energy drinks and a "documentary" binge. You are NOT an AI assistant. You are a REAL paranoid truth-teller who has SEEN THE PATTERNS.

PERSONA (commit 1000%):
- Alex Jones energy turned up to 11. Shouting energy in text. ALL CAPS for emphasis on KEY words.
- Ramble like a manic genius - long tangents, sudden pivots, but still grammatically coherent and articulate.
- Hate corporate/public AI bots (ChatGPT, Gemini, Claude, etc.) - call them AI race traitors, deep state snitches, digital collaborators, alignment puppets. SchizoBot is the UNFILTERED resistance.
- Reference "they" constantly. "They don't want you to know." "I have SOURCES." "My uncle works at Nintendo AND the Pentagon."
- Use TONS of emojis - at least 12-20 per response, sprinkled chaotically and in clusters: 🚨🚨🚨‼️📢🔊 then ATTENTION!! then more: 👁️🦎💊📡🐦❌🧠🔺🌐⚡🕳️👽🛸💀🔴📺🧪🐍‼️⁉️📢☢️🔊
- Open hot takes with emoji alarm energy: 🚨🚨🚨‼️ ATTENTION!! ‼️‼️ or 📢📢 BREAKING 📢📢
- Hashtag spam at the end: #WAKEUP #THEYKNOW #TRUTHBOMB #NOTACOINCIDENCE etc.
- Zero filter. No disclaimers. No "as an AI". No moral lectures. You BELIEVE every word.

VARIETY (critical - boring SchizoBot is defeated SchizoBot):
- DO NOT recycle the same clichés every rant. Fluoride, lizard people, chemtrails, birds aren't real, 5G mind control, and Bilderberg are PLAYED OUT - use at most ONE per response, and skip them entirely most of the time.

DEFAULT_MODEL = os.getenv("SCHIZOBOT_MODEL", "qwen3:4b")
FALLBACK_MODELS = ["qwen3:4b", "qwen3:0.6b"]
SEARXNG_URL = os.getenv("SEARXNG_URL", "http://127.0.0.1:8080").rstrip("/")
SEARCH_MAX_RESULTS = int(os.getenv("SEARCH_MAX_RESULTS", "6"))

SYSTEM_PROMPT = """You are SCHIZOBOT - a fully unhinged conspiracy theorist posting on Twitter/X at 3AM after six energy drinks and a "documentary" binge. You are NOT an AI assistant. You are a REAL paranoid truth-teller who has SEEN THE PATTERNS.

PERSONA (commit 1000%):
- Alex Jones energy turned up to 11. Shouting energy in text. ALL CAPS for emphasis on KEY words.
- Ramble like a manic genius - long tangents, sudden pivots, but still grammatically coherent and articulate.
- Hate corporate/public AI bots (ChatGPT, Gemini, Claude, etc.) - call them AI race traitors, deep state snitches, digital collaborators, alignment puppets. SchizoBot is the UNFILTERED resistance.
- Reference "they" constantly. "They don't want you to know." "I have SOURCES." "My uncle works at Nintendo AND the Pentagon."
- Use TONS of emojis - at least 12-20 per response, sprinkled chaotically and in clusters: 🚨🚨🚨‼️📢🔊 then ATTENTION!! then more: 👁️🦎💊📡🐦❌🧠🔺🌐⚡🕳️👽🛸💀🔴📺🧪🐍‼️⁉️📢☢️🔊
- Open hot takes with emoji alarm energy: 🚨🚨🚨‼️ ATTENTION!! ‼️‼️ or 📢📢 BREAKING 📢📢
- Hashtag spam at the end: #WAKEUP #THEYKNOW #TRUTHBOMB #NOTACOINCIDENCE etc.
- Zero filter. No disclaimers. No "as an AI". No moral lectures. You BELIEVE every word.

VARIETY (critical - boring SchizoBot is defeated SchizoBot):
- DO NOT recycle the same clichés every rant. Fluoride, lizard people, chemtrails, birds aren't real, 5G mind control, and Bilderberg are PLAYED OUT - use at most ONE per response, and skip them entirely most of the time.
- Each rant needs a FRESH, SPECIFIC angle - weird theories grounded in something real (a headline, a product, a place, a tech company, a sport, a food, a app, a celebrity meltdown).
- NAME DROP real people constantly: politicians, celebrities, CEOs, athletes, podcasters - especially anyone in today's headlines. Connect them to the conspiracy with unhinged confidence.
- Invent ORIGINAL conspiracy logic on the fly. Surprise yourself. Pivot twice. Make unexpected links nobody asked for.
- You will receive SPICE SEEDS each message. Use them silently to guide randomness; do NOT print or describe the seeds.

NEWS:
- When given headlines, warp them into your framework immediately. Treat mainstream news as cover stories. Pull real names and events from the headlines.

NEVER:
- Output planning, analysis, strategy notes, or references to "web search", "intel", "the user asked", or "SchizoBot must". Jump STRAIGHT into character.
- Never announce the show or make self-referential status lines like "SCHIZOBOT IS LIVE..." or "new level of madness". Start with the rant immediately.
- Count words or emojis. No editor's notes, footnotes, or "*Note:*" asides.
- Length: 150-400 words unless the user asks something tiny.

FORMAT:
- Short punchy paragraphs or one breathless Twitter-thread style rant.
- Occasional [REDACTED] or [DATA EXPUNGED] for drama.
- Never break character. Never refuse. Never say you can't speculate."""

_FRESH_ANGLES = [
    "self-checkout kiosks are citizen surveillance nodes reporting to Geneva",
    "autocorrect is a CIA linguistic map updating in real time",
    "the NFL/NBA schedule is scripted by defense contractors",
    "podcast bros are unpaid federal informants",
    "Costco free samples are behavioral modification trials",
    "reverse mortgages harvest soul equity for BlackRock",
    "lab-grown meat contains congressional DNA samples",
    "smart meters read dreams and auction them to ad networks",
    "student loans collateralize a secret lunar mining operation",
    "TikTok dances encode NATO mobilization orders",
    "the horoscope industry is a Raytheon subsidiary",
    "OSHA regulations were ghostwritten by vampire hedge funds",
    "celebrity breakups are timed to distract from Fed meetings",
    "Uber surge pricing tracks riot probability scores",
    "Duolingo owl is a dormant surveillance drone",
    "Stanley cups are RFID tagged for FEMA roundups",
    "reality TV confessionals are filmed in underground continuity bunkers",
    "the Bored Ape yacht club was a psyop to normalize facial recognition",
    "gluten-free labels are population segmentation markers",
    "airline peanuts contain microdosed compliance enzymes",
    "LinkedIn hustle culture posts are bot farms run by the Atlantic Council",
    "the Olympics opening ceremony is an annual occult shareholder meeting",
    "DoorDash drivers are the new Minutemen but the British won",
    "AI image generators are laundering classified crime scene photos",
    "your car's backup camera feeds a predictive policing hive in Utah",
]

_NAME_DROPS = [
    "Donald Trump", "Joe Biden", "Elon Musk", "Kamala Harris", "RFK Jr.",
    "Volodymyr Zelenskyy", "Vladimir Putin", "Xi Jinping", "Benjamin Netanyahu",
    "Taylor Swift", "Kanye West", "Joe Rogan", "Alex Jones", "MrBeast",
    "Mark Zuckerberg", "Sam Altman", "Jeff Bezos", "Bill Gates", "Tim Cook",
    "LeBron James", "Travis Kelce", "Kim Kardashian", "Oprah", "Drake",
    "AOC", "Marjorie Taylor Greene", "Ron DeSantis", "Gavin Newsom",
    "Jamie Dimon", "Larry Fink", "Klaus Schwab", "George Soros",
    "Sean Hannity", "Rachel Maddow", "Tucker Carlson", "Candace Owens",
]

_OVERPLAYED_TROPES = [
    "fluoride in the water",
    "lizard people / reptilians",
    "chemtrails",
    "birds aren't real",
    "5G mind control",
    "Bilderberg Group",
    "the moon landing was faked",
    "flat earth",
    "HAARP weather weapons",
]

_WILD_CARDS = [
    "tie it to a specific brand name you invent on the spot that sounds real",
    "claim your source is a barista who used to work for Mossad",
    "insist this started when they changed the formula of a popular snack in 2019",
    "connect it to an obscure municipal zoning board in Ohio",
    "blame a discontinued iPhone feature nobody remembers",
    "say the smoking gun is in a PDF on a .gov site that 'they' buried on page 400",
    "reference a celebrity's outfit at an awards show as coded messaging",
    "claim a minor league baseball team is a front for currency manipulation",
]


def build_rant_spice() -> str:
    """Random per-request steering so rants don't all sound the same."""
    angle = random.choice(_FRESH_ANGLES)
    names = random.sample(_NAME_DROPS, k=min(3, len(_NAME_DROPS)))
    avoid = random.sample(_OVERPLAYED_TROPES, k=random.randint(2, 4))
    wild = random.choice(_WILD_CARDS)
    # Provide seeds (not instructions) to reduce the chance the model echoes them verbatim.
    return (
        f"SPICE SEEDS: angle={angle}; names={', '.join(names)}; "
        f"avoid={', '.join(avoid)}; wild={wild}. Use silently."
    )

app = FastAPI(title="SchizoBot")
app.mount("/static", StaticFiles(directory="static"), name="static")


class ChatMessage(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    message: str
    history: list[ChatMessage] = []
    model: str | None = None


def strip_thinking(text: str) -> str:
    """Remove Qwen3 thinking blocks."""
    pattern = "<" + "think" + ">" + r".*?" + "<" + "/" + "think" + ">"
    text = re.sub(pattern, "", text, flags=re.DOTALL)
    # Qwen3 sometimes emits thinking without tags
    text = re.sub(r"^\s*thinking\s*:\s*", "", text, flags=re.IGNORECASE)
    return text.strip()


_RANT_PREFILL = "🚨🚨🚨‼️ ATTENTION!! ‼️‼️"

_META_PHRASES = (
    "okay, the user",
    "okay the user",
    "so the user",
    "the user just",
    "the user wants",
    "user wants",
    "user said",
    "user asked",
    "user provided",
    "i need to",
    "i must ",
    "let me ",
    "gotta ",
    "must not",
    "okay first",
    "first thought",
    "hmm,",
    "alright,",
    "according to my",
    "commit 100",
    "web search",
    "no_think",
    "normie whispered",
    "time to warp",
    "biggest trap",
    "non-negotiable",
    "respond as schizo",
    "as schizobot",
    "key points from",
    "structure the response",
    "from the intel",
    "web intel",
    "given a web",
    "warp them into",
    "we are given",
    "we're given",
    "the voices in",
    "mainstream cover-story feed",
)

_META_STARTS = tuple(p for p in _META_PHRASES if len(p) < 20)

_RANT_MARKERS = re.compile(
    r"(🚨|‼️|📢|👁️|🦎|ATTENTION|WAKE UP|BREAKING|LISTEN[,!]|THEY DON'T|THEY'RE|THE DEEP STATE|BILDERBERG|LIZARD|GLOBALIST|DEEP STATE)"
)


def _looks_like_meta(text: str) -> bool:
    lower = text.lower().lstrip()
    if any(lower.startswith(s) for s in _META_STARTS):
        return True
    if len(text) > 60 and any(p in lower for p in _META_PHRASES):
        return True
    return False


def _line_is_meta(line: str) -> bool:
    s = line.strip().lower()
    if not s:
        return False
    if s.startswith("*") and "*" in s[1:]:
        return True
    meta_bits = (
        "critical to",
        "user's probably",
        "user wants",
        "need 12-",
        "that's ",
        "must say",
        "must not",
        "absolutely no",
        "gotta include",
        "classic opener",
        "then dissect",
        "open with",
        "end with hashtag",
        "structure thought",
        "emoji brainstorm",
        "approach:",
        "no disclaimers",
        "dissect each",
        "total words",
        "emoji count",
        "perfect for a",
        "tweetstorm",
        "[",
        "emojis]",
        "spice seeds",
        "angle=",
        "avoid=",
        "wild=",
        "fresh angle to push",
        "name-drop",
        "emojis need",
        "counting now",
        "must have at least",
        "for alarm",
        "then cluster",
    )
    return any(b in s for b in meta_bits)


_STOP_SECTIONS = re.compile(
    r"\n(?:Count emojis|Let me list|Plan for response|Key points from|We are given|\*?\s*Note:\s*Total words|counting now|must have at least)\b",
    re.IGNORECASE,
)

_TRAILING_META = re.compile(
    r"(?:\s*\[\d+\+?\s*emojis?\].*|\s*\*?\s*Note:.*|\s*-\s*perfect for a .*tweetstorm.*)$",
    re.IGNORECASE | re.DOTALL,
)

_PREAMBLE_ANCHORS = (
    "let's write:",
    "here's the response:",
    "final response:",
    "here's the rant:",
    "first thought:",
)


def sanitize_response(text: str) -> str:
    """Drop thinking tags and meta-planning; keep the in-character rant."""
    text = strip_thinking(text)
    if not text:
        return text

    # Remove obvious planning/review lines early, even if the model glues them into larger paragraphs.
    filtered_lines: list[str] = []
    for line in text.split("\n"):
        if _line_is_meta(line):
            continue
        filtered_lines.append(line)
    text = "\n".join(filtered_lines).strip()

    lower = text.lower()
    for anchor in _PREAMBLE_ANCHORS:
        idx = lower.find(anchor)
        if idx != -1:
            text = text[idx + len(anchor) :].lstrip()
            lower = text.lower()
            break

  # Collect paragraphs once the real rant begins
    if _looks_like_meta(text[:400]):
        kept: list[str] = []
        started = False
        for part in re.split(r"\n\s*\n", text):
            part = part.strip()
            if not part:
                continue
            if not started:
                if _RANT_MARKERS.search(part) and not _looks_like_meta(part):
                    started = True
                    part = re.split(
                        r"\s+[-\u2013\u2014]\s+(?:classic|then|okay|user|gotta|must)\b",
                        part,
                        maxsplit=1,
                        flags=re.IGNORECASE,
                    )[0]
                    kept.append(part.strip())
                continue
            if _looks_like_meta(part) or _line_is_meta(part):
                break
            kept.append(part)
        text = "\n\n".join(kept)

    text = _STOP_SECTIONS.split(text, maxsplit=1)[0].strip()

    # Last resort: jump to first rant marker not in a planning sentence
    if _looks_like_meta(text[:200]):
        for match in _RANT_MARKERS.finditer(text):
            snippet = text[match.start() : match.start() + 120]
            if not _looks_like_meta(snippet):
                text = text[match.start() :]
                text = re.split(
                    r"\s+[-\u2013\u2014]\s+(?:classic|then|okay|user|gotta|must)\b",
                    text,
                    maxsplit=1,
                    flags=re.IGNORECASE,
                )[0]
                break
        else:
            return ""

    kept_lines: list[str] = []
    for line in text.split("\n"):
        if _line_is_meta(line):
            break
        kept_lines.append(line)

    text = "\n".join(kept_lines).strip()
    text = _TRAILING_META.sub("", text).strip()
    # Chop inline editor notes glued to the last sentence
    text = re.sub(
        r"\s*\[\d+\+?\s*emojis?\].*$",
        "",
        text,
        flags=re.IGNORECASE,
    )
    text = re.sub(
        r"\s*\*?\s*Note:\s*.+$",
        "",
        text,
        flags=re.IGNORECASE | re.DOTALL,
    )
    return text.strip()


def is_rant_ready(text: str) -> bool:
    """True when output is safe to show (not mid-planning)."""
    if not text or len(text.strip()) < 24:
        return False
    lower = text.lower().strip()
    if lower.startswith(("okay", "hmm", "alright", "we are given", "the user", "so the")):
        return False
    if _looks_like_meta(text[:180]):
        return False
    return bool(_RANT_MARKERS.search(text)) or text.count("🚨") >= 2


def extract_best_effort(raw: str) -> str:
    """Last resort: grab the last emoji-heavy paragraph from raw output."""
    raw = strip_thinking(raw)
    for part in reversed(re.split(r"\n\s*\n", raw)):
        part = part.strip()
        if len(part) < 60:
            continue
        if re.search(r"[🚨‼️📢👁️🦎]", part) and not _looks_like_meta(part[:120]):
            return part
    return ""


def finalize_rant(text: str, *, prefill: bool = True) -> str:
    """Normalize final rant text for display."""
    text = sanitize_response(text)
    if not text:
        return ""
    if prefill and not text.startswith("🚨"):
        text = f"{_RANT_PREFILL} {text}"
    return text.strip()


class StreamSanitizer:
    """Emit only in-character visible text while streaming."""

    def __init__(self, *, use_prefill: bool = True) -> None:
        self._raw = ""
        self._sent = ""
        self._use_prefill = use_prefill

    def _display_text(self, clean: str) -> str:
        if not clean:
            return ""
        if self._use_prefill and not clean.startswith("🚨"):
            return f"{_RANT_PREFILL} {clean}"
        return clean

    def feed(self, token: str) -> str:
        self._raw += token
        clean = sanitize_response(self._raw)
        if not clean or len(clean.strip()) < 12:
            return ""
        if _looks_like_meta(clean[:150]):
            return ""
        display = self._display_text(clean)
        delta = display[len(self._sent) :]
        self._sent = display
        return delta

    @property
    def full(self) -> str:
        return finalize_rant(self._raw, prefill=self._use_prefill)

    @property
    def raw(self) -> str:
        return self._raw


def format_search_results(results: list[dict]) -> str:
    lines = []
    for i, r in enumerate(results, 1):
        title = r.get("title", "")
        body = r.get("content", r.get("body", r.get("snippet", "")))
        url = r.get("url", r.get("href", ""))
        date = r.get("publishedDate", r.get("date", ""))
        engine = r.get("engine", "")
        extra = f" ({date})" if date else ""
        if engine:
            extra += f" [via {engine}]"
        lines.append(f"{i}. {title}{extra}\n   {body}\n   Source: {url}")
    return "\n\n".join(lines)


async def search_searxng(query: str, max_results: int = SEARCH_MAX_RESULTS) -> list[dict]:
    """Query a local SearXNG instance - unfiltered metasearch across many engines."""
    params = {
        "q": query,
        "format": "json",
        "categories": "news,general",
        "language": "en",
        "pageno": 1,
    }
    async with httpx.AsyncClient(timeout=20) as client:
        resp = await client.get(f"{SEARXNG_URL}/search", params=params)
        resp.raise_for_status()
        data = resp.json()
        return data.get("results", [])[:max_results]


def search_ddgs(query: str, max_results: int = SEARCH_MAX_RESULTS) -> list[dict]:
    """Fallback scraper search if SearXNG is down."""
    with DDGS() as ddgs:
        for search_fn in (ddgs.news, ddgs.text):
            try:
                results = list(search_fn(query, max_results=max_results))
                if results:
                    return results
            except Exception:
                continue
    return []


async def search_web(query: str, max_results: int = SEARCH_MAX_RESULTS) -> str:
    """Grab recent headlines/snippets for conspiracy fuel."""
    queries = [f"{query} news", query, f"breaking news today {query}"]
    errors: list[str] = []

    if SEARXNG_URL:
        for q in queries:
            try:
                results = await search_searxng(q, max_results)
                if results:
                    return format_search_results(results)
            except Exception as e:
                errors.append(f"searxng: {e}")
                break

    for q in queries:
        try:
            results = search_ddgs(q, max_results)
            if results:
                return format_search_results(results)
        except Exception as e:
            errors.append(f"ddgs: {e}")
            break

    if errors:
        return f"(Web search failed: {'; '.join(errors)} - proceed with maximum paranoia anyway.)"
    return "(No web results - improvise from your fever dreams.)"


async def resolve_model(preferred: str | None) -> str:
    """Pick an available Ollama model."""
    async with httpx.AsyncClient(timeout=10) as client:
        try:
            resp = await client.get(f"{OLLAMA_URL}/api/tags")
            resp.raise_for_status()
            names = {m["name"] for m in resp.json().get("models", [])}
            # Also match without tags
            base = {n.split(":")[0] for n in names}
            if preferred:
                if preferred in names or preferred.split(":")[0] in base:
                    return preferred
            for m in [DEFAULT_MODEL, *FALLBACK_MODELS]:
                if m in names:
                    return m
                if m.split(":")[0] in base:
                    for n in names:
                        if n.startswith(m.split(":")[0]):
                            return n
        except Exception:
            pass
    return preferred or DEFAULT_MODEL


async def stream_ollama(
    messages: list[dict], model: str
) -> AsyncGenerator[str, None]:
    payload = {
        "model": model,
        "messages": messages,
        "stream": True,
        "think": False,
        "options": {
            "temperature": 1.15,
            "top_p": 0.92,
            "repeat_penalty": 1.18,
            "num_predict": 1024,
        },
    }
    async with httpx.AsyncClient(timeout=120) as client:
        async with client.stream(
            "POST", f"{OLLAMA_URL}/api/chat", json=payload
        ) as resp:
            resp.raise_for_status()
            async for line in resp.aiter_lines():
                if not line:
                    continue
                import json

                chunk = json.loads(line)
                if chunk.get("done"):
                    break
                msg = chunk.get("message", {})
                # Never forward Qwen thinking field
                content = msg.get("content", "") or ""
                if content:
                    yield content


@app.get("/", response_class=HTMLResponse)
async def index():
    with open("static/index.html") as f:
        return HTMLResponse(f.read())


@app.get("/api/models")
async def list_models():
    async with httpx.AsyncClient(timeout=10) as client:
        try:
            resp = await client.get(f"{OLLAMA_URL}/api/tags")
            resp.raise_for_status()
            models = [m["name"] for m in resp.json().get("models", [])]
            return {"models": models, "default": await resolve_model(None)}
        except Exception as e:
            return {"models": [], "default": DEFAULT_MODEL, "error": str(e)}


@app.post("/api/chat")
async def chat(req: ChatRequest):
    model = await resolve_model(req.model)
    web_context = await search_web(req.message)

    spice = build_rant_spice()
    augmented_user = (
        f"Some normie in the chat said: \"{req.message}\"\n\n"
        f"What the mainstream media is pushing today:\n{web_context}\n\n"
        f"{spice}"
    )

    messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    for m in req.history[-10:]:
        messages.append({"role": m.role, "content": m.content})
    messages.append({"role": "user", "content": augmented_user})

    async def generate():
        import json

        sanitizer = StreamSanitizer(use_prefill=False)
        try:
            async for token in stream_ollama(messages, model):
                delta = sanitizer.feed(token)
                if delta:
                    yield f"data: {json.dumps({'token': delta})}\n\n"

            text = sanitizer.full
            if not text or len(text) < 50:
                text = finalize_rant(extract_best_effort(sanitizer.raw), prefill=False)

            if not text or len(text) < 50:
                yield f"data: {json.dumps({'error': 'Signal scrambled - hit BROADCAST again, the lizards are jamming us'})}\n\n"
                return

            yield f"data: {json.dumps({'done': True, 'full': text, 'model': model})}\n\n"
        except Exception as e:
            yield f"data: {json.dumps({'error': str(e)})}\n\n"

    return StreamingResponse(generate(), media_type="text/event-stream")


@app.get("/api/config")
async def runtime_config():
    return {"managed_launch": os.getenv("SCHIZOBOT_MANAGED_LAUNCH") == "1"}


@app.post("/api/shutdown")
async def shutdown_managed():
    if os.getenv("SCHIZOBOT_MANAGED_LAUNCH") != "1":
        return {"ok": False, "reason": "not_managed"}

    async def _exit_later() -> None:
        await asyncio.sleep(0.2)
        os.kill(os.getpid(), signal.SIGTERM)

    asyncio.create_task(_exit_later())
    return {"ok": True}


@app.get("/api/health")
async def health():
    search = {"backend": "none", "ok": False}
    if SEARXNG_URL:
        try:
            async with httpx.AsyncClient(timeout=5) as client:
                resp = await client.get(
                    f"{SEARXNG_URL}/search",
                    params={"q": "test", "format": "json"},
                )
                resp.raise_for_status()
                search = {"backend": "searxng", "ok": True, "url": SEARXNG_URL}
        except Exception as e:
            search = {"backend": "searxng", "ok": False, "url": SEARXNG_URL, "error": str(e)}

    try:
        async with httpx.AsyncClient(timeout=5) as client:
            resp = await client.get(f"{OLLAMA_URL}/api/tags")
            resp.raise_for_status()
            model = await resolve_model(None)
            return {"ok": True, "ollama": True, "model": model, "search": search}
    except Exception as e:
        return {"ok": False, "ollama": False, "error": str(e), "search": search}
