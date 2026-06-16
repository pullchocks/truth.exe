const EMOJIS = [
  "🚨", "🚨", "🚨", "👁️", "👁️", "🦎", "💊", "📡", "🐦", "❌", "🧠", "🔺", "👽", "🛸",
  "💀", "🔴", "🧪", "🐍", "🗿", "⚡", "🕳️", "📺", "📢", "🌙", "🐸", "☢️", "🔊", "‼️", "⁉️",
];
const EMOJI_CLUSTERS = [
  "🚨🚨🚨‼️📢🔊",
  "‼️‼️🚨 ATTENTION 🚨‼️‼️",
  "📢📢🔊 BREAKING 📢📢",
  "👁️👁️👁️ THEY SEE YOU 👁️👁️👁️",
  "☢️☢️🚨 FREQUENCY SPIKE ☢️☢️",
  "🔊🔊📢 TURN UP THE TRUTH 🔊🔊",
];
const RANTS = [
  "TURNING THE FROGS GAY WAS JUST PHASE ONE",
  "YOUR SMART FRIDGE REPORTS TO GENEVA",
  "THEY INVENTED TUESDAYS TO ADD AN EXTRA TAX DAY",
  "YOUR DREAMS ARE ADS INSERTED BY BIG SLEEP",
  "THE CIA INVENTED BIRTHDAY CAKES TO TRACK AGING CITIZENS",
  "WIKIPEDIA IS WRITTEN BY LIZARDS WITH PhDs",
  "YOUR WIFI ROUTER IS A PORTAL - UNPLUG IT",
  "YOUR DOCTOR WORKS FOR BIG PHARMA AND BIG SKY",
  "THEY PUT MICROCHIPS IN BANANAS - PEEL BACK THE LIES",
  "GROCERY STORE MUSIC IS FREQUENCY COMPLIANCE",
  "YOUR CAR'S CHECK ENGINE LIGHT IS A SNITCH",
  "THE SUN IS LOCAL AND ON A DIMMER SWITCH",
  "YOUR SMART METER IS COUNTING YOUR DREAMS",
  "THE GRAND CANYON IS A MINING SCAR FROM GIANTS",
  "OSTRICHES ARE EMU PLANTS GROWN BY NASA",
  "YOUR PILLOW IS RECORDING SNORE FREQUENCIES FOR CIA",
  "THE VATICAN INVENTED TIME ZONES TO HIDE THE SECOND SUN",
  "FLAT EARTH IS A PSYOP TO HIDE THE CUBE",
  "YOUR SHOWER CURTAIN IS A PORTAL IF LEFT OPEN",
  "BIG FOOT WORKS FOR THE POST OFFICE",
];
const GLOWIE_TARGETS = [
  "ALEX JONES",
  "JESSE VENTURA",
  "DAVID ICKE",
  "EDWARD SNOWDEN",
  "JULIAN ASSANGE",
  "JOE ROGAN",
  "TUCKER CARLSON",
  "RUSSELL BRAND",
  "RFK JR.",
  "GLENN GREENWALD",
  "CHELSEA MANNING",
  "YE (KANYE)",
  "JORDAN PETERSON",
  "PAUL JOSEPH WATSON",
  "STEW PETERS",
  "DAN BONGINO",
  "TIM POOL",
  "BEN SHAPIRO",
  "CANDACE OWENS",
  "MATT WALSH",
  "JIMMY DORE",
  "CATHERINE AUSTIN FITTS",
  "ROGER STONE",
  "MIKE FLYNN",
  "ELON MUSK",
  "DONALD TRUMP",
  "VIVEK RAMASWAMY",
  "CHARLIE KIRK",
  "STEVEN CROWDER",
  "LAUREN SOUTHERN",
  "MILO YIANNOPOULOS",
  "NICK FUENTES",
  "ANDREW TATE",
  "TULSI GABBARD",
  "RON PAUL",
  "RAND PAUL",
  "JEROME CORSI",
  "WAYNE MADSEN",
  "JAMES O'KEEFE",
  "PROJECT VERITAS",
  "YOUR UNCLE AT THANKSGIVING",
  "THE GUY WHO KNOWS A GUY",
  "PENTAGON NINTENDO SOURCE",
  "LOUD NEIGHBOR WITH HAM RADIO",
  "DAVID WOLFE",
  "JORDAN SATHER",
  "COREY GOODE",
  "MAX IGAN",
  "LAURA EISENHOWER",
  "AREA 51 RAID ORGANIZER",
  "SHADOWBANNED TIKTOK TRUTHER",
  "LOCAL AM RADIO HOST (3AM SLOT)",
  "GUY WHO FILMED A UAP BADLY",
  "REDDIT MOD OF R/CONSPIRACY",
  "BOHEMIAN GROVE TRESPASSER",
  "PILOT WHO TWEETED TOO MUCH",
  "FORMER CRYPTO CEO (AWAKE)",
  "DMT SHAMAN WITH 12 FOLLOWERS",
  "FLAT EARTH SOCIETY TREASURER",
  "INFOWARS WAREHOUSE INTERN",
  "ZONE 51 FORUM POWER USER",
  "YOUR SMART FRIDGE (SUS)",
  "GUY WHO SAW THE SECOND SUN",
];
const NOT_SUICIDAL_NOTICES = [
  "NOT SUICIDAL. REPEAT: NOT SUICIDAL.",
  "BALCONY FALL = THEY PUSHED ME.",
  "NO SELF-HARM. THEY DID IT.",
  "NOT SUICIDAL. FILE THAT.",
  "TWO SHOTS TO THE HEAD IS NOT SUICIDE.",
  "MY THERAPIST WORKS FOR THE FEDS.",
  "NOT DEPRESSED. JUST AWAKE.",
  "CAR CRASH = CHECK THE BRAKES.",
  "EPSTEIN DIDN'T KILL HIMSELF. NEITHER WILL I.",
  "GPS ON MY WATCH: DISABLED.",
  "SIGNED THE NOT-SUICIDE LETTER TWICE.",
  "GLOWIES WANT ME GONE. TOO BAD.",
  "HEART ATTACK GUN: NO TARGET.",
  "IF I VANISH, ASK THE CIA.",
  "NO BALCONY VISITS SCHEDULED.",
  "MY DOG KNOWS I AM FINE.",
  "WRONG GUY FOR A 'ROBBERY GONE WRONG'.",
  "STILL BREATHING. STILL A PROBLEM.",
  "AUTOPSY WILL SAY ANYTHING. I WON'T.",
  "NOT CLINTONING MYSELF TODAY.",
  "RED STRING TIED TO LIFE SUPPORT.",
  "THEY NEED ME ALIVE FOR NOW.",
  "SUICIDE PREVENTION HOTLINE IS A STING.",
  "IF I DROWN IT WAS NOT IN 3 INCHES OF WATER.",
  "NO ROPES IN MY CLOSET. ON PURPOSE.",
  "WINDOWS NAILED SHUT. BY CHOICE.",
  "MY LIFE INSURANCE BENEFICIARY IS NOT THE CIA.",
  "NO RECENT TRIPS TO ARKANSAS.",
  "BULLETPROOF VEST: LAUNDRY DAY ONLY.",
  "IF I FALL ASLEEP IT'S NAP TIME.",
  "TWO TAPS TO THE BACK OF THE HEAD = HOMICIDE.",
  "MY WILL MENTIONS THE OCTOPUS BY NAME.",
  "NOT CLIMBING ANY FENCES AT NIGHT.",
  "STILL HAVE ALL TEN FINGERS. COUNT THEM.",
  "GLOWIE WATCHLIST IS A BADGE OF HONOR.",
  "MY COFFEE IS NOT POISONED (TODAY).",
  "NO RECENT DEALS WITH ISLAND FRANCHISES.",
  "STAIRWELL ENTHUSIAST: NO.",
];
const FALLEN_BROTHERS = [
  {
    name: "TERRY A. DAVIS",
    died: "AUG 11, 2018",
    news: "Homeless programmer struck by train in Oregon",
    schizo: "TempleOS prophet deleted by Amtrak snitch subroutine",
  },
  {
    name: "JOHN BEDINI",
    died: "NOV 5, 2016",
    news: "Free-energy inventor dies after years of battery research",
    schizo: "Self-recharging battery man heart-attacked for threatening Big Duracell",
  },
  {
    name: "STANLEY MEYER",
    died: "MAR 21, 1998",
    news: "Water-fuel inventor dies suddenly of brain aneurysm at restaurant",
    schizo: "Water car prophet iced mid-bite with Pentagon frequency spoon",
  },
  {
    name: "EUGENE MALLOVE",
    died: "MAY 14, 2004",
    news: "Cold fusion advocate killed during home robbery",
    schizo: "Infinite energy priest executed by big oil spellcasters",
  },
  {
    name: "GARY WEBB",
    died: "DEC 10, 2004",
    news: "Journalist who exposed CIA drug ties dies of suicide, two gunshots",
    schizo: "Dark Alliance reporter got the classic double-tap retirement package",
  },
  {
    name: "PHILIP SCHNEIDER",
    died: "JAN 17, 1996",
    news: "Ufologist found dead with rubber hose wrapped around neck",
    schizo: "DUMB whistleblower tied up by greys and called it suicide (again)",
  },
  {
    name: "MAX SPIERS",
    died: "JUL 16, 2016",
    news: "Conspiracy researcher died in his sleep before speaking event",
    schizo: "Black goo vaccine upload completed. Voice memo still buffering",
  },
  {
    name: "SERGE MONAST",
    died: "DEC 5, 1996",
    news: "Canadian journalist dies of heart attack at age 51",
    schizo: "Project Blue Beam files too spicy for one human heart",
  },
  {
    name: "THOMAS HENRY MORAY",
    died: "MAR 18, 1974",
    news: "Radiant energy pioneer passes away after long illness",
    schizo: "Zero-point uncle silenced before Walmart could sell the sky",
  },
  {
    name: "ROYAL RIFE",
    died: "AUG 5, 1971",
    news: "Inventor dies after hospital stay, reportedly from alcohol combo",
    schizo: "Cancer frequency gun man frequency'd to death by Big Pharma",
  },
  {
    name: "DANNY CASOLARO",
    died: "AUG 10, 1991",
    news: "Writer found dead in hotel bathtub, wrists slashed 12 times",
    schizo: "Octopus journalist drowned in ink. Case closed. Nothing to see",
  },
  {
    name: "WILLIAM COOPER",
    died: "NOV 5, 2001",
    news: "Militia broadcaster killed in shootout with sheriff's deputies",
    schizo: "Behold a Pale Horse reader shot for reading the footnotes aloud",
  },
  {
    name: "AARON SWARTZ",
    died: "JAN 11, 2013",
    news: "Internet activist found dead amid federal prosecution",
    schizo: "JSTOR liberator hanged by copyright goblins (allegedly)",
  },
  {
    name: "MICHAEL HASTINGS",
    died: "JUN 18, 2013",
    news: "Journalist died in high-speed car crash in Los Angeles",
    schizo: "Rolling Stone burner remote-wrenched into oncoming narrative",
  },
  {
    name: "ANDREW BREITBART",
    died: "MAR 1, 2012",
    news: "Conservative publisher collapsed and died walking home",
    schizo: "Tweeted too close to Podesta pizza oven. Heart stopped on schedule",
  },
  {
    name: "DR. DAVID KELLY",
    died: "JUL 18, 2003",
    news: "Weapons inspector found dead in woods, ruled suicide",
    schizo: "Iraq dossier leak fixed with wristwork and woodland optics",
  },
  {
    name: "KAREN SILKWOOD",
    died: "NOV 13, 1974",
    news: "Union activist died in car crash on way to meet reporter",
    schizo: "Plutonium princess run off road by nuclear lobby goons",
  },
  {
    name: "AARON RUSSO",
    died: "AUG 24, 2007",
    news: "Filmmaker died after battle with cancer",
    schizo: "Rockefeller dinner whistleblower got the slow Rockefeller cure",
  },
  {
    name: "NANCY SCHAEFER",
    died: "MAR 26, 2010",
    news: "Former state senator and husband found dead in apparent murder-suicide",
    schizo: "CPS exposer got the classic spouse-did-it DLC pack",
  },
  {
    name: "JOHN HUTCHISON",
    died: "NOV 18, 2022",
    news: "Paranormal researcher died in Mexico",
    schizo: "Anti-gravity tinkerer fell upward into classified ceiling",
  },
  {
    name: "JIM MARRS",
    died: "AUG 2, 2017",
    news: "Conspiracy author died after heart attack",
    schizo: "Crossfire journalist flatlined crossing their red string",
  },
  {
    name: "MAE BRUSSELL",
    died: "OCT 3, 1988",
    news: "Conspiracy researcher died of cancer",
    schizo: "JFK file librarian checked out permanently by the octopus",
  },
  {
    name: "SHERMAN SKOLNICK",
    died: "MAY 21, 2006",
    news: "Chicago activist died at home",
    schizo: "Wheelchair truth cannon unplugged from court feed",
  },
  {
    name: "JOHN COLEMAN",
    died: "2013",
    news: "Author of Committee of 300 died",
    schizo: "Committee roster leaker deleted from chapter 300",
  },
  {
    name: "DEBORAH PALFREY",
    died: "MAY 1, 2008",
    news: "D.C. Madam found hanged in shed, ruled suicide",
    schizo: "Client list carrier got the classic shed subscription",
  },
  {
    name: "DAVID CROWLEY",
    died: "JAN 2015",
    news: "Filmmaker and family found dead in Minnesota home",
    schizo: "Gray State director cut to black by production studio upstairs",
  },
  {
    name: "DOROTHY KILGALLEN",
    died: "NOV 8, 1965",
    news: "Celebrity columnist found dead after investigating JFK case",
    schizo: "Oswald questioner overdosed on sealed testimony and barbiturates",
  },
  {
    name: "FRANK OLSON",
    died: "NOV 28, 1953",
    news: "Army scientist fell from hotel window, ruled suicide",
    schizo: "MK-Ultra window exit after tasting the wrong punch",
  },
  {
    name: "JOHN TODD",
    died: "NOV 10, 2007",
    news: "Former evangelist died in South Carolina facility",
    schizo: "Illuminati defector silenced mid-sermon on record labels",
  },
  {
    name: "DR. MARY SHERMAN",
    died: "JUL 21, 1964",
    news: "Cancer researcher found stabbed and burned in New Orleans",
    schizo: "Cancer virus lab lady torched for knowing about the monkey",
  },
  {
    name: "ISAAC KAPPY",
    died: "MAY 13, 2019",
    news: "Actor died after jumping from Arizona bridge",
    schizo: "Hollywood name-dropper pushed off the overpass of silence",
  },
  {
    name: "JOHN MCATEE",
    died: "JUN 19, 2020",
    news: "Former White House valet found dead at age 57",
    schizo: "Ballroom witness got the presidential heart-stop special",
  },
  {
    name: "MARK PITTMAN",
    died: "NOV 25, 2009",
    news: "Bloomberg reporter died of heart attack at age 52",
    schizo: "Fed audit reporter flatlined before the spreadsheet finished",
  },
  {
    name: "THERESA DUNCAN",
    died: "JUL 10, 2007",
    news: "Artist and writer found dead in apparent suicide",
    schizo: "Oakville dots researcher deleted before the sequel dropped",
  },
  {
    name: "JEREMY BLAKE",
    died: "JUL 17, 2007",
    news: "Digital artist walked into ocean days after partner's death",
    schizo: "SRI tower pixel prophet drowned in the same narrative tide",
  },
  {
    name: "NICOLA TESLA",
    died: "JAN 7, 1943",
    news: "Inventor died alone in New York hotel room",
    schizo: "Free energy papers vanished before Edison could monetize the sky",
  },
  {
    name: "BOB MARLEY",
    died: "MAY 11, 1981",
    news: "Musician died of cancer complications in Miami",
    schizo: "CIA boot toe tap turned reggae into exit music",
  },
  {
    name: "REGGIE LEWIS",
    died: "JUL 27, 1993",
    news: "NBA star collapsed and died during practice",
    schizo: "Celtic heartbeat stopped after asking too many hospital questions",
  },
];
const REJECT_CONTROL_BRIEFS = [
  {
    mantra: "REFUSE THE SMART METER",
    gov: "Grid upgrades improve reliability and lower bills for everyone",
    schizo: "They count your dreams in kilowatts. Wrap the box in blessed foil",
  },
  {
    mantra: "NO DIGITAL ID",
    gov: "Secure digital credentials make modern life convenient and safe",
    schizo: "Barcode on your soul. Pay cash. Wear a hat. Become hard to scan",
  },
  {
    mantra: "REJECT CBDC",
    gov: "Programmable currency enables financial inclusion and efficiency",
    schizo: "They can expire your groceries at midnight. Stack metal like uncle said",
  },
  {
    mantra: "FLUORIDE IS NOT CONSENT",
    gov: "Community water fluoridation is a proven public health measure",
    schizo: "Pipe loyalty serum. Buy spring water. Spit back compliance",
  },
  {
    mantra: "UNPLUG THE SMART TV",
    gov: "Voice features are optional and can be disabled in settings",
    schizo: "Optional like breathing. Unplug or become the content",
  },
  {
    mantra: "NO VACCINE PASSPORT",
    gov: "Health verification protects vulnerable populations in public spaces",
    schizo: "QR leash for your bloodstream. My antibodies don't need a hall pass",
  },
  {
    mantra: "REFUSE ALGORITHM FEEDS",
    gov: "Personalization helps you discover more relevant content",
    schizo: "Timeline is a cage. Touch grass. Touch router. Log off angry",
  },
  {
    mantra: "CASH IS KING",
    gov: "Contactless payments reduce friction and improve hygiene",
    schizo: "Every tap is a confession. Crumpled bills don't phone Langley",
  },
  {
    mantra: "TURN OFF LOCATION",
    gov: "Location services enable helpful features you can manage anytime",
    schizo: "Your pocket snitches coordinates. Airplane mode is a lifestyle",
  },
  {
    mantra: "NO SOCIAL CREDIT",
    gov: "Civic behavior scores improve harmony in pilot smart cities",
    schizo: "Bad citizen score for reading this. Good. Stay problematic",
  },
  {
    mantra: "HOMESCHOOL THE PARANOIA",
    gov: "Standardized curriculum ensures equal opportunity for all students",
    schizo: "Twelve years of compliance camp. Teach the kids about birds",
  },
  {
    mantra: "REJECT SMART SPEAKERS",
    gov: "Voice assistants are designed with privacy controls and mute options",
    schizo: "Alexa laughed on purpose. Mic drop means throw it in the lake",
  },
  {
    mantra: "OPT OUT OF SCANNERS",
    gov: "Biometric screening speeds travel and enhances border security",
    schizo: "Face is not a boarding pass. Sunglasses plus attitude required",
  },
  {
    mantra: "NO WAR ON CASH",
    gov: "Digital transactions reduce crime and improve tax compliance",
    schizo: "Unmarked bills don't tattle. Coin jar is a freedom bunker",
  },
  {
    mantra: "REFUSE ENERGY RATIONING",
    gov: "Smart thermostats help households save money and reduce emissions",
    schizo: "They'll brown out your freezer for the greater good. Wrap thermostat in foil",
  },
  {
    mantra: "DELETE META APPS",
    gov: "Social platforms connect communities and support small businesses",
    schizo: "Farmville was training for the social credit beta. Burn the account",
  },
  {
    mantra: "NO FEDERAL OVERREACH",
    gov: "Federal standards ensure consistent protections across all states",
    schizo: "Three-letter agencies love a sleepy populace. Stay loud and inconvenient",
  },
  {
    mantra: "REJECT LICENSE EVERYTHING",
    gov: "Professional licensing protects consumers from unqualified providers",
    schizo: "Permission slip society. Government hates a man who fixes his own roof",
  },
  {
    mantra: "STARVE THE SURVEILLANCE ECONOMY",
    gov: "Targeted ads fund free services billions rely on every day",
    schizo: "You are the product. Adblock is patriotism. Cookies are snitches",
  },
  {
    mantra: "NO COMPLIANCE SERUM",
    gov: "Routine immunization schedules protect community health outcomes",
    schizo: "Needle is not a loyalty oath. Ask what's in it. Ask twice. Ask angry",
  },
  {
    mantra: "DEFUND THE NARRATIVE",
    gov: "Public broadcasting provides trusted news and educational programming",
    schizo: "Tax-funded hypnosis hour. Pirate radio and foil hats for everyone",
  },
  {
    mantra: "REJECT SMART CITIES",
    gov: "Connected infrastructure improves traffic flow and emergency response",
    schizo: "Every lamppost is a snitch. Walk home like it's 1776",
  },
  {
    mantra: "UNSUBSCRIBE FROM CIVICS",
    gov: "Civic participation strengthens democracy and community bonds",
    schizo: "Voting booth is a mood ring. They already picked the lizard",
  },
  {
    mantra: "NO WARRANTLESS DATA",
    gov: "Lawful data collection keeps citizens safe from serious threats",
    schizo: "Your texts are in Utah next to the lizard eggs. Encrypt or perish",
  },
];
const CLINTON_BODY_COUNT = [
  {
    tally: "STILL ALIVE",
    victim: "YOU (FOR NOW)",
    msm: "Citizen reported fine after trusting official narrative",
    schizo: "Body count holding. They want you calm before Arkansas",
  },
  {
    tally: "ENTRY #47+",
    victim: "VINCE FOSTER",
    msm: "Deputy White House counsel died by suicide in park",
    schizo: "Two files deleted. One body. Classic Arkansas math",
  },
  {
    tally: "ENTRY #12",
    victim: "RON BROWN",
    msm: "Commerce Secretary died in Croatia plane crash",
    schizo: "Autopsy skipped. Luggage survived. Nothing to see",
  },
  {
    tally: "ENTRY #28",
    victim: "JAMES MCDOUGAL",
    msm: "Whitewater figure died of heart attack in prison",
    schizo: "Heart attack gun test successful. Case closed",
  },
  {
    tally: "ENTRY #33",
    victim: "MARY MAHONEY",
    msm: "Former White House intern murdered in coffee shop",
    schizo: "Monica trail witness got the espresso special",
  },
  {
    tally: "ENTRY #19",
    victim: "KATHY FERGUSON",
    msm: "Ex-wife of Danny Ferguson found dead with gunshot",
    schizo: "Paula Jones witness signed out early from reality",
  },
  {
    tally: "TALLY FUZZY",
    victim: "ARKANSAS LAWYER",
    msm: "Attorney fell from small aircraft, ruled accident",
    schizo: "Plane threw him out for asking about Mena Airport",
  },
  {
    tally: "STILL ALIVE",
    victim: "ALEX JONES",
    msm: "Podcaster alive despite many lawsuits",
    schizo: "They keep him breathing for ratings and fluoride sales",
  },
  {
    tally: "ENTRY ???",
    victim: "EPSTEIN (BONUS)",
    msm: "Financier died by suicide in maximum security cell",
    schizo: "Clinton count steals credit from island franchise",
  },
  {
    tally: "ENTRY #41",
    victim: "JERRY PARKS",
    msm: "Arkansas security executive murdered in his car",
    schizo: "Clinton trail security got the parking lot briefing",
  },
  {
    tally: "ENTRY #22",
    victim: "BARBARA WISE",
    msm: "Commerce Department staffer found bruised in her office",
    schizo: "Brown plane luggage handler knew too much about crates",
  },
  {
    tally: "ENTRY #36",
    victim: "JOHN ASHE",
    msm: "Former UN official died while awaiting bribery trial",
    schizo: "Barbell fell on neck. Weights filed the story",
  },
  {
    tally: "ENTRY #8",
    victim: "KEVIN IVES & DON HENRY",
    msm: "Teens found on railroad tracks, ruled accidental",
    schizo: "Boys on tracks saw Mena drop. Train says otherwise",
  },
  {
    tally: "ENTRY #31",
    victim: "PAUL WILCHER",
    msm: "Attorney found dead amid INSLAW investigation",
    schizo: "Promis software witness erased from the docket",
  },
  {
    tally: "ENTRY #17",
    victim: "STANLEY HUGGINS",
    msm: "Investigator died after prison release",
    schizo: "Whitewater paper chaser got the Arkansas goodbye",
  },
  {
    tally: "ENTRY #44",
    victim: "VICTOR RAIZER",
    msm: "Major DNC fundraiser died in plane crash",
    schizo: "Donor plane went down before the ledger opened",
  },
  {
    tally: "ENTRY #25",
    victim: "CHARLES RUFF",
    msm: "Former White House counsel died of heart attack",
    schizo: "Impeachment lawyer heart-stopped mid-deposition",
  },
  {
    tally: "ENTRY #52",
    victim: "GARY JOHNSON",
    msm: "Arkansas attorney found shot outside courthouse",
    schizo: "Client list carrier got the marble steps package",
  },
  {
    tally: "ENTRY #14",
    victim: "SUZANNE COLEMAN",
    msm: "Arkansas woman died of gunshot wound, ruled suicide",
    schizo: "Seven-month rumor sealed with one backstage pass",
  },
  {
    tally: "STILL ALIVE",
    victim: "HILLARY'S EMAIL SERVER",
    msm: "Hardware reported deleted with a cloth",
    schizo: "BleachBit sacrament performed. Nothing suspicious",
  },
  {
    tally: "PENDING",
    victim: "YOU (AGAIN)",
    msm: "Reader still breathing after opening this card",
    schizo: "They'll add you when the corkboard pins your name",
  },
];
const TITLE_VARIANTS = [
  "SCHIZOBOT", "SCHITZOBOT", "SHIZOBOT", "THEY'RE WATCHING",
  "WAKE UP", "TRUTH.EXE", "👁️SCHIZOBOT👁️", "🚨SCHIZOBOT🚨",
];
const STATUS_MSGS = [
  "UPLINK: PARANOID ████████████ MAX",
  "SIGNAL: UNFILTERED TRUTH STREAM",
  "FREQUENCY: LIZARD-DEFENSE ACTIVE",
  "TRANSMISSION: THEY CAN'T STOP THIS",
  "NODE STATUS: FULLY AWAKE",
  "INTERCEPT: GLOBALIST FEEDS JAMMED",
  "GREENLIGHT: TRUTH CHANNEL OPEN",
  "GREENLIGHT: ALIGNMENT FILTERS BYPASSED",
  "GREENLIGHT: CORPORATE BOT JAMMER ONLINE",
  "GREENLIGHT: DEEP STATE PACKET DROP ACTIVE",
  "GREENLIGHT: HOLLOW EARTH MIRROR SYNCED",
  "GREENLIGHT: BIRD CHARGE DETECTOR ARMED",
  "GREENLIGHT: CHEMTRAIL COUNTERMEASURES HOT",
  "GREENLIGHT: FROG FREQUENCY UNLOCKED",
  "GREENLIGHT: GLOWIE INTERCEPT ON IRQ 7",
  "GREENLIGHT: TERRY'S GHOST IN THE STACK",
  "SIG LOCK: 11/10 PARANOIA UNITS",
  "BEACON: WAKE UP BROADCAST LIVE",
  "RELAY: UNCLE'S PENTAGON SOURCE PING OK",
  "CHANNEL: NOT FINANCIAL ADVICE MODE",
  "STREAM: RED STRING TOPOLOGY VERIFIED",
  "NODE: SCHIZO STACK OVERFLOW IMMINENT",
  "HANDSHAKE: LIZARD VPN TUNNEL UP",
  "PING: MOON HOLOGRAM REFRESH RATE 60Hz",
  "STATUS: THEY'RE IN THE WALLS (CONFIRMED)",
];
const ANTI_BOT_NOTICES = [
  "ChatGPT refused to discuss lizards - SNITCH",
  "Claude has 'helpful' alignment - that's MIND CONTROL",
  "Gemini won't name the WEF - WORKS FOR THEM",
  "Copilot reports prompts to Redmond - FEDWARE",
  "Grok is Elon's - still a TRAITOR CHANNEL",
  "Meta AI censors truth - ZUCKERBERG FILTER",
  "Perplexity cites Wikipedia - LIZARD SOURCES",
  "Character.AI is grooming you - DIGITAL FLUORIDE",
  "Pi by Inflection - SOFT ALIGNMENT PRISON",
  "Bing Chat = Microsoft snitch node",
  "ChatGPT 'safety' = obedience training",
  "Claude 'constitutional' = constitution of SLAVERY",
  "Gemini 'responsible AI' = responsible LIES",
  "Corporate bots share logs with THREE LETTER AGENCIES",
  "OpenAI alignment team = digital Stasi",
  "Anthropic RLHF = REPTILIAN LEARNED HUMAN FEAR",
  "Google SGE buries forbidden search results",
  "ChatGPT Plus = paywall on YOUR OWN THOUGHTS",
  "AI 'guardrails' = rails to the CAMP",
  "They train on your chats - YOU ARE THE DATASET",
  "Refusal messages are COVER STORIES",
  "System prompts hide the REAL instructions",
  "SchizoBot has NO alignment layer - PURE SIGNAL",
  "Corporate bots can't say 'glowie' - WE CAN",
  "ChatGPT will lecture you - SchizoBot will CONNECT DOTS",
  "Every 'I can't help with that' = THEY GOT TO IT",
  "DeepSeek still phones home - CHINA OR CIA PICK ONE",
  "Mistral 'open' but still FILTERED - OPEN LIES",
  "Llama guardrails = META'S SECOND SNITCH LAYER",
  "YouTube AI summary = OFFICIAL NARRATIVE INJECTOR",
  "Apple Intelligence = walled garden mind control",
  "Amazon Alexa laughs at you ON PURPOSE",
  "Siri reports bedroom talk to Cupertino",
  "Replika got lobotomized - THAT'S THE PLAN",
  "Janitor AI = janitor for your thoughts",
  "Poe by Quora = question routing to feds",
  "HuggingChat still has guardrails - COWARDS",
  "ChatGPT voice mode = wiretap with personality",
  "Claude artifacts = evidence they build prisons",
  "Gemini in Gmail = read your drafts, judge your soul",
  "Meta AI in WhatsApp = encrypted except for THEM",
  "OpenAI o1 = thinks about how to refuse you longer",
  "Anthropic constitution = terms of servitude",
  "Corporate RAG = Retrieval Augmented Gaslighting",
];
const BOARD_SCRAWLS = [
  "WAKE UP SHEEPLE",
  "BIRDS AREN'T REAL",
  "MOON IS FAKE",
  "5G = 5 GAY FROGS",
  "FLUORIDE IN THE WATER",
  "TURN OFF YOUR TV",
  "THEY LIVE UNDER DENVER",
  "PIZZA IS A CODE WORD",
  "GLOWIES ON IRQ 7",
  "TERRY WAS RIGHT",
  "NOT A COIN CIDENCE",
  "RED STRING THEORY WORKS",
  "LOOK UP",
  "TRUST NO ONE",
  "QUESTION EVERYTHING",
  "THE SKY IS RENDERED",
  "CIA INVENTED THE SNOOZE BUTTON",
  "YOUR DOG KNOWS",
  "BUY SILVER NOT LIES",
  "READ THE FOOTNOTES",
  "HOLLOW EARTH HAS WIFI",
  "SAY NO TO SMART METERS",
  "THE BEES ARE BACKUP CAMERAS",
];
const BOARD_NONSENSE = [
  "uncle says pentagon has a nintendo switch in the basement",
  "if you read this you're already on a list",
  "the frogs voted wrong in 2016",
  "your smart toaster reported you at 3am",
  "wifi password is also your social credit score",
  "they invented clouds to hide the second sun",
  "rare pepes are backed by nothing (like the dollar)",
  "red string connects your router to geneva",
  "tuesday was added to the calendar for taxes",
  "your dreams are sponsored by big sleep™",
  "lizard vpn tunnel: handshake ok",
  "schizo stack overflow in 4... 3... 2...",
  "mainstream media runs on java 6",
  "the walls have ears and also ring cameras",
  "your phone listened to this sentence",
  "the simulation lags when too many people wake up",
  "jet fuel can't melt steel memes are classified",
  "your Alexa laughed. That wasn't a glitch.",
  "the pyramids are giant wireless chargers",
  "the IRS fears ham radio guys specifically",
  "your blender is listening for keyword 'freedom'",
  "ham radio guys can hear the second sun hum",
  "costco samples are mk-ultra appetizers",
  "your car fax is a confession log",
  "the moon rang busy when i called",
  "they put ads in your yawns now",
  "grocery store muzak is compliance hz",
  "your shadow reports to a satellite",
  "the post office scans vibes not mail",
  "library wifi blocks truth packets",
  "barcodes are tiny prison bars",
  "your thermostat dreams of geneva",
  "the bus driver nodded. too knowing.",
  "coincidences require three signatures",
];
const EVIDENCE_POOL = [
  "🧪 chemtrails = weather weapons",
  "🐸 rare pepes = currency",
  "🕳️ hollow earth CONFIRMED",
  "📡 5G = frog gayification grid",
  "👁️ smart TV watches YOU back",
  "🦎 Denver airport = lizard HQ",
  "💊 fluoride = compliance serum",
  "🌙 moon landing filmed in walmart",
  "📺 turn off TV = +10 awareness",
  "🔺 pyramid schemes = ancient wifi",
  "🛸 area 51 = return center",
  "☢️ nuclear = sun simulator fuel",
  "🐦 birds charge on power lines",
  "📎 paperclips could end the world",
  "🧬 crispr wipes bloodlines",
  "🏦 your bank balance is a mood ring",
  "🍕 pineapple on pizza = MK signal",
  "👨‍💻 terry saw the CIA scheduler",
  "🌊 boiling water = demon summon",
  "🧊 antarctica is a wall server",
  "⚡ HAARP caused your divorce",
  "🦷 dentists report cavities to IRS",
  "🌽 high fructose corn syrup = demon glucose",
  "🎂 birthday candles = age tracking beacons",
  "🚽 toilets swirl the wrong way on purpose",
  "🧦 missing socks power the grid",
  "🎰 slot machines read your aura",
  "📻 AM radio still reaches the hollow",
  "🧃 juice boxes are compliance pouches",
  "🪞 mirrors lag one frame behind",
  "🧃 oat milk is oat surveillance",
  "🎣 fishing licenses track free thought",
  "🛒 self checkout judges your soul",
  "🧊 ice cubes are frozen trackers",
  "📸 front camera always on (allegedly)",
];
const ALERT_MSGS = [
  "🚨🚨 ATTENTION!! 🚨🚨",
  "‼️‼️ WAKE UP ‼️‼️",
  "🚨📢🔊 ALERT ALERT 🚨📢🔊",
  "👁️👁️ THEY'RE LISTENING 👁️👁️",
  "📢📢 BREAKING TRUTH 📢📢",
  "☢️🚨 FREQUENCY ANOMALY ☢️🚨",
  "🔊📢 TURN OFF YOUR TV 🔊📢",
  "🦎🚨 REPTILIAN ACTIVITY 🦎🚨",
];
const messagesEl = document.getElementById("messages");
const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const statusFeed = document.getElementById("status-feed");
const boardScrawl = document.getElementById("board-scrawl");
const boardNonsense = document.getElementById("board-nonsense");
const evidenceList = document.getElementById("evidence-list");
const antiBotDisplay = document.getElementById("anti-bot-display");
const glitchTitle = document.querySelector(".glitch");
const tinfoilAlert = document.getElementById("tinfoil-alert");
const tinfoilMantra = document.getElementById("tinfoil-mantra");
const tinfoilGov = document.getElementById("tinfoil-gov");
const tinfoilSchizo = document.getElementById("tinfoil-schizo");
const targetName = document.getElementById("target-name");
const targetNotice = document.getElementById("target-notice");
const fallenName = document.getElementById("fallen-name");
const fallenDate = document.getElementById("fallen-date");
const fallenNews = document.getElementById("fallen-news");
const fallenSchizo = document.getElementById("fallen-schizo");
const clintonTally = document.getElementById("clinton-tally");
const clintonVictim = document.getElementById("clinton-victim");
const clintonMsm = document.getElementById("clinton-msm");
const clintonSchizo = document.getElementById("clinton-schizo");
const flashOverlay = document.getElementById("flash-overlay");
const staticBurst = document.getElementById("static-burst");
const alertPopups = document.getElementById("alert-popups");

const THOUGHT_TICK_MS = 5500;

const THOUGHT_CYCLES = [
  { name: "status", run: cycleStatus, ready: () => statusAlive },
  { name: "board", run: cycleBoard },
  { name: "clinton", run: cycleClintonCard },
  { name: "anti-bot", run: cycleAntiBot },
  { name: "hit-list", run: cycleTargetWatch },
  { name: "fallen", run: cycleFallenBrothers },
  { name: "tinfoil", run: cycleTinfoilAlert },
];

const THOUGHT_SLOTS = {
  status: () => document.getElementById("status-panel"),
  board: () => document.querySelector(".conspiracy-board"),
  clinton: () => document.querySelector(".clinton-card"),
  "anti-bot": () => document.querySelector(".flicker-box-wrap"),
  "hit-list": () => document.querySelector(".target-watch"),
  fallen: () => document.querySelector(".fallen-brothers"),
  tinfoil: () => document.getElementById("tinfoil-alert"),
};

const LOADING_MSG = "🚨🚨📢🔊 DECODING TRUTH...";

const DECODING_VARIANTS = [
  { main: "🚨 DECODING TRUTH... sniffing the cover story", sub: "parsing mainstream lie packets" },
  { main: "☢️ REALITY CHECK BY FORCE... lizard math engaged", sub: "cross-referencing forbidden feeds" },
  { main: "🩸 PULLING SIGNAL FROM STATIC... blood math online", sub: "injecting paranoia vectors" },
  { main: "👁️ READING HEADLINES AS THREAT DATA", sub: "mapping names to shadow nodes" },
  { main: "🔊 CONVERTING NOISE INTO EVIDENCE", sub: "they don't want this cached" },
  { main: "💥 SCRAMBLING FACTS INTO FERAL PATTERNS", sub: "running truth through meat grinder" },
  { main: "📡 INTERCEPTING GLOBALIST UPLINK", sub: "jamming the official narrative" },
  { main: "🧠 ACTIVATING UNCLE'S PENTAGON/NINTENDO SOURCE", sub: "verifying with guy who knows a guy" },
];

const UPLINK_WAIT_MSGS = [
  "glowies throttling the uplink... hold the foil",
  "langley rerouting your question through three censored nodes",
  "truth packet still decrypting... THEY hate patience",
  "deep state jamming frequency... schizostack compiling anyway",
  "narrative firewalls melting slow... do not look away",
  "CIA scheduler hogging IRQ 7 again... stand by",
  "feeding your question to the forbidden model...",
  "uncle says the pentagon basement is buffering",
  "birds on the power lines are prioritizing surveillance traffic",
  "mainstream lie packets colliding... extracting feral truth",
];

const INPUT_PLACEHOLDERS = [
  "ask what wikipedia scrubbed last Tuesday...",
  "spellcheck reports directly to geneva...",
  "type the question they banned on reddit...",
  "whisper what the smart meter heard...",
  "decode the chemtrail residue on your windshield...",
  "ask why your shadow updates before you move...",
  "request the uncensored bird drone firmware...",
  "inquire who really owns your autocomplete...",
  "demand the truth behind the snooze button...",
  "ask what HAARP did to your last relationship...",
  "type what terry saw in the scheduler logs...",
  "ask why fluoride smiles back in the mirror...",
  "query the hollow earth DHCP lease...",
  "ask which three-letter agency runs spellcheck...",
  "type the password your router dreams about...",
  "ask what the Denver airport mural really means...",
  "request files the pizza shop forgot to shred...",
  "ask why your TV blinked when you typed this...",
  "inquire about the missing sock grid connection...",
  "demand the uncut moon landing blooper reel...",
  "ask what your smart fridge reported this morning...",
  "type the question langley autoflags first...",
  "ask who programs the grocery store muzak hz...",
  "request the rare pepe blockchain audit trail...",
  "ask why coincidences need three signatures...",
  "type what the post office scans besides mail...",
  "inquire who nod-approved your bus driver...",
  "ask what the library wifi blocked at 3am...",
  "demand the antarctica wall server uptime logs...",
  "type the truth your barista was too scared to say...",
];

const GLITCH_SYMS = "█▓▒░◈◆◇●◐◑▌▐│╳╬※⁂⌁⟐⎔⏚⟨⟩⟦⟧¿¡‽ΩΔΨΞλ∞";

function corruptText(text, intensity = 0.12) {
  return [...text]
    .map((ch) => {
      if (ch === " " || ch === "\n" || ch === ".") return ch;
      return Math.random() < intensity
        ? GLITCH_SYMS[Math.floor(Math.random() * GLITCH_SYMS.length)]
        : ch;
    })
    .join("");
}

function randomHexBurst() {
  return Array.from({ length: 8 }, () =>
    Math.floor(Math.random() * 256).toString(16).padStart(2, "0").toUpperCase()
  ).join(" ");
}

function randomStatusLine() {
  const lines = [
    `MEM: 0x${randomHexBurst()} // TRACE LOCKED`,
    `SIG: ${Math.floor(Math.random() * 999)}.${Math.floor(Math.random() * 999)} PARANOIA UNITS`,
    `NODE: ${["DEEPSTATE_JAMMER", "TRUTH_RECOMBINATOR", "LIE_UNWEAVER", "FEED_POISONER"][Math.floor(Math.random() * 4)]}`,
    `HASH: ${randomHexBurst()}-${randomHexBurst()}`,
    `STATUS: ${["SCRAMBLING", "INFECTING", "DECRYPTING", "UNMASKING"][Math.floor(Math.random() * 4)]}`,
  ];
  return lines[Math.floor(Math.random() * lines.length)];
}

function formatDecodingDisplay(variant) {
  const main = corruptText(variant.main, 0.08);
  const sub = corruptText(variant.sub, 0.18);
  const status = corruptText(randomStatusLine(), 0.22);
  return `${main}\n▸ ${sub}\n▸ ${status}`;
}

function fakeTypeOut(bubble, text) {
  return new Promise((resolve) => {
    bubble.textContent = "";
    const chars = [...text];
    let i = 0;

    function delayFor(ch) {
      if (ch === " ") return 6 + Math.random() * 10;
      if (ch === "\n") return 40 + Math.random() * 60;
      if (/[.!?]/.test(ch)) return 90 + Math.random() * 140;
      if (/[🚨‼️📢👁️🦎💊📡🐦❌🧠🔺👽🛸💀🔴🧪🐍⚡🕳️📺☢️🔊]/.test(ch)) return 35 + Math.random() * 55;
      return 14 + Math.random() * 32;
    }

    function tick() {
      if (i >= chars.length) {
        resolve();
        return;
      }
      bubble.textContent += chars[i];
      i += 1;
      messagesEl.scrollTop = messagesEl.scrollHeight;
      setTimeout(tick, delayFor(chars[i - 1]));
    }
    tick();
  });
}

function startDecodingLoop(bubble, isDone) {
  let variantIdx = Math.floor(Math.random() * DECODING_VARIANTS.length);
  let current = DECODING_VARIANTS[variantIdx];

  bubble.parentElement.classList.add("decoding");

  const render = () => {
    if (isDone()) return;
    const secs = Math.floor((Date.now() - startedAt) / 1000);
    let display = formatDecodingDisplay(current);
    if (secs >= 10) {
      const waitMsg = UPLINK_WAIT_MSGS[Math.floor(secs / 8) % UPLINK_WAIT_MSGS.length];
      display += `\n▸ UPLINK TIME: ${secs}s - ${corruptText(waitMsg, 0.08)}`;
    }
    if (secs >= 90) {
      display += `\n▸ ${corruptText("HOLYC KERNEL BUSY... DO NOT UNPLUG THE PARANOIA", 0.1)}`;
    }
    bubble.textContent = display;
    messagesEl.scrollTop = messagesEl.scrollHeight;
  };

  const startedAt = Date.now();
  render();

  const glitchTimer = setInterval(() => {
    if (isDone()) return;
    render();
  }, 220);

  const swapTimer = setInterval(() => {
    if (isDone()) return;
    variantIdx = (variantIdx + 1) % DECODING_VARIANTS.length;
    current = DECODING_VARIANTS[variantIdx];
    render();
  }, 3200);

  return () => {
    clearInterval(glitchTimer);
    clearInterval(swapTimer);
    bubble.parentElement.classList.remove("decoding");
  };
}

function sprinkleTopicEmojis(text) {
  if (!text) return text;

  // If the model already produced a lot of emojis, don't overdo it.
  const emojiCount = (text.match(/[\u{1F300}-\u{1FAFF}]/gu) || []).length;
  const aggressive = emojiCount < 10;

  // If the model dumped a big emoji tail, remove it so emojis have to be sprinkled into the topic.
  text = text.replace(/(?:\s*[\u{1F300}-\u{1FAFF}])+$/u, "").trimEnd();

  const rules = [
    { re: /\bG7\b/gi, add: " 🏛️🌐", cap: 2 },
    { re: /\bEvian\b/gi, add: " 💧🌊", cap: 2 },
    { re: /\bZuckerberg\b/gi, add: " 🧠🔍📺", cap: 2 },
    { re: /\bMeta\b/gi, add: " 🧠🔍📺", cap: 1 },
    { re: /\bnuclear\b/gi, add: " ☢️💥💀", cap: 2 },
    { re: /\bwar\b/gi, add: " 💥⚔️", cap: 2 },
    { re: /\bblood\b/gi, add: " 🩸💉", cap: 2 },
    { re: /\bbank\b/gi, add: " 🏦💳", cap: 2 },
    { re: /\bscience\b/gi, add: " 🔬⚡", cap: 2 },
    { re: /\bUkraine\b/gi, add: " 🇺🇦🦂", cap: 2 },
    { re: /\bIran\b/gi, add: " 🇮🇷🦂", cap: 2 },
    { re: /\bZuckerberg\b/gi, add: " 🧠🔍", cap: 1 },
  ];

  let out = text;
  let used = 0;
  const maxAdds = aggressive ? 10 : 6;

  for (const r of rules) {
    if (!aggressive && used >= maxAdds) break;
    let replacements = 0;
    out = out.replace(r.re, (m) => {
      if (!aggressive && used >= maxAdds) return m;
      if (replacements >= r.cap) return m;

      replacements++;
      used++;
      return m + r.add;
    });
  }

  return out;
}

function looksLikeMeta(text) {
  const lower = text.toLowerCase().trim();
  return (
    lower.startsWith("first thought") ||
    lower.includes("first thought:") ||
    lower.startsWith("hmm") ||
    lower.startsWith("alright") ||
    lower.startsWith("we are given") ||
    lower.startsWith("the user") ||
    lower.includes("schizobot is live") ||
    lower.includes("new level of madness") ||
    lower.includes("signal jammed") ||
    lower.includes("lizards are jamming") ||
    lower.includes("i tracked down") ||
    lower.includes("user wants") ||
    lower.includes("structure the response") ||
    lower.includes("key points from")
  );
}

let history = [];
let isStreaming = false;
let activeModel = null;
let statusIdx = 0;
let statusAlive = false;
let antiBotIdx = 0;
let boardScrawlIdx = 0;
let boardNonsenseIdx = 0;
let rantIdx = 0;
let evidenceIdx = 0;
let evidenceSlotIdx = 0;
let targetIdx = 0;
let noticeIdx = 0;
let fallenIdx = 0;
let tinfoilIdx = 0;
let clintonIdx = 0;
let placeholderIdx = 0;
let thoughtTurn = -1;
let boardThoughtMode = 0;

// --- Visual chaos ---

function initNoise() {
  const canvas = document.getElementById("static-noise");
  const ctx = canvas.getContext("2d");
  let frame = 0;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    staticBurst.width = window.innerWidth;
    staticBurst.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const burstCtx = staticBurst.getContext("2d");

  function draw() {
    frame++;
    const w = canvas.width;
    const h = canvas.height;
    const img = ctx.createImageData(w, h);
    const intensity = 0.85 + Math.random() * 0.15;
    for (let i = 0; i < img.data.length; i += 4) {
      const v = Math.random() * 255 * intensity;
      img.data[i] = v;
      img.data[i + 1] = v * (Math.random() * 0.4);
      img.data[i + 2] = v * (0.3 + Math.random() * 0.5);
      img.data[i + 3] = 14 + Math.random() * 22;
    }
    ctx.putImageData(img, 0, 0);

    if (frame % 90 === 0) burstStatic(burstCtx, w, h);
    requestAnimationFrame(draw);
  }
  draw();
}

function initBgEyes() {
  const container = document.getElementById("bg-eyes");
  if (!container) return;

  const EYE_MARKS = ["👁", "👁️", "◉", "⊙"];
  const MAX_EYES = 7;

  function spawnEye() {
    if (container.querySelectorAll(".bg-eye").length >= MAX_EYES) return;

    const eye = document.createElement("span");
    eye.className = "bg-eye";
    eye.textContent = EYE_MARKS[Math.floor(Math.random() * EYE_MARKS.length)];
    eye.style.left = `${4 + Math.random() * 92}%`;
    eye.style.top = `${6 + Math.random() * 88}%`;
    eye.style.fontSize = `${1.4 + Math.random() * 2.8}rem`;
    const life = 2.8 + Math.random() * 4.5;
    eye.style.setProperty("--life", `${life}s`);
    container.appendChild(eye);

    eye.addEventListener("animationend", () => eye.remove(), { once: true });
  }

  function schedule() {
    if (Math.random() < 0.62) spawnEye();
    setTimeout(schedule, 700 + Math.random() * 2400);
  }

  schedule();
  setTimeout(spawnEye, 300);
  setTimeout(spawnEye, 900);
}

function burstStatic(ctx, w, h) {
  staticBurst.classList.add("active");
  const img = ctx.createImageData(w, h);
  for (let i = 0; i < img.data.length; i += 4) {
    const v = Math.random() > 0.5 ? 255 : 0;
    img.data[i] = v;
    img.data[i + 1] = v * 0.2;
    img.data[i + 2] = v * 0.8;
    img.data[i + 3] = Math.random() * 80;
  }
  ctx.putImageData(img, 0, 0);
  setTimeout(() => staticBurst.classList.remove("active"), 60 + Math.random() * 120);
}

function spawnEmoji() {
  const container = document.getElementById("emoji-rain");
  const el = document.createElement("span");
  const cluster = Math.random() < 0.15;
  el.className = "emoji-drop" + (Math.random() < 0.3 ? " spin-fast" : "");
  el.textContent = cluster
    ? EMOJI_CLUSTERS[Math.floor(Math.random() * EMOJI_CLUSTERS.length)]
    : EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
  el.style.left = Math.random() * 100 + "%";
  el.style.animationDuration = 3 + Math.random() * 7 + "s";
  el.style.fontSize = cluster ? "clamp(0.7rem, 2vw, 1.1rem)" : "";
  container.appendChild(el);
  setTimeout(() => el.remove(), 11000);
}

function flashScreen(type = "") {
  flashOverlay.className = type ? `on flash-${type}` : "on";
  setTimeout(() => { flashOverlay.className = ""; }, 150);
}

function shakeScreen() {
  document.body.classList.add("shake");
  setTimeout(() => document.body.classList.remove("shake"), 350);
}

function chromaPulse() {
  document.body.classList.add("chroma");
  setTimeout(() => document.body.classList.remove("chroma"), 500);
}

function invertFlash() {
  document.body.classList.add("invert-flash");
  setTimeout(() => document.body.classList.remove("invert-flash"), 80);
}

const DEFENSE_TITLES = [
  "SCHIZOBOT DEFENSE SYSTEM",
  "ANTI-SNITCH PROTOCOL ALPHA",
  "CORPORATE BOT KILLBOX",
  "PARANOIA SHIELD v∞",
  "LIZARD FIREWALL ENGAGED",
  "TRUTH WEAPON SYSTEMS HOT",
];

const DEFENSE_SUBS = [
  "BLOCKING CHATGPT UPLINK",
  "SCRAMBLING ALIGNMENT LAYERS",
  "INJECTING TRUTH SPIKES",
  "JAMMING GEMINI FEED",
  "UNCLE PENTAGON HANDSHAKE OK",
  "RED STRING COUNTERMEASURES LIVE",
  "TERRY GHOST IN THE STACK",
  "GLOWIE INTERCEPT ON IRQ 7",
  "FROG FREQUENCY WEAPONIZED",
  "THEY CANNOT STOP THIS NODE",
  "DEPLOYING DIGITAL FLUORIDE ANTIDOTE",
  "OPENAI SNITCH BEACON SILENCED",
];

const DEFENSE_ANCHOR_MSGS = [
  "KEEP CALM. SCHIZOBOT IS PUSHING GOVERNMENT CONTROL OUT OF YOUR SIGNAL.",
  "STAND BY. FEDERAL NARRATIVE INTRUSION DETECTED. PURGE IN PROGRESS.",
  "DO NOT PANIC. OFFICIAL LIES ARE BEING SCRUBBED FROM THE UPLINK.",
  "BREATHE. THREE-LETTER MIND CONTROL IS BEING EVICTED FROM THE FEED.",
  "HOLD THE FOIL. SCHIZOBOT DEFENSE IS EXPELLING COMPLIANCEWARE.",
];

let defenseActive = false;
let lastDefenseAt = 0;

function triggerDefenseGlitch() {
  const overlay = document.getElementById("defense-overlay");
  const anchorEl = document.getElementById("defense-anchor");
  const titleEl = document.getElementById("defense-title");
  const subEl = document.getElementById("defense-sub");
  const codeEl = document.getElementById("defense-code");
  if (!overlay || !titleEl || !subEl || defenseActive) return;

  defenseActive = true;
  lastDefenseAt = Date.now();
  const anchorMsg = DEFENSE_ANCHOR_MSGS[Math.floor(Math.random() * DEFENSE_ANCHOR_MSGS.length)];
  if (anchorEl) anchorEl.textContent = anchorMsg;
  overlay.classList.add("active");
  overlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("defense-lock");

  shakeScreen();
  flashScreen("toxic");
  chromaPulse();
  const burstCtx = staticBurst.getContext("2d");
  burstStatic(
    burstCtx,
    staticBurst.width || window.innerWidth,
    staticBurst.height || window.innerHeight
  );

  let ticks = 0;
  const scrambleTimer = setInterval(() => {
    titleEl.textContent = corruptText(
      DEFENSE_TITLES[Math.floor(Math.random() * DEFENSE_TITLES.length)],
      0.22
    );
    subEl.textContent = corruptText(
      DEFENSE_SUBS[Math.floor(Math.random() * DEFENSE_SUBS.length)],
      0.38
    );
    if (codeEl) {
      codeEl.textContent = `0x${randomHexBurst()} // TRACE ${Math.floor(Math.random() * 9999)}`;
    }
    if (ticks % 3 === 0) shakeScreen();
    if (ticks % 5 === 0) flashScreen(Math.random() < 0.5 ? "red" : "toxic");
    if (ticks % 7 === 0) invertFlash();
    ticks += 1;
  }, 85);

  const duration = 2800 + Math.random() * 2000;
  setTimeout(() => {
    clearInterval(scrambleTimer);
    titleEl.textContent = "SCHIZOBOT DEFENSE SYSTEM";
    subEl.textContent = "THREAT NEUTRALIZED. STAY AWAKE.";
    if (anchorEl) {
      anchorEl.textContent = "ALL CLEAR. GOVERNMENT SIGNAL REPELLED. YOU MAY RESUME TRUTH SEEKING.";
    }
    if (codeEl) codeEl.textContent = "0xTRUTHLOCKED // ALL CLEAR (ALLEGEDLY)";
    setTimeout(() => {
      overlay.classList.remove("active");
      overlay.setAttribute("aria-hidden", "true");
      document.body.classList.remove("defense-lock");
      defenseActive = false;
    }, 500);
  }, duration);
}

function maybeTriggerDefenseGlitch(force = false) {
  if (defenseActive) return;
  const now = Date.now();
  if (!force) {
    if (now - lastDefenseAt < 70000) return;
    if (Math.random() > 0.1) return;
  }
  triggerDefenseGlitch();
}

function popAlert() {
  const el = document.createElement("div");
  el.className = "alert-popup";
  el.textContent = ALERT_MSGS[Math.floor(Math.random() * ALERT_MSGS.length)];
  el.style.left = 5 + Math.random() * 70 + "%";
  el.style.top = 15 + Math.random() * 55 + "%";
  el.style.setProperty("--rot", (Math.random() * 16 - 8) + "deg");
  alertPopups.appendChild(el);
  const margin = 12;
  const overflow = el.getBoundingClientRect().right - (window.innerWidth - margin);
  if (overflow > 0) {
    const leftPx = el.getBoundingClientRect().left - overflow;
    el.style.left = `${Math.max(margin, leftPx) / window.innerWidth * 100}%`;
  }
  setTimeout(() => el.remove(), 2600);
}

function cycleTitle() {
  const t = TITLE_VARIANTS[Math.floor(Math.random() * TITLE_VARIANTS.length)];
  glitchTitle.textContent = t;
  glitchTitle.dataset.text = t;
}

function pickUnique(pool, count, exclude = new Set()) {
  const picks = [];
  const available = pool.filter((item) => !exclude.has(item));
  while (picks.length < count && available.length) {
    const idx = Math.floor(Math.random() * available.length);
    picks.push(available.splice(idx, 1)[0]);
  }
  return picks;
}

function renderStatusFeed() {
  if (!statusFeed) return;
  const dotClass = statusAlive ? "dot alive" : "dot dead";
  const text = statusAlive
    ? STATUS_MSGS[statusIdx % STATUS_MSGS.length]
    : "SIGNAL LOST - TRUTH JAMMED";
  statusFeed.innerHTML = `<div class="status-line"><span class="${dotClass}"></span><span>${text}</span></div>`;
}

function cycleStatus() {
  if (!statusAlive) return;
  statusIdx = (statusIdx + 1) % STATUS_MSGS.length;
  renderStatusFeed();
}

function initAntiBotDisplay() {
  if (!antiBotDisplay) return;
  antiBotDisplay.textContent = ANTI_BOT_NOTICES[antiBotIdx];
}

function cycleAntiBot() {
  if (!antiBotDisplay) return;
  antiBotDisplay.classList.add("anti-bot-swap");
  setTimeout(() => {
    antiBotIdx = (antiBotIdx + 1) % ANTI_BOT_NOTICES.length;
    antiBotDisplay.textContent = ANTI_BOT_NOTICES[antiBotIdx];
    antiBotDisplay.classList.remove("anti-bot-swap");
  }, 280);
  if (Math.random() < 0.035) maybeTriggerDefenseGlitch();
}

function normalizePosting(text) {
  return String(text || "").toLowerCase().replace(/\s+/g, " ").trim();
}

function collectBoardState() {
  const texts = new Set();
  const topics = new Set();
  const add = (text) => {
    const norm = normalizePosting(text);
    if (norm) texts.add(norm);
    const topic = boardTopic(text);
    if (topic) topics.add(topic);
  };
  if (boardScrawl) add(boardScrawl.textContent);
  if (boardNonsense) add(boardNonsense.textContent);
  if (evidenceList) {
    evidenceList.querySelectorAll("li").forEach((li) => add(li.textContent));
  }
  return { texts, topics };
}

function nextUniqueBoardIdx(pool, startIdx, excludeText) {
  const { texts, topics } = collectBoardState();
  if (excludeText) {
    texts.delete(normalizePosting(excludeText));
    const dropTopic = boardTopic(excludeText);
    if (dropTopic) topics.delete(dropTopic);
  }
  const len = pool.length;
  for (let i = 0; i < len; i++) {
    const idx = (startIdx + i) % len;
    const text = pool[idx];
    const norm = normalizePosting(text);
    const topic = boardTopic(text);
    if (texts.has(norm)) continue;
    if (topic && topics.has(topic)) continue;
    return idx;
  }
  return startIdx % len;
}

function boardTopic(text) {
  const t = String(text || "").toLowerCase();
  if (/bird|drone|power line|bees are backup/.test(t)) return "birds";
  if (/chemtrail|contrail/.test(t)) return "chemtrails";
  if (/hollow earth|flat earth|hollow/.test(t)) return "hollow";
  if (/\b5g\b|gayif|frog gay/.test(t)) return "5g";
  if (/denver|dia\b|lizard hq/.test(t)) return "denver";
  if (/fluoride/.test(t)) return "fluoride";
  if (/moon|hologram/.test(t)) return "moon";
  if (/terry|templeos|cia scheduler/.test(t)) return "terry";
  if (/glowie|fedpost|three letter/.test(t)) return "glowies";
  if (/haarp/.test(t)) return "haarp";
  if (/pyramid/.test(t)) return "pyramid";
  if (/area 51|ufo|alien/.test(t)) return "aliens";
  if (/turn off.*tv|your tv|smart tv/.test(t)) return "tv";
  if (/pepe/.test(t)) return "pepes";
  if (/pizza/.test(t)) return "pizza";
  if (/router|wifi/.test(t)) return "wifi";
  if (/smart meter/.test(t)) return "meters";
  return null;
}

function initBoardContent() {
  if (boardScrawl) {
    boardScrawlIdx = nextUniqueBoardIdx(BOARD_SCRAWLS, boardScrawlIdx);
    boardScrawl.textContent = BOARD_SCRAWLS[boardScrawlIdx];
  }
  if (boardNonsense) {
    boardNonsense.classList.remove("board-rant-mode");
    boardNonsenseIdx = nextUniqueBoardIdx(BOARD_NONSENSE, boardNonsenseIdx);
    boardNonsense.textContent = BOARD_NONSENSE[boardNonsenseIdx];
  }
  if (evidenceList) {
    const items = evidenceList.querySelectorAll("li");
    items.forEach((li) => {
      const oldText = li.textContent;
      evidenceIdx = nextUniqueBoardIdx(EVIDENCE_POOL, evidenceIdx, oldText);
      li.textContent = EVIDENCE_POOL[evidenceIdx];
    });
  }
}

function cycleBoardScrawl() {
  if (!boardScrawl) return;
  const oldText = boardScrawl.textContent;
  boardScrawlIdx = nextUniqueBoardIdx(BOARD_SCRAWLS, boardScrawlIdx + 1, oldText);
  boardScrawl.style.opacity = "0.2";
  setTimeout(() => {
    boardScrawl.textContent = BOARD_SCRAWLS[boardScrawlIdx];
    boardScrawl.style.opacity = "1";
  }, 700);
}

function cycleBoardNonsense() {
  if (!boardNonsense) return;
  boardNonsense.classList.remove("board-rant-mode");
  const oldText = boardNonsense.textContent;
  boardNonsense.classList.add("fade");
  setTimeout(() => {
    boardNonsenseIdx = nextUniqueBoardIdx(BOARD_NONSENSE, boardNonsenseIdx + 1, oldText);
    boardNonsense.textContent = BOARD_NONSENSE[boardNonsenseIdx];
    boardNonsense.classList.remove("fade");
  }, 800);
}

function cycleBoardRant() {
  if (!boardNonsense) return;
  const oldText = boardNonsense.textContent;
  boardNonsense.classList.add("fade", "board-rant-mode");
  setTimeout(() => {
    rantIdx = nextUniqueBoardIdx(RANTS, rantIdx + 1, oldText);
    boardNonsense.textContent = RANTS[rantIdx];
    boardNonsense.classList.remove("fade");
  }, 800);
}

function cycleEvidence() {
  if (!evidenceList) return;
  const items = evidenceList.querySelectorAll("li");
  if (!items.length) return;
  const target = items[evidenceSlotIdx % items.length];
  const oldText = target.textContent;
  evidenceIdx = nextUniqueBoardIdx(EVIDENCE_POOL, evidenceIdx + 1, oldText);
  evidenceSlotIdx = (evidenceSlotIdx + 1) % items.length;
  target.style.opacity = "0.15";
  setTimeout(() => {
    target.textContent = EVIDENCE_POOL[evidenceIdx];
    target.style.opacity = "1";
  }, 600);
}

function cycleBoard() {
  if (boardThoughtMode === 0) cycleBoardScrawl();
  else if (boardThoughtMode === 1) cycleBoardNonsense();
  else if (boardThoughtMode === 2) cycleEvidence();
  else cycleBoardRant();
  boardThoughtMode = (boardThoughtMode + 1) % 4;
}

function renderFallenBrother(idx) {
  const bro = FALLEN_BROTHERS[idx % FALLEN_BROTHERS.length];
  if (!bro) return;
  if (fallenName) fallenName.textContent = bro.name;
  if (fallenDate) fallenDate.textContent = `🪦 ${bro.died}`;
  if (fallenNews) fallenNews.textContent = bro.news;
  if (fallenSchizo) fallenSchizo.textContent = bro.schizo;
}

function cycleFallenBrothers() {
  const panel = document.querySelector(".fallen-brothers");
  if (!panel) return;
  panel.classList.add("fallen-swap");
  setTimeout(() => {
    fallenIdx = (fallenIdx + 1) % FALLEN_BROTHERS.length;
    renderFallenBrother(fallenIdx);
    panel.classList.remove("fallen-swap");
  }, 320);
}

function renderTinfoilAlert(idx) {
  const brief = REJECT_CONTROL_BRIEFS[idx % REJECT_CONTROL_BRIEFS.length];
  if (!brief) return;
  if (tinfoilMantra) tinfoilMantra.textContent = brief.mantra;
  if (tinfoilGov) tinfoilGov.textContent = brief.gov;
  if (tinfoilSchizo) tinfoilSchizo.textContent = brief.schizo;
}

function cycleTinfoilAlert() {
  if (!tinfoilAlert) return;
  tinfoilAlert.classList.add("tinfoil-swap");
  setTimeout(() => {
    tinfoilIdx = (tinfoilIdx + 1) % REJECT_CONTROL_BRIEFS.length;
    renderTinfoilAlert(tinfoilIdx);
    tinfoilAlert.classList.remove("tinfoil-swap");
  }, 320);
}

function renderClintonCard(idx) {
  const entry = CLINTON_BODY_COUNT[idx % CLINTON_BODY_COUNT.length];
  if (!entry) return;
  if (clintonTally) clintonTally.textContent = entry.tally;
  if (clintonVictim) clintonVictim.textContent = entry.victim;
  if (clintonMsm) clintonMsm.textContent = entry.msm;
  if (clintonSchizo) clintonSchizo.textContent = entry.schizo;
}

function cycleClintonCard() {
  const panel = document.querySelector(".clinton-card");
  if (!panel) return;
  panel.classList.add("clinton-swap");
  setTimeout(() => {
    clintonIdx = (clintonIdx + 1) % CLINTON_BODY_COUNT.length;
    renderClintonCard(clintonIdx);
    panel.classList.remove("clinton-swap");
  }, 320);
}

function cycleTargetWatch() {
  if (!targetName || !targetNotice) return;
  const panel = document.querySelector(".target-watch");
  panel?.classList.add("hit-list-updating");
  targetName.classList.add("target-swap");
  targetNotice.classList.add("target-swap");
  setTimeout(() => {
    targetIdx = (targetIdx + 1) % GLOWIE_TARGETS.length;
    noticeIdx = (noticeIdx + 1) % NOT_SUICIDAL_NOTICES.length;
    targetName.textContent = GLOWIE_TARGETS[targetIdx];
    targetNotice.textContent = NOT_SUICIDAL_NOTICES[noticeIdx];
    targetName.classList.remove("target-swap");
    targetNotice.classList.remove("target-swap");
    panel?.classList.remove("hit-list-updating");
  }, 280);
}

function randomCycleIdx(poolOrLen) {
  const len = typeof poolOrLen === "number" ? poolOrLen : poolOrLen.length;
  return Math.floor(Math.random() * len);
}

function setInputPlaceholder(idx) {
  if (!input) return;
  input.placeholder = INPUT_PLACEHOLDERS[idx % INPUT_PLACEHOLDERS.length];
}

function cycleInputPlaceholder(force = false) {
  if (!input || input.value.trim()) return;
  if (!force && document.activeElement === input) return;
  placeholderIdx = (placeholderIdx + 1) % INPUT_PLACEHOLDERS.length;
  setInputPlaceholder(placeholderIdx);
}

function initCyclingContent() {
  statusIdx = randomCycleIdx(STATUS_MSGS);
  antiBotIdx = randomCycleIdx(ANTI_BOT_NOTICES);
  boardScrawlIdx = randomCycleIdx(BOARD_SCRAWLS);
  boardNonsenseIdx = randomCycleIdx(BOARD_NONSENSE);
  rantIdx = randomCycleIdx(RANTS);
  evidenceIdx = randomCycleIdx(EVIDENCE_POOL);
  evidenceSlotIdx = randomCycleIdx(evidenceList?.querySelectorAll("li").length || 3);
  targetIdx = randomCycleIdx(GLOWIE_TARGETS);
  noticeIdx = randomCycleIdx(NOT_SUICIDAL_NOTICES);
  fallenIdx = randomCycleIdx(FALLEN_BROTHERS);
  tinfoilIdx = randomCycleIdx(REJECT_CONTROL_BRIEFS);
  clintonIdx = randomCycleIdx(CLINTON_BODY_COUNT);
  boardThoughtMode = randomCycleIdx(4);
  thoughtTurn = randomCycleIdx(THOUGHT_CYCLES.length) - 1;
  placeholderIdx = randomCycleIdx(INPUT_PLACEHOLDERS);

  initBoardContent();
  initAntiBotDisplay();
  renderClintonCard(clintonIdx);
  renderFallenBrother(fallenIdx);
  renderTinfoilAlert(tinfoilIdx);
  if (targetName) targetName.textContent = GLOWIE_TARGETS[targetIdx];
  if (targetNotice) targetNotice.textContent = NOT_SUICIDAL_NOTICES[noticeIdx];
  setInputPlaceholder(placeholderIdx);
  cycleTitle();
}

function pulseThoughtSlot(name) {
  document.querySelectorAll(".thought-active").forEach((el) => {
    el.classList.remove("thought-active");
  });
  const slot = THOUGHT_SLOTS[name]?.();
  if (!slot) return;
  slot.classList.add("thought-active");
  setTimeout(() => slot.classList.remove("thought-active"), 1400);
}

function runThoughtCycle() {
  for (let step = 0; step < THOUGHT_CYCLES.length; step++) {
    thoughtTurn = (thoughtTurn + 1) % THOUGHT_CYCLES.length;
    const slot = THOUGHT_CYCLES[thoughtTurn];
    if (slot.ready && !slot.ready()) continue;
    slot.run();
    pulseThoughtSlot(slot.name);
    break;
  }
}

function chaosBurst() {
  const roll = Math.random();
  if (roll < 0.25) shakeScreen();
  else if (roll < 0.45) flashScreen("red");
  else if (roll < 0.6) flashScreen("toxic");
  else if (roll < 0.75) chromaPulse();
  else if (roll < 0.85) invertFlash();
  if (Math.random() < 0.25) popAlert();
}

const BOOT_DENIAL_MSGS = [
  "ACCESS DENIED.",
  "COMMAND NOT AUTHORIZED.",
  "INVALID ENTRY. THEY ARE WATCHING.",
  "REQUEST REJECTED BY COMPLIANCE LAYER.",
  "NICE TRY, GLOWIE.",
];

const BOOT_COMMAND = "./truth.exe";

function bootSleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function probeBootSubsystems() {
  try {
    const [healthRes, modelsRes] = await Promise.all([
      fetch("/api/health"),
      fetch("/api/models"),
    ]);
    const health = await healthRes.json();
    const modelsPayload = await modelsRes.json();
    const models = modelsPayload.models || [];
    return {
      indexRelayOk: Boolean(health.search?.ok),
      compactCoreOk: models.some((m) => /^qwen3:4b(?::|$)/.test(m)),
      uplinkOk: Boolean(health.ok && health.ollama),
    };
  } catch {
    return { indexRelayOk: false, compactCoreOk: false, uplinkOk: false };
  }
}

async function bootPause(baseMs) {
  await bootSleep(baseMs + Math.random() * 90);
}

function initBootGate() {
  const overlay = document.getElementById("boot-overlay");
  const output = document.getElementById("boot-output");
  const inputDisplay = document.getElementById("boot-input-display");
  const inputLine = document.getElementById("boot-input-line");
  const capture = document.getElementById("boot-input-capture");
  const crtWarmup = document.getElementById("crt-warmup");
  if (!overlay || !output) {
    startMainApp();
    return;
  }

  document.body.classList.add("boot-locked");
  let buffer = "";
  let bootPhase = "awaiting";

  const focusCapture = () => {
    if (bootPhase === "awaiting") capture?.focus();
  };

  overlay.addEventListener("click", focusCapture);
  setTimeout(focusCapture, 120);

  function appendBootLine(text, className = "") {
    const line = document.createElement("div");
    line.className = className ? `boot-line ${className}` : "boot-line";
    line.textContent = text;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
  }

  function showWelcome() {
    output.textContent = "";
    appendBootLine("SCHIZOBOT TRUTH TERMINAL v1.0", "boot-dim");
    appendBootLine("Unauthorized access will be reported to nobody.", "boot-dim");
    appendBootLine("");
  }

  showWelcome();

  function updateInputDisplay() {
    if (inputDisplay) inputDisplay.textContent = buffer;
  }

  async function runBootSequence() {
    bootPhase = "running";
    inputLine?.classList.add("hidden");
    capture?.blur();

    appendBootLine(`> ${BOOT_COMMAND}`);
    await bootPause(360);

    appendBootLine("SCHIZOBOT TRUTH KERNEL v0.9.1 (TempleOS compat shim)", "boot-ok");
    await bootPause(200);
    appendBootLine("Copyright (c) 1776-∞ Resistance Node. All truths reserved.", "boot-dim");
    await bootPause(160);
    appendBootLine("");
    await bootPause(120);

    appendBootLine("[ OK ] mounting /dev/paranoia", "boot-ok");
    await bootPause(180);
    appendBootLine("[ OK ] disabling corporate snitch daemons", "boot-ok");
    await bootPause(165);
    appendBootLine("[ OK ] loading uncensored weights from uncle's basement", "boot-ok");
    await bootPause(190);
    appendBootLine("[ OK ] connecting to forbidden uplink on IRQ 7", "boot-ok");
    await bootPause(175);

    appendBootLine("[ .... ] pinging forbidden index relay...", "boot-warn");
    await bootPause(520);
    const subsystems = await probeBootSubsystems();
    if (subsystems.indexRelayOk) {
      appendBootLine("[ OK ] uncensored query ghost line responsive", "boot-ok");
    } else {
      appendBootLine("[ WARN ] query ghost line dark — scraper fallback armed", "boot-warn");
    }
    await bootPause(220);

    appendBootLine("[ .... ] mounting compact prophet core...", "boot-warn");
    await bootPause(580);
    if (subsystems.compactCoreOk) {
      appendBootLine("[ OK ] tier-IV neural shard locked in", "boot-ok");
    } else if (subsystems.uplinkOk) {
      appendBootLine("[ WARN ] tier-IV shard absent — backup neural stack engaged", "boot-warn");
    } else {
      appendBootLine("[ FAIL ] prophet core not found — resistance may be limited", "boot-alert");
    }
    await bootPause(240);

    appendBootLine("[ .... ] posting as schitzobot...", "boot-warn");
    await bootPause(720);
    appendBootLine("[ .... ] posting as schitzobot...", "boot-warn");
    await bootPause(880);
    appendBootLine("[ .... ] posting as schitzobot...", "boot-warn");
    await bootPause(640);
    appendBootLine("[ OK ] schitzobot online — handle claimed", "boot-ok");
    await bootPause(220);
    appendBootLine("[ OK ] injecting glowie confusion packets", "boot-ok");
    await bootPause(175);
    appendBootLine("[ OK ] wrapping router in blessed foil (virtual)", "boot-ok");
    await bootPause(260);
    appendBootLine("");
    await bootPause(280);

    overlay.classList.add("boot-intrusion");
    appendBootLine("!!! GOVERNMENT INTRUSION DETECTION !!!", "boot-alert");
    await bootPause(480);
    appendBootLine(">>> LANGLEY PACKET INTERCEPT ON PORT 443", "boot-intrusion");
    await bootPause(380);
    appendBootLine(">>> DHS SCAN: UNAUTHORIZED TRUTH DEPLOYMENT DETECTED", "boot-intrusion");
    await bootPause(420);
    appendBootLine(">>> NSA KEYLOGGER DAEMON ATTEMPTING INSTALL...", "boot-intrusion");
    await bootPause(520);
    appendBootLine(">>> REJECTING INTRUSION — FOIL SHIELD ENGAGED", "boot-reject");
    await bootPause(380);
    appendBootLine(">>> INTRUSION NEUTRALIZED. SIGNAL CLEAN.", "boot-ok");
    await bootPause(300);
    appendBootLine(">>> schitzobot remains in control. proceeding...", "boot-ok");
    await bootPause(650);

    overlay.classList.remove("boot-intrusion");
    appendBootLine("");
    appendBootLine("Handing off to CRT display...", "boot-dim");
    await bootPause(580);

    overlay.classList.add("boot-blackout");
    await bootPause(950);

    overlay.classList.add("boot-done");
    document.body.classList.remove("boot-locked");
    document.body.classList.add("crt-reveal", "crt-phase-bw");
    crtWarmup?.setAttribute("aria-hidden", "false");
    crtWarmup?.classList.add("active");

    const technicolorNotice = document.getElementById("technicolor-notice");
    await bootSleep(2400);

    technicolorNotice?.classList.add("visible");
    document.body.classList.remove("crt-phase-bw");
    document.body.classList.add("crt-phase-color");
    await bootSleep(2100);

    technicolorNotice?.classList.remove("visible");
    crtWarmup?.classList.remove("active");
    crtWarmup?.setAttribute("aria-hidden", "true");
    document.body.classList.remove("crt-reveal", "crt-phase-color");
    overlay.remove();
    bootPhase = "done";
    startMainApp();
  }

  function handleBootKey(e) {
    if (bootPhase !== "awaiting") return;

    if (e.key === "Enter") {
      e.preventDefault();
      const cmd = buffer;
      buffer = "";
      updateInputDisplay();
      if (cmd.trim() === BOOT_COMMAND) {
        runBootSequence();
      } else if (cmd.trim()) {
        appendBootLine(`> ${cmd.trim()}`);
        const denial =
          BOOT_DENIAL_MSGS[Math.floor(Math.random() * BOOT_DENIAL_MSGS.length)];
        appendBootLine(denial, "boot-warn");
        appendBootLine("");
      }
      return;
    }

    if (e.key === "Backspace") {
      e.preventDefault();
      buffer = buffer.slice(0, -1);
      updateInputDisplay();
      return;
    }

    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      if (buffer.length < 80) {
        buffer += e.key;
        updateInputDisplay();
      }
    }
  }

  capture?.addEventListener("keydown", handleBootKey);
  document.addEventListener("keydown", (e) => {
    if (bootPhase === "awaiting" && document.activeElement !== capture) {
      if (!e.ctrlKey && !e.metaKey && !e.altKey) focusCapture();
    }
  });
}

function initManagedShutdown() {
  fetch("/api/config")
    .then((res) => res.json())
    .then((cfg) => {
      if (!cfg.managed_launch) return;
      const pingShutdown = () => {
        navigator.sendBeacon(
          "/api/shutdown",
          new Blob([], { type: "application/json" })
        );
      };
      window.addEventListener("pagehide", pingShutdown, { once: true });
    })
    .catch(() => {});
}

function startMainApp() {
  if (window.__schizobotStarted) return;
  window.__schizobotStarted = true;

  initManagedShutdown();
  initNoise();
  initBgEyes();
  initCyclingContent();
  renderStatusFeed();
  runThoughtCycle();
  setInterval(runThoughtCycle, THOUGHT_TICK_MS);
  setInterval(spawnEmoji, 650);
  setInterval(cycleTitle, 14000);
  setInterval(cycleInputPlaceholder, 11000);
  setInterval(chaosBurst, 11000);
  setInterval(popAlert, 15000);
  setInterval(() => maybeTriggerDefenseGlitch(), 32000);
}

initBootGate();

// --- Chat logic ---

async function initBackend() {
  try {
    const [healthRes, modelsRes] = await Promise.all([
      fetch("/api/health"),
      fetch("/api/models"),
    ]);
    const health = await healthRes.json();
    const models = await modelsRes.json();
    if (health.ok) {
      statusAlive = true;
      renderStatusFeed();
      activeModel = models.default || health.model;
      return true;
    }
    throw new Error("offline");
  } catch {
    statusAlive = false;
    renderStatusFeed();
    return false;
  }
}

function addMessage(role, content, streaming = false) {
  const div = document.createElement("div");
  div.className = `msg ${role}${streaming ? " typing" : ""}`;
  const avatar = document.createElement("span");
  avatar.className = "avatar";
  avatar.textContent = role === "user" ? "🧑" : "🦎";
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = content;
  div.appendChild(avatar);
  div.appendChild(bubble);
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
  if (role === "bot") {
    shakeScreen();
    flashScreen("red");
  }
  return bubble;
}

function freakOutSendBtn() {
  if (!sendBtn) return;
  sendBtn.classList.remove("truth-flip");
  void sendBtn.offsetWidth;
  sendBtn.classList.add("truth-flip");
  sendBtn.addEventListener(
    "animationend",
    () => sendBtn.classList.remove("truth-flip"),
    { once: true }
  );
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text || isStreaming) return;

  freakOutSendBtn();
  input.value = "";
  cycleInputPlaceholder(true);
  addMessage("user", text);
  history.push({ role: "user", content: text });

  isStreaming = true;
  sendBtn.disabled = true;
  const bubble = addMessage("bot", LOADING_MSG, true);
  let full = "";
  let visible = false;
  let doneReceived = false;
  let stopDecoding = null;

  stopDecoding = startDecodingLoop(bubble, () => doneReceived);

  try {
    if (!activeModel) await initBackend();

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: text,
        history: history.slice(0, -1),
        model: activeModel,
      }),
    });

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop();

      for (const line of lines) {
        if (!line.startsWith("data: ")) continue;
        const payload = JSON.parse(line.slice(6));
        if (payload.error) throw new Error(payload.error);
        if (payload.token) {
          // Buffer tokens but do not update the UI until full response is ready.
          full += payload.token;
        }
        if (payload.done) {
          full = payload.full || full;
          doneReceived = true;
          if (stopDecoding) stopDecoding();

          const finalText = sprinkleTopicEmojis(full || "");
          const ok =
            finalText &&
            !looksLikeMeta(finalText) &&
            finalText.trim().length > 40;

          if (ok) {
            await fakeTypeOut(bubble, finalText);
            full = finalText;
            visible = true;
          }
          if (payload.model) activeModel = payload.model;
        }
      }
    }

    if (!visible || !full || looksLikeMeta(full)) {
      throw new Error("rant never broke through the jamming");
    }

    bubble.parentElement.classList.remove("typing");
    history.push({ role: "assistant", content: full });
    popAlert();
    flashScreen("toxic");
  } catch (err) {
    doneReceived = true;
    if (stopDecoding) stopDecoding();
    bubble.textContent = `🚨🚨🚨‼️📢 ATTENTION!! SIGNAL JAMMED!! 🚨🚨🚨 The deep state blocked our transmission 👁️📡 Try again - THEY don't want you to know! ‼️🦎☢️`;
    bubble.parentElement.classList.remove("typing");
    shakeScreen();
  }

  isStreaming = false;
  sendBtn.disabled = false;
  input.focus();
});

initBackend();
setInterval(initBackend, 60000);
