/* ===================================================================
   LUDOVIC LI - THE BOX OFFICE - 3D cinema portfolio (Three.js)
   Each ticket = one project. Hover -> click -> spin the ticket ->
   stamp it -> the "film" card opens.
   (The contact e-mail lives in index.html: #mailBtn / #ticketEmail.)
   =================================================================== */

const CONFIG = {
  github: "https://github.com/Lvdoo",
  kapsulCampaign: "https://www.kickstarter.com/projects/kapsul-quickstarter/quickstarter-kapsul",
};

const HAS_THREE = (typeof window !== "undefined" && typeof window.THREE !== "undefined");
/* Les " scratchs " 3D (vecteurs, matrices, rayon) ne servent QUE dans la scene :
   camera, boucle de rendu, projections. Si Three.js manque, ils ne sont jamais
   dereferences - on les alloue donc a null plutot que de faire tomber le script
   (et avec lui, la liste des projets). */
const newV3  = HAS_THREE ? (x,y,z) => new THREE.Vector3(x,y,z) : () => null;
const newRay = HAS_THREE ? () => new THREE.Raycaster()           : () => null;
const newM4  = HAS_THREE ? () => new THREE.Matrix4()              : () => null;
const newM3  = HAS_THREE ? () => new THREE.Matrix3()              : () => null;

/* -- LES 6 FILMS (projets) ------------------------------------------
   front / back = media du ticket (recto / verso).
   No file yet? A "PLACE RESERVED" placeholder is shown instead.
   Drop the file with the right name into assets/ and it shows up by itself. */
const PROJECTS = [
  {
    id:"terubot", num:"001", title:"TeruBot", accent:"#e03131",
    domain:"Human-robot Interaction - Installation", year:"2025", role:"Prototyping - Code - Electronics",
    seance:"SHOWTIME 9:00 PM",
    tools:["Python","Electronic","Sensors","Realtime"],
    front:{src:"assets/terubot-demo.mp4", cap:"TRAILER - WORKSHOP DEMO"},
    back:{src:"assets/terubot-2.mp4", cap:"WORKSHOP DEMO (REPRISE)"},
    tagline:"A robot that makes collective emotions visible.",
    blurb:"TeruBot turns a group's emotions into a physical, interactive representation. Inspired by the Japanese Teru Teru Bozu, it visualises the collective emotional mood in a simple, playful and intuitive way.",
    headline:"'When Feelings Take Shape'",
    sections:[
      
      
      {h: "SYSTEM INTENT",
      list: [
      "Make collective emotions visible: transform individual emotional check-ins into a shared emotional atmosphere, represented through a weather-based metaphor.",
      "Embodied expression: translate abstract emotional states into expressive eye animations, blinking patterns and head movements, making the robot's emotional state perceptible without relying on words.",
      "Encourage social connection: create a shared physical presence that invites communities to become aware of their emotional climate and reflect on their collective well-being."]},
     
      {h: "PROTO",
      p: "Mobile App -> Backend -> Robot. A companion mobile application allows participants to submit emotional check-ins through four dimensions: general mood, energy, stress and social connection. Individual inputs are aggregated into a collective emotional state and translated into weather-based expressions. I designed and programmed the robot's emotional eye expressions using Python and Pygame, displayed on two Waveshare ESP32-S3 screens. Combined with head movements, these animated eyes give the robot its expressive personality."},
      
      {h: "USER STUDY & FEEDBACK",
      p: "A preliminary user study with 8 participants evaluated the usability and perceived quality of both the mobile application and the robot. All participants rated the emotional check-in experience 5/5, while the robot received 5/5 from everyone for enhancing the overall experience. Participants also highlighted the app's visual design and colours, while spontaneous interactions such as touching and stroking the robot's head revealed opportunities for richer embodied interactions."},
      
      
      {h: "KEY TAKEAWAYS",
      p: "Designing TeruBot's emotional expressions taught me how to translate abstract emotional states into visual and physical behaviours. The user study highlighted the importance of expressive consistency and intuitive interactions: participants found the robot's behaviour easy to understand and unanimously valued its contribution to the experience. Unexpected physical interactions also revealed how a robot's presence can encourage engagement beyond its intended functions."},

      {h: "CHI EA 2026",
      p: `Co-author of the paper TeruBot: Materializing Collective Emotions Through anEmbodied Robotic Metaphor - <a href="https://dl.acm.org/doi/epdf/10.1145/3772363.3799320" target="_blank" rel="noopener noreferrer">https://dl.acm.org/doi/epdf/10.1145/3772363.3799320</a>`},

    ],
    link: CONFIG.github,
  },
  {
    id:"breathin", num:"002", title:"BreathIN", accent:"#2f7fe0",
    domain:"Breathing - Unity - Particles", year:"2026", role:"Unity - C# - Realtime",
    seance:"SHOWTIME 6:30 PM",
    tools:["Unity","C#","Particles","Sound design"],
    front:{src:"assets/breathin-1.png", cap:"THE CHERRY TREE / GUIDED BREATHING"},
    back:{src:"assets/breathin-2.png", cap:"CROSSING / COHERENCE"},
    tagline:"Breathe in. Breathe out. The scenery breathes with you.",
    blurb:"BreathIN helps you become aware of your breathing and build moments of calm. A guide robot, a cherry tree in bloom, petals that follow your breath.",
    headline:"'Breathtaking cinematography'",
    sections:[
      {h:"REALTIME SYSTEM", list:["Guided breathing loop: the scenery (light, petals, water) breathes with you.","Immediate feedback, never punishing.","A soothing open world: hill, river, red forest."]},
      {h:"TECH", p:"Unity 6.2 (SampleScene), particles, dynamic skybox, camera path. Stills: assets/breathin-1.png and breathin-2.png - captured from the Test folder."},
      {h:"KEY TAKEAWAY", p:"Well-being built like a long take: slow rhythm, no brutal cut, always an escape hatch (pause / quit)."},
    ],
    link: CONFIG.github,
  },
  {
    id:"kapsul", num:"003", title:"Kapsul", accent:"#c8813a",
    domain:"Product Design - Crowdfunding", year:"2025 - 2026", role:"Product Design - Prototyping - Campaign Strategy",
    seance:"SHOWTIME 8:00 PM",
    tools:["Prototyping","Designing","Crowdfunding"],
    front:{src:"assets/Kapsul-1.png", cap:"PROTOTYPE IN CONTEXT"},
    back:{src:"assets/Kapsul-2.mp4", cap:"KAPSUL PHOTO"},
    tagline:"From an idea to a campaign that takes off.",
    blurb:"From product concept to crowdfunding launch, Kapsul combines product design, rapid prototyping and brand storytelling to turn an idea into a market-ready project..",
    headline:"'Kapsul : Protect your children with style'",
    sections:[
      {h:"WHAT I DID", list:["Designing and Prototyping.","Photos / renders for the campaign page.","Campaign storytelling and strategy."]},
      {h:"TECH NOTES", p:`A Kickstarter page is an interface: hierarchy, proof, price, urgency. I built the page like a funnel, not a poster.
The Kickstarter campaign did not reach its funding goal, but it was a valuable learning experience in product positioning, prototyping and crowdfunding strategy.
<strong>Explore the campaign:</strong> <a href="${CONFIG.kapsulCampaign}" target="_blank" rel="noopener noreferrer">${CONFIG.kapsulCampaign}</a>`},
    ],
    link: "#contact",
  },
  {
    id:"keymotion", num:"004", title:"KeyMotion", accent:"#4a58d8",
    domain:"Gesture - Computer Vision", year:"2025", role:"Vision - Dev",
    seance:"SHOWTIME 10:15 PM",
    tools:["Python","MediaPipe","Unity","ShaderLab"],
    front:{src:"assets/keymotion-1.png", cap:"GESTURE / REALTIME MAPPING"},
    back:{src:"assets/keymotion-2.png", cap:"UNITY SCENE / SHADER"},
    tagline:"Your hands become the remote.",
    blurb:"Control sound, colour and volume with a wave of your hand. KeyMotion captures hand landmarks, maps fingers to actions and sends the data to Unity and the system.",
    headline:"'Pure interaction, no remote'",
    sections:[
      {h:"ARCHITECTURE", list:["camera.py + fingers_detection.py: capture and landmarks (hand_landmarker.task).","mapping.py + interaction.py: gestures -> commands.","send_data.py + hardware_controls.py + audio.py: bridge to Unity / OS.","KeyMotion_Unity + Button_Color_Volume_Control folder on the scene side."]},
      {h:"TECH NOTES", p:"The hardest part isn't detection, it's the false positive: deadzone, hysteresis, immediate visual feedback so the user understands what is being captured."},
    ],
    link:"https://github.com/Lvdoo/KeyMotion",
  },
  {
    id:"vision", num:"005", title:"Neural Vision", accent:"#8e44d8",
    domain:"AI - Computer Vision", year:"2026", role:"Model training - Dataset - Python",
    seance:"SHOWTIME 7:00 PM",
    tools:["Python","CNN","Tiny SSD","OpenCV","Tkinter"],
    front:{src:"assets/Vision-1.mp4", cap:"MODEL TRAINING"},
    back:{src:"assets/Vision-2.mp4", cap:"HANDWRITING"},
    tagline:"From pixels to digits.",
    blurb:"A progressive approach to handwritten digit recognition: from an interactive drawing interface to real-world capture, up to multi-digit detection in a single image.",
    headline:"'Three projects, one question: can a machine read?'",
    sections:[
      {h:"01 — DRAW & PREDICT", p:"Built a CNN trained on the MNIST dataset to recognize digits drawn on a Tkinter interface. Image preprocessing was implemented to match the format expected by the model, achieving strong recognition results."},
      {h:"02 — REAL-WORLD RECOGNITION", p:"Extended the system to recognize handwritten digits on paper using images captured with a phone and processed with OpenCV. The existing CNN was reused, with additional preprocessing to handle real-world images."},
      {h:"03 — MULTI-DIGIT DETECTION", p:"Developed a custom dataset and combined a Tiny SSD object detection model, anchor boxes, and the CNN classifier to locate and recognize multiple handwritten digits in a single image. Results were more limited due to the small size of the custom dataset."},
      {h:"HOW IT WORKS", flowchart:'steps', steps:[
        {t:"USER INPUT",        d:"Tkinter canvas or webcam frame"},
        {t:"LOCATE THE DIGIT",  d:"Stroke bounding box, largest contour, or TinySSD detector"},
        {t:"PREPROCESSING",     d:"Crop, square padding, 28×28 resize, MNIST normalization"},
        {t:"CNN MODEL",         d:"2 conv + 2 dense layers, trained on MNIST with augmentation"},
        {t:"PREDICTION",        d:"Digit displayed live, stabilized over frames"},
      ]},
      {h:"TECH NOTES", p:"<strong>DRAW & PREDICT</strong> : CNN accuracy : 99.03%, Loss : 0.0148, Epochs : 5\n<strong>REAL-WORLD RECOGNITION</strong> : Accuracy of 80.81% on a custom dataset of 100 handwritten digit images (10 for each digit), created to test the model on real-world handwriting.\n<strong>MULTI-DIGIT DETECTION</strong> : 20 images, 54 digits, never used in training.\n  CNN on ground-truth crops: 90.7 % (49/54, 95 % CI 80-96 %)\n  Detector recall @ IoU 0.5: 7.4 % (4/54) \u2014 AP@0.5 0.05"},
    ],
    link: CONFIG.github,
  },
  {
    id:"weather", num:"006", title:"WeatherApp", accent:"#2f9e44",
    domain:"Desktop tool - Weather data", year:"2024", role:"GUI - API integration - Data processing",
    seance:"SHOWTIME 5:00 PM",
    tools:["Python","Tkinter","OpenWeatherMap"],
    front:{src:"assets/weather-1.png", cap:"WEATHER APP INTERFACE IN CELSIUS"},
    back:{src:"assets/weather-2.png", cap:"WEATHER APP INTERFACE IN FAHRENHEIT"},
    tagline:"Search a city, get the sky.",
    blurb:"A personal Python project built around the OpenWeatherMap API: search a city, read its current weather and look ahead to the coming days.",
    headline:"'Celsius or Fahrenheit, one click'",
    sections:[
      {h:"DESCRIPTION", p:[
        "WeatherApp is a Python application designed to retrieve weather data from an external API, process the returned information, and present it in an accessible format.",
        "The application allows users to search for a city, view its current weather, and access forecasts for the coming days. The project focuses on API integration, data processing and formatting, as well as error handling to manage potential issues when retrieving or processing data.",
        "Developed as a personal project, WeatherApp provided hands-on experience in working with external APIs, transforming structured data into usable information, and building more robust applications through error management.",
      ]},
      {h:"STRUCTURE", list:[
        "main.py — Entry point, app initialization and orchestration.",
        "gui.py — Tkinter interface (search bar, current weather, forecast display).",
        "weather_api.py — OpenWeatherMap API calls (current + forecast), query building, HTTP requests.",
        "utils.py — Data processing, unit conversion/formatting, helpers and error handling.",
      ]},
      {h:"HOW IT WORKS", flowchart:'steps', steps:[
        {t:"USER INPUT", d:"Search a city"},
        {t:"API REQUEST", d:"Fetch weather data"},
        {t:"DATA PROCESSING", d:"Parse, transform and validate data"},
        {t:"DECISION", d:"Data retrieved successfully ?", type:"decision", branches:[
          {label:"No", t:"ERROR HANDLING", d:"Manage request or data errors"},
          {label:"Yes", t:"WEATHER DATA", d:"Current conditions and multi-day forecast"}
        ]},
        {t:"USER INTERFACE", d:"Display weather information"},
      ]},
    ],
    link:"https://github.com/Lvdoo/WeatherApp",
  },
];

const ORDER = PROJECTS.map(p => p.id);
const ROOMS = { terubot:"ROOM 01", breathin:"ROOM 02", kapsul:"ROOM 03", keymotion:"ROOM 04", vision:"ROOM 05", weather:"ROOM 06" };

/* ================== Petits utilitaires ================== */
const $  = (s, c=document) => c.querySelector(s);
const $$ = (s, c=document) => [...c.querySelectorAll(s)];
const clamp = (v,a,b) => Math.max(a, Math.min(b, v));
const lerp = (a,b,t) => a + (b-a)*t;
const isVideo = src => /\.(mp4|webm|mov|ogv)$/i.test(src);
const F_DISPLAY = '"Anton", Impact, sans-serif';
const F_BODY    = '"Archivo", system-ui, sans-serif';
const F_QUOTE   = '"Playfair Display", Georgia, serif';
const fDisplay  = px => `${px}px ${F_DISPLAY}`;
const fBodyFont = (w,px) => `${w} ${px}px ${F_BODY}`;
const fQuoteFont= px => `italic ${px}px ${F_QUOTE}`;
const fSerifFont = (weight,px) => `${weight} ${px}px ${F_QUOTE}`;

function hexToRgba(hex,a){
  let h = hex.replace("#","");
  if(h.length===3) h = h.split("").map(c=>c+c).join("");
  const r=parseInt(h.slice(0,2),16), g=parseInt(h.slice(2,4),16), b=parseInt(h.slice(4,6),16);
  return `rgba(${r},${g},${b},${a})`;
}
function shadeColor(hex,amt){
  let h=hex.replace("#","");
  if(h.length===3) h=h.split("").map(c=>c+c).join("");
  const f=v=>Math.max(0,Math.min(255,Math.round(v*(1-amt))));
  return `rgb(${f(parseInt(h.slice(0,2),16))},${f(parseInt(h.slice(2,4),16))},${f(parseInt(h.slice(4,6),16))})`;
}
function createSeededRandom(seed){
  let s=2166136261;
  for(const ch of String(seed)){ s ^= ch.charCodeAt(0); s=Math.imul(s,16777619); }
  return ()=> { s ^= s<<13; s ^= s>>>17; s ^= s<<5; return ((s>>>0)%1000)/1000; };
}



/* ================== Elements DOM ================== */
const stage = $("#stage"), grain = $("#grain");
const loaderCount = $("#loaderCount");
const ticketBar = $("#ticketBar");
const stampTitle = $("#stampTitle"), stampNote = $("#stampNote"), stampBtn = $("#stampBtn"), stampMeta = $("#stampMeta");
const bellHint = $("#bellHint");
const detail = $("#detail"), detailSheet = $("#detailSheet"), detailScroll = $("#detailScroll"), noWebgl = $("#noWebgl");
const projectListEl = $("#projectList");
const cineBarBottom = $(".cine-bar--bottom");        // la bande noire du bas (hauteur de reference)
const cineBarTop = $(".cine-bar--top");              // la bande noire du haut (idem)

/* ================== Taille REELLE de la surface de rendu ==================
   Le canvas est en position:fixed;inset:0 : sa boite CSS EST le viewport de mise en page.
   C'est donc LUI qui fait foi, et pas window.innerWidth/innerHeight, qui sur iOS bougent
   avec la barre d'URL, le zoom ou le clavier virtuel. Mesurer le canvas garde toujours
   d'accord la taille du canvas, le ratio de la camera et la taille du tampon de dessin.
   Repli sur innerWidth/innerHeight tant que le canvas n'a pas ete mesure. */
function viewSize(){
  const w = (stage && stage.clientWidth)  || innerWidth  || 1;
  const h = (stage && stage.clientHeight) || innerHeight || 1;
  return {w, h};
}
function viewAspect(){ const s = viewSize(); return s.w/s.h; }

/* ================== Medias (prechargement) ================== */
const MEDIA = new Map(); // src -> {kind:'image'|'video'|'missing', el, ok}
let buildStarted = false;
const uniqueSrcs = [...new Set(PROJECTS.flatMap(p => [p.front.src, p.back.src]))];

function getMedia(src){ return MEDIA.get(src) || {kind:"missing", el:null, ok:false}; }

function preloadOne(src){
  return new Promise(res => {
    const record = (kind, el, ok) => {
      if(MEDIA.has(src)) return;
      MEDIA.set(src, ok ? {kind, el, ok:true} : {kind:"missing", el:null, ok:false});
      updateLoaderProgress(); res();
    };
    if(isVideo(src)){
      const v = document.createElement("video");
      v.muted = true; v.loop = true; v.playsInline = true; v.preload = "auto";
      v.addEventListener("loadeddata", () => record("video", v, true), {once:true});
      v.addEventListener("error", () => record("video", v, false), {once:true});
      setTimeout(() => record("video", v, false), 6000);
      v.src = src; v.load();
    } else {
      const im = new Image();
      im.onload = () => record("image", im, true);
      im.onerror = () => record("image", im, false);
      setTimeout(() => record("image", im, false), 8000);   // garde-fou : reseau gele = "manquant", jamais bloque
      im.src = src;
    }
  });
}
async function preloadAll(){ await Promise.all(uniqueSrcs.map(preloadOne)); assetsReady = true; updateLoaderProgress(); }

function unlockMedia(){
  for(const m of MEDIA.values()){
    if(m.kind === "video" && m.el && m.el.paused) m.el.play().catch(()=>{});
  }
}

/* ================== Loader (compte a rebours 3-2-1) ==================
   Le chargement n'affiche QUE les chiffres 3 -> 2 -> 1 (aucun logo " play ").
   Le rythme est volontairement court ; si les ressources (medias, polices, scene)
   ne sont pas pretes au dernier " 1 ", on PATIENTE sans forcer : la scene ne
   s'ouvre jamais tant qu'elle n'est pas utilisable. Des qu'elles sont pretes
   (assetsReady + fontsLoaded + sceneBuilt), on revele le portfolio - sans attendre
   un temps artificiel inutile. */
let loaderDone = false, fontsLoaded = false, sceneBuilt = false, assetsReady = false;
let num = 3, numAt = performance.now(), numTimer = 0;
const STEP = 700;
const LOADER_HARD_TIMEOUT = 12000;              // garde-fou : jamais bloque indefiniment
function renderCount(v){
  if(!loaderCount) return;
  /* Un <b> frais a chaque chiffre : l'animation CSS se rejoue (fondu + montee),
     sans reconstruire la mise en page ni laisser l'ancien chiffre visible. */
  loaderCount.textContent = "";
  const el = document.createElement("b");
  el.textContent = String(v);
  loaderCount.appendChild(el);
}
function updateLoaderProgress(){
  if(loaderDone) return;
  tickCountdown();
}
function allReady(){ return assetsReady && fontsLoaded && sceneBuilt; }
function tickCountdown(){
  if(loaderDone) return;
  const wait = STEP - (performance.now() - numAt);
  if(wait > 0){ clearTimeout(numTimer); numTimer = setTimeout(tickCountdown, wait + 10); return; }
  if(num === 1){
    /* Dernier chiffre affiche : on ne repart pas en boucle sur " 3 ".
       On attend simplement les ressources puis on revele. */
    maybeFinish();
    return;
  }
  num--;
  numAt = performance.now();
  renderCount(num);
  numTimer = setTimeout(tickCountdown, STEP + 10);
}
function maybeFinish(){
  if(loaderDone) return;
  if(!allReady()) return;                        // ressources pas pretes : on patiente
  loaderDone = true;
  clearTimeout(numTimer);
  renderCount(1);                                // on s'arrete bien sur " 1 "
  setTimeout(() => {
    document.body.removeAttribute("data-loading");
    document.body.removeAttribute("aria-busy");
  }, 400);
}
renderCount(num);
updateLoaderProgress();
/* Garde-fou : au pire des cas (CDN de polices bloque, WebGL plante...), on n'expose
   JAMAIS une scene inutilisable, mais on ne laisse pas non plus l'utilisateur bloque
   sur le compte a rebours : apres le delai, on revele ce qui est pret. */
setTimeout(() => {
  if(loaderDone) return;
  console.warn("[box office] loader: forcing reveal after", LOADER_HARD_TIMEOUT, "ms",
    {assetsReady, fontsLoaded, sceneBuilt});
  assetsReady = fontsLoaded = sceneBuilt = true;
  maybeFinish();
}, LOADER_HARD_TIMEOUT);

/* ================== Papier + dessin des tickets ================== */
const PW = 1600, PH = 960;
let PAPER_LIGHT = null, PAPER_INK = null;

function makePaper(base){
  const c = document.createElement("canvas"); c.width = PW; c.height = PH;
  const g = c.getContext("2d");
  const grd = g.createLinearGradient(0,0,0,PH);
  grd.addColorStop(0, base); grd.addColorStop(1, shadeColor(base, .10));
  g.fillStyle = grd; g.fillRect(0,0,PW,PH);
  g.globalAlpha = .05; g.strokeStyle = "#fff"; g.lineWidth = .6;
  for(let i=0;i<70;i++){
    const x = Math.random()*PW, y = Math.random()*PH;
    g.beginPath(); g.moveTo(x,y); g.lineTo(x+ (Math.random()*300-150), y + (Math.random()*6-3)); g.stroke();
  }
  g.globalAlpha = .035; g.fillStyle = "#000";
  for(let i=0;i<3000;i++) g.fillRect(Math.random()*PW, Math.random()*PH, 1.2, 1.3);
  g.globalAlpha = .03; g.fillStyle = "#fff";
  for(let i=0;i<1800;i++) g.fillRect(Math.random()*PW, Math.random()*PH, 1, 1);
  g.globalAlpha = 1;
  const v = g.createRadialGradient(PW/2, PH/2, PH*.22, PW/2, PH/2, PH*.78);
  v.addColorStop(0, "rgba(0,0,0,0)"); v.addColorStop(1, "rgba(0,0,0,.15)");
  g.fillStyle = v; g.fillRect(0,0,PW,PH);
  // jaunissement des bords / coins (papier d'epoque)
  for(const [cx,cy] of [[18,18],[PW-18,18],[18,PH-18],[PW-18,PH-18]]){
    const rg = g.createRadialGradient(cx,cy,6,cx,cy,Math.max(PW,PH)*.55);
    rg.addColorStop(0,"rgba(122,88,48,.16)"); rg.addColorStop(1,"rgba(122,88,48,0)");
    g.fillStyle = rg; g.fillRect(0,0,PW,PH);
  }
  // taches de rousseur (foxing)
  g.globalAlpha = 1;
  for(let i=0;i<36;i++){
    const x = Math.random()*PW, y = Math.random()*PH, r = 2+Math.random()*13;
    const rg = g.createRadialGradient(x,y,0,x,y,r);
    rg.addColorStop(0,"rgba(107,82,53,.5)"); rg.addColorStop(1,"rgba(107,82,53,0)");
    g.fillStyle = rg; g.beginPath(); g.arc(x,y,r,0,7); g.fill();
  }
  // aureoles de tasse discretes
  g.strokeStyle = "rgba(138,106,63,.16)"; g.lineWidth = 3;
  for(let i=0;i<2;i++){
    const x = 120 + Math.random()*(PW-240), y = 90 + Math.random()*(PH*.4);
    g.beginPath(); g.arc(x,y,30+Math.random()*26,0,7); g.stroke();
  }
  return c;
}

function roundedRect(ctx,x,y,w,h,r){
  ctx.beginPath();
  if(ctx.roundRect){ ctx.roundRect(x,y,w,h,r); return; }
  ctx.moveTo(x+r,y); ctx.arcTo(x+w,y,x+w,y+h,r); ctx.arcTo(x+w,y+h,x,y+h,r);
  ctx.arcTo(x,y+h,x,y,r); ctx.arcTo(x,y,x+w,y,r); ctx.closePath();
}
function dashedLine(ctx,x,y,w,color,dash,gap){
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.setLineDash([dash,gap]);
  ctx.beginPath(); ctx.moveTo(x,y); ctx.lineTo(x+w,y); ctx.stroke(); ctx.restore();
}
function perforation(ctx,x,y,w,color){
  // ligne de dechirure : pointilles + encoches
  ctx.save();
  ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.setLineDash([7,6]);
  ctx.beginPath(); ctx.moveTo(x,y); ctx.lineTo(x+w,y); ctx.stroke();
  ctx.setLineDash([]); ctx.lineWidth = 1.2;
  for(let i=0;i<=w;i+=26){
    ctx.beginPath(); ctx.moveTo(x+i, y-5); ctx.lineTo(x+i, y+5); ctx.stroke();
  }
  ctx.restore();
}
function tornEdge(ctx,w,h,amp){
  // bord inferieur decoupe en dents de scie
  ctx.save();
  ctx.beginPath(); ctx.moveTo(0,h);
  for(let x=0;x<w;x+=22){ ctx.lineTo(x+11, h-amp); ctx.lineTo(x+22, h); }
  ctx.lineTo(w,h); ctx.closePath(); ctx.fill();
  ctx.restore();
}
function tornTop(ctx,w,top,amp){
  // bord superieur dechire (miroir du bas)
  ctx.save();
  ctx.beginPath(); ctx.moveTo(0,top);
  for(let x=0;x<w;x+=22){ ctx.lineTo(x+11, top+amp); ctx.lineTo(x+22, top); }
  ctx.lineTo(w,top); ctx.lineTo(w,top-6); ctx.lineTo(0,top-6); ctx.closePath(); ctx.fill();
  ctx.restore();
}
function tornRight(ctx,x,h,amp){
  // bord droit du talon dechire, dents vers +x
  ctx.save();
  ctx.beginPath(); ctx.moveTo(x,0);
  for(let y=0;y<h;y+=22){ ctx.lineTo(x+amp, y+11); ctx.lineTo(x, y+22); }
  ctx.lineTo(x,h); ctx.lineTo(x+6,h); ctx.lineTo(x+6,0); ctx.closePath(); ctx.fill();
  ctx.restore();
}
function perforationV(ctx,x,y,h,color){
  // ligne de dechirure verticale (talon)
  ctx.save();
  ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.setLineDash([7,6]);
  ctx.beginPath(); ctx.moveTo(x,y); ctx.lineTo(x,y+h); ctx.stroke();
  ctx.setLineDash([]); ctx.lineWidth = 1.2;
  for(let i=0;i<=h;i+=26){
    ctx.beginPath(); ctx.moveTo(x-5, y+i); ctx.lineTo(x+5, y+i); ctx.stroke();
  }
  ctx.restore();
}
function drawAccentBands(ctx,w,h,accent){
  ctx.fillStyle = accent; ctx.fillRect(0,0,9,h);
  ctx.fillStyle = hexToRgba(accent,.4); ctx.fillRect(w-9,0,9,h);
}
function drawTicketEdges(ctx,w,h,seamX,ripColor,perforationColor){
  ctx.fillStyle = ripColor;
  tornTop(ctx,w,10,7);
  tornEdge(ctx,w,h,7);
  tornRight(ctx,w-16,h,7);
  perforationV(ctx,seamX,26,h-52,perforationColor);
  ctx.fillStyle = ripColor;
  ctx.beginPath(); ctx.arc(seamX,16,9,0,Math.PI); ctx.fill();
  ctx.beginPath(); ctx.arc(seamX,h-16,9,Math.PI,0); ctx.fill();
}
function rosette(ctx,cx,cy,r,color){
  // rosette etoilee d'ornement (8 petales)
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.beginPath();
  for(let i=0;i<32;i++){
    const a = i/32*Math.PI*2, rad = i%2 ? r*.42 : r;
    const x = cx + Math.cos(a)*rad, y = cy + Math.sin(a)*rad;
    i ? ctx.lineTo(x,y) : ctx.moveTo(x,y);
  }
  ctx.closePath(); ctx.stroke(); ctx.restore();
}
function photoCorners(ctx,x,y,w,h,color){
  // coins dores facon photo d'epoque
  const L = 30, T = 7;
  ctx.save(); ctx.fillStyle = color;
  const seg = (cx,cy,dx,dy) => { ctx.fillRect(cx,cy,dx*L,T); ctx.fillRect(cx,cy,T,dy*L); };
  seg(x-9, y-9, 1, 1);
  seg(x+w+9-T, y-9, -1, 1);
  seg(x-9, y+h+9-T, 1, -1);
  seg(x+w+9-T, y+h+9-T, -1, -1);
  ctx.restore();
}
function dateStamp(ctx,x,y,r,year){
  // tampon rond dateur du projectionniste
  ctx.save();
  ctx.translate(x,y); ctx.rotate(-.16);
  ctx.strokeStyle = "#c22b27"; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.arc(0,0,r,0,7); ctx.stroke();
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(0,0,r*.82,0,7); ctx.stroke();
  ctx.fillStyle = "rgba(194,43,39,.92)";
  ctx.textAlign = "center"; ctx.textBaseline = "middle";
  ctx.font = fBodyFont(700, Math.round(r*.30));
  ctx.fillText("CINEMA - LL", 0, -r*.30);
  ctx.font = fBodyFont(600, Math.round(r*.24));
  ctx.fillText("* APPROVED *", 0, r*.06);
  ctx.font = fBodyFont(500, Math.round(r*.22));
  ctx.fillText(String(year), 0, r*.38);
  ctx.restore();
}
function fillCapsText(ctx,text,x,y,{px=13,weight=700,color="#000",ls=3,align="left",baseline}){
  ctx.save();
  ctx.font = fBodyFont(weight,px); ctx.fillStyle = color; ctx.textAlign = align;
  if(baseline) ctx.textBaseline = baseline;
  if("letterSpacing" in ctx) ctx.letterSpacing = ls + "px";
  ctx.fillText(text,x,y);
  ctx.restore();
}
function wrapLines(ctx,text,maxW){
  const words = String(text).split(/\s+/).filter(Boolean);
  const lines = []; let line = "";
  for(const w of words){
    const test = line ? line + " " + w : w;
    if(ctx.measureText(test).width > maxW && line){ lines.push(line); line = w; }
    else line = test;
  }
  if(line) lines.push(line);
  return lines;
}
function drawReserved(ctx,x,y,w,h,spec,accent,active){
  ctx.fillStyle = "#101014"; ctx.fillRect(x,y,w,h);
  ctx.fillStyle = hexToRgba(accent,.55);
  for(let i=0;i<5;i++){
    const xx = x+12 + i*((w-24)/5);
    ctx.fillRect(xx, y+10, 13, 8); ctx.fillRect(xx, y+h-18, 13, 8);
  }
  ctx.save();
  ctx.translate(x+w/2, y+h/2);
  const sw = Math.min(300, w-56), sh = 124;
  ctx.strokeStyle = hexToRgba(accent,.8); ctx.lineWidth = 2.5;
  roundedRect(ctx,-sw/2,-sh/2,sw,sh,8); ctx.stroke();
  ctx.fillStyle = active ? accent : "rgba(239,233,220,.85)";
  ctx.textAlign = "center"; ctx.textBaseline = "middle";
  ctx.font = fDisplay(27);
  ctx.fillText("IMAGE COMING SOON", 0, -16);
  ctx.font = fBodyFont(600,15); ctx.fillStyle = "#8b8577";
  ctx.fillText("16:10 - " + spec.src, 0, 22);
  ctx.restore();
  ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
}
function barcode(ctx,x,y,w,h,seed){
  const r = createSeededRandom(seed);
  ctx.fillStyle = "#141210";
  let bx = x;
  ctx.fillRect(x,y,w*.06,h); ctx.fillRect(x+w-w*.06,y,w*.06,h);
  while(bx < x+w-20){
    const bw = 2 + (r()*5|0);
    const bh = h*(.5 + r()*.5);
    ctx.fillRect(bx, y+h-bh, bw, bh);
    bx += bw + (r()>.55 ? 3+r()*4 : 2);
  }
}
function drawStamp(ctx,cx,cy,scale,alpha,date){
  const r = createSeededRandom("stamp"+date);
  ctx.save();
  ctx.globalAlpha = clamp(alpha,0,1);
  ctx.translate(cx,cy); ctx.rotate(-0.24); ctx.scale(scale,scale);
  ctx.strokeStyle = "#c22b27"; ctx.fillStyle = "#c22b27";
  ctx.lineWidth = 6;
  ctx.beginPath(); ctx.arc(0,0,118,0,7); ctx.stroke();
  ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.arc(0,0,102,0,7); ctx.stroke();
  ctx.textAlign = "center"; ctx.textBaseline = "middle";
  ctx.font = fDisplay(68); ctx.fillText("ADMITTED", 0, -14);
  ctx.font = fBodyFont(700,20); ctx.fillText("LL PICTURES - APPROVED", 0, 34);
  ctx.font = fBodyFont(500,15); ctx.fillText(date, 0, 62);
  ctx.fillStyle = "rgba(194,43,39,.35)";
  for(let i=0;i<14;i++){
    const a0 = r()*Math.PI*2, rad = 96 + r()*74;
    ctx.save(); ctx.translate(Math.cos(a0)*rad, Math.sin(a0)*rad); ctx.rotate(r()*3);
    ctx.fillStyle = "rgba(194,43,39," + (.14 + r()*.25) + ")";
    ctx.fillRect(-4-r()*8, -2, 8+r()*14, 4+r()*4);
    ctx.restore();
  }
  ctx.restore();
  ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
}
/* Mesure le rectangle reellement couvert par un media dans une zone.
   IMAGE comme VIDEO : on prend son propre ratio et on l'inscrit entier dans la zone -
   le cadre du billet se pose alors SUR le media, sans deformation et sans decoupe.
   C'est ce rectangle que drawMedia renvoie pour caler le double cadre, les coins
   dores et la legende sur la taille reelle de l'image. */
function mediaFitRect(el, x, y, w, h){
  const sw = el.videoWidth || el.naturalWidth || el.width || 0;
  const sh = el.videoHeight || el.naturalHeight || el.height || 0;
  if(!sw || !sh) return {x, y, w, h};
  const s = Math.min(w/sw, h/sh);
  const dw = Math.round(sw*s), dh = Math.round(sh*s);
  return { x: x + Math.round((w-dw)/2), y: y + Math.round((h-dh)/2), w: dw, h: dh };
}
/* Dessine le media et RENVOIE le rectangle qu'il occupe reellement.
   IMAGE : jamais rognee. On l'inscrit entiere dans l'emplacement ; le double cadre,
   les coins dores et la legende se calent ensuite sur ce rectangle exact. Une photo
   16:10 dans un emplacement large garde donc TOUTE son image, avec le papier du
   billet de chaque cote. */
function drawMedia(t,ctx,x,y,w,h,spec,active){
  const info = getMedia(spec.src);
  const vid = (info.kind === "video" && info.el && info.el.readyState >= 2) ? info.el : null;
  let box = vid ? mediaFitRect(vid, x, y, w, h) : {x, y, w, h};
  if(vid){
    // video : cadre sombre = rectangle exact de la video (letterbox inutile, ratio respecte)
    ctx.fillStyle = "#0c0c0e"; ctx.fillRect(box.x, box.y, box.w, box.h);
    try{ ctx.drawImage(vid, box.x, box.y, box.w, box.h); }catch(_){ /* video not ready yet */ }
  } else {
    roundedRect(ctx,x,y,w,h,10); ctx.save(); ctx.clip();
    try{
      if(info.kind === "missing") drawReserved(ctx,x,y,w,h,spec,t.p.accent,active);
      else if(info.kind === "video"){
        ctx.fillStyle = "#0c0c0e"; ctx.fillRect(x,y,w,h); ctx.fillStyle = "#8b8577"; ctx.font = fBodyFont(600,15); ctx.fillText("LOADING...", x+20, y+h/2);
      }
      else if(info.el){
        box = mediaFitRect(info.el, x, y, w, h);
        ctx.drawImage(info.el, box.x, box.y, box.w, box.h);
      }
      else { ctx.fillStyle = "#101014"; ctx.fillRect(x,y,w,h); }
    }catch(e){
      ctx.fillStyle = "#101014"; ctx.fillRect(x,y,w,h);          // zone media jamais transparente
      ctx.fillStyle = "#8b8577"; ctx.font = fBodyFont(600,15);
      ctx.fillText("IMAGE COMING SOON", x+20, y+h/2);
      console.warn("[box office] drawMedia fallback for", spec.src, e);
    }
    ctx.restore();
  }
  ctx.strokeStyle = active ? t.p.accent : "rgba(20,18,16,.35)";
  ctx.lineWidth = active ? 3 : 1.5;
  roundedRect(ctx, box.x, box.y, box.w, box.h, vid ? 6 : 10); ctx.stroke();
  return box;
}

function drawFrontCore(t, active){
  const ctx = t.frontCtx, p = t.p, W = PW, H = PH;
  ctx.setTransform(1,0,0,1,0,0);
  ctx.clearRect(0,0,W,H);
  ctx.drawImage(PAPER_LIGHT, 0, 0);

  const ink = "#2e2518", faded = "#6b5d47", accent = p.accent;
  const seamX = 1216, cxm = 630;                 // perforation + centre du corps du billet

  // bandes de couleur sur les bords
  drawAccentBands(ctx, W, H, accent);

  // --- bandeau cinema ---
  /* Tailles de texte : le billet fait 1,5 m x 0,9 m en scene, sa texture ne grandit pas -
     c'est donc la police qui porte la lisibilite (surtout sur telephone, ou le billet en
     main ne fait que ~350 px de large). Chaque ligne est recalee juste apres. */
  fillCapsText(ctx,"LUDO CINEMA - OFFICIAL BOX OFFICE", W/2, 44, {px:23,color:ink,ls:6.5,align:"center",baseline:"middle"});
  ctx.font = fSerifFont(700,24); ctx.textAlign = "center"; ctx.fillStyle = accent;
  ctx.fillText("*", 98, 46); ctx.fillText("*", W-98, 46);
  /* Les filets du bandeau s'arretent a la perforation : plus rien au-dessus de
     "SOUVENIR" sur le talon, et le trait vient mourir sur la ligne de dechirure. */
  ctx.fillStyle = ink; ctx.fillRect(60,74,seamX-60,1.6);
  ctx.fillStyle = "rgba(46,37,24,.4)"; ctx.fillRect(86,80,seamX-86,1);
  fillCapsText(ctx,"No. " + p.num, 58, 118, {px:15,color:faded,ls:4.5});
  /* ancre a GAUCHE de la perforation (seamX-24), comme PROJECTIONIST'S STAMP au verso :
     a 14,5px la mention mesure 339px et, alignee a droite sur W-58, elle entamerait
     le talon de 13px - le filet de dechirure passerait dans les lettres. */
  fillCapsText(ctx,"ADMIT ONE - ONE SEAT PER TICKET", seamX-24, 118, {px:14.5,color:faded,ls:3,align:"right"});

  // --- titre du film (impression letterpress : double passe) ---
  ctx.font = fSerifFont(400,24); ctx.textAlign = "center"; ctx.fillStyle = accent;
  ctx.fillText("PRESENTS", cxm, 150);
  ctx.font = fSerifFont(700,82); ctx.textBaseline = "alphabetic";
  const tl = wrapLines(ctx, p.title.toUpperCase(), 1060);
  let ty = 222;
  tl.slice(0,2).forEach(l => {
    ctx.fillStyle = "rgba(46,37,24,.30)"; ctx.fillText(l, cxm+2.5, ty+3);   // passe en creux
    ctx.fillStyle = ink; ctx.fillText(l, cxm, ty);
    ty += 76;
  });
  ty -= 50;                                   // trait juste sous la derniere ligne du titre
  ctx.strokeStyle = "rgba(46,37,24,.5)"; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(cxm-170, ty); ctx.lineTo(cxm+170, ty); ctx.stroke();
  ctx.font = fSerifFont(700,21); ctx.fillStyle = accent;
  const dl = wrapLines(ctx, p.domain.toUpperCase(), 1060);
  ctx.fillText(dl[0]||"", cxm, ty+32);

  // --- photo facon " carte de lobby " (grand format) ---
  /* Le bloc titre a ete remonte et resserre pour donner ~50 px de hauteur
     supplementaire a la photo. Les deux formats restent lisibles : l'image gagne
     en presence sans que la typo touche le cadre. */
  const my = Math.min(ty + 52, 440), mh = 780 - my, mx = 60, mw = seamX - mx - 26;
  const box = drawMedia(t, ctx, mx, my, mw, mh, p.front, active);   // rectangle reel du media
  ctx.strokeStyle = "rgba(46,37,24,.5)"; ctx.lineWidth = 1.4;
  roundedRect(ctx, box.x-7, box.y-7, box.w+14, box.h+14, 4); ctx.stroke();      // double cadre
  photoCorners(ctx, box.x, box.y, box.w, box.h, "#b08a3e");            // coins dores
  fillCapsText(ctx, p.front.cap, box.x + box.w/2, box.y+box.h+26, {px:15,color:faded,ls:2,align:"center"});

  // --- mentions tapees (label + valeur, chaque valeur calee dans sa colonne) ---
  /* La legende respire sous le cadre ; les mentions descendent d'autant pour
     conserver le meme interligne au-dessus de DATE / SHOWTIME / ROOM / RANG. */
  const dd = my + mh + 50;
  const cell = [
    ["DATE", p.year],
    ["SHOWTIME", p.seance.replace(/^SHOWTIME\s*/i, "")],
    ["ROOM", ROOMS[p.id].replace(/^ROOM\s*/i, "")],
    ["RANG", "CODE - PLACE 00" + p.num],
  ];
  ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
  for(let i=0;i<4;i++){
    const x = 84 + i*266, vx = x+112;
    ctx.font = fBodyFont(600,17.5); ctx.fillStyle = ink;
    ctx.fillText(cell[i][0], x, dd);
    const dw = ctx.measureText(cell[i][0]).width;
    const lx0 = x+dw+10, lx1 = vx-14;
    if(lx1 > lx0){
      ctx.strokeStyle = "rgba(46,37,24,.35)"; ctx.setLineDash([2,5]); ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.moveTo(lx0, dd-4); ctx.lineTo(lx1, dd-4); ctx.stroke();
      ctx.setLineDash([]);
    }
    const maxW = (i < 3 ? 266 : 300) - 112 - 8;
    let vf = 17.5; ctx.font = fBodyFont(600,vf);
    const val = cell[i][1] || "";
    while(ctx.measureText(val).width > maxW && vf > 11.5){ vf -= .5; ctx.font = fBodyFont(600,vf); }
    ctx.fillStyle = ink; ctx.fillText(val, vx, dd);
  }

  // --- bas du corps : serie + code + prix ---
  perforation(ctx, 58, 842, seamX-116, "rgba(46,37,24,.5)");
  barcode(ctx, 76, 880, 250, 40, p.num);
  fillCapsText(ctx,"SERIES " + p.num + " - BOX OFFICE 01 - SEASON 25/26", 76, 936, {px:13,color:faded,ls:2});
  const pxb = seamX-320, pyb = 852;
  ctx.strokeStyle = ink; ctx.lineWidth = 2; ctx.setLineDash([7,5]);
  roundedRect(ctx,pxb,pyb,246,84,6); ctx.stroke(); ctx.setLineDash([]);
  fillCapsText(ctx,"PRICE", pxb+123, pyb+25, {px:14,color:faded,ls:4,align:"center",baseline:"middle"});
  ctx.font = fSerifFont(700,46); ctx.textAlign = "center"; ctx.fillStyle = ink;
  ctx.fillText("12 F", pxb+123, pyb+68);

  // --- talon a detacher ---
  ctx.font = fSerifFont(700,29); ctx.textAlign = "center";
  ctx.fillStyle = ink; ctx.fillText("MOVIE", seamX+176, 96);
  ctx.font = fSerifFont(700,34); ctx.fillText("EXPLORE", seamX+176, 160);
  ctx.font = fSerifFont(700,34); ctx.fillText("A NEW WORLD", seamX+176, 194);
  rosette(ctx, seamX+176, 264, 46, ink);
  fillCapsText(ctx,"PROJECT", seamX+176, 344, {px:13,color:faded,ls:3,align:"center"});
  ctx.font = fSerifFont(700,27); ctx.fillStyle = "#c22b27"; ctx.fillText("No. " + p.num, seamX+176, 400);
  barcode(ctx, seamX+104, 856, 132, 34, "S"+p.num);
  fillCapsText(ctx,"KEEP THIS", seamX+176, 928, {px:13,color:faded,ls:3,align:"center"});

  // --- dechirures + encoches ---
  drawTicketEdges(ctx, W, H, seamX, "rgba(46,37,24,.16)", "rgba(46,37,24,.55)");

  // --- tampon ---
  if(t.stampAnim > 0 || t.stampDone){
    const s = t.stampDone ? 1 : Math.min(1, t.stampAnim);
    const sc = t.stampDone ? 1 : 1 + 1.8*Math.pow(1-s,2);
    const al = t.stampDone ? 1 : Math.min(1, s*1.6);
    drawStamp(ctx, W*.60, 470, sc, al, "LL - 2026");
  }
  t.frontTex.needsUpdate = true;
}

function drawBackCore(t, active){
  const ctx = t.backCtx, p = t.p, W = PW, H = PH;
  ctx.setTransform(1,0,0,1,0,0);
  ctx.clearRect(0,0,W,H);
  ctx.drawImage(PAPER_INK, 0, 0);

  const cream = "#efe9dc", dim = "#8b8577", accent = p.accent;
  const seamX = 1216;

  drawAccentBands(ctx, W, H, accent);

  // --- en-tete verso ---
  fillCapsText(ctx,"TICKET - BACK",58,54,{px:19,color:cream,ls:4});
  fillCapsText(ctx,"No. " + p.num + " - LL",W-58,54,{px:17.5,color:cream,ls:3,align:"right"});
  dashedLine(ctx,58,84,seamX-116,"rgba(239,233,220,.22)",10,6);

  ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";   // ! remis a chaque redraw (sinon reste "center")
  ctx.font = fBodyFont(700,22); ctx.fillStyle = hexToRgba(accent,.95);
  ctx.fillText("No. " + p.num + " - " + p.domain.toUpperCase(), 58, 112);

  // --- titre + tagline ---
  ctx.font = fSerifFont(700,54); ctx.fillStyle = cream;
  const tl = wrapLines(ctx, p.title.toUpperCase(), 1040);
  let ty = 178;
  tl.slice(0,2).forEach(l => { ctx.fillText(l,58,ty); ty += 56; });
  ctx.font = fQuoteFont(24); ctx.fillStyle = accent;
  const ql = wrapLines(ctx, p.tagline, 1000);
  let qy = ty + 4;
  ql.slice(0,2).forEach(l => { ctx.fillText(l,58,qy); qy += 29; });

  // --- media verso (grand format) ---
  /* Meme gain qu'au recto : en-tete, titre et tagline se resserrent pour laisser
     ~40 px de hauteur en plus a la photo, sans collision avec le synopsis. */
  const my = Math.min(qy + 14, 400), mh = 646 - my, mx = 58, mw = seamX - mx - 24;
  const box = drawMedia(t, ctx, mx, my, mw, mh, p.back, active);   // rectangle reel du media
  ctx.strokeStyle = "rgba(239,233,220,.35)"; ctx.lineWidth = 1.4;
  roundedRect(ctx, box.x-7, box.y-7, box.w+14, box.h+14, 4); ctx.stroke();
  photoCorners(ctx, box.x, box.y, box.w, box.h, "#b08a3e");
  fillCapsText(ctx, p.back.cap, box.x + box.w/2, box.y+box.h+30, {px:15,color:dim,ls:2,align:"center"});

  // --- synopsis tape ---
  /* Meme regle qu'au recto : le synopsis suit la legende, donc il demarre plus bas ;
     l'interligne est resserre de 2 px pour que les 5 lignes extremes laissent encore
     respirer les pastilles et la perforation. */
  ctx.font = fBodyFont(500,22); ctx.fillStyle = "#d8d1c2";
  const bl = wrapLines(ctx, p.blurb, 1050);
  let dy = my + mh + 46 + 12;
  bl.slice(0,5).forEach(l => { ctx.fillText(l,58,dy); dy += 29; });

  // --- chips outils ---
  /* le plafond 830 (et non 856) garantit que les pastilles ne croisent jamais
     la perforation (y=878) ni le bas du synopsis, meme avec 5 lignes de texte */
  const chipsY = Math.min(dy + 20, 830), chipH = 38;
  let cx = 58;
  ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
  ctx.font = fBodyFont(700,15.5);
  for(const tool of p.tools){
    const tw = ctx.measureText(tool).width + 38;
    if(cx + tw > seamX - 210){ cx = 58; break; }
    ctx.fillStyle = hexToRgba(accent,.18);
    roundedRect(ctx,cx,chipsY,tw,chipH,chipH/2); ctx.fill();
    ctx.fillStyle = cream; ctx.fillText(tool, cx+19, chipsY+chipH/2+6);
    cx += tw + 10;
  }

  // --- tampon rond dateur ---
  dateStamp(ctx, seamX-112, 846, 46, p.year);

  // --- pied verso ---
  /* Le pied descend de 6 px (le maximum avant la dechirure basse) pour rester
     detache des pastilles, elles-memes poussees par le synopsis. */
  perforation(ctx, 58, 878, seamX-160, "rgba(239,233,220,.3)");
  barcode(ctx, 58, 912, 200, 36, "V"+p.num);
  fillCapsText(ctx,"PROJECTIONIST'S STAMP", seamX-40, 910, {px:15,color:accent,ls:2,align:"right"});
  fillCapsText(ctx,"ADMITTED - PASSED AT THE SCREENING", seamX-40, 934, {px:13,color:dim,ls:2,align:"right",weight:500});

  // --- talon verso ---
  ctx.font = fSerifFont(700,29); ctx.textAlign = "center";
  ctx.fillStyle = cream; ctx.fillText("MOVIE", seamX+176, 96);
  ctx.font = fSerifFont(700,34); ctx.fillText("EXPLORE", seamX+176, 160);
  ctx.font = fSerifFont(700,34); ctx.fillText("A NEW WORLD", seamX+176, 194);
  rosette(ctx, seamX+176, 264, 46, "rgba(239,233,220,.7)");
  fillCapsText(ctx,"PROJECT", seamX+176, 344, {px:13,color:dim,ls:3,align:"center"});
  ctx.font = fSerifFont(700,27); ctx.fillStyle = "#c97a72"; ctx.fillText("No. " + p.num, seamX+176, 400);
  barcode(ctx, seamX+104, 856, 132, 34, "V"+p.num);
  fillCapsText(ctx,"KEEP THIS", seamX+176, 928, {px:13,color:dim,ls:3,align:"center"});

  // --- dechirures + encoches ---
  drawTicketEdges(ctx, W, H, seamX, "rgba(0,0,0,.32)", "rgba(239,233,220,.35)");

  t.backTex.needsUpdate = true;
}

/* ======= Filet de securite : un billet n'est JAMAIS transparent ======= */
function paintFallback(t, front){
  const ctx = front ? t.frontCtx : t.backCtx;
  const tex = front ? t.frontTex : t.backTex;
  if(!ctx || !tex) return;
  try{
    const paper = front ? PAPER_LIGHT : PAPER_INK;
    const ink   = front ? "#2e2518" : "#efe9dc";
    const dim   = front ? "#6b5d47" : "#8b8577";
    const plain = front ? "#efe7d6" : "#16140f";
    ctx.setTransform(1,0,0,1,0,0);
    ctx.clearRect(0,0,PW,PH);
    if(paper) ctx.drawImage(paper,0,0); else { ctx.fillStyle = plain; ctx.fillRect(0,0,PW,PH); }
    ctx.fillStyle = t.p.accent; ctx.fillRect(0,0,9,PH);
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.font = "700 64px Archivo, Arial, sans-serif";
    ctx.fillStyle = ink; ctx.fillText("\u2605 " + (t.p.title || "").toUpperCase(), PW/2, PH/2 - 34);
    ctx.font = "600 26px Archivo, Arial, sans-serif";
    ctx.fillStyle = dim; ctx.fillText((t.p.domain || "").toUpperCase() + " - " + t.p.id, PW/2, PH/2 + 30);
    tex.needsUpdate = true;
  }catch(_){ /* last-resort fallback: nothing more to try */ }
}
function canvasOpaque(ctx){
  try{
    const d = ctx.getImageData(18,18,1,1).data;       // a droite de la bande accent (x<9)
    if(d[3] > 16) return true;
    const d2 = ctx.getImageData(PW-40, PH-20, 1, 1).data;
    return d2[3] > 16;
  }catch(_){ return true; }
}
function drawFront(t, active){
  try{ drawFrontCore(t, active); }
  catch(e){ console.warn("[box office] drawFront -> fallback", t.p.id, e); }
  if(!canvasOpaque(t.frontCtx)) paintFallback(t, true);   // filet : jamais transparent
}
function drawBack(t, active){
  try{ drawBackCore(t, active); }
  catch(e){ console.warn("[box office] drawBack -> fallback", t.p.id, e); }
  if(!canvasOpaque(t.backCtx)) paintFallback(t, false);   // filet : jamais transparent
}

/* ======= Diagnostic leger pour depannage a distance ======= */
window.__gui = () => {
  const probe = (ctx) => {
    if(!ctx) return "no 2d ctx";
    try{
      const d = ctx.getImageData(0,0,1,1).data;
      return d[3] > 8 ? "opaque" : "TRANSPARENT";
    }catch(e){ return "read blocked: " + e.name; }
  };
  return {
    medias: [...MEDIA.entries()].map(([s,m]) => s.split("/").pop() + (m.ok ? "="+m.kind : "=MISSING")),
    tickets: tickets.map(t => t.p.id + " -> face:" + probe(t.frontCtx) + " / dos:" + probe(t.backCtx)),
  };
};

/* ================== Three.js : scene ================== */
let renderer=null, scene=null, camera=null;
let dustPts = null, camBaseY = .72, camLookY = .47;
let boothCurtains = [];                       // rideaux : SEULS elements replaces aux bords de l'ecran
let boothPosters  = [];                       // affiches anglaises : mur du fond, MEME PLAN que le panneau des billets (fixes)
let boothClockHands = null;                   // aiguilles de l'horloge de la cabine (reglees sur l'heure locale)
let boothClock = null;                        // groupe de l'horloge (repositionne a gauche de la plaque BOX OFFICE)
let boothCesar = null;                        // statuette CESAR posee sur le comptoir (repositionnee a droite de l'affiche rouge)
let boothOscar = null;                        // statuette OSCAR posee juste a cote du Cesar, sur le comptoir
let boothTarifs = null;                       // pancarte des tarifs (chevalet sur le comptoir, repositionne par placeTarifs)
let awardTaken = null, awardDrag = false;   // trophee en main / en train d'etre tourne au pointeur
let awardNext = null;   // prise en attente : la statuette en main se RANGE d'abord, puis celle-ci monte
let tickets = [], hovered = null, dragging = false, lastDrag = null;
let heroActive = false, detailOpen = false, shake = 0;
let openPanel = null;                        // panneau plein ecran ouvert (ou null)
/* v7 - guichet " billet en main " : un seul billet vintage en scene, les autres rejoignent le rang quand on les tamponne */
let heroIdx = -1, stampedOrder = [], stampingLock = false;   // heroIdx = -1 -> aucun billet en main (pile au repos)
let pileHover = null, pileGlow = null;
const PILE_X = 0, PILE_Z = 1.46, PILE_Y = .014;             // pile de billets : centree sur le comptoir
// Cotes reelles : Cesar 29 cm (base 8 cm), Oscar 34,3 cm (socle noir 13,3 cm) :
// demi-largeur du Cesar et ecart entre les deux statuettes, au centimetre pres.
const CESAR_X0 = 1.85, CESAR_HALF_W = .050, AWARD_GAP = .17;   // statuettes (trophees) posees sur le comptoir ; x affine par placeCesar() ; demi-largeur du CESAR (base 9,2 cm -> ~4,6 cm, marge pour les bosses de la compression)
/* Cloche / rideaux : la cloche posee sur le comptoir OUVRE ou FERME les rideaux. Guichet ferme
   = plus aucune lumiere sauf sur la cloche, et les billets ne sont plus selectionnables. */
let boothsClosed = true, curtainT = 1;                        // le site DEMARRE rideau ferme (curtainT : 0 = ouvert, 1 = ferme) ; un clic sur la cloche ouvre le guichet
let curtainMatRef = null;                                     // materiau des rideaux (assombri a la fermeture)
let boothBell = null, bellHit = null, bellMatRef = null, bellLight = null, bellGlow = null;
let sceneAmbient = null, sceneDir = null, sceneRim = null, projBeam = null;
let boothLamp = null, boothWarm = null, boothLampLight = null;
const BELL_NDC = -.58;                                        // position ecran de la cloche (world x calcule par placeBell)
const BELL_TOP_Y = .12;                                       // hauteur du SOMMET de la cloche (dome .10 + bouton .082+.028)
const BELL_HINT_GAP = 24;                                     // px : espace entre la pointe de la fleche et le sommet de la cloche
const bellNdc = newV3();                               // scratch : position ecran de la cloche (invite " sonnez " )
/* projecteur du curseur : un faisceau doux + une tache de lumiere qui eclairent, en
   direct, l'endroit vise par le pointeur (billet compris). Eteint quand le guichet est ferme. */
const cursorNdc = { x:0, y:0 };                               // position du pointeur en NDC
let cursorOn = false, cursorFade = 0;                         // pointeur vu ? / fondu courant
let cursorSpot = null, cursorBeam = null, cursorGlow = null;  // spot, faisceau visible, tache posee
let cursorBeamMat = null, cursorGlowMat = null;
const cursorHit = newV3();                             // point eclaire (recalcule chaque frame)
const awardEnvMats = [];                                      // materiaux des trophees (reflets adoucis quand ferme)
let awardSpot = null;                                         // petite source douce qui revele l'or quand un trophee est pris
const awardSpotV = newV3();                            // scratch : position monde du trophee en main
/* ---- Gestes tactiles / souris ---------------------------------------------------------
   Un geste = UN doigt (souris comprise) suivi du pose au leve. On note ou il a commence,
   quand, et avec quel doigt : c'est ce qui permet de distinguer
     - un TAP   (deplacement minuscule) -> action (ouvrir une fiche, sonner, reposer...) ;
     - un SWIPE VERTICAL (coup de doigt franc) -> billet suivant (vers le haut) / precedent
       (vers le bas), la regle exacte etant isolee dans swipeDir().
   Sans cette distinction, un swipe qui commencait sur un billet epingle ouvrait sa fiche
   (clic accidentel), et un geste interrompu par le navigateur laissait l'appui " colle ". */
let swipeX = 0, swipeY = 0, swipeT = 0;
let gestureId = null;                        // identifiant du doigt suivi (un seul a la fois)
let pendingTap = null;                       // action a jouer au leve, SEULEMENT s'il n'y a pas eu de swipe
let tookAtDown = false;                      // l'appui a DEJA change de billet (sortie de pile, statuette...)
const TAP_RADIUS_PX = 34;                    // " marge de touche " : rayon en pixels autour d'un objet
let lastTouchAt = -1e9;                      // date du dernier evenement tactile (filtre les " mouse " fantomes)
const pointerNdc = { x:0, y:0 };
const raycaster = newRay();
const byId = {};

/* ================== GUICHET VINTAGE : textures canvas ================== */
function texCanvas(w,h,fn){
  const c = document.createElement("canvas"); c.width = w; c.height = h;
  fn(c.getContext("2d"), w, h); return c;
}
function canvasTex(c){
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = renderer ? renderer.capabilities.getMaxAnisotropy() : 4;
  return t;
}
function texWood(base,dk){
  // lambris : lames verticales + veinage
  return texCanvas(512,512,(g)=>{
    g.fillStyle = base; g.fillRect(0,0,512,512);
    const n = 7, sw = 512/n;
    for(let i=0;i<n;i++){
      g.fillStyle = i%2 ? "rgba(0,0,0,.10)" : "rgba(255,255,255,.035)";
      g.fillRect(i*sw,0,sw,512);
      g.fillStyle = dk; g.fillRect(i*sw,0,2,512);          // joint
      g.fillStyle = "rgba(255,255,255,.05)"; g.fillRect(i*sw,0,1.5,512);
    }
    g.globalAlpha = .10; g.strokeStyle = dk; g.lineWidth = 1;
    for(let i=0;i<240;i++){
      const x = Math.random()*512, y = Math.random()*512, len = 20+Math.random()*70;
      g.beginPath(); g.moveTo(x,y);
      g.bezierCurveTo(x+len*.3, y+Math.random()*4-2, x+len*.6, y+Math.random()*4-2, x+len, y+Math.random()*3-1.5);
      g.stroke();
    }
    g.globalAlpha = 1;
  });
}
function texCounterTop(){
  // plan du comptoir : bois fonce cire, veinage horizontal
  return texCanvas(1024,256,(g)=>{
    g.fillStyle = "#5c3a22"; g.fillRect(0,0,1024,256);
    g.globalAlpha = .14; g.strokeStyle = "#221407"; g.lineWidth = 2;
    for(let i=0;i<46;i++){
      const x = Math.random()*1024, y = Math.random()*256, len = 90+Math.random()*260;
      g.beginPath(); g.moveTo(x,y);
      g.bezierCurveTo(x+len*.3, y+Math.random()*7-3.5, x+len*.6, y+Math.random()*7-3.5, x+len, y+Math.random()*5-2.5);
      g.stroke();
    }
    g.globalAlpha = .28; g.fillStyle = "#000"; g.fillRect(0,0,1024,256);
    g.fillStyle = "rgba(255,236,200,.08)"; g.fillRect(0,0,1024,6);
  });
}
function texBrass(){
  // laiton raye, use
  return texCanvas(256,64,(g)=>{
    const grd = g.createLinearGradient(0,0,0,64);
    grd.addColorStop(0,"#8a6a2f"); grd.addColorStop(.25,"#c9a54e"); grd.addColorStop(.5,"#e6c46a");
    grd.addColorStop(.75,"#a3803a"); grd.addColorStop(1,"#5d451d");
    g.fillStyle = grd; g.fillRect(0,0,256,64);
    g.globalAlpha = .25; g.strokeStyle = "#3a2c12"; g.lineWidth = 1;
    for(let i=0;i<60;i++){
      const x = Math.random()*256, y = Math.random()*64;
      g.beginPath(); g.moveTo(x,y); g.lineTo(x+Math.random()*30-15, y+Math.random()*3-1.5); g.stroke();
    }
    g.globalAlpha = 1;
  });
}
function texTiles(){
  // damier de caisse ecaille
  return texCanvas(512,256,(g)=>{
    const cols = 8, rows = 4, tw = 512/cols, th = 256/rows;
    for(let r=0;r<rows;r++) for(let c=0;c<cols;c++){
      g.fillStyle = ((r+c)%2) ? "#1a1713" : "#d9cfba";
      g.fillRect(c*tw, r*th, tw, th);
    }
    for(let i=0;i<900;i++){
      g.fillStyle = Math.random()>.5 ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.09)";
      g.fillRect(Math.random()*512, Math.random()*256, 1.5, 1.5);
    }
  });
}
function texWainscot(){
  // lambris ecaille, listel or
  return texCanvas(512,340,(g)=>{
    const ph = 196;
    // haut sombre
    g.fillStyle = "#171310"; g.fillRect(0,0,512,340);
    // filet or entre haut et lambris
    g.fillStyle = "#c9a54e"; g.fillRect(0,ph-2,512,4);
    // lambris
    const panels = 5, pw = 512/panels;
    g.fillStyle = "#3d2816"; g.fillRect(0,0,512,ph);
    for(let i=0;i<panels;i++){
      g.fillStyle = i%2 ? "rgba(0,0,0,.10)" : "rgba(255,255,255,.03)";
      g.fillRect(i*pw,0,pw,ph);
      g.fillStyle = "#241607"; g.fillRect(i*pw,0,2,ph);
      g.strokeStyle = "rgba(0,0,0,.32)"; g.lineWidth = 2;
      g.strokeRect(i*pw+9,9,pw-18,ph-18);
    }
    g.fillStyle = "rgba(255,255,255,.04)";
    for(let i=0;i<panels;i++) g.fillRect(i*pw,0,1.5,ph);
    g.fillStyle = "#241607"; g.fillRect(0,ph,512,4);          // listel bas
    g.globalAlpha = .07; g.fillStyle = "#000";
    for(let i=0;i<300;i++) g.fillRect(Math.random()*512, Math.random()*ph, 2, 2);
    g.globalAlpha = 1;
  });
}
function texAwning(){
  // auvent raye rouge/creme a festons
  return texCanvas(1024,300,(g)=>{
    const stripes = 10, sw = 1024/stripes, sh = 210;
    for(let i=0;i<stripes;i++){
      g.fillStyle = i%2 ? "#b52824" : "#efe0c9";
      g.fillRect(i*sw,0,sw,sh);
    }
    g.fillStyle = "rgba(0,0,0,.22)";
    for(let i=0;i<stripes;i++) g.fillRect(i*sw,0,11,sh);
    g.fillStyle = "rgba(255,255,255,.12)";
    for(let i=0;i<stripes;i++) g.fillRect(i*sw+14,0,4,sh);
    // festons
    for(let i=0;i<stripes;i++){
      g.fillStyle = i%2 ? "#b52824" : "#efe0c9";
      g.beginPath(); g.arc(i*sw+sw/2, sh, sw/2+.6, 0, Math.PI); g.fill();
    }
    g.fillStyle = "rgba(0,0,0,.2)"; g.fillRect(0, sh, 1024, 3);
  });
}
function texSignSmall(){
  // plaque " BOX OFFICE "
  return texCanvas(1200,168,(g)=>{
    g.fillStyle = "#14110c"; roundedRect(g,6,6,1188,156,10); g.fill();
    g.strokeStyle = "#c9a54e"; g.lineWidth = 3; roundedRect(g,15,15,1170,138,7); g.stroke();
    g.fillStyle = "#e6c46a";
    g.font = '700 52px "Playfair Display", Georgia, serif';
    g.textAlign = "center"; g.textBaseline = "middle";
    g.fillText("B O X   O F F I C E", 600, 88);
  });
}
function texWindowGlass(){
  // vitre sombre avec reflets
  return texCanvas(256,256,(g)=>{
    g.fillStyle = "#0c1315"; g.fillRect(0,0,256,256);
    g.fillStyle = "rgba(190,230,255,.10)"; g.fillRect(22,30,64,4); g.fillRect(40,86,96,4);
    g.fillStyle = "rgba(190,230,255,.06)"; g.fillRect(150,44,42,4);
    g.fillStyle = "rgba(255,230,180,.05)"; g.fillRect(0,128,256,64);
  });
}
function texCurtain(){
  // velours rouge, plis verticaux + dorure au bas
  return texCanvas(256,512,(g)=>{
    g.fillStyle = "#6e1414"; g.fillRect(0,0,256,512);
    const folds = 7, fw = 256/folds;
    for(let i=0;i<folds;i++){
      const grd = g.createLinearGradient(i*fw,0,(i+1)*fw,0);
      grd.addColorStop(0,"rgba(0,0,0,.5)");
      grd.addColorStop(.45,"rgba(255,120,90,.20)");
      grd.addColorStop(1,"rgba(0,0,0,.5)");
      g.fillStyle = grd; g.fillRect(i*fw,0,fw,512);
    }
    g.globalAlpha = .09; g.fillStyle = "#000";
    for(let i=0;i<1400;i++) g.fillRect(Math.random()*256, Math.random()*512, 2, 2);
    g.globalAlpha = 1;
    g.fillStyle = "#a8842f"; g.fillRect(0,498,256,7);
    g.fillStyle = "rgba(0,0,0,.35)"; g.fillRect(0,505,256,7);
  });
}
function texTarifs(){
  // tableau des prix de la caisse (bandeau large, centre sur la facade du comptoir)
  return texCanvas(1024,260,(g)=>{
    g.fillStyle = "#14110c"; roundedRect(g,6,6,1012,248,14); g.fill();
    g.strokeStyle = "#c9a54e"; g.lineWidth = 5; roundedRect(g,18,18,988,224,9); g.stroke();
    g.textBaseline = "middle";
    g.textAlign = "center";
    g.fillStyle = "#e6c46a"; g.font = '700 52px "Playfair Display", Georgia, serif';
    g.fillText("PRICES", 512, 74);
    g.strokeStyle = "rgba(230,196,106,.5)"; g.lineWidth = 2;
    g.beginPath(); g.moveTo(60,116); g.lineTo(964,116); g.stroke();
    const rows = [
      ["FULL PRICE","12 F","STUDENT","8 F"],
      ["CHILD","6 F","LATE SHOW","10 F"],
    ];
    g.font = '600 34px Archivo, Arial, sans-serif';
    rows.forEach((r,i)=>{
      const y = 162 + i*62;
      g.textAlign = "left";  g.fillStyle = "#cfc7b4"; g.fillText(r[0], 66, y);
      g.textAlign = "right"; g.fillStyle = "#e6c46a"; g.fillText(r[1], 470, y);
      g.textAlign = "left";  g.fillStyle = "#cfc7b4"; g.fillText(r[2], 554, y);
      g.textAlign = "right"; g.fillStyle = "#e6c46a"; g.fillText(r[3], 958, y);
    });
  });
}
function texSidePoster(n){
  // affiche de cinema anglaise pour les cotes du guichet (deux variantes)
  return texCanvas(340,470,(g)=>{
    const pal = n ? ["#6d1414","#1a0808","#e7c96a"] : ["#123a5c","#08131f","#7fd0e7"];
    g.fillStyle = "#0f0b08"; g.fillRect(0,0,340,470);
    const grd = g.createLinearGradient(0,92,0,360);
    grd.addColorStop(0,pal[0]); grd.addColorStop(1,pal[1]);
    g.fillStyle = grd; g.fillRect(28,92,284,268);
    // faisceau de projecteur
    g.fillStyle = "rgba(255,255,255,.07)";
    g.beginPath(); g.moveTo(170,360); g.lineTo(74,92); g.lineTo(266,92); g.closePath(); g.fill();
    g.textAlign = "center"; g.textBaseline = "middle";
    g.fillStyle = "#e6c46a"; g.font = '700 26px "Playfair Display", Georgia, serif';
    g.fillText(n ? "COMING SOON" : "NOW SHOWING", 170, 45);
    g.fillStyle = "#f0e6d2"; g.font = '700 40px "Playfair Display", Georgia, serif';
    if(n){ g.fillText("POPSCORE", 170, 195);}
    else { g.fillText("LUDOVIC'S", 170, 195); g.fillText("PORTFOLIO", 170, 240); }
    g.fillStyle = pal[2]; g.font = '600 16px Archivo, Arial, sans-serif';
    g.fillText(n ? "A LUDOVIC LI FILM" : "LUDO CINEMA PRESENTS", 170, 300);
    g.fillStyle = "#e6c46a"; g.font = '600 20px Archivo, Arial, sans-serif';
    g.fillText("* * * * *", 170, 392);
    g.fillStyle = "#cdbfa4"; g.font = '600 14px Archivo, Arial, sans-serif';
    g.fillText(n ? "IN COLOUR - 2026" : "A FILM IN SIX REELS", 170, 432);
    g.strokeStyle = "#c9a54e"; g.lineWidth = 4; g.strokeRect(10,10,320,450);
  });
}
function texWallPlain(){
  // papier peint " hall de cinema " : bordeaux profond, fines rayures or, motif discret
  return texCanvas(512,512,(g)=>{
    const grd = g.createLinearGradient(0,0,0,512);
    grd.addColorStop(0,"#63262b"); grd.addColorStop(.6,"#4d1c21"); grd.addColorStop(1,"#331114");
    g.fillStyle = grd; g.fillRect(0,0,512,512);
    for(let i=0;i<8;i++){
      g.fillStyle = i%2 ? "rgba(230,196,106,.07)" : "rgba(0,0,0,.10)";
      g.fillRect(i*64,0,64,512);
    }
    // motif damasse tres discret
    g.globalAlpha = .05; g.fillStyle = "#e6c46a";
    for(let y=32;y<512;y+=96){
      for(let x=32;x<512;x+=96){
        g.beginPath(); g.arc(x,y,15,0,Math.PI*2); g.fill();
        g.beginPath(); g.arc(x+48,y+48,8,0,Math.PI*2); g.fill();
      }
    }
    g.globalAlpha = .05; g.fillStyle = "#000";
    for(let i=0;i<800;i++) g.fillRect(Math.random()*512,Math.random()*512,2,2);
    g.globalAlpha = 1;
  });
}
function texBoothWall(){
  // papier peint chaud de la cabine
  return texCanvas(512,512,(g)=>{
    const grd = g.createLinearGradient(0,0,0,512);
    grd.addColorStop(0,"#8a6236"); grd.addColorStop(.6,"#6d4a28"); grd.addColorStop(1,"#553a20");
    g.fillStyle = grd; g.fillRect(0,0,512,512);
    for(let i=0;i<20;i++){
      g.fillStyle = i%2 ? "rgba(255,225,170,.05)" : "rgba(0,0,0,.05)";
      g.fillRect(i*(512/20),0,512/20,512);
    }
    g.globalAlpha = .06; g.fillStyle = "#000";
    for(let i=0;i<700;i++) g.fillRect(Math.random()*512,Math.random()*512,2,2);
    g.globalAlpha = 1;
  });
}
/* Regle l'horloge de la cabine sur l'heure locale du navigateur (celle de la personne qui regarde). */
function updateClock(){
  if(!boothClockHands) return;
  const d = new Date();
  const sec = d.getSeconds();
  const min = d.getMinutes() + sec/60;
  const hr  = (d.getHours() % 12) + d.getMinutes()/60;
  boothClockHands.s.rotation.z = -sec * Math.PI/30;   // 360deg / 60 s
  boothClockHands.m.rotation.z = -min * Math.PI/30;   // 360/60 = 6deg par minute
  boothClockHands.h.rotation.z = -hr  * Math.PI/6;    // 360/12 = 30deg par heure
}

function makeBoothInterior(){
  // la cabine du guichet, vue a travers la fenetre de caisse
  const g = new THREE.Group();
  const mk = (geo, mat, x,y,z, rx=0,ry=0,rz=0) => {
    const m = new THREE.Mesh(geo, mat); m.position.set(x,y,z); m.rotation.set(rx,ry,rz); g.add(m); return m;
  };
  // materiaux (fog:false -> la cabine reste lisible malgre le brouillard du fond)
  const wallM  = new THREE.MeshStandardMaterial({map:canvasTex(texBoothWall()), roughness:.96, side:THREE.DoubleSide, fog:false});
  const floorM = new THREE.MeshStandardMaterial({map:canvasTex(texWood("#3a2413","#1a0f08")), roughness:.92, side:THREE.DoubleSide, fog:false});
  const brassM = new THREE.MeshStandardMaterial({map:canvasTex(texBrass()), roughness:.35, metalness:.85, fog:false});
  const darkM  = new THREE.MeshStandardMaterial({color:0x2a1e14, roughness:.85, fog:false});

  const X = 5.4, Z0 = -3.0, Z1 = -5.6, Y0 = -2.9, Y1 = 3.4;
  // coque de la cabine
  mk(new THREE.PlaneGeometry(X*2, Z0-Z1), floorM, 0, Y0, (Z0+Z1)/2, -Math.PI/2);
  mk(new THREE.PlaneGeometry(X*2, Z0-Z1), wallM,  0, Y1, (Z0+Z1)/2,  Math.PI/2);
  mk(new THREE.PlaneGeometry(Z0-Z1, Y1-Y0), wallM, -X, (Y0+Y1)/2, (Z0+Z1)/2, 0,  Math.PI/2);
  mk(new THREE.PlaneGeometry(Z0-Z1, Y1-Y0), wallM,  X, (Y0+Y1)/2, (Z0+Z1)/2, 0, -Math.PI/2);
  mk(new THREE.PlaneGeometry(X*2, Y1-Y0), wallM, 0, (Y0+Y1)/2, Z1);

  // --- panneau d'affichage : les billets tamponnes viennent s'y punaiser ---
  mk(new THREE.BoxGeometry(3.72,1.72,.03), brassM, 0, 1.55, -5.28);
  mk(new THREE.BoxGeometry(3.6,1.6,.06),  darkM,  0, 1.55, -5.24);

  // --- plaque BOX OFFICE + affiches anglaises : EXACTEMENT sur le meme plan que le
  //     panneau des billets tamponnes (le mur du fond). Ni cadre en bois, ni cadre
  //     metallique : la plaque et les affiches sont de simples surfaces plates, a plat
  //     sur le mur (leur lisere dore est dessine dans la texture). Rien ne bouge.
  const plaqueMat = new THREE.MeshBasicMaterial({map:canvasTex(texSignSmall()), transparent:true, fog:false});
  mk(new THREE.PlaneGeometry(3.6,.50), plaqueMat, 0, 2.72, -5.19);          // juste au-dessus du panneau

  boothPosters = [];
  [-1,1].forEach(sgn => {
    const pg = new THREE.Group();
    const img = new THREE.Mesh(new THREE.PlaneGeometry(1.05,1.45),            // lisere dore deja dans l'image
      new THREE.MeshBasicMaterial({map:canvasTex(texSidePoster(sgn > 0 ? 1 : 0)), fog:false}));
    pg.add(img);
    pg.position.set(sgn*2.51, 1.55, -5.19);        // de part et d'autre du panneau, meme plan
    g.add(pg);
    boothPosters.push(pg);
  });

  // horloge murale (cote gauche, au-dessus) - reglee sur l'heure LOCALE de la personne qui regarde.
  // Placee assez haut sur le fond pour ne pas etre masquee par l'affiche anglaise de gauche.
  const ck = new THREE.Group();
  const cface = new THREE.Mesh(new THREE.CircleGeometry(.3,24), new THREE.MeshBasicMaterial({color:0xf3ecda, fog:false}));
  cface.position.z = .03; ck.add(cface);
  ck.add(new THREE.Mesh(new THREE.TorusGeometry(.31,.03,10,28), brassM));
  // graduations : plus epaisses a 12 / 3 / 6 / 9
  for(let i=0;i<12;i++){
    const major = i % 3 === 0;
    const tick = new THREE.Mesh(new THREE.BoxGeometry(major ? .022 : .012, major ? .07 : .045, .012), darkM);
    const a = i*Math.PI/6;
    tick.position.set(Math.sin(a)*.245, Math.cos(a)*.245, .045);
    tick.rotation.z = -a; ck.add(tick);
  }
  const mkHand = (len,w) => {
    const geo = new THREE.BoxGeometry(w,len,.012); geo.translate(0,len/2,0);
    const m = new THREE.Mesh(geo, darkM); m.position.z = .055; ck.add(m); return m;
  };
  const clockHands = { h: mkHand(.185,.024), m: mkHand(.275,.016) };
  const secGeo = new THREE.BoxGeometry(.008,.30,.010); secGeo.translate(0,.15,0);
  clockHands.s = new THREE.Mesh(secGeo, new THREE.MeshBasicMaterial({color:0xb3271d, fog:false}));
  clockHands.s.position.z = .07; ck.add(clockHands.s);
  ck.add(new THREE.Mesh(new THREE.SphereGeometry(.026,10,8), darkM));
  ck.position.set(-3.40, 2.85, Z1+.06); g.add(ck);   // x affine par placeClock() selon la largeur d'ecran
  boothClock = ck;
  boothClockHands = clockHands;
  updateClock();

  // --- lumiere chaude de la cabine ---
  const warm = new THREE.PointLight(0xffc07a, 1.2, 11, 2);
  warm.position.set(0, 2.35, -4.0); g.add(warm);
  const lampLight = new THREE.PointLight(0xffd9a0, .8, 5, 2);
  lampLight.position.set(2.05, 1.55, -3.6); g.add(lampLight);
  boothWarm = warm; boothLampLight = lampLight;        // references : eteintes quand les rideaux sont fermes

  // --- la cabine remonte juste derriere la fenetre, a hauteur de comptoir ---
  g.position.set(0, -.95, 3.0);

  return g;
}
/* Environnement local (PMREM) reserve AUX deux trophees : sans carte d'environnement,
   un metal tres reflechissant (or, bronze poli) parait plat/mat. On fabrique une petite
   equirectangulaire chaude (ciel clair en haut, sol sombre en bas) -> reflets credibles.
   Repli silencieux si le PMREM echoue : on garde alors l'emisssif de secours. */
let awardEnv = null, awardEnvTried = false;
function getAwardEnv(){
  if(awardEnvTried) return awardEnv;
  awardEnvTried = true;
  try{
    if(!renderer) return null;
    const c = document.createElement("canvas"); c.width = 256; c.height = 128;
    const g = c.getContext("2d");
    const grd = g.createLinearGradient(0,0,0,128);
    grd.addColorStop(0,"#fff4dd"); grd.addColorStop(.45,"#cdab78");
    grd.addColorStop(.62,"#6d5436"); grd.addColorStop(1,"#241a12");
    g.fillStyle = grd; g.fillRect(0,0,256,128);
    const rg = g.createRadialGradient(72,32,2,72,32,48);   // petite source chaude (reflet vif)
    rg.addColorStop(0,"rgba(255,246,228,.95)"); rg.addColorStop(1,"rgba(255,246,228,0)");
    g.fillStyle = rg; g.fillRect(0,0,256,128);
    const tex = new THREE.CanvasTexture(c);
    tex.mapping = THREE.EquirectangularReflectionMapping;
    const pm = new THREE.PMREMGenerator(renderer);
    awardEnv = pm.fromEquirectangular(tex).texture;
    pm.dispose(); tex.dispose();
  }catch(e){ awardEnv = null; }
  return awardEnv;
}
/* ============ PLAQUES GRAVEES DES DEUX TROPHEES ============
   Les deux socles portent une VRAIE plaque de laiton gravee, posee sur une fine
   plaque geometrique solidaire du socle — jamais du texte flottant devant l'objet.
   La gravure elle-meme vient des RENDUS REELS (1080 x 240) dans assets/ :
     assets/plate-cesar.png      plaque au repos    (FROM CODE TO REALITY)
     assets/plate-cesar-lit.png  plaque eclairee   (meme plaque, source chaude)
     assets/plate-oscar.png      plaque au repos    (CREATIVE TECHNOLOGIST)
     assets/plate-oscar-lit.png  plaque eclairee
   Le rendu fait TOUT : laiton, cadre, gravure dans le creux, lumiere. Il sert a la
   fois d'albedo (map) et de relief (bumpMap) : dans le rendu la gravure est plus
   SOMBRE que le metal, elle tombe donc bien dans le creux sous la lumiere.
   Quand le trophee est pris en main, sa plaque passe en version " eclairee " : la
   gravure ressort sous la source studio (le relief, lui, reste sur le rendu calme —
   la profondeur de la gravure est la meme dans les deux images).
   Repli silencieux : si le PNG est absent (ou bloque), on peint la plaque au
   Canvas 2D comme avant (laiton + devise) — le site fonctionne toujours. */
const PLATE_FILES = {
  cesar:{rest:"assets/plate-cesar.png", lit:"assets/plate-cesar-lit.png"},
  oscar:{rest:"assets/plate-oscar.png", lit:"assets/plate-oscar-lit.png"}
};
const PLATE_IMG = {cesar:{rest:null, lit:null}, oscar:{rest:null, lit:null}};  // <img> prechargees
const PLATE_TEX = {cesar:{rest:null, lit:null}, oscar:{rest:null, lit:null}};  // textures three
/* Prechargement des rendus de plaque (comme les medias du site) : une image
   manquante ne bloque jamais le boot, elle tombe sur le repli Canvas 2D. */
function preloadPlateImg(src){
  return new Promise(res => {
    const im = new Image();
    im.onload  = () => res(im);
    im.onerror = () => res(null);
    setTimeout(() => res(null), 8000);      // garde-fou : reseau gele = repli, jamais bloque
    im.src = src;
  });
}
async function preloadPlates(){
  const jobs = [];
  for(const k in PLATE_FILES) for(const kind in PLATE_FILES[k])
    jobs.push(preloadPlateImg(PLATE_FILES[k][kind]).then(im => { PLATE_IMG[k][kind] = im; }));
  await Promise.all(jobs);
}
/* Texture three d'un rendu de plaque (mise en cache : une seule par image). */
function plateTexture(key, kind){
  const im = PLATE_IMG[key] && PLATE_IMG[key][kind];
  if(!im) return null;
  if(PLATE_TEX[key][kind]) return PLATE_TEX[key][kind];
  const t = new THREE.Texture(im);
  t.colorSpace  = THREE.SRGBColorSpace;
  t.anisotropy  = renderer ? renderer.capabilities.getMaxAnisotropy() : 4;
  t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.magFilter = THREE.LinearFilter;
  t.generateMipmaps = true;
  t.needsUpdate = true;
  PLATE_TEX[key][kind] = t;
  return t;
}
/* Une seule ligne gravee : la devise du trophée. AUCUN nom personnel (il ne
   figure que dans la section Contact du site). */
function plateCanvas(title, sub, w, h){
  return texCanvas(w, h, (c) => {
    // --- laiton poli : degrade vertical + fines stries de laiton tourne ---
    const g = c.createLinearGradient(0,0,0,h);
    g.addColorStop(0,  "#61471a"); g.addColorStop(.13, "#ad873c");
    g.addColorStop(.36, "#f0dc9f"); g.addColorStop(.52, "#cda55c");
    g.addColorStop(.76, "#8b692c"); g.addColorStop(1,  "#4b3711");
    c.fillStyle = g; c.fillRect(0,0,w,h);
    c.globalAlpha = .10;
    for(let i=0;i<170;i++){
      c.fillStyle = i % 2 ? "#ffffff" : "#241805";
      c.fillRect(0, (i + Math.random()*.7) * (h/170), w, Math.max(1, h/900));
    }
    c.globalAlpha = 1;
    // --- cadre grave : filet sombre puis filet clair (le relief du cadre) ---
    const bd = Math.max(3, h*.055);
    c.strokeStyle = "rgba(26,17,4,.95)"; c.lineWidth = bd;
    c.strokeRect(bd/2, bd/2, w-bd, h-bd);
    c.strokeStyle = "rgba(255,243,212,.32)"; c.lineWidth = Math.max(1, bd*.3);
    c.strokeRect(bd*1.45, bd*1.45, w-bd*2.9, h-bd*2.9);
    c.textAlign = "center"; c.textBaseline = "middle";
    const FONT = (px, wt) => wt + " " + px + "px 'Archivo', 'Arial Narrow', Arial, sans-serif";
    // --- gravure : lumiere au-dessus du creux, matiere sombre au fond, ombre sous le trait ---
    const engrave = (txt, y, size, weight) => {
      c.font = FONT(size, weight);
      c.fillStyle = "rgba(255,248,226,.95)"; c.fillText(txt, w/2, y - size*.075);
      c.fillStyle = "#1d1302";               c.fillText(txt, w/2, y);
      c.fillStyle = "rgba(0,0,0,.48)";       c.fillText(txt, w/2, y + size*.07);
    };
    // corps de lettre maximal qui tient dans maxW (jamais en dessous de min)
    const fitFont = (txt, start, maxW, weight, min) => {
      let s = Math.floor(start);
      do { s -= 1; c.font = FONT(s, weight); } while(c.measureText(txt).width > maxW && s > min);
      return s;
    };
    if(sub){
      /* --- plaque a DEUX lignes : le nom (ou le titre) domine, la signature dessous --- */
      const ft = fitFont(title, h*.34, w*.70, "800", 10);
      const fs = fitFont(sub,   h*.20, w*.84, "600", 8);
      // filet separateur grave, large comme la signature
      const lw = Math.min(w*.62, Math.max(c.measureText(sub).width + ft*2.2, w*.34));
      c.strokeStyle = "rgba(28,18,5,.55)"; c.lineWidth = Math.max(1, h*.013);
      c.beginPath(); c.moveTo(w/2-lw/2, h*.55); c.lineTo(w/2+lw/2, h*.55); c.stroke();
      c.strokeStyle = "rgba(255,243,212,.22)"; c.lineWidth = Math.max(1, h*.006);
      c.beginPath(); c.moveTo(w/2-lw/2, h*.55 + h*.014); c.lineTo(w/2+lw/2, h*.55 + h*.014); c.stroke();
      engrave(title, h*.345, ft, "800");
      engrave(sub,   h*.725, fs, "600");
    } else {
      /* --- plaque a UNE ligne : la devise seule se grave bien au centre, en plus
         grand (il n'y a pas de nom personnel sur les trophees) --- */
      const ft = fitFont(title, h*.42, w*.82, "800", 10);
      engrave(title, h*.51, ft, "800");
    }
  });
}
/* Materiau de plaque : le rendu PNG quand il est la, sinon la plaque peinte au
   Canvas 2D (repli). Dans les deux cas le MEME dessin sert de map et de bumpMap
   (le creux de la gravure capte la lumiere).
   side Simple (les plaques sont des volumes fermes, pas des plans flottants). */
function awardPlateMat(title, sub, w, h, key){
  const mat = new THREE.MeshPhysicalMaterial({
    map:null, bumpMap:null, bumpScale:.00055,
    metalness:.95, roughness:.30, envMapIntensity:.9,
    emissive:0x1a1206, emissiveIntensity:.22
  });
  const tex = key ? plateTexture(key, "rest") : null;
  if(tex){
    /* RENDU REEL : albedo + relief. La lumiere du studio est deja cuite dans
       l'image -> le metal est un peu moins metallique et un peu plus mat, sinon
       la gravure se perdrait dans les reflets de l'environnement. */
    mat.map = tex; mat.bumpMap = tex; mat.bumpScale = .00042;
    mat.metalness = .78; mat.roughness = .34; mat.envMapIntensity = .8;
    mat.emissive.setHex(0x140d04); mat.emissiveIntensity = .16;   // .setHex : emissive est une Color, pas un nombre
  }else{
    const cv = plateCanvas(title, sub, w, h);
    const map = new THREE.CanvasTexture(cv);
    map.colorSpace = THREE.SRGBColorSpace;
    map.anisotropy = renderer ? renderer.capabilities.getMaxAnisotropy() : 4;
    const bump = new THREE.CanvasTexture(cv);              // meme dessin, en relief
    mat.map = map; mat.bumpMap = bump;
  }
  mat.needsUpdate = true;
  mat.userData.plateKey = key || null;
  return mat;
}
/* Plaque de laiton en volume : un vrai morceau de metal grave pose sur le socle.
   - le Cesar a un socle CARRE -> plaque PLATE (boite fine, la face avant porte
     la gravure, les chants sont du laiton) ;
   - l'Oscar a un socle ROND -> plaque CINTREE (bandeau de cylindre) : une plaque
     plate " flotterait " de plus d'un centimetre devant la courbure du socle. */
function awardPlateFace(title, sub, key){
  return awardPlateMat(title, sub, 1080, 240, key);
}
function awardPlateMesh(title, sub, key){
  const face = awardPlateFace(title, sub, key);
  const chant = new THREE.MeshPhysicalMaterial({color:0xb08c46, metalness:.95, roughness:.34, envMapIntensity:.85, emissive:0x1a1206, emissiveIntensity:.20});
  const m = new THREE.Mesh(new THREE.BoxGeometry(.074, .0165, .0022),
    [chant, chant, chant, chant, face, chant]);          // index 4 = face +Z
  m.userData.faceMat = face;                             // le materiau de la gravure, pour l'eclairage
  return m;
}
function awardPlateCurved(title, sub, radius, key){
  const face = awardPlateFace(title, sub, key);
  face.side = THREE.DoubleSide;                          // bandeau ouvert : on voit l'exterieur
  const arc = .074, theta = arc/radius;                  // meme largeur gravee que la plaque plate
  return new THREE.Mesh(
    new THREE.CylinderGeometry(radius, radius, .0165, 44, 1, true, -theta/2, theta), face);
}
/* Version " eclairee " de la plaque (trophee pris en main) : l'albedo passe au
   rendu sous la source chaude, mais le RELIEF reste sur le rendu calme — la
   gravure a la meme profondeur dans les deux images. Sans rendu eclaire, la
   plaque garde son aspect courant. */
function setPlateLit(o, lit){
  const mat = o && o.userData.plateMat, key = o && o.userData.plateKey;
  if(!mat || !key) return;
  const tex = plateTexture(key, lit ? "lit" : "rest");
  if(!tex) return;
  mat.map = tex;
  mat.needsUpdate = true;
}
/* --- micro-variation de rugosite pour l'or et le bronze : sans elle, un metal
   parfaitement uniforme a l'air d'une couleur jaune, pas d'un vrai metal. --- */
let awardRoughCache = null;
function awardRoughTex(){
  if(awardRoughCache) return awardRoughCache;
  const cv = texCanvas(256,256,(c)=>{
    c.fillStyle = "#efefef"; c.fillRect(0,0,256,256);     // base ~.94
    for(let i=0;i<240;i++){
      const x = Math.random()*256, y = Math.random()*256, r = 5 + Math.random()*36;
      const v = Math.random() < .5 ? 255 : 186;
      const gd = c.createRadialGradient(x,y,0,x,y,r);
      gd.addColorStop(0, "rgba("+v+","+v+","+v+",.13)");
      gd.addColorStop(1, "rgba("+v+","+v+","+v+",0)");
      c.fillStyle = gd; c.beginPath(); c.arc(x,y,r,0,Math.PI*2); c.fill();
    }
  });
  awardRoughCache = new THREE.CanvasTexture(cv);
  awardRoughCache.wrapS = awardRoughCache.wrapT = THREE.RepeatWrapping;
  return awardRoughCache;
}
/* ============ Statuettes de recompense (posees sur le comptoir) ============
   CESAR : trophée des Cesar depuis 1977, cree par le sculpteur Cesar Baldaccini
   — une COMPRESSION d'ornementations de mobilier coulee en bronze dore a la
   fonderie Bocquel : 29 cm de haut, base de 8 x 8 cm, 3,6 kg, piece CREUSE a
   l'aspect de " buche doree " aux reliefs ecrases (voir makeCesarStatue).
   OSCAR : Academy Award of Merit, dessine par Cedric Gibbons et sculpte par
   George Stanley en 1927 — un chevalier Art Deco SANS VISAGE, bras ramenes
   devant le corps, tenant verticalement une epee de croise POINTE EN BAS,
   debout sur une bobine de film a CINQ RAYONS ; 34,3 cm, bronze plaque OR 24
   carats, socle noir laque de 13,3 cm (voir makeOscarStatue).
   Les deux socles portent une PLAQUE DE LAITON GRAVEE de leur devise (aucun nom
   personnel : il n'apparait que dans la section Contact du site) et les
   statuettes sont CLICABLES (prises " comme un billet " pour etre contemplees).
   Echelle : 1 unite = 1 metre. Aucun facteur d'echelle : le Cesar mesure .292
   et l'Oscar .343 dans le monde, comme les vrais. */
const AWARD_CAPSULE = HAS_THREE && !!(THREE.CapsuleGeometry);
function awardCapGeo(r, len){
  return AWARD_CAPSULE
    ? new THREE.CapsuleGeometry(r, Math.max(.0008, len), 8, 20)
    : new THREE.CylinderGeometry(r, r, Math.max(.0008, len), 20, 1, false);
}
/* Segment arrondi tendu de a vers b (epaule -> coude, coude -> poignet...) :
   les extremites sont hemispheriques, donc les raccords de membres sont
   fondus au lieu de montrer une tranche de cylindre. */
function awardLimb(a, b, r, mat){
  const dir = new THREE.Vector3().subVectors(b, a), len = dir.length();
  const m = new THREE.Mesh(awardCapGeo(r, len), mat);
  m.position.copy(a).addScaledVector(dir, .5);
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0), dir.clone().normalize());
  return m;
}
function makeOscarStatue(title, sub){
  const g = new THREE.Group();
  /* L'OSCAR REEL — specs officielles de l'Academie : 34,3 cm de haut, 3,9 kg,
     socle noir de 13,3 cm de diametre. Chevalier Art Deco " streamline "
     (Cedric Gibbons / George Stanley, 1927), SANS VISAGE, les DEUX BRAS RAMENES
     DEVANT le corps serrant a deux mains une EPEE DE CROISE tenue VERTICALEMENT,
     POINTE EN BAS, debout sur une BOBINE DE FILM A CINQ RAYONS (les cinq
     branches de l'Academie) — bronze plaque or 24 carats.
     Reperes verticaux (metres) : pieds .040 (dessus de la bobine) -> genou .128
     -> bassin .190 -> taille .213 -> poitrine .252 -> epaules .275 -> menton
     .303 -> couronne .343. La tete fait 4 cm : ~7,6 tetes, la proportion du
     vrai trophée (un corps stylise, jamais un mannequin low-poly). */
  const rough = awardRoughTex();
  /* emissif tres faible : filet de securite si l'environnement PMREM n'a pas pu
     etre cree (un metal pur sans envMap ne renvoie que des reflets speculaires
     et paraitrait presque noir). L'or garde ainsi son " corps " dore. */
  const gold  = new THREE.MeshPhysicalMaterial({color:0xf7d18a, metalness:1.0, roughness:.15, roughnessMap:rough, envMapIntensity:1.15, emissive:0x2a2008, emissiveIntensity:.18});
  const goldD = new THREE.MeshPhysicalMaterial({color:0xe4bd6a, metalness:1.0, roughness:.26, roughnessMap:rough, envMapIntensity:1.0,  emissive:0x241a06, emissiveIntensity:.20});
  const lacq  = new THREE.MeshPhysicalMaterial({color:0x09090b, metalness:.30, roughness:.24, clearcoat:1, clearcoatRoughness:.16, envMapIntensity:.85});
  const V  = (x,y,z) => new THREE.Vector3(x,y,z);
  const P2 = (x,y)   => new THREE.Vector2(x,y);
  const ball = (x,y,z,r,mat,sx=1,sy=1,sz=1) => {
    const m = new THREE.Mesh(new THREE.SphereGeometry(r,22,16), mat);
    m.position.set(x,y,z); m.scale.set(sx,sy,sz); g.add(m); return m;
  };

  /* ---- 1) SOCLE NOIR LAQUE : 13,3 cm de diametre, 2,8 cm de haut, chanfrein net ---- */
  const BR = .0665, BH = .028;
  g.add(new THREE.Mesh(new THREE.LatheGeometry([
    P2(.000, .000),
    P2(BR,   .000),
    P2(BR,   .0042),                    // petit conge au sol
    P2(BR,   .0245),
    P2(BR-.0022, BH),                   // chanfrein : arete propre
    P2(.000, BH)
  ], 72), lacq));
  // plaque gravee (nom + signature) : bandeau de laiton CINTRE sur la face avant du socle
  const oPlate = awardPlateCurved(title, sub, BR + .0010, "oscar");
  oPlate.position.set(0, BH*.47, 0); g.add(oPlate);
  g.userData.plateMat = oPlate.material;                 // plaque (gravure) : pour l'eclairage

  /* ---- 2) BOBINE DE FILM A CINQ RAYONS : or poli, un TROU pile face au client ---- */
  const RH = .012, R = .034, hubR = .0125, rimIn = .0275, ry = BH;
  const rim = new THREE.Mesh(new THREE.CylinderGeometry(R,R,RH,64,1,true), gold);
  rim.position.y = ry+RH/2; g.add(rim);                    // jante
  const ring = (ri,ro,y) => {                              // couronnes haute et basse
    const m = new THREE.Mesh(new THREE.RingGeometry(ri,ro,64), gold);
    m.rotation.x = -Math.PI/2; m.position.y = y; g.add(m); return m;
  };
  ring(rimIn, R, ry+.0008); ring(rimIn, R, ry+RH-.0008);
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(hubR,hubR,RH,32), goldD);
  hub.position.y = ry+RH/2; g.add(hub);                    // moyeu central
  const SEG = Math.PI*2/5, SPOKE = .52, Rmid = (hubR+rimIn)/2;
  for(let i=0;i<5;i++){
    const phi = Math.PI/2 + SEG/2 + i*SEG;                 // un TROU au centre de la face avant
    // (RingGeometry tournee de -PI/2 : son angle theta vaut -azimut)
    [ry+.0008, ry+RH-.0008].forEach(y => {
      const arc = new THREE.Mesh(new THREE.RingGeometry(hubR, rimIn, 16, 1, -phi - SPOKE/2, SPOKE), gold);
      arc.rotation.x = -Math.PI/2; arc.position.y = y; g.add(arc);
    });
    [phi - SPOKE/2, phi + SPOKE/2].forEach(pe => {         // parois radiales : elles closent les trous
      const w = new THREE.Mesh(new THREE.PlaneGeometry(rimIn-hubR, RH-.0016), gold);
      w.position.set(Rmid*Math.cos(pe), ry+RH/2, Rmid*Math.sin(pe));
      w.rotation.y = -pe; g.add(w);
    });
  }
  const innerWall = new THREE.Mesh(new THREE.CylinderGeometry(rimIn,rimIn,RH-.0016,48,1,true), gold);
  innerWall.position.y = ry+RH/2; g.add(innerWall);        // paroi interne : scelle le bord des trous
  ball(0, ry+RH+.0012, 0, .0042, goldD, 1, .55, 1);        // cabochon de l'axe

  /* ---- 3) LE CHEVALIER ---- */
  const f0 = ry + RH;                                      // .040 : dessus de la bobine
  [-1,1].forEach(s => {                                    // pieds : volumes aplatis, pointes vers l'avant
    const foot = new THREE.Mesh(new THREE.SphereGeometry(.0088,20,14), gold);
    foot.position.set(s*.0096, f0+.0042, .0062);
    foot.scale.set(.95,.60,1.95); g.add(foot);
  });
  [-1,1].forEach(s => {                                    // jambes : capsules, raccords fondus
    const hip   = V(s*.0128, f0+.1500, .0005),
          knee  = V(s*.0110, f0+.0880, .0025),
          ankle = V(s*.0097, f0+.0155, .0015);
    g.add(awardLimb(hip,  knee,  .0125, gold));            // cuisse
    g.add(awardLimb(knee, ankle, .0092, gold));            // jambe
    ball(s*.0110, f0+.0885, .0025, .0094, gold);           // rotule du genou
  });
  // bassin + fessiers (le nu Art Deco du vrai Oscar)
  ball(0, f0+.1500, -.0012, .0222, gold, 1.30, .82, .78);   // bassin (un peu aplati : la lame passe devant)
  [-1,1].forEach(s => ball(s*.0088, f0+.1285, -.0122, .0132, gold, 1.00, 1.02, .66));
  /* buste : volume de revolution ENTIEREMENT LISSE (le vrai Oscar est un nu
     " streamline " : aucun pectoral, aucun abdo saillant, aucun detail
     anatomique — le torse est un panneau doux qui fond dans des epaules nettes) */
  const torso = new THREE.Mesh(new THREE.LatheGeometry([
    P2(.000, f0+.1385),
    P2(.0190,f0+.1385),
    P2(.0262,f0+.1470),   // hanches
    P2(.0254,f0+.1570),
    P2(.0230,f0+.1680),
    P2(.0216,f0+.1760),   // taille
    P2(.0222,f0+.1860),
    P2(.0238,f0+.1970),
    P2(.0252,f0+.2080),   // poitrine
    P2(.0258,f0+.2180),
    P2(.0254,f0+.2260),
    P2(.0246,f0+.2340),   // ligne des epaules
    P2(.0205,f0+.2420),   // pentes des trapezes
    P2(.0126,f0+.2490),   // base du cou
    P2(.000, f0+.2530)
  ], 64), gold);
  torso.scale.z = .62; torso.position.z = .0008; g.add(torso);
  [-1,1].forEach(s => {                                    // trapezes : le cou se pose dans les epaules
    ball(s*.0132, f0+.2445, -.0012, .0086, gold, 1.15, .70, 1.0);
    ball(s*.0242, f0+.2345, .0015, .0102, gold, 1.05, .95, 1.0);   // deltoides
  });
  g.add(awardLimb(V(0, f0+.2395, .0005), V(0, f0+.2595, .0018), .0098, gold));  // cou
  // tete : ovale Art Deco, SANS VISAGE (un simple nez a peine suggere)
  const head = new THREE.Mesh(new THREE.LatheGeometry([
    P2(.0000,.0000),
    P2(.0072,.0010),
    P2(.0098,.0034),
    P2(.0116,.0074),
    P2(.0124,.0120),
    P2(.0126,.0168),
    P2(.0124,.0214),
    P2(.0116,.0264),
    P2(.0102,.0312),
    P2(.0076,.0358),
    P2(.0000,.0400)
  ], 48), gold);
  head.position.set(0, f0+.2635, .0012); head.rotation.x = -.03; head.scale.set(1, 1, 1.10);
  g.add(head);
  ball(0, f0+.2830, -.0060, .0106, gold, 1.0, .96, .80);   // masse occipitale
  const nose = new THREE.Mesh(new THREE.SphereGeometry(.0058,16,12), gold);
  nose.position.set(0, f0+.2790, .0150); nose.scale.set(.36,.86,.60); g.add(nose);

  /* ---- 4) BRAS : ramenes devant le corps, mains jointes sur la poignee de
     l'epee (le geste exact du trophée) ---- */
  [-1,1].forEach(s => {
    const sh = V(s*.0242, f0+.2350, .0015),
          el = V(s*.0234, f0+.1880, -.0018),
          wr = V(s*.0088, f0+.1610, .0160);
    g.add(awardLimb(sh, el, .0086, gold));                 // bras
    g.add(awardLimb(el, wr, .0060, gold));                 // avant-bras, ramene vers le milieu
    ball(s*.0234, f0+.1880, -.0018, .0076, gold);          // coude
    const hand = new THREE.Mesh(new THREE.SphereGeometry(.0092,18,14), gold);
    hand.position.set(s*.0042, s < 0 ? f0+.1555 : f0+.1645, .0180);
    hand.scale.set(.60,1.02,.64); g.add(hand);             // mains enroulees sur la poignee
  });

  /* ---- 5) L'EPEE DE CROISE : tenue VERTICALEMENT contre le torse, POINTE EN
     BAS ; la lame descend devant les jambes et vient finir sur la bobine,
     entre les pieds ---- */
  const sword = new THREE.Group();
  sword.position.set(0, f0+.1540, .0185);                  // origine = centre de la garde (lame CONTRE les jambes)
  sword.rotation.x = .085;
  g.add(sword);
  const guard = new THREE.Mesh(new THREE.BoxGeometry(.040,.0050,.0088), gold);
  sword.add(guard);                                        // garde en croix
  [-1,1].forEach(s => {
    const knob = new THREE.Mesh(new THREE.SphereGeometry(.0034,14,10), goldD);
    knob.position.set(s*.020, 0, 0); sword.add(knob);
  });
  const grip = new THREE.Mesh(new THREE.CylinderGeometry(.0040,.0044,.0240,20), goldD);
  grip.position.y = .0120; sword.add(grip);                // poignee a deux mains
  const pommel = new THREE.Mesh(new THREE.SphereGeometry(.0048,18,14), gold);
  pommel.position.y = .0262; sword.add(pommel);            // pommeau
  const blade = new THREE.Mesh(new THREE.CylinderGeometry(.0046,.0016,.128,4,1), gold);
  blade.position.y = -.0660; blade.scale.z = .42; sword.add(blade);   // lame a section losange
  const tip = new THREE.Mesh(new THREE.ConeGeometry(.0016,.010,4), gold);
  tip.rotation.x = Math.PI; tip.scale.z = .42;
  tip.position.y = -.1340; sword.add(tip);                 // pointe en bas, au-dessus de la bobine
  return g;
}
function makeCesarStatue(title, sub){
  const g = new THREE.Group();
  /* LE CESAR REEL — 29 cm de haut, base 8 x 8 cm, 3,6 kg, bronze dore (fonderie
     Bocquel). Ce n'est NI un bloc lisse NI une statuette figurative : c'est une
     COMPRESSION d'ornementations de mobilier (pieds, rosaces, moulures ecrases
     par la presse), une piece CREUSE dont le dessus est irregulier. On modele :
       - un socle noir a angles francs qui porte la plaque gravee ;
       - la compression : section en carre arrondi qui SE TORD et se courbe en
         montant, plis serres du metal froisse, facettes (pans de bronze),
         bosses d'ornements en saillie, sommet creux et dechiquete ;
       - des fragments d'ornements restes accroches (rosace, moulure, eclat) ;
       - une patine par couleur de sommet (or clair sur les aretes, brun au fond
         des plis) + rugosite variable. */
  const rough = awardRoughTex();
  const bronze = new THREE.MeshPhysicalMaterial({
    color:0xebb96d, metalness:.98, roughness:.24, roughnessMap:rough,
    vertexColors:true, envMapIntensity:1.0, emissive:0x180f04, emissiveIntensity:.20
  });
  // meme laiton, SANS couleurs de sommet : pour les ornements rapportes
  const bronzeSolid = new THREE.MeshPhysicalMaterial({
    color:0xd8ac63, metalness:.98, roughness:.27, roughnessMap:rough, envMapIntensity:1.0,
    emissive:0x1b1206, emissiveIntensity:.20
  });
  const noir = new THREE.MeshPhysicalMaterial({
    color:0x0a0a0c, metalness:.32, roughness:.27, clearcoat:1, clearcoatRoughness:.18, envMapIntensity:.85
  });

  /* --- socle noir : 8,8 cm (8 x 8 cm reels), angles francs, platine en retrait + plaque gravee --- */
  const BS = .088, BH = .020;
  const plinth = new THREE.Mesh(new THREE.BoxGeometry(BS, BH, BS), noir);
  plinth.position.y = BH/2; g.add(plinth);
  const cap = new THREE.Mesh(new THREE.BoxGeometry(BS-.007, .0032, BS-.007), noir);
  cap.position.y = BH + .0006; g.add(cap);
  const plate = awardPlateMesh(title, sub, "cesar");
  plate.position.set(0, BH*.48, BS/2 + .0006); g.add(plate);
  g.userData.plateMat = plate.userData.faceMat;          // plaque (gravure) : pour l'eclairage

  /* --- LA COMPRESSION : 26 cm au-dessus du socle (29,2 cm au total, crete du
     sommet comprise) ; section etroite — le vrai Cesar est un fuseau de ~5 cm
     de large, pas un bloc large : c'est ce qui fait sa silhouette. --- */
  const H = .260, HW = .0215;
  /* bosses d'ornements ecrasees : [azimut, hauteur 0..1, amplitude, largeur ang., hauteur rel.] */
  const BOSSES = [
    [ .30,.20,.0092,.36,.13], [1.25,.52,.0080,.28,.10], [2.10,.30,.0098,.32,.12],
    [2.95,.70,.0076,.28,.09], [-0.55,.62,.0086,.31,.11], [-1.60,.36,.0082,.34,.12],
    [-2.35,.80,.0070,.25,.08], [ 3.05,.12,.0074,.29,.08]
  ];
  /* CENTRAL : la forme du bloc, en fonction de l'azimut LOCAL (a0) et de la hauteur
     normalisee (t). Le maillage ET les ornements passent par ICI : une piece posee
     sur la surface ne peut donc pas flotter ni s'enterrer. */
  const shapeAt = (a0, t) => {
    const tw = .55*Math.sin(t*2.2 + .4) + .28*t;        // torsion en montant : asymetrie
    const a  = a0 + tw;
    let d = 0;
    d += .0090*Math.sin(a*2.3 + t*4.6 + .7)*Math.sin(Math.PI*Math.min(1, t*1.15));  // grandes ondes
    d += .0062*Math.sin(a*3.7 - t*3.2 + 1.9);           // masse qui se tord
    d += .0052*Math.sin(a*7.6 + t*1.4 + Math.sin(t*5.0)*.9);   // plis verticaux serres
    d += .0036*(Math.pow(Math.abs(Math.sin(a*4.1 - .6 + t*2.1)), .6) - .5);  // cretes du metal froisse
    d -= .0044*Math.pow(Math.abs(Math.sin(a*5.6 + .9)), 6)*(1 - .5*t);       // crevasses nettes
    d += .0018*Math.sin(a*15.5 + t*7.5);                // froissage fin
    for(const b of BOSSES){
      let da = a - b[0]; while(da > Math.PI) da -= 2*Math.PI; while(da < -Math.PI) da += 2*Math.PI;
      d += b[2]*Math.exp(-Math.pow(da/b[3],2) - Math.pow((t-b[1])/b[4],2));
    }
    const q = .0026;                                    // facettes : pans de bronze comprime
    d = d*.30 + Math.round(d/q)*q*.70;
    const pied = Math.max(0, Math.min(1, t/.10));       // le pied reste franc et carre
    d = Math.max(-.0085, Math.min(.0118, d)) * (.32 + .68*pied);
    // section : carre arrondi (n = 3.9) + flexion de l'axe
    const c0 = Math.cos(a0), s0 = Math.sin(a0);
    const sq = 1/Math.pow(Math.pow(Math.abs(c0),3.9) + Math.pow(Math.abs(s0),3.9), 1/3.9);
    const prof = HW*(1 + .13*Math.sin(Math.PI*Math.min(1, t*1.05)) - .07*t*t);
    const radius = prof*sq + d;
    let vy = t*H - H/2;
    if(t > .84){                                        // sommet dechiquete : les ornements debordent
      const u = (t-.84)/.16, sm = u*u*(3-2*u);
      vy += sm*(.0110*Math.sin(a*3.7 + 1.2) + .0056*Math.sin(a*7.3 - .5) - .0042);
    }
    return { x:c0*radius + .0068*Math.sin(t*2.5 + .3),  // la colonne se courbe en montant
             y:vy,
             z:s0*radius + .0038*Math.sin(t*1.9 - 1.1), d };
  };
  const geo = new THREE.CylinderGeometry(1, 1, H, 84, 56, false);
  const p = geo.attributes.position;
  const disp = new Float32Array(p.count), topHollow = new Uint8Array(p.count);
  let dMin = 1e9, dMax = -1e9;
  for(let i=0;i<p.count;i++){
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const t = (y + H/2)/H;
    if(Math.hypot(x, z) < 1e-6){                        // centres des capitons
      disp[i] = 0;
      if(y > 0){ p.setY(i, y - .020); topHollow[i] = 1; }   // dessus CREUX (piece coulee creuse)
      continue;
    }
    const s = shapeAt(Math.atan2(z, x), t);
    disp[i] = s.d; if(s.d < dMin) dMin = s.d; if(s.d > dMax) dMax = s.d;
    p.setXYZ(i, s.x, s.y, s.z);
  }
  // patine : or clair sur les aretes, brun chaud au fond des plis
  const col = new Float32Array(p.count*3), range = (dMax - dMin) || 1;
  for(let i=0;i<p.count;i++){
    let cr, cg, cb;
    if(topHollow[i]){ cr = .30; cg = .235; cb = .155; }
    else{
      const n = Math.max(0, Math.min(1, (disp[i] - dMin)/range));
      const s = .40 + .60*Math.pow(n, .9);
      cr = s; cg = s*(1 - .17*(1-n)); cb = s*(1 - .36*(1-n));
    }
    col[i*3] = cr; col[i*3+1] = cg; col[i*3+2] = cb;
  }
  geo.setAttribute("color", new THREE.Float32BufferAttribute(col, 3));
  geo.computeVertexNormals();
  const body = new THREE.Mesh(geo, bronze);
  body.position.y = BH + H/2;
  body.rotation.y = .55;                                // un pli saillant face au client (voir BODY_RY plus bas)
  g.add(body);

  /* --- fragments d'ornements restes en saillie : c'est CE detail qui identifie
     le Cesar (une compression de moulures, pas un bloc abstrait).
     On pose chaque piece SUR LA SURFACE REELLE : le rayon est recalcule a partir
     de la meme section (carre arrondi) que celle du bloc, sinon une piece posee
     a rayon constant " flotterait " devant les faces plates. --- */
  const BODY_RY = .55;                                  // rotation du corps : les ornements suivent son azimut
  const bodyC = BH + H/2;                               // centre vertical du bloc
  /* Pose une piece EXACTEMENT sur la surface : on demande le point a shapeAt
     (la meme fonction que celle qui deforme le maillage), puis on l'ecarte
     legerement vers l'exterieur pour que l'ornement depasse du bronze. */
  const place = (mesh, ang, yW, proud, rx, ry, rz, s) => {
    const t  = Math.max(0, Math.min(1, (yW - bodyC)/H + .5));
    const sp = shapeAt(ang, t);
    const cB = Math.cos(BODY_RY), sB = Math.sin(BODY_RY);
    const wx = sp.x*cB + sp.z*sB, wz = -sp.x*sB + sp.z*cB;   // point de surface, corps tourne
    const rw = Math.hypot(wx, wz) || 1e-6;
    const ux = wx/rw, uz = wz/rw;                            // normale sortante (radiale)
    const r = rw + (proud || 0);
    mesh.position.set(ux*r, bodyC + sp.y, uz*r);
    mesh.rotation.set(rx || 0, Math.atan2(ux, uz) + (ry || 0), rz || 0);   // +Z de la piece = normale sortante
    if(s) mesh.scale.setScalar(s);
    g.add(mesh); return mesh;
  };
  // 1) rosace ecrasee (extrusion d'une fleur a 8 lobes, biseautee) : vrai ExtrudeGeometry
  const floret = new THREE.Shape();
  for(let i=0;i<=16;i++){
    const ang = i/16*Math.PI*2, radius = (i % 2) ? .0030 : .0072;
    const px = Math.cos(ang)*radius, py = Math.sin(ang)*radius;
    if(i === 0) floret.moveTo(px, py); else floret.lineTo(px, py);
  }
  const floretGeo = new THREE.ExtrudeGeometry(floret, {depth:.0038, bevelEnabled:true, bevelSize:.0011, bevelThickness:.0011, bevelSegments:2, curveSegments:2});
  floretGeo.center();
  place(new THREE.Mesh(floretGeo, bronzeSolid), 1.75, BH+.148, .0016, .22, 0, .30);
  // 2) moulure tordue (anneau) encastree en haut du bloc
  const torus = new THREE.Mesh(new THREE.TorusGeometry(.0094,.0034,10,22,Math.PI*1.30), bronzeSolid);
  place(torus, .80, BH+.212, .0012, 0, 0, .30);
  // 3) eclat de cadre (petit bloc biseaute couche sur le flanc)
  const chip = new THREE.Mesh(new THREE.BoxGeometry(.018,.0066,.0054), bronzeSolid);
  place(chip, -1.90, BH+.070, .0018, 0, 0, .42);
  // 4) cabochon d'ornement (bosse ronde) et 5) petit lobe bas
  place(new THREE.Mesh(new THREE.SphereGeometry(.0082,20,14), bronzeSolid), 2.95, BH+.170, .0010, 0, 0, 0);
  place(new THREE.Mesh(new THREE.SphereGeometry(.0062,18,12), bronzeSolid), -2.55, BH+.044, .0018, 0, 0, 0);
  return g;
}
function makeVintageBooth(){
  const g = new THREE.Group();
  const mk = (geo, mat, x,y,z, rx=0,ry=0,rz=0) => {
    const m = new THREE.Mesh(geo, mat); m.position.set(x,y,z); m.rotation.set(rx,ry,rz); g.add(m); return m;
  };
  // --- materiaux vintage (bois fonces cires) ---
  const woodF = new THREE.MeshStandardMaterial({map:canvasTex(texWood("#452d1b","#241708")), roughness:.82, metalness:.08});
  woodF.map.repeat.set(3,1);
  const woodD = new THREE.MeshStandardMaterial({map:canvasTex(texWood("#33200f","#1a0f08")), roughness:.9, metalness:.05});
  const topM = new THREE.MeshStandardMaterial({map:canvasTex(texCounterTop()), roughness:.68, metalness:.12});
  topM.map.repeat.set(2,1);
  const brass = new THREE.MeshStandardMaterial({map:canvasTex(texBrass()), roughness:.32, metalness:.9});
  const tiles = new THREE.MeshStandardMaterial({map:canvasTex(texTiles()), roughness:.9, metalness:.02});
  tiles.map.wrapS = tiles.map.wrapT = THREE.RepeatWrapping; tiles.map.repeat.set(6,3);
  const wallPlainM = new THREE.MeshStandardMaterial({map:canvasTex(texWallPlain()), roughness:.95});
  wallPlainM.map.wrapS = wallPlainM.map.wrapT = THREE.RepeatWrapping; wallPlainM.map.repeat.set(4,1);
  const wainscotM = new THREE.MeshStandardMaterial({map:canvasTex(texWainscot()), roughness:.88});
  wainscotM.map.repeat.set(4,1);

  // --- sol en damier ---
  mk(new THREE.PlaneGeometry(60,26), tiles, 0,-2.92,0, -Math.PI/2);

  // --- ensemble " mur + fenetre " rapproche du client ---
  // (mur en z = 0 ; on regarde la billetterie droit devant, colle au comptoir)
  const back = new THREE.Group();
  back.position.z = 2.98;
  g.add(back);
  const mkb = (geo, mat, x,y,z, rx=0,ry=0,rz=0) => {
    const m = new THREE.Mesh(geo, mat); m.position.set(x,y,z); m.rotation.set(rx,ry,rz); back.add(m); return m;
  };

  // --- mur du fond perce d'une TRES grande fenetre de caisse (elle remplit l'ecran) ---
  const WZ = -2.98;                              // z local du mur (-> z monde 0)
  // Ouverture volontairement plus large que l'ecran sur TOUS les formats (y compris 21:9) :
  // sinon un bandeau de mur nu apparaitrait sur les cotes des ecrans tres larges.
  const opW = 4.30, opB = -.60, opT = 2.90;      // demi-largeur, bas, haut
  const winW = 5.8, winH = opT-opB, winY = (opB+opT)/2;   // cadre bois + vitre : toujours hors champ
  mkb(new THREE.PlaneGeometry(20-opW, 10.5), wallPlainM, -(opW+20)/2, 3.0, WZ);
  mkb(new THREE.PlaneGeometry(20-opW, 10.5), wallPlainM,  (opW+20)/2, 3.0, WZ);
  mkb(new THREE.PlaneGeometry(opW*2, 8.45-opT), wallPlainM, 0, (opT+8.45)/2, WZ);
  mkb(new THREE.PlaneGeometry(opW*2, opB+3.05), wallPlainM, 0, (opB-3.05)/2, WZ);
  // lambris bas (s'arrete juste sous la fenetre)
  mkb(new THREE.PlaneGeometry(40,3.7), wainscotM, 0, opB-3.7/2, WZ+.012);
  mkb(new THREE.BoxGeometry(40,.05,.02), brass, 0, opB-.02, WZ+.02);   // filet or au-dessus du lambris

  // --- fenetre de caisse ---
  const glassM = new THREE.MeshBasicMaterial({map:canvasTex(texWindowGlass()), transparent:true, opacity:.10, depthWrite:false});
  mkb(new THREE.PlaneGeometry(winW-.04, winH-.04), glassM, 0, winY, WZ+.03);
  // cadre bois/laiton
  mkb(new THREE.BoxGeometry(.14,winH+.2,.2), woodF, -(winW/2+.07), winY, WZ+.02);
  mkb(new THREE.BoxGeometry(.14,winH+.2,.2), woodF,  (winW/2+.07), winY, WZ+.02);
  mkb(new THREE.BoxGeometry(winW+.14,.16,.2), woodD, 0, winY+winH/2-.06, WZ+.02);
  mkb(new THREE.BoxGeometry(winW+.14,.16,.2), woodD, 0, winY-winH/2-.08, WZ+.02);
  mkb(new THREE.BoxGeometry(winW+.40,.10,.40), woodD, 0, winY-winH/2-.18, WZ+.04);   // appui
  mkb(new THREE.BoxGeometry(winW+.46,.10,.40), brass, 0, winY-winH/2-.09, WZ+.03);   // chant laiton
  // --- fenetre ouverte : plus de barreaux, la cabine reste bien visible ---
  // (la plaque BOX OFFICE a rejoint le MUR DU FOND, sur le meme plan que le panneau
  //  des billets tamponnes -> voir makeBoothInterior : plus de cadre en bois, rien ne bouge)
  // --- auvent raye : bandeau couvrant TOUTE la largeur, DANS la fenetre ---
  const awning = new THREE.Mesh(new THREE.PlaneGeometry(12,.9),
    new THREE.MeshBasicMaterial({map:canvasTex(texAwning()), transparent:true, side:THREE.DoubleSide}));
  awning.material.map.wrapS = THREE.RepeatWrapping;
  awning.material.map.repeat.set(4,1);
  awning.position.set(0, 2.27, WZ+.22); awning.rotation.x = -.14; back.add(awning);

  // halo lumineux reutilisable (lampes, guirlande)
  const glowT = texCanvas(64,64,(c)=>{
    const vg = c.createRadialGradient(32,32,2,32,32,30);
    vg.addColorStop(0,"rgba(255,214,150,.85)"); vg.addColorStop(.5,"rgba(255,190,110,.28)"); vg.addColorStop(1,"rgba(255,190,110,0)");
    c.fillStyle = vg; c.fillRect(0,0,64,64);
  });
  const glowM = new THREE.MeshBasicMaterial({map:canvasTex(glowT), transparent:true, depthWrite:false, blending:THREE.AdditiveBlending});
  const lamp = new THREE.PointLight(0xffc07a, 1.05, 9, 2);
  lamp.position.set(0, 1.9, -1.4); g.add(lamp);
  boothLamp = lamp;                                   // reference : intensite pilote par les rideaux

  // --- guirlande d'ampoules facon marquee, au bord bas de l'auvent (pleine largeur) ---
  const bulbMat = new THREE.MeshBasicMaterial({color:0xffe3ac});
  const nB = 25;
  for(let i=0;i<nB;i++){
    const bx = -3.8 + i*(7.6/(nB-1));
    const by = 1.79 + Math.cos((bx/3.8)*(Math.PI/2))*.03;
    mkb(new THREE.SphereGeometry(.04,10,8), bulbMat, bx, by, WZ+.32);
    mkb(new THREE.PlaneGeometry(.30,.30), glowM, bx, by, WZ+.31);
  }

  // --- rideaux de velours rouge : SEULS elements laisses SUR LES COTES,
  //     plaques contre les bords de l'ecran (repositionnes dans placeFacade) ---
  const curtainMat = new THREE.MeshBasicMaterial({map:canvasTex(texCurtain()), side:THREE.DoubleSide});
  curtainMatRef = curtainMat;
  boothCurtains = [];
  [-1,1].forEach(sgn => {
    const c = new THREE.Mesh(new THREE.PlaneGeometry(.7, 3.6), curtainMat);
    c.position.set(sgn*2.32, .55, WZ+.16);
    c.userData.sgn = sgn;
    back.add(c);
    boothCurtains.push(c);
  });

  // --- pancarte des tarifs : petit chevalet pose SUR le comptoir (cote droit) ---
  const tb = new THREE.Group();
  const tbFrame = new THREE.Mesh(new THREE.BoxGeometry(.94,.26,.05), brass);
  tbFrame.position.z = -.015; tb.add(tbFrame);
  const tbFace = new THREE.Mesh(new THREE.PlaneGeometry(.86,.218),
    new THREE.MeshBasicMaterial({map:canvasTex(texTarifs()), transparent:true}));
  tbFace.position.z = .015; tb.add(tbFace);
  tb.position.set(1.00, .14, .90); tb.rotation.x = -.20; g.add(tb);   // posee sur le comptoir (surface y = 0)
  boothTarifs = tb;                                                   // x affine par placeTarifs() selon la largeur d'ecran

  // --- statuettes de recompense posees SUR le comptoir, a DROITE de l'affiche rouge :
  //     le CESAR (29,2 cm : socle 2 cm + compression 27,2 cm, base 8 x 8 cm) et,
  //     juste a cote, l'OSCAR (34,3 cm, socle noir de 13,3 cm) : proportions reelles
  //     des deux trophees, aucun facteur d'echelle. Les deux sont contemplatives :
  //     un clic les prend " comme un billet " pour lire la PLAQUE DE LAITON GRAVEE
  //     de leur socle (leur devise, aucun nom personnel), aucun lien sortant. ---
  boothCesar = makeCesarStatue("FROM CODE TO REALITY");
  const cesarPlate = boothCesar.userData.plateMat;       // materiau de la plaque (gravure)
  boothCesar.position.set(CESAR_X0, 0, .45);          // x affine par placeCesar() selon la largeur d'ecran
  boothCesar.userData = { home:{x:CESAR_X0, y:0, z:.45, ry:0, scale:1}, at:0,
    hLocal:.292, wLocal:.100, dy:0, dx:0, dyc:0, dxc:0, label:"CESAR",
    plateKey:"cesar", plateMat:cesarPlate, plateLit:false };
  g.add(boothCesar);
  boothOscar = makeOscarStatue("CREATIVE TECHNOLOGIST");
  const oscarPlate = boothOscar.userData.plateMat;
  boothOscar.position.set(CESAR_X0 - AWARD_GAP, 0, .45);
  boothOscar.userData = { home:{x:CESAR_X0 - AWARD_GAP, y:0, z:.45, ry:0, scale:1}, at:0,
    hLocal:.343, wLocal:.136, dy:0, dx:0, dyc:0, dxc:0, label:"OSCAR",
    plateKey:"oscar", plateMat:oscarPlate, plateLit:false };
  g.add(boothOscar);
  // reflets reels sur l'or et le bronze des deux trophees (repli : emissif de secours).
  // Attention : les plaques de laiton sont des boites a 6 materiaux -> on parcourt les tableaux.
  const awardRefl = getAwardEnv();
  if(awardRefl) [boothCesar, boothOscar].forEach(o => o.traverse(n => {
    if(!n.isMesh) return;
    const list = Array.isArray(n.material) ? n.material : [n.material];
    for(const m of list){
      if(!m || awardEnvMats.includes(m)) continue;
      // on MEMORISE l'intensite propre du materiau (l'or reflechit plus que le laque noir)
      m.userData.envI = (typeof m.envMapIntensity === "number") ? m.envMapIntensity : .95;
      m.envMap = awardRefl; m.needsUpdate = true;
      awardEnvMats.push(m);
    }
  }));

  // (les affiches anglaises ont rejoint le MUR DU FOND, sur le meme plan que le panneau
  //  des billets tamponnes -> voir makeBoothInterior : plus de cadre en bois, rien ne bouge)

  // --- cloche de comptoir en laiton : CLIC = ouvrir / fermer les rideaux ---
  bellMatRef = new THREE.MeshStandardMaterial({map:canvasTex(texBrass()), roughness:.30, metalness:.92});
  boothBell = new THREE.Group();
  const bellDome = new THREE.Mesh(new THREE.SphereGeometry(.10,18,14,0,Math.PI*2,0,Math.PI/2), bellMatRef);
  const bellKnob = new THREE.Mesh(new THREE.SphereGeometry(.028,12,10), bellMatRef);
  bellKnob.position.y = .082; boothBell.add(bellDome, bellKnob);
  // cible de clic large et invisible : la cloche reste facile a toucher (surtout sur mobile)
  bellHit = new THREE.Mesh(new THREE.SphereGeometry(.28,12,10),
    new THREE.MeshBasicMaterial({transparent:true, opacity:0, depthWrite:false}));
  bellHit.position.y = .06; boothBell.add(bellHit);
  // halo chaud pose sur le comptoir : seule " lumiere " visible une fois le guichet ferme
  const bellGlowTex = texCanvas(128,128,(c)=>{
    const gg = c.createRadialGradient(64,64,3,64,64,62);
    gg.addColorStop(0,"rgba(255,228,175,1)");
    gg.addColorStop(.35,"rgba(255,196,110,.5)");
    gg.addColorStop(1,"rgba(255,190,110,0)");
    c.fillStyle = gg; c.fillRect(0,0,128,128);
  });
  bellGlow = new THREE.Mesh(new THREE.PlaneGeometry(1.0,1.0),
    new THREE.MeshBasicMaterial({map:canvasTex(bellGlowTex), transparent:true, opacity:0, depthWrite:false, blending:THREE.AdditiveBlending}));
  bellGlow.rotation.x = -Math.PI/2; bellGlow.position.y = .006; boothBell.add(bellGlow);
  bellLight = new THREE.PointLight(0xffcf94, 0, 4.5, 2);
  bellLight.position.set(0, .36, .16); boothBell.add(bellLight);
  boothBell.position.set(-1.5, 0, 1.45);              // x affine par placeBell() selon la largeur d'ecran
  g.add(boothBell);

  // --- comptoir en bois peu profond (on est penche dessus) ---
  mk(new THREE.BoxGeometry(30,.36,1.76), woodD, 0,-2.72,1.10);        // pietement
  mk(new THREE.BoxGeometry(30,2.70,1.70), woodF, 0,-1.57,1.10);       // facade lambris
  mk(new THREE.BoxGeometry(30,.22,1.80), topM, 0,-.11,1.10);          // plan (surface y = 0)
  mk(new THREE.BoxGeometry(30,.06,1.86), brass, 0,-.19,1.10);         // baguette laiton
  mk(new THREE.BoxGeometry(30,.05,1.76), brass, 0,-2.55,1.10);        // plinthe laiton
  return g;
}

/* halo doux sous la pile : met la pile de billets en evidence tant qu'aucun n'est en main */
function makePileGlow(){
  const tex = texCanvas(256,256,(g)=>{
    const gg = g.createRadialGradient(128,128,8,128,128,126);
    gg.addColorStop(0,  "rgba(255,240,200,1)");
    gg.addColorStop(.30,"rgba(255,214,140,.55)");
    gg.addColorStop(.62,"rgba(255,201,120,.22)");
    gg.addColorStop(1,  "rgba(255,201,120,0)");
    g.fillStyle = gg; g.fillRect(0,0,256,256);
  });
  const mat = new THREE.MeshBasicMaterial({
    map: canvasTex(tex), transparent:true, opacity:0, depthWrite:false, blending:THREE.AdditiveBlending
  });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(1.95,1.45), mat);
  m.rotation.x = -Math.PI/2;
  m.position.set(PILE_X, PILE_Y - .013, PILE_Z);   // pose sur le comptoir, sous la pile
  m.renderOrder = 1;
  return m;
}

function buildScene(){
  let ok = true;
  try{ renderer = new THREE.WebGLRenderer({canvas:stage, antialias:true, powerPreference:"high-performance"}); }
  catch(e){ ok = false; console.warn("WebGL indisponible :", e); }
  if(!ok || !renderer.getContext()){ noWebgl.hidden = false; return; }
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  const v0 = viewSize();
  renderer.setSize(v0.w, v0.h, false);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NoToneMapping;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x140f0c);      // brun chaud " billetterie "
  scene.fog = new THREE.FogExp2(0x140f0c, 0.045);

  camera = new THREE.PerspectiveCamera(46, viewAspect(), .1, 80);
  camera.position.set(0,.72,3.6);
  camera.lookAt(0,camLookY,0);

  sceneAmbient = new THREE.AmbientLight(0xfff3e2, .88); scene.add(sceneAmbient);
  sceneDir = new THREE.DirectionalLight(0xffe8d0, .9); sceneDir.position.set(-4,6,5); scene.add(sceneDir);
  sceneRim = new THREE.DirectionalLight(0x7799ff, .3); sceneRim.position.set(4,2,-6); scene.add(sceneRim);

  // --- petite source " studio " dediee aux statuettes : quand on prend un trophee, elle
  //     s'allume en douceur devant lui pour reveler les volumes d'or (aucune ombre portee,
  //     aucun halo : juste de quoi lire les plis du bronze et le poli du chevalier). ---
  awardSpot = new THREE.SpotLight(0xfff2d8, 0, 3.2, .52, .85, 2);
  awardSpot.position.set(0, 1.4, 2.2);
  awardSpot.visible = false;
  scene.add(awardSpot); scene.add(awardSpot.target);

  // guichet vintage (fenetre de caisse, auvent, lambris, comptoir)
  scene.add(makeVintageBooth());

  // la cabine du guichet, visible a travers la fenetre de caisse
  scene.add(makeBoothInterior());

  // faisceau projecteur
  const beam = new THREE.Mesh(new THREE.ConeGeometry(5.2,10,48,1,true),
    new THREE.MeshBasicMaterial({color:0xffe6bd, transparent:true, opacity:.05, blending:THREE.AdditiveBlending, depthWrite:false, side:THREE.DoubleSide}));
  beam.position.set(0,4.8,1); beam.rotation.x = .03; scene.add(beam);
  projBeam = beam;                                     // reference : faisceau eteint quand le guichet est ferme

  // --- projecteur du curseur : un faisceau doux qui suit le pointeur, un vrai SpotLight
  //     qui eclaire la ou on vise, et une tache de lumiere posee SUR la surface (comptoir,
  //     mur... ou le billet sous le curseur). ---
  cursorSpot = new THREE.SpotLight(0xffe4bc, 0, 0, .19, .9, 2);
  scene.add(cursorSpot); scene.add(cursorSpot.target);
  // faisceau : UNE seule face douce, tournee vers la camera (aucune arete dure).
  // La texture dessine le cone : etroit en haut (la source), large et estompe en bas.
  const shaftTex = texCanvas(256,256,(c,w,h)=>{
    for(let y=0;y<h;y++){
      const k = y/(h-1);                                   // 0 = source, 1 = point vise
      const half = (w*.5) * (.05 + .95*Math.pow(k,.9));    // le faisceau s'ouvre vers le bas
      const a = .52 - .32*Math.pow(k,1.1);                 // dense a la source, plus doux au sol
      const lg = c.createLinearGradient(w/2-half, 0, w/2+half, 0);
      lg.addColorStop(0,  "rgba(255,236,198,0)");
      lg.addColorStop(.5, "rgba(255,240,208,"+a.toFixed(3)+")");
      lg.addColorStop(1,  "rgba(255,236,198,0)");
      c.fillStyle = lg; c.fillRect(w/2-half, y, half*2, 1.6);
    }
  });
  cursorBeamMat = new THREE.MeshBasicMaterial({map:canvasTex(shaftTex), color:0xffe6bd, transparent:true,
    opacity:0, blending:THREE.AdditiveBlending, depthWrite:false, side:THREE.DoubleSide, fog:false});
  cursorBeam = new THREE.Mesh(new THREE.PlaneGeometry(1,1), cursorBeamMat);
  cursorBeam.visible = false; scene.add(cursorBeam);
  const curGlowTex = texCanvas(128,128,(c)=>{
    const cg = c.createRadialGradient(64,64,2,64,64,62);
    cg.addColorStop(0,  "rgba(255,244,214,.95)");
    cg.addColorStop(.34,"rgba(255,214,150,.45)");
    cg.addColorStop(1,  "rgba(255,196,124,0)");
    c.fillStyle = cg; c.fillRect(0,0,128,128);
  });
  cursorGlowMat = new THREE.MeshBasicMaterial({map:canvasTex(curGlowTex), transparent:true, opacity:0,
    depthWrite:false, side:THREE.DoubleSide, blending:THREE.AdditiveBlending, fog:false});
  cursorGlow = new THREE.Mesh(new THREE.PlaneGeometry(1,1), cursorGlowMat);
  cursorGlow.visible = false; scene.add(cursorGlow);

  // poussieres
  const dustN = viewSize().w < 700 ? 140 : 340;
  const dp = new Float32Array(dustN*3);
  for(let i=0;i<dustN;i++){
    dp[i*3]   = (Math.random()-0.5)*14;
    dp[i*3+1] = Math.random()*7 - 1;
    dp[i*3+2] = (Math.random()-0.5)*7 + .5;
  }
  const dustGeo = new THREE.BufferGeometry();
  dustGeo.setAttribute("position", new THREE.BufferAttribute(dp,3));
  dustPts = new THREE.Points(dustGeo, new THREE.PointsMaterial({color:0xffe2b8,size:.03,transparent:true,opacity:.55,blending:THREE.AdditiveBlending,depthWrite:false}));
  scene.add(dustPts);

  // - tickets -
  PAPER_LIGHT = makePaper("#efe7d6");
  PAPER_INK   = makePaper("#16140f");
  PROJECTS.forEach((p,i) => {
    const frontC = document.createElement("canvas"); frontC.width=PW; frontC.height=PH;
    const backC  = document.createElement("canvas"); backC.width=PW;  backC.height=PH;
    const frontCtx = frontC.getContext("2d");
    const backCtx  = backC.getContext("2d");
    const frontTex = new THREE.CanvasTexture(frontC); frontTex.colorSpace = THREE.SRGBColorSpace;
    const backTex  = new THREE.CanvasTexture(backC);  backTex.colorSpace  = THREE.SRGBColorSpace;
    frontTex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    backTex.anisotropy  = renderer.capabilities.getMaxAnisotropy();
    // contexte 2D indisponible ? le billet devient une simple carte coloree (jamais invisible)
    const frontMat = frontCtx
      ? new THREE.MeshBasicMaterial({map:frontTex, transparent:true, opacity:1})
      : new THREE.MeshBasicMaterial({color:0xefe7d6, transparent:true, opacity:1});
    const backMat = backCtx
      ? new THREE.MeshBasicMaterial({map:backTex,  transparent:true, opacity:1})
      : new THREE.MeshBasicMaterial({color:0x16140f, transparent:true, opacity:1});
    const edgeMat  = new THREE.MeshBasicMaterial({color:0xf0ead9, transparent:true, opacity:1});
    const geo = new THREE.BoxGeometry(1.5,.9,.024);
    const mesh = new THREE.Mesh(geo, [edgeMat,edgeMat,edgeMat,edgeMat,frontMat,backMat]);
    const group = new THREE.Group(); group.add(mesh);
    // " affiche sur le guichet " une fois tamponne : cadre laiton + punaise (invisibles avant).
    // Le cadre est une couronne de 4 baguettes posees DEVANT le billet : il l'entoure
    // vraiment et ne peut donc jamais etre masque par le billet lui-meme.
    const frameMat = new THREE.MeshBasicMaterial({color:0xd9b25f, transparent:true, opacity:0, depthWrite:false});
    const frame = new THREE.Group();
    const FW = 1.64, FH = 1.02, FT = .07, FD = .03;   // largeur / hauteur / epaisseur / profondeur d'une baguette
    const hx = FW/2 - FT/2, hy = FH/2 - FT/2;
    [[FW,FT,0,hy],[FW,FT,0,-hy],[FT,FH,-hx,0],[FT,FH,hx,0]].forEach(([w,h,x,y]) => {
      const bar = new THREE.Mesh(new THREE.BoxGeometry(w,h,FD), frameMat);
      bar.position.set(x,y,.020); bar.renderOrder = 4; frame.add(bar);
    });
    group.add(frame);
    const pinMat = new THREE.MeshBasicMaterial({color:0xf0d27e, transparent:true, opacity:0, depthWrite:false});
    const pin = new THREE.Mesh(new THREE.SphereGeometry(.033,12,10), pinMat);
    pin.position.set(0, hy, .045); pin.scale.z = .6; pin.renderOrder = 4; group.add(pin);

    const t = {
      p, i, mesh, group,
      frontC, frontCtx, frontTex, frontMat,
      backC,  backCtx,  backTex,  backMat, edgeMat,
      frameMat, pinMat, frameOp:0, pinnedIn:false,
      home: null, phase: i*1.9 + 1,
      cx:0,cy:0,cz:0, crx:0,cry:0, cs:1, cop:1, sway:1,
      dragY:0,dragX:0, dragYc:0,dragXc:0,
      stampAnim:0, stampDone:false, stamping:false,
      hasVideo: isVideo(p.front.src) || isVideo(p.back.src),
      litMats:[frontMat, backMat, edgeMat], lit:0,     // allumage par le projecteur du curseur
    };
    mesh.userData.i = i;
    tickets.push(t); byId[p.id] = t;
    scene.add(group);
    if(frontCtx) drawFront(t,false); else console.warn("[box office] no 2D context (front) - card for", p.id);
    if(backCtx)  drawBack(t,false);  else console.warn("[box office] no 2D context (back) - card for", p.id);
  });

  pileGlow = makePileGlow();                 // halo sous la pile (mise en evidence au repos)
  scene.add(pileGlow);

  computeLayout();
  tickets.forEach(t => { t.cx=t.home.x; t.cy=t.home.y; t.cz=t.home.z; t.crx=t.home.rx; t.cry=t.home.ry; t.cs=t.home.scale; });
  // au depart tout est voile ; le billet en main et la pile des billets a tamponner apparaissent doucement
  tickets.forEach(t => {
    t.stamped = false;
    t.cop = 0; t.cs = .001;
    t.cx = t.home.x; t.cy = t.home.y - 1.6; t.cz = t.home.z;
    t.group.scale.setScalar(.001);
    t.frontMat.opacity = t.backMat.opacity = t.edgeMat.opacity = 0;
  });
  toPile(true);                                 // au depart : pas de billet en main, la pile au comptoir
  /* La barre inferieure reste visible des le depart : c'est elle qui porte la LISTE
     des projets. Avec le rideau ferme, aucun billet n'est en main, donc le bouton
     STAMP reste masque (body:not(.hand)) et c'est la cloche qui ouvre le guichet. */
  ticketBar.classList.add("show");
  ticketBar.setAttribute("aria-hidden","false");
  document.body.classList.remove("hand");
  layoutProjectList();                           // la liste des projets : barre ou devanture ? (on mesure)
  bindWorld();
  startLoop();
}

/* ================== Le billet en main : rotation, rang des tamponnes ================== */
function showHero(i, instant, dir){
  if(!tickets.length) return;
  const n = tickets.length;
  const step = dir < 0 ? -1 : 1;
  let j = ((i % n) + n) % n;
  if(!instant){                                  // on saute les billets deja ranges, dans le sens du defilement
    let k = 0;
    while(tickets[j].stamped && k < n){ j = ((j + step) % n + n) % n; k++; }
  }
  heroIdx = j;
  pileHover = null;
  stackLayout();                                 // la pile des billets encore a tamponner suit le billet en main
  if(hovered){ hovered = null; }
  tickets.forEach(t => { t.dragY = 0; t.dragX = 0; });
  if(instant){
    const t = tickets[heroIdx];
    const d = desired(t, performance.now()/1000);
    t.cx=d.x; t.cy=d.y; t.cz=d.z; t.crx=d.rx; t.cry=d.ry; t.cs=d.scale; t.cop=d.op;
    t.group.position.set(t.cx,t.cy,t.cz);
    t.group.rotation.set(t.crx,t.cry,0);
    t.group.scale.setScalar(t.cs);
    t.frontMat.opacity = t.backMat.opacity = t.edgeMat.opacity = t.cop;
  } else {
    /* Entree du billet, DANS LE SENS DU GESTE : on decale legerement sa position de depart,
       le lissage habituel (updateTickets, 16 % par image) fait le reste — environ 250 ms.
       Vers le suivant (doigt vers le haut), il sort de la pile : il part donc d'un peu plus
       loin dans le comptoir (le fond), et remonte vers vous en grandissant. Vers le precedent
       (doigt vers le bas), il tombe d'au-dessus de sa place. Les deux trajets restent DEVANT
       le comptoir (jamais dedans : le comptoir est plein sous y = 0). */
    const t = tickets[heroIdx];
    if(t){
      t.cz -= .30;
      if(step < 0) t.cy += .28;
    }
  }
  document.body.classList.add("ticket-open");
  syncHandUI();
  updateProjectListActive();
  measureHeroZone();                   // le billet en main : la zone libre qui l'accueille
  layoutProjectList();                 // le billet en main occupe le centre : la plaque descend sous lui
}

/* Repos : aucun billet en main, la pile reste posee sur le comptoir. */
function toPile(instant){
  if(!tickets.length) return;
  heroIdx = -1;
  pileHover = null;
  if(hovered){ hovered = null; }
  tickets.forEach(t => { t.dragY = 0; t.dragX = 0; });
  stackLayout();
  document.body.classList.remove("ticket-open");
  syncHandUI();
  updateProjectListActive();
  measureHeroZone();                   // plus de billet en main : la zone libre change
  layoutProjectList();                 // plus de billet en main : la plaque peut remonter sur le bois
}

/* ================== Etat du guichet : rideau ouvert / ferme ==================
   L'invite au-dessus de la barre (" SCROLL TO CHOOSE A TICKET ") n'existe que
   guichet OUVERT : rideau ferme, il n'y a rien a choisir (tout est dans le noir)
   et la cloche est le seul repere. UN SEUL point de bascule : la classe
   `body.booth-closed`, lisible en CSS (et le aria-hidden qui suit). */
function syncBoothState(){
  const closed = !!boothsClosed;
  document.body.classList.toggle("booth-closed", closed);
  if(stampMeta) stampMeta.setAttribute("aria-hidden", closed ? "true" : "false");
}

/* HUD : la barre inferieure est TOUJOURS visible (elle porte la liste des projets,
   qui doit rester accessible). Le bouton STAMP n'apparait qu'avec un billet en main
   (body.hand) ; l'etat a droite indique ce qu'il y a a faire. */
function syncHandUI(){
  if(!ticketBar) return;
  ticketBar.classList.add("show");
  ticketBar.setAttribute("aria-hidden","false");
  syncBoothState();
  const inHand = heroIdx >= 0 && !!tickets[heroIdx];
  if(inHand){
    document.body.classList.add("hand");
    if(stampTitle) stampTitle.textContent = tickets[heroIdx].p.title.toUpperCase();
    /* Le billet est en main : plus besoin d'expliquer qu'il se manipule. */
    if(stampNote) stampNote.hidden = true;
    if(stampBtn) stampBtn.disabled = false;
  } else {
    document.body.classList.remove("hand");
    /* Restants : on part des PROJETS, pas de `tickets` : la liste des projets (et son
       invite) doit etre juste meme si la scene 3D n'a pas pu se construire (repli
       sans WebGL), donc meme quand `tickets` n'existe pas encore. `stampedOrder`
       reste la source de verite du nombre de billets deja tamponnes. */
    const left = Math.max(0, PROJECTS.length - stampedOrder.length);
    if(stampTitle) stampTitle.textContent = left ? "SCROLL TO CHOOSE A TICKET" : "ALL STAMPED";
    /* Le rappel " billets manipulables " ne vit qu'avec l'invite de choix. */
    if(stampNote) stampNote.hidden = !left;
    if(stampBtn) stampBtn.disabled = true;
  }
}
let lastCycle = 0;
/* Un cran de feuilletage : billet suivant / precedent. Toute la navigation vit ICI.
   force = true ignore l'anti-repetition : le swipe est UN geste volontaire (et deja limite a
   un seul changement par geste par le suivi du doigt), il ne doit pas etre avale. */
function cycleHero(dir, force){
  const now = performance.now();
  if(heroIdx < 0 || openPanel || detailOpen || stampingLock || !tickets.length) return false;
  if(tickets[heroIdx] && tickets[heroIdx].stamped) return false;
  if(!force && now - lastCycle < 380) return false;   // anti-repetition (molette et fleches)
  lastCycle = now;
  showHero(heroIdx + (dir > 0 ? 1 : -1), false, dir);
  return true;
}
/* UN SEUL point d'entree pour " passer d'un billet a l'autre " : la molette / le pave tactile,
   le swipe vertical et les fleches passent par ici — aucune logique de navigation dupliquee.
     dir     : > 0 = billet SUIVANT, < 0 = billet PRECEDENT
     o.force : true = geste unique (swipe) : on ignore l'anti-repetition
     o.hover : index du billet survole, privilegie quand aucun n'est en main (molette)
   Sans billet en main, on commence par sortir celui du DESSUS de la pile : le premier
   " suivant " fait donc apparaitre la pile au lieu de ne rien faire.
   Renvoie true si quelque chose a bouge. */
function browseTickets(dir, o){
  o = o || {};
  if(openPanel || detailOpen || stampingLock || boothsClosed || !heroActive) return false;
  if(awardTaken || awardNext) return false;              // une main = une chose
  if(heroIdx >= 0) return cycleHero(dir, o.force);        // un billet est en main : on feuillette
  const top = (o.hover >= 0 && tickets[o.hover]) || pileTop();
  if(!top) return false;                                 // tout est tamponne : plus rien a sortir
  showHero(top.i, false, dir);
  return true;
}
function rowLayout(){
  const k = stampedOrder.length; if(!k || !camera) return;
  // les billets tamponnes se punaisent sur le panneau, dans la cabine (3 x 2)
  const BX = 0, BY = .60, BZ = -2.18;
  const scale = .69, cols = 3;
  const gapX = 1.5*scale*1.12;
  const gapY = .9*scale*1.16;
  stampedOrder.forEach((id, j) => {
    const t = byId[id]; if(!t) return;
    const c = j % cols, r = Math.floor(j/cols);
    t.home = {
      x: BX + (c-1)*gapX,
      y: BY + (0.5-r)*gapY,
      z: BZ - (j%2)*.012,
      rx: 0, ry: 0, scale,
    };
  });
}
function stackLayout(){
  if(!tickets.length) return;
  // pile FIXE posee sur le comptoir : chaque billet garde TOUJOURS le meme
  // emplacement (deduit de son index), donc la pile ne se reorganise plus quand on
  // feuillette les billets ou qu'on en tamponne un.
  const BX = PILE_X, BZ = PILE_Z, BY = PILE_Y;
  const mid = (tickets.length - 1)/2;
  const aspect = viewAspect();
  // La pile grossit en portrait : a la meme taille qu'en desktop, elle ne fait
  // que quelques dizaines de pixels de large sur un ecran etroit.
  const pileScale = aspect < .85 ? .52 : aspect < 1.3 ? .42 : .33;
  /* Et sur un cadre ETROIT, la camera est loin du comptoir : vue de si loin, une pile
     bien a plat ne serait qu'un trait de quelques pixels, impossible a voir et a viser.
     On la REDRESSE donc legerement (11 degres) pour qu'elle se lise comme une pile de
     billets — geste purement " responsive ", nul sur un ecran large (aspect >= 1,3),
     ou la pose d'origine, bien plate, est conservee a l'identique. */
  const lean = .20 * clamp((1.3 - aspect)/.45, 0, 1);
  const k = pileScale/.33;                       // homothetie de la pile (positions + tailles)
  tickets.forEach(t => {
    if(t.stamped || t.i === heroIdx) return;      // en main (hero) ou deja punaise : hors de la pile
    const off = t.i - mid;                        // decalage stable, centre sur BX / BZ
    t.home = {
      x: BX + off*.006*k,
      y: BY + t.i*.0045*k,                        // epaisseur de la pile (index stable)
      z: BZ + off*.006*k,
      rx: -Math.PI/2 + lean, ry: 0, scale: pileScale,   // a plat (ou redressee en portrait)
    };
  });
}
/* ================== Rideaux : SEULS elements colles aux bords de l'ecran ================== */
/* La fenetre de caisse remplit tout l'ecran ; la plaque BOX OFFICE et les affiches anglaises
   sont plaquees contre le mur, la pancarte des tarifs est posee sur le comptoir (positions fixes).
   Seuls les rideaux restent " sur le cote ", plaques contre les bords de l'ecran quelle que soit
   la largeur. */
function placeFacade(){
  if(!camera) return;
  layoutCurtains();
}
/* Rideaux : ouverts, ils cadrent les bords de l'ecran ; fermes, ils tirent vers le centre et
   s'elargissent pour boucher toute la fenetre de caisse (curtainT : 0 = ouvert, 1 = ferme). */
function layoutCurtains(){
  if(!camera || !boothCurtains.length) return;
  const aspect = viewAspect();
  const tanF = Math.tan(camera.fov*Math.PI/360);
  const dC = Math.max(1, camera.position.z - .16);        // plan des rideaux (z monde ~ .16)
  /* Rideau ouvert : centre sur le bord de l'ecran. Sur un cadre etroit, ce bord tombe
     DEVANT les affiches anglaises (posees a +/-2,51 m sur le mur du fond) : on repousse
     alors le rideau juste ce qu'il faut pour que l'affiche reste entierement visible.
     Sur un ecran large, la regle ne change rien : le rideau garde sa place d'origine. */
  const posterOutAtCurtain = (POSTER_X0 + POSTER_HW)*(camera.position.z - .16)
                                                      /(camera.position.z - WALL_Z);
  const cx = Math.max(clamp(tanF*dC*aspect*1.02, 2.2, 5.0), posterOutAtCurtain + .37);
  const halfW = tanF*dC*aspect*1.06;                      // demi-largeur REELLEMENT visible (+ marge) au plan des rideaux
  const halfH = tanF*dC*1.06;                             // demi-hauteur visible (+ marge)
  const t = curtainT;
  const openY = .55, closeY = camLookY;
  const scaleX = lerp(1, Math.max(.7, halfW)/.7, t);      // elargit pour couvrir la moitie de l'ecran
  /* Hauteur du rideau OUVERT : il doit encadrer l'ecran (bords haut et bas couverts).
     Sur un ecran large il l'est deja a l'echelle 1 : rien ne change. Sur un cadre haut
     (portrait de telephone), il faut l'etirer, sinon le rideau ouvert ne serait qu'un
     moignon rouge au milieu du bord. Ferme, il couvre la fenetre de caisse, comme avant. */
  const coverOpen = Math.max(1, halfH*1.15/1.8);
  const coverShut = Math.max(1, (halfH*2)/3.6);
  const scaleY = lerp(coverOpen, coverShut, t);            // etire pour couvrir toute la hauteur
  boothCurtains.forEach(c => {
    const sgn = c.userData.sgn || 1;
    c.position.x = sgn * lerp(cx, halfW/2, t);
    c.position.y = lerp(openY, closeY, t);
    c.scale.x = scaleX; c.scale.y = scaleY;
  });
}
/* Cloche : posee sur le comptoir, maintenue visible sur TOUS les ecrans (position NDC fixe,
   legerement a gauche de la pile desormais centree). */
function placeBell(){
  if(!boothBell || !camera) return;
  const v = viewSize();
  const tanX = Math.tan(camera.fov*Math.PI/360)*(v.w/v.h);
  const camZ = Math.max(1, camera.position.z);
  const depth = Math.max(.5, camZ - boothBell.position.z);
  boothBell.position.x = BELL_NDC * depth * tanX;
  placeBellHint();
}
/* Invite " sonnez la cloche " : la fleche est posee AU-DESSUS du SOMMET de la cloche.
   On projette ce sommet en NDC, puis on repasse en PIXELS (la boite reelle du canvas) :
   la fleche suit donc la cloche sur TOUS les formats (desktop large, telephone en
   portrait) et suit meme sa parallaxe, car on la replace a chaque image.
   Le deplacement se fait en transform : aucun recalcul de mise en page. */
let bellHintTf = "";                                           // dernier transform ecrit (evite les ecritures inutiles)
function placeBellHint(){
  if(!bellHint || !camera || !boothBell) return;
  camera.updateMatrixWorld();
  bellNdc.set(boothBell.position.x, BELL_TOP_Y, boothBell.position.z).project(camera);
  const v = viewSize();
  const x = (bellNdc.x + 1) * .5 * v.w;                          // px : l'aplomb de la cloche
  const y = (1 - bellNdc.y) * .5 * v.h;                          // px : le sommet de la cloche
  const tf = "translate3d(" + x.toFixed(1) + "px," + (y - BELL_HINT_GAP).toFixed(1) + "px,0) translate(-50%,-100%)";
  if(tf !== bellHintTf){ bellHint.style.transform = tf; bellHintTf = tf; }
}
function pickBell(px,py){
  if(!bellHit || !camera) return false;
  pointerNdc.x = px; pointerNdc.y = py;
  raycaster.setFromCamera(pointerNdc, camera);
  return raycaster.intersectObject(bellHit, false).length > 0;
}
/* La cloche bascule le guichet : rideaux ouverts <-> fermes. */
function toggleCurtains(){
  boothsClosed = !boothsClosed;
  syncBoothState();                                // l'invite suit l'etat du rideau
  measureHeroZone();                               // l'invite disparait : la zone libre change
  if(boothsClosed){
    if(detailOpen) closeDetail();
    if(heroIdx >= 0) toPile(false);
    if(awardTaken) putAward();                      // la statuette en main se range aussi (comme le billet)
    document.body.classList.remove("ticket-open");
    /* la barre inferieure reste visible : la liste des projets doit rester joignable.
       Seul le tampon disparait (body:not(.hand) .btn--stamp{display:none}). */
    document.body.classList.remove("hand");
  } else {
    syncHandUI();
  }
}
/* Eclairage : guichet ferme -> tout s'eteint SAUF la cloche ; la pile n'est plus mise en avant. */
function applyCurtainLighting(){
  const t = curtainT;
  if(sceneAmbient)    sceneAmbient.intensity    = lerp(.88, .055, t);
  if(sceneDir)        sceneDir.intensity        = lerp(.90, .06,  t);
  if(sceneRim)        sceneRim.intensity        = lerp(.30, .04,  t);
  if(boothLamp)       boothLamp.intensity       = lerp(1.05, .05, t);
  if(boothWarm)       boothWarm.intensity       = lerp(1.20, .05, t);
  if(boothLampLight)  boothLampLight.intensity  = lerp(.80, .04, t);
  if(projBeam)        projBeam.material.opacity = lerp(.05, 0, t);
  if(curtainMatRef){                                  // " plus d'eclairage sur les rideaux "
    const k = lerp(1, .24, t);
    curtainMatRef.color.setRGB(k*.95, k*.78, k*.78);
  }
  if(bellMatRef)      bellMatRef.emissive.setRGB(.62*t, .40*t, .15*t);
  if(bellLight)       bellLight.intensity       = lerp(0, 2.6, t);
  if(bellGlow)        bellGlow.material.opacity = lerp(0, .7, t);
  for(const m of awardEnvMats) if(m && m.envMapIntensity !== undefined) m.envMapIntensity = lerp(m.userData.envI || .95, .06, t);
}
/* ======== Projecteur du curseur : un faisceau doux descend vers le point vise, un vrai
   SpotLight eclaire la surface, et une tache de lumiere se pose SUR cette surface.
   Si le curseur est sur un billet, c'est LE BILLET qui est vise : la tache se pose sur
   son papier et le billet s'allume (ses materiaux sont " non eclaires ", on monte donc
   leur couleur). Tout s'eteint quand le guichet est ferme (curtainT -> 1) ainsi que hors
   de la scene 3D (panneau ouvert, fiche film, scroll). */
const CURSOR_ANG = .19, CURSOR_Z = newV3(0,0,1);      // axe local du plan de la tache
const cursorSrc = newV3(), cursorDir = newV3();
const cursorMid = newV3(), cursorNrm = newV3();
const curV1 = newV3(), curV2 = newV3(), curV3 = newV3();
const curBasis = newM4(), curNmat = newM3();
let litTicket = null;                                             // billet sous le curseur
const ticketMeshes = [];                                          // (rempli une fois la scene batie)

function placeCursorBeam(dt){
  if(!cursorSpot || !camera) return;
  if(!ticketMeshes.length) for(const t of tickets) if(t.mesh) ticketMeshes.push(t.mesh);
  const want = (cursorOn && heroActive && !openPanel && !detailOpen && !stampingLock && !document.hidden)
    ? (1 - curtainT) : 0;
  cursorFade += (want - cursorFade) * Math.min(1, (dt || .016) * 6);
  const f = cursorFade < .012 ? 0 : cursorFade;

  // 0) le curseur est-il pose sur un billet ?
  raycaster.setFromCamera(cursorNdc, camera);
  const onTicket = f ? raycaster.intersectObjects(ticketMeshes, false)[0] : null;
  litTicket = onTicket ? tickets[onTicket.object.userData.i] : null;

  // le billet vise s'allume (et se rallume en douceur) : ses materiaux ne captent pas la lumiere
  for(const t of tickets){
    const goal = (t === litTicket) ? f : 0;
    t.lit += (goal - t.lit) * Math.min(1, (dt || .016) * 9);
    if(t.lit < .002 && !goal && t.litMats[0].color.r === 1) continue;
    const v = 1 + .10 * t.lit;
    for(const m of t.litMats) m.color.setScalar(v);
  }

  if(!f){
    cursorSpot.visible = false; cursorBeam.visible = false; cursorGlow.visible = false;
    cursorSpot.intensity = 0;
    return;
  }
  cursorSpot.visible = true; cursorBeam.visible = true; cursorGlow.visible = true;

  // 1) point vise + normale de la surface (billet, sinon comptoir, sinon mur du fond)
  let t = 0;
  if(onTicket){
    cursorHit.copy(onTicket.point);
    curNmat.getNormalMatrix(onTicket.object.matrixWorld);
    cursorNrm.copy(onTicket.face.normal).applyMatrix3(curNmat).normalize();
  }else{
    const o = raycaster.ray.origin, d = raycaster.ray.direction;
    let surf = null;                                     // "floor" = comptoir, "wall" = mur du fond
    if(d.y < -1e-4){                                     // plan du comptoir (surface y = 0)
      const tc = -o.y/d.y, zc = o.z + d.z*tc;
      if(tc > .3 && zc > .15 && zc < 2.05){ t = tc; surf = "floor"; }
    }
    if(!t && d.z < -1e-4){                               // sinon : le mur du fond
      const tw = (-2.19 - o.z)/d.z;
      if(tw > .3){ t = tw; surf = "wall"; }
    }
    if(!t) t = 3.4;                                      // repli : on reste sur le rayon
    cursorHit.set(o.x + d.x*t, o.y + d.y*t, o.z + d.z*t);
    cursorNrm.set(0, surf === "floor" ? 1 : 0, surf === "wall" ? 1 : 0);
  }
  // la normale regarde toujours vers la camera (tache visible)
  if(cursorNrm.dot(curV1.copy(camera.position).sub(cursorHit)) < 0) cursorNrm.negate();

  // 2) la source : au-dessus et legerement en avant du point, comme un projecteur
  cursorSrc.set(cursorHit.x,
                Math.max(cursorHit.y + 2.2, 2.45),
                Math.min(cursorHit.z + 1.05, camera.position.z - 1.3));
  const len = Math.max(.8, cursorSrc.distanceTo(cursorHit));
  cursorDir.subVectors(cursorHit, cursorSrc).normalize();

  cursorSpot.position.copy(cursorSrc);
  cursorSpot.target.position.copy(cursorHit);
  cursorSpot.target.updateMatrixWorld();
  cursorSpot.intensity = 24 * f;

  // 3) le faisceau : une face douce, posee de la source au point vise, tournee vers la camera
  cursorMid.copy(cursorSrc).add(cursorHit).multiplyScalar(.5);
  curV1.copy(cursorDir).negate();                                   // Y local : surface -> source
  curV2.copy(camera.position).sub(cursorMid).normalize();
  curV3.copy(curV2).addScaledVector(curV1, -curV2.dot(curV1));      // Z local : vers la camera
  if(curV3.lengthSq() < 1e-6) curV3.set(0,0,1);
  curV3.normalize();
  curV2.crossVectors(curV1, curV3).normalize();                     // X local
  curBasis.makeBasis(curV2, curV1, curV3);
  cursorBeam.position.copy(cursorMid);
  cursorBeam.quaternion.setFromRotationMatrix(curBasis);
  cursorBeam.scale.set(len * Math.tan(CURSOR_ANG) * 2, len, 1);
  cursorBeamMat.opacity = .18 * f;

  // 4) la tache de lumiere, posee a plat sur la surface visee (billet compris)
  const dc = Math.max(.5, camera.position.distanceTo(cursorHit));
  const gs = Math.min(.9, Math.max(.32, dc * .13)) * (onTicket ? 1.2 : 1);
  cursorGlow.position.copy(cursorHit).addScaledVector(cursorNrm, .014);
  cursorGlow.quaternion.setFromUnitVectors(CURSOR_Z, cursorNrm);
  cursorGlow.scale.set(gs, gs, 1);
  cursorGlowMat.opacity = (onTicket ? .5 : .42) * f;
}
/* ======== Horloge murale : calee a GAUCHE de la plaque BOX OFFICE ========
   La plaque est sur le mur du fond (x = -1.8, z ~ -2.19) ; on place l'horloge dans
   l'espace libre entre son bord gauche et le bord interieur du rideau gauche (elle doit
   aussi rester a gauche de l'affiche anglaise de gauche, x = -2.3), en la reduisant un
   peu si l'ecran est etroit, afin qu'elle reste lisible et jamais cachee. */
function placeClock(){
  if(!boothClock || !camera) return;
  const aspect = viewAspect();
  const tanF = Math.tan(camera.fov*Math.PI/360);
  const tanX = tanF*aspect;
  const camZ = Math.max(1, camera.position.z);
  // bord gauche de la plaque BOX OFFICE, projete en NDC
  const plaqueNdc = -1.8 / Math.max(.25, (camZ - .02) * tanX);
  // bord interieur du rideau gauche (z monde ~ .16), borne au bord de l'ecran (-1)
  const dC = Math.max(1, camZ - .16);
  const cx = clamp(tanF*dC*aspect*1.02, 2.2, 5.0);
  const curtainNdc = Math.max(-(cx - .35) / (dC * tanX), -1);
  const leftNdc = Math.min(curtainNdc, plaqueNdc - .05);         // on reste a gauche de la plaque (marge parallaxe)
  const midNdc  = (plaqueNdc + leftNdc) / 2;                     // centre de l'espace libre
  // plan de l'horloge (z monde ~ -2.54) -> on connait sa taille apparente
  const dz = camZ + 2.54;
  const halfNdc = .31 / (dz * tanX);
  const room = Math.max(.03, (plaqueNdc - leftNdc) / 2 - .015);  // demi-place disponible (avec marge)
  const s = clamp(room / halfNdc, .66, 1);                       // on retrecit seulement si necessaire
  const rN = Math.min(.48, halfNdc * s);                         // demi-largeur apparente, une fois posee
  const want = Math.min(midNdc, -2.1 / (dz * tanX));              // jamais a droite de la plaque
  /* Ecran tres etroit : l'espace libre entre la plaque et le bord peut tomber hors
     champ. L'horloge est alors soit ENTIEREMENT dans le cadre, soit franchement
     dehors : jamais coupee en deux par le bord de l'ecran. */
  const ndc = (Math.abs(want) - rN >= 1) ? want
                                         : clamp(want, -(1 - .02 - rN), -(rN + .02));
  boothClock.position.x = ndc * dz * tanX;
  boothClock.scale.setScalar(s);
}
/* ======== Statuettes CESAR + OSCAR : posees sur le comptoir, juste a DROITE de l'affiche rouge ========
   On cale le couple juste a droite du bord de l'affiche rouge (planche comprise) sans jamais
   le faire sortir de l'ecran ; les deux sont au premier plan, donc jamais masquees.
   L'Oscar est pose juste a cote du Cesar (meme plan de comptoir, ecart fixe en monde) : les
   deux restent ainsi toujours adjacents quelle que soit la largeur de l'ecran. */
function placeCesar(){
  if(!boothCesar || !camera) return;
  const aspect = viewAspect();
  const tanX = Math.tan(camera.fov*Math.PI/360)*aspect;
  const camZ = Math.max(1, camera.position.z);
  const posterRightNdc = 2.06 / Math.max(.25, (camZ - .025) * tanX);   // bord droit de l'affiche rouge
  const cz = boothCesar.userData.home.z;                               // plan du comptoir (pose d'origine, meme si en main)
  const depth = Math.max(.5, camZ - cz);
  const halfNdc = CESAR_HALF_W / (depth * tanX);                        // demi-largeur apparente du Cesar
  // centre du Cesar : a droite de l'affiche, mais l'ensemble reste entierement a l'ecran
  let ndc = Math.max(posterRightNdc + .05 + halfNdc, .58);
  ndc = clamp(ndc, .34 + halfNdc, .96 - halfNdc);
  // on ne cale que la " maison " : la boucle de rendu applique la pose reelle
  // (les statuettes peuvent etre en main au moment du redimensionnement)
  boothCesar.userData.home.x = ndc * depth * tanX;
  if(boothOscar) boothOscar.userData.home.x = boothCesar.userData.home.x - AWARD_GAP;
}
/* ======== Affiches anglaises : plaquees sur le mur du fond, de part et d'autre du panneau ========
   La portion de mur visible se reduit avec la largeur de l'ecran : chaque affiche est donc
   soit ENTIEREMENT dans le cadre (un peu reduite si besoin), soit franchement hors champ —
   jamais coupee en deux par le bord de l'ecran. Sur un ecran large, rien ne bouge. */
const WALL_Z = -2.19, POSTER_X0 = 2.51, POSTER_HW = .525, WALL_MARGIN = .04;
function placePosters(){
  if(!camera) return;
  const tanX = Math.tan(camera.fov*Math.PI/360)*viewAspect();
  const camZ = Math.max(1, camera.position.z);
  const halfW = (camZ - WALL_Z) * tanX;               // demi-largeur visible sur le mur du fond
  const avail = halfW - WALL_MARGIN - POSTER_X0;      // place restante a la position d'origine
  for(const pg of boothPosters){
    const sgn = pg.position.x < 0 ? -1 : 1;
    if(avail >= POSTER_HW*.62){                       // ca tient : on garde la pose (reduite si besoin)
      pg.position.x = sgn * POSTER_X0;
      pg.scale.setScalar(Math.min(1, avail / POSTER_HW));
    } else {                                          // pas la place : on la pousse entierement hors champ
      pg.position.x = sgn * (halfW + POSTER_HW + .05);
      pg.scale.setScalar(1);
    }
  }
}
/* ======== Pancarte des tarifs : petit chevalet pose SUR le comptoir, a droite ========
   Elle vit au premier plan : sur un ecran etroit elle se reduit et glisse vers la gauche
   pour rester ENTIEREMENT dans le cadre, jamais rognee par le bord droit. Sur un ecran
   large, elle ne bouge pas d'un millimetre (meme pose qu'a l'origine). */
const TARIFS_X0 = 1.00, TARIFS_Z = .90, TARIFS_HW = .47;   // pose d'origine / demi-largeur (0,94 m)
function placeTarifs(){
  if(!boothTarifs || !camera) return;
  const tanX = Math.tan(camera.fov*Math.PI/360)*viewAspect();
  const camZ = Math.max(1, camera.position.z);
  const depth = Math.max(.5, camZ - TARIFS_Z);
  const halfNdc = TARIFS_HW / (depth * tanX);         // demi-largeur apparente a l'echelle 1
  const s = (halfNdc > .31) ? .62 / (halfNdc * 2) : 1;   // on reduit pour tenir dans la bande droite
  const ndc = clamp(TARIFS_X0 / (depth * tanX), -1 + halfNdc*s + .03, .96 - halfNdc*s);
  boothTarifs.position.x = ndc * depth * tanX;
  boothTarifs.scale.setScalar(s);
}
/* ===== UN SEUL point d'entree : ouvrir DIRECTEMENT l'affiche d'un projet =====
   Reutilise par la liste de la barre inferieure, le repli sans WebGL, etc.
   Aucune logique d'ouverture n'est dupliquee : c'est openDetail() qui affiche.
   Le projet est identifie par son id (byId) : n'importe quel projet marche,
   pas seulement le premier ni le dernier. */
function openProjectDirect(p){
  if(!p) return;
  if(boothsClosed){                              // guichet ferme -> on l'ouvre pour voir l'affiche
    boothsClosed = false;
    updateCurtains(performance.now()/1000);
    applyCurtainLighting();
    syncHandUI();
  }
  if(openPanel) closePanel();                    // une section plein ecran ... on la referme
  if(awardTaken) putAward();                     // une main = une chose
  const t = byId[p.id];
  if(t){
    t.stamped = true;                            // le billet rejoint le rang (etat coherent)
    if(!stampedOrder.includes(t.p.id)) stampedOrder.push(t.p.id);
    rowLayout();
    stackLayout();
  }
  /* On va DROIT a l'affiche : pas d'etape intermediaire par le ticket en main. */
  openDetail(p);
}

function buildProjectList(){
  if(!projectListEl) return;
  projectListEl.innerHTML = "";
  PROJECTS.forEach((p) => {
    const btn = document.createElement("button");
    btn.className = "project-list-item";
    btn.type = "button";
    btn.dataset.project = p.id;
    btn.textContent = p.title.toUpperCase();
    /* stopPropagation : le clic ne doit PAS atteindre le canvas (ni un ticket
       derriere la barre). Le bouton est un vrai bouton : accessible au clavier. */
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openProjectDirect(p);
    });
    projectListEl.appendChild(btn);
  });
}

function updateProjectListActive(){
  if(!projectListEl) return;
  const items = projectListEl.querySelectorAll(".project-list-item");
  // projet mis en avant : celui tenu en main, sinon celui dont l'affiche est ouverte
  let activeId = (heroIdx >= 0 && tickets[heroIdx]) ? tickets[heroIdx].p.id : null;
  if(detailOpen && !activeId){
    const cur = PROJECTS.find(p => p.title === $("#dTitle").textContent);
    if(cur) activeId = cur.id;
  }
  items.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.project === activeId);
  });
}
window.__v7 = () => ({
  hero: heroIdx,
  heroTitle: tickets[heroIdx] ? tickets[heroIdx].p.title : null,
  stamped: stampedOrder.slice(),
  tickets: tickets.map(t => ({s:!!t.stamped, o:+t.cop.toFixed(2)})),
  lock: stampingLock,
  detail: detailOpen,
  closed: boothsClosed, curtainT: +curtainT.toFixed(3),
});

/* CADRAGE du billet en main : sa place reelle a l'ecran (boite) et la zone libre
   (ce que l'interface n'occupe pas). Sert a verifier le recentrage sur chaque
   format : la boite doit etre CENTREE dans la zone, jamais rognee. */
window.__hero = () => {
  const v = viewSize(), hr = heroRest(), zone = heroZone || measureHeroZone();
  const pts = [[-.75,.45],[.75,.45],[.75,-.45],[-.75,-.45]].map(p => {
    const s = screenAtWorld(hr.x + p[0]*hr.scale, hr.y + p[1]*hr.scale, hr.z);
    return {x:Math.round(s.x), y:Math.round(s.y)};
  });
  const xs = pts.map(p => p.x), ys = pts.map(p => p.y);
  const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
  return {
    view:  {w:v.w, h:v.h},
    zone:  {top:Math.round(zone.top), bottom:Math.round(zone.bottom), cx:Math.round(zone.cx),
            cy:Math.round(zone.cy), w:Math.round(zone.w), h:Math.round(zone.h)},
    gain:  +heroCenterGain(viewAspect(), zone.h).toFixed(3),
    rest:  {x:+hr.x.toFixed(3), y:+hr.y.toFixed(3), z:+hr.z.toFixed(3),
            scale:+hr.scale.toFixed(3), rise:+hr.rise.toFixed(3)},
    box:   {x0, x1, y0, y1},
    center:{x:Math.round((x0+x1)/2), y:Math.round((y0+y1)/2)},
    /* le cadrage d'origine (avant recentrage), pour comparer */
    base:  (() => { const b = screenAtWorld(0, camBaseY - .14 + hr.rise, hr.z);
                    return {x:Math.round(b.x), y:Math.round(b.y)}; })()
  };
};

/* ================== LISTE DES PROJETS : LA OU ELLE VIT ==================
   Les six titres des films vivent dans la barre NOIRE du bas. Mais sur un
   telephone etroit ils n'y tiennent pas sur UNE ligne : ils sont coupes (il
   faut les faire defiler, et on les rate). On ne tranche pas au doigt mouille :
   on MESURE.
     1. largeur reellement necessaire (somme des titres + espaces) contre largeur
        reellement disponible dans la barre -> si tout tient sur une ligne, on ne
        bouge a rien (bureau, tablette, telephone en paysage) ;
     2. sinon on regarde la DEVANTURE du guichet : la face avant du comptoir en
        bois, projetee a l'ecran comme la fleche de la cloche. Si elle offre
        assez de place, la liste s'y pose, en plusieurs rangees si besoin ;
     3. sinon (devanture hors cadre) on reste dans la barre, qui defile
        horizontalement : le repli, jamais une liste perdue.
   La decision est donc prise A LA MESURE, jamais par une media query. */
const FACADE_Z = 1.95;          // face avant du comptoir (plan de la devanture)
const FACADE_TOP_Y = -.22;      // sous le rebord avant du plan de travail
const FACADE_BOT_Y = -2.90;     // bas de la devanture, juste au-dessus de la plinthe
const LF_GAP = 14;              // px : marge entre la plaque et ce qu'elle touche
const LF_MIN_H = 64;            // px : hauteur minimale du panneau sur la devanture
const facadeV = newV3();
let listFacade = false;         // la liste est-elle posee sur la devanture ?
let listRect = null;            // dernier rectangle applique (px ecran)
let listBarH = 56;              // px : hauteur de la bande noire du bas
let listContentH = 0;           // px : hauteur reelle des titres (0 = non mesure)

/* Les encoches, le Dynamic Island, la barre gestuelle : on les MESURE (sonde
   invisible qui herite des env(safe-area-inset-*)) plutot que de les deviner. */
let safeProbe = null;
function safeInsets(){
  if(!safeProbe){
    safeProbe = document.createElement("div");
    safeProbe.setAttribute("aria-hidden", "true");
    safeProbe.style.cssText = "position:fixed;left:0;top:0;width:0;height:0;visibility:hidden;pointer-events:none;"+
      "padding-top:env(safe-area-inset-top,0px);padding-right:env(safe-area-inset-right,0px);"+
      "padding-bottom:env(safe-area-inset-bottom,0px);padding-left:env(safe-area-inset-left,0px)";
    document.body.appendChild(safeProbe);
  }
  const cs = getComputedStyle(safeProbe);
  return {t:parseFloat(cs.paddingTop) || 0, r:parseFloat(cs.paddingRight) || 0,
          b:parseFloat(cs.paddingBottom) || 0, l:parseFloat(cs.paddingLeft) || 0};
}

/* Largeur REELLEMENT necessaire pour les six titres sur UNE seule ligne. */
function listNeededWidth(){
  const items = projectListEl ? projectListEl.querySelectorAll(".project-list-item") : [];
  if(!items.length) return 0;
  const gap = parseFloat(getComputedStyle(projectListEl).columnGap) || 0;
  let w = 0;
  items.forEach((it, i) => { w += it.offsetWidth + (i ? gap : 0); });
  return w;
}

/* Un point du monde -> sa hauteur en pixels ecran (projection par la camera). */
function worldToScreenY(x, y, z){
  const v = viewSize();
  facadeV.set(x, y, z).project(camera);
  return (1 - facadeV.y)*.5*v.h;
}

/* La devanture a l'ecran : le rebord avant du comptoir (en haut) et le bas du bois
   (en bas). Entre les deux, il n'y a QUE du bois : c'est la que la liste se pose. */
function facadeBand(){
  return {top: worldToScreenY(0, FACADE_TOP_Y, FACADE_Z),
          bot:  worldToScreenY(0, FACADE_BOT_Y, FACADE_Z)};
}

/* Bord BAS du billet en main, en pixels ecran (position de REPOS : la plaque ne doit
   pas trembler avec le billet). 0 si aucun billet en main. */
function heroBottomScreenY(){
  if(heroIdx < 0 || !tickets[heroIdx]) return 0;
  const t = tickets[heroIdx];
  if(t.stamped) return 0;
  const hr = heroRest();
  return worldToScreenY(hr.x, hr.y - .45*hr.scale, hr.z);
}

/* ===== La liste : DECISION (mesure) =====
   Renvoie le rectangle a poser sur la devanture, ou null si la liste reste dans
   la barre. Appele au redimensionnement, au demarrage, et quand le billet en main
   change (c'est lui qui borne le haut de la plaque). */
function layoutProjectList(){
  if(!projectListEl || !ticketBar || !camera) return;
  camera.updateMatrixWorld();
  const v = viewSize();
  const ins = safeInsets();
  const padL = Math.max(18, ins.l), padR = Math.max(18, ins.r);
  listBarH = cineBarBottom ? cineBarBottom.getBoundingClientRect().height : 56;
  /* 1. la liste tient-elle sur UNE ligne dans la barre ? (la largeur de la barre
        vaut la largeur de l'ecran moins les marges laterales ; on la CALCULE) */
  const avail = v.w - padL - padR;
  if(listNeededWidth() <= avail + 2){ setListOnFacade(false); return; }
  /* 2. elle ne tient pas : la devanture peut-elle l'accueillir ? */
  const band = facadeBand();
  const barTop = v.h - listBarH;                              // le haut de la bande noire du bas
  const heroBottom = heroBottomScreenY();                     // le billet en main ne doit pas etre masque
  let top = band.top + LF_GAP;
  if(heroBottom > 0) top = Math.max(top, heroBottom + LF_GAP);
  const bottom = Math.min(band.bot - LF_GAP, barTop - LF_GAP);
  const availH = bottom - top;
  if(availH < LF_MIN_H){ setListOnFacade(false); return; }    // devanture hors cadre : on garde la barre
  const rect = {left: padL, top: Math.round(top), w: Math.round(v.w - padL - padR), h: Math.round(availH)};
  setListOnFacade(true, rect);
  /* 3. la plaque se resserre sur les titres : elle cloutee le bois, elle ne le recouvre
        pas. Et si meme en rangees les titres debordent, on repasse en defilement
        horizontal : on ne coupe jamais un titre, on ne perd jamais la liste. */
  const contentH = projectListEl.scrollHeight;
  document.body.classList.toggle("list-facade-scroll", contentH > availH + 2);
  listContentH = Math.round(projectListEl.scrollHeight);      // mesure reelle, apres le basculement
  if(listContentH > availH) listContentH = Math.round(availH);
  setListOnFacade(true, {left: rect.left, top: rect.top, w: rect.w, h: listContentH});
}

/* ===== La liste : POSE (projection) =====
   On applique (ou on retire) la plaque sur le bois du guichet. */
function setListOnFacade(on, rect){
  if(on){
    if(listFacade && listRect && rect && rect.left === listRect.left && rect.top === listRect.top &&
       rect.w === listRect.w && rect.h === listRect.h) return;      // rien n'a bouge : on ne touche pas au DOM
    listFacade = true;
    document.body.classList.add("list-facade");
    listRect = rect;
    ticketBar.style.left = rect.left+"px";
    ticketBar.style.top = rect.top+"px";
    ticketBar.style.width = rect.w+"px";
    ticketBar.style.height = rect.h+"px";
  }else{
    if(!listFacade) return;
    listFacade = false;
    document.body.classList.remove("list-facade", "list-facade-scroll");
    listRect = null;
    listContentH = 0;
    ticketBar.style.left = ticketBar.style.top = ticketBar.style.width = ticketBar.style.height = "";
  }
}

/* ===== La liste : SUIVI (chaque image) =====
   La plaque reste collee au bois : la camera bouge legerement (parallaxe), le bois
   bouge avec elle. On ne recalcule que la VERTICALITE, sans lecture de mise en
   page : le cout par image reste nul. */
function placeProjectList(){
  if(!listFacade || !listRect || !camera) return;
  camera.updateMatrixWorld();
  const v = viewSize();
  const band = facadeBand();
  const barTop = v.h - listBarH;
  const heroBottom = heroBottomScreenY();
  let top = band.top + LF_GAP;
  if(heroBottom > 0) top = Math.max(top, heroBottom + LF_GAP);
  const bottom = Math.min(band.bot - LF_GAP, barTop - LF_GAP);
  const availH = Math.max(0, bottom - top);
  const t = Math.round(top);
  const h = Math.round(listContentH > 0 ? Math.min(availH, listContentH) : availH);
  if(t === listRect.top && h === listRect.h) return;           // rien n'a bouge
  listRect.top = t; listRect.h = h;
  ticketBar.style.top = t+"px";
  ticketBar.style.height = h+"px";
}

/* ================== Disposition : cadrage de la camera ==================
   Le cadrage repond a DEUX contraintes, dans cet ordre :
     1. le decor du mur du fond (panneau des billets 3,72 m + plaque BOX OFFICE 3,60 m +
        les DEUX affiches anglaises posees a +/-2,51 m) doit tenir en LARGEUR, quel que
        soit le format : c'est le decor qui raconte le guichet ;
     2. le comptoir et ses objets (pile de billets, cloche, statuettes, chevalet) doivent
        rester au premier plan, assez gros pour etre VUS et CLICQUES au doigt.
   Sur un ecran large (>= 1,30), la camera reste " au comptoir " (3,60 m) : le mur est bien
   plus large que l'ecran, on ne cherche donc pas a tout voir d'un coup.
   Sur un ecran etroit (portrait de telephone), les deux contraintes ne peuvent pas etre
   satisfaites par la seule distance : reculer assez pour cadrer le mur reduirait la pile
   a quelques pixels de large, en bout de comptoir, donc invisible et intouchable. On
   ELARGIT DONC LE CHAMP (46 -> 64 degres) et on ne recule que du strict necessaire.
   Rien n'est deforme, rien n'est re-echainne : seuls la distance et le champ bougent,
   jamais l'echelle des objets (1 unite = 1 metre, toujours). */
const FRAME_HALF_W = POSTER_X0 + POSTER_HW + .065;      // 3,10 m : demi-largeur de decor a cadrer
const FOV_WIDE = 46, FOV_NARROW = 64;                   // champ grand ecran / champ portrait
const CZ_TABLET = 5.0, CZ_DESKTOP = 3.6, CZ_MAX = 12;   // distances de repli par palier
/* Champ : 46 degres des que le cadre est large, jusqu'a 64 degres au format d'un telephone
   en portrait ; varie en douceur pour qu'aucun format ne " saute ". */
function frameFov(aspect){
  if(aspect >= .85) return FOV_WIDE;
  return FOV_WIDE + Math.min(1, (.85 - aspect)/.39) * (FOV_NARROW - FOV_WIDE);
}
/* Distance qui fait tenir le decor du mur. Au plan du mur, la demi-largeur visible vaut
   (cz - WALL_Z)*tanF*aspect : on inverse pour trouver cz. Rappel de geometrie : sur un
   cadre plus haut que large, la hauteur visible vaut TOUJOURS largeur/aspect ; elargir le
   champ ne " rapproche " donc pas l'image, ca evite seulement de reculer de 3 m de plus. */
function frameDistance(aspect, tanF){
  return FRAME_HALF_W / (tanF*aspect) + WALL_Z;
}
function computeLayout(){
  const aspect = viewAspect();
  const narrow = aspect < 1.30;
  camera.fov = frameFov(aspect);
  const tanF = Math.tan(camera.fov*Math.PI/360);
  const cz = narrow ? clamp(frameDistance(aspect, tanF), CZ_TABLET, CZ_MAX) : CZ_DESKTOP;
  camera.aspect = aspect;
  camera.updateProjectionMatrix();
  camBaseY = .72;
  camLookY = camBaseY - .05*cz;       // leger plongeon sur le comptoir
  camera.position.set(0, camBaseY, cz);
  camera.lookAt(0, camLookY, 0);
  // " home " par defaut pour chaque billet (meme non tamponne) avant le rang
  tickets.forEach(t => { t.home = { x:0, y:0, z:-2.18, rx:0, ry:0, scale:.6 }; });
  rowLayout();                        // range les billets deja tamponnes sur le panneau
  stackLayout();                      // pose la pile des billets encore a tamponner sur le comptoir
  placeFacade();                      // recolle rideaux + affiches aux bords de l'ecran
  placeBell();                        // cale la cloche sur le comptoir, visible quelle que soit la largeur
  placePosters();                     // affiches du mur : entierement dans le cadre, ou franchement hors champ
  placeClock();                       // cale l'horloge a gauche de la plaque BOX OFFICE
  placeCesar();                       // cale la statuette a droite de l'affiche rouge, sur le comptoir
  placeTarifs();                      // cale le chevalet des tarifs : jamais rogne par le bord droit
}

/* ================== Interactions ================== */
function pickTicket(px,py){
  pointerNdc.x = px; pointerNdc.y = py;
  raycaster.setFromCamera(pointerNdc, camera);
  const meshes = tickets.filter(t => t.stamped && t.cop > .5).map(t => t.mesh);
  if(!meshes.length) return null;
  const hits = raycaster.intersectObjects(meshes, false);
  return hits.length ? tickets[hits[0].object.userData.i] : null;
}
function pickHero(px,py){
  if(heroIdx < 0) return null;
  pointerNdc.x = px; pointerNdc.y = py;
  raycaster.setFromCamera(pointerNdc, camera);
  const t = tickets[heroIdx]; if(!t || t.stamped) return null;
  const hits = raycaster.intersectObject(t.mesh, false);
  return hits.length ? t : null;
}
/* Clic sur la pile (au repos) : on saisit la carte du dessus. */
function pickPile(px,py){
  if(heroIdx >= 0) return null;
  pointerNdc.x = px; pointerNdc.y = py;
  raycaster.setFromCamera(pointerNdc, camera);
  const meshes = tickets.filter(t => !t.stamped).map(t => t.mesh);
  if(!meshes.length) return null;
  const hits = raycaster.intersectObjects(meshes, false);
  return hits.length ? tickets[hits[0].object.userData.i] : null;
}

/* ================== Trophees contemplatifs (Cesar / Oscar) ==================
   MEME dynamique que les billets : un clic la PRENT (elle monte devant la
   camera, legerement inclinee pour lire la plaque GRAVEE de son socle), on la
   TOURNE AU POINTEUR comme un billet en main (glisser horizontal = rotation,
   vertical = inclinaison pour voir le socle ou la face), un clic a cote —
   Echap, la molette — la REPOSE sur le comptoir. Changer de statuette est
   SEQUENTIEL : la main est RANGEE au comptoir, et seulement une fois posee
   (at ~ 0) la suivante vient en main. Aucun lien : un trophée digne des
   ceremonies, on le manipule et on le regarde, c'est tout. */
function pickAward(px,py){
  const list = [boothCesar, boothOscar].filter(Boolean);
  if(!list.length || !camera) return null;
  pointerNdc.x = px; pointerNdc.y = py;
  raycaster.setFromCamera(pointerNdc, camera);
  const hits = raycaster.intersectObjects(list, true);   // recursive : les statuettes sont des groupes
  return hits.length ? hits[0].object : null;
}
function awardRoot(obj){                                 // remonte du mesh percute jusqu'a la statuette
  let o = obj;
  while(o){ if(o === boothCesar || o === boothOscar) return o; o = o.parent; }
  return null;
}
function takeAward(g){
  if(!g || awardTaken === g) return;
  awardTaken = g; awardDrag = false; awardNext = null;
  g.userData.dy = g.userData.dx = g.userData.dyc = g.userData.dxc = 0;  // prise toujours a nouveau tout droit
}
function putAward(){
  awardNext = null;                       // on repose aussi la prise eventuellement en attente
  if(!awardTaken) return;
  awardTaken.userData.dy = awardTaken.userData.dx = 0;  // il se redresse en rejoignant le comptoir
  awardTaken = null; awardDrag = false;
}
function hoverTicket(t){
  if(hovered === t) return;
  hovered = t;
}
function doStamp(){
  if(stampingLock || openPanel || detailOpen || boothsClosed || !tickets.length) return;
  const t = tickets[heroIdx];
  if(!t || t.stamped) return;
  stampingLock = true;
  if(hovered === t) hovered = null;
  // 0) on remet d'abord le billet droit, face a nous, puis on tamponne
  t.dragY = 0; t.dragX = 0;
  let waited = 0;
  const stampWhenStraight = () => {
    waited += 90;
    const straight = Math.abs(t.dragYc) < .02 && Math.abs(t.dragXc) < .02;
    if(!straight && waited < 640){ setTimeout(stampWhenStraight, 90); return; }
    // 1) le billet est droit : le tampon tombe dessus, qui reste en grand au premier plan
    shake = .45;
    t.stampAnim = 0.0001; t.stamping = true;
    // 2) une fois tamponne, le billet part dans le fond (il rejoint le rang)
    setTimeout(() => {
      t.stamping = false;
      stampedOrder.push(t.p.id);
      t.stamped = true;
      rowLayout();
      stackLayout();
      // 3) la fiche s'ouvre ; on revient a la pile (le billet a rejoint le mur)
      setTimeout(() => {
        /* try/finally INDISPENSABLE : si l'ouverture de la fiche echouait, stampingLock
           resterait a true et TOUTE l'interaction serait morte jusqu'au rechargement. */
        try{ openDetail(t.p); }
        finally{ toPile(false); stampingLock = false; }
      }, 620);
    }, 760);
  };
  stampWhenStraight();
}

/* ===== Aide a la visee : rayon exact, puis " marge de touche " =====
   Vue de loin (portrait de telephone), une pile de billets posee a plat ne fait que
   quelques pixels de haut et une statuette que quelques pixels de large : le doigt tombe
   a cote, le rayon ne touche rien, et l'objet semble mort. Le rayon exact reste la regle
   premiere ; cette tolerance (un rayon de TAP_RADIUS_PX pixels autour du CENTRE de
   l'objet) ne sert QUE si le rayon n'a rien touche. Sur un ecran large elle ne sert
   jamais : les objets y sont grands. */
const nearNdc = newV3();
function objectNdcPos(obj, out){
  obj.updateWorldMatrix(true, false);
  return out.setFromMatrixPosition(obj.matrixWorld).project(camera);
}
function ndcDeltaPx(px, py, obj){                  // distance ecran (px) entre le doigt et l'objet
  objectNdcPos(obj, nearNdc);
  const s = viewSize();
  return Math.hypot((px - nearNdc.x)*s.w/2, (py - nearNdc.y)*s.h/2);
}
function nearObject(px, py, obj){ return !!obj && ndcDeltaPx(px, py, obj) <= TAP_RADIUS_PX; }
function nearBell(px, py){ return nearObject(px, py, boothBell); }
function nearAward(px, py){                        // statuette la plus proche du doigt
  let best = null, bd = TAP_RADIUS_PX;
  for(const g of [boothCesar, boothOscar]){
    if(!g) continue;
    const d = ndcDeltaPx(px, py, g);
    if(d <= bd){ bd = d; best = g; }
  }
  return best;
}
/* Carte du DESSUS de la pile : le plus grand index encore a tamponner (meme regle que la
   molette). Sert au filet tactile et a la molette. */
function pileTop(){
  for(let i = tickets.length - 1; i >= 0; i--){ if(!tickets[i].stamped && i !== heroIdx) return tickets[i]; }
  return null;
}
/* Evenement " mouse " de compatibilite qui suit de pres un vrai doigt : on l'ignore, sinon
   l'action serait jouee deux fois (la cloche se rouvrirait aussitot, etc.). */
const GHOST_TOUCH_MS = 900;
function isGhostMouse(e){ return e.pointerType === "mouse" && (performance.now() - lastTouchAt) < GHOST_TOUCH_MS; }

/* -- evenements -- */
function onPointerMove(e){
  if(openPanel || !heroActive || detailOpen || stampingLock) return;
  const s = viewSize();
  const px = (e.clientX/s.w)*2-1, py = -(e.clientY/s.h)*2+1;
  if(dragging && lastDrag){
    const dx = e.clientX - lastDrag.x, dy = e.clientY - lastDrag.y;
    lastDrag = {x:e.clientX, y:e.clientY};
    const t = tickets[heroIdx]; if(!t) return;
    t.dragY += dx*.009; t.dragX = clamp(t.dragX + dy*.008, -.4, .4);
    return;
  }
  if(awardDrag && lastDrag){    // trophee en main : glisser = le tourner, comme un billet
    const dx = e.clientX - lastDrag.x, dy = e.clientY - lastDrag.y;
    lastDrag = {x:e.clientX, y:e.clientY};
    const g = awardTaken;
    if(g){
      g.userData.dy += dx*.009;                       // horizontal -> rotation lente sur l'axe
      g.userData.dx = clamp(g.userData.dx + dy*.008, -.4, .4);   // vertical -> inclinaison
    }
    return;
  }
  /* Pas de survol AU DOIGT : un doigt n'est pas une souris, il n'y a pas de curseur, et les
     pointermove qui suivent un appui ne doivent pas allumer les objets sous le doigt. Le
     survol (curseur + mise en avant) reste donc reserve a la souris et au stylet. */
  if(e.pointerType !== "mouse" && e.pointerType !== "pen") return;
  if(boothsClosed){                       // guichet ferme : seul le survol de la cloche compte
    stage.style.cursor = pickBell(px,py) ? "pointer" : "";
    if(hovered){ hovered = null; }
    pileHover = null;
    return;
  }
  if(heroIdx < 0){                       // pile au repos : on survole la pile, la cloche, les trophees ou les billets tamponnes
    if(pickBell(px,py)){ stage.style.cursor = "pointer"; pileHover = null; hoverTicket(null); return; }
    const aw = awardRoot(pickAward(px,py));            // trophees cliquables (prise " comme un billet ")
    if(aw){
      stage.style.cursor = "pointer"; pileHover = null; hoverTicket(null);
      return;
    }
    const pinned = pickTicket(px,py);
    const p = pinned ? null : pickPile(px,py);
    pileHover = p;
    stage.style.cursor = pinned ? "pointer" : (p ? "grab" : "");
    hoverTicket(pinned);
    return;
  }
  // billet en main : les trophees ne repondent pas
  const hitH = pickHero(px,py);
  if(hitH){
    hovered = hitH;
    stage.style.cursor = "grab";
    return;
  }
  const pinned = pickTicket(px,py);      // billets deja tamponnes affiches sur le guichet
  if(pinned){ stage.style.cursor = "pointer"; hoverTicket(pinned); return; }
  if(pickBell(px,py)){ stage.style.cursor = "pointer"; hoverTicket(null); return; }   // cloche sous le curseur
  stage.style.cursor = "";               // cliquable -> revoir l'affiche
  hoverTicket(null);
}
/* ===== Un geste = un doigt, suivi du pose au leve =====
   Debut de geste : on ne joue que les actions qui ont BESOIN de l'appui pour demarrer un
   glisser (saisir le billet en main, saisir une statuette, sortir la carte du dessus).
   Tout le reste (ouvrir une fiche, sonner la cloche, reposer) est mis en ATTENTE et ne
   sera joue qu'au leve, et seulement s'il n'y a pas eu de swipe : c'est ce qui supprime
   les clics accidentels pendant un swipe. */

/* ===== SWIPE VERTICAL : le feuilletage de la pile =====
   Doigt vers le HAUT = billet suivant, vers le BAS = billet precedent. Le vertical est le
   sens de la pile (on pousse les billets) et c'est aussi le sens que la molette et le pave
   tactile envoient deja (deltaY) : doigt et pave avancent donc dans le meme sens.
   Un geste n'est un swipe que s'il est franc, pour ne pas confondre :
     - avec un TOUCHER (ou un clic)  -> il faut un minimum de deplacement ;
     - avec une ROTATION du billet en main (glisser vertical = pencher le billet, qui
       sature a ~50 px) -> ce minimum est large, et un petit glissement lent reste une rotation ;
     - avec un geste de biais -> il faut une nette dominante verticale.
   Renvoie 0 (pas un swipe), 1 (suivant) ou -1 (precedent).
   Fonction PURE (aucun etat) : la regle se verifie toute seule, hors scene. */
const SWIPE_MIN_FRAC = .20, SWIPE_MIN_PX = 64, SWIPE_MAX_PX = 160;   // seuil de deplacement (augmente = moins sensible)
function swipeDir(dx, dy, dt, h){
  const minDy = clamp(h*SWIPE_MIN_FRAC, SWIPE_MIN_PX, SWIPE_MAX_PX); // proportionnel a la hauteur d'ecran
  const adx = Math.abs(dx), ady = Math.abs(dy);
  if(ady < minDy) return 0;                    // trop court : c'est un toucher
  if(ady < adx*1.15) return 0;                 // trop en biais : ce n'est pas un swipe vertical
  if(dt > 1400) return 0;                      // le doigt est reste pose : ce n'est plus un geste
  if(ady/dt < .30 && ady < minDy*1.8) return 0;   // ni vif (coup de doigt) ni franchement long
  return dy < 0 ? 1 : -1;                      // doigt vers le HAUT = suivant
}
function onPointerDown(e){
  unlockMedia();
  if(e.button !== 0 && e.pointerType !== "touch") return;
  if(isGhostMouse(e)) return;                    // evenement " mouse " fantome apres un doigt
  if(e.target.closest("a,button,input,textarea,select,label,#detail,#mobileMenu,#ticketBar")) return;
  if(openPanel || !heroActive || detailOpen || stampingLock) return;
  if(gestureId !== null) return;                 // un seul doigt suivi a la fois
  const s = viewSize();
  const px = (e.clientX/s.w)*2-1, py = -(e.clientY/s.h)*2+1;
  gestureId = e.pointerId;
  pendingTap = null;
  tookAtDown = false;                            // rien saisi pour l'instant (voir plus bas)
  swipeX = e.clientX; swipeY = e.clientY; swipeT = performance.now();
  lastDrag = {x:e.clientX, y:e.clientY};
  const onBell = pickBell(px,py) || nearBell(px,py);
  if(boothsClosed){             // guichet ferme : seule la cloche repond (reouvre les rideaux)
    e.preventDefault();
    if(onBell) pendingTap = toggleCurtains;
    return;
  }
  e.preventDefault();
  if(stage) stage.style.cursor = "";
  if(awardTaken){               // trophee en main : clic dessus = on le saisit pour le tourner, ailleurs = repos
    const a = awardRoot(pickAward(px,py));
    if(a === awardTaken){ awardDrag = true; return; }
    if(a){                       // changement de statuette : on RANGE d'abord celle en main...
      putAward();                // ...elle regagne le comptoir (put-down + descent)...
      awardNext = a;             // ...et celle-ci ne monte QU'UNE FOIS l'autre posee
      return;
    }
    if(onBell) pendingTap = () => { putAward(); toggleCurtains(); };
    else       pendingTap = putAward;
    return;
  }
  if(awardNext){                 // rangement en cours : la prise promise regit les clics
    const a = awardRoot(pickAward(px,py));
    if(a === awardNext) return;  // clic sur la statue promise : on laisse le rangement se derouler
    awardNext = null;            // tout autre geste abandonne la prise en attente...
    if(a){ tookAtDown = true; takeAward(a); return; }   // ... sauf clic sur l'autre : on la prend d'un coup
    if(onBell){ pendingTap = toggleCurtains; return; }
    // ... sinon on poursuit normalement (pile / billet epingle) : le clic n'est pas perdu
  }
  if(pickHero(px,py)){          // on saisit le billet en main (on peut le tourner)
    dragging = true;
    return;
  }
  const t = pickTicket(px,py);     // un billet deja tamponne -> rouvre sa fiche
  if(t){ pendingTap = () => openDetail(t.p); return; }
  if(heroIdx < 0){                 // au repos : on prend la carte du dessus de la pile
    const a = awardRoot(pickAward(px,py)) || nearAward(px,py);
    if(a){ tookAtDown = true; takeAward(a); return; }   // clic (meme approximatif) sur une statuette -> comme un billet
    const p = pickPile(px,py);
    if(p){ tookAtDown = true; showHero(p.i, false); return; }
    const top = pileTop();                 // filet tactile : pile vue de loin = quelques pixels
    if(top && nearObject(px,py,top.group)){ tookAtDown = true; showHero(top.i, false); return; }
    if(onBell) pendingTap = toggleCurtains;   // ... sinon, la cloche ouvre / ferme les rideaux
  } else {                         // clic a cote du billet en main -> on le repose sur la pile
    if(onBell) pendingTap = toggleCurtains;   // la cloche reste prioritaire sur " reposer le billet "
    else       pendingTap = () => toPile(false);
  }
}
/* Fin de geste. Trois issues :
   - SWIPE VERTICAL (au doigt) : doigt vers le haut = billet suivant, vers le bas = precedent.
             Un seul changement par geste (on n'agit qu'ici, au relachement), et le billet en
             main repart bien droit : une navigation ne laisse pas de trace ;
   - TAP   : deplacement minuscule -> on joue l'action mise en attente ;
   - ni l'un ni l'autre (glisser pour TOURNER) : rien, l'objet garde l'orientation donnee.
   On passe par ici pour pointerup ET pour pointercancel / perte de focus : un geste
   interrompu par le navigateur (barre d'URL, changement d'app, doigt qui sort de la
   fenetre) ne doit JAMAIS laisser l'appui " colle ". */
function endGesture(e, cancelled){
  if(gestureId === null) return;                    // aucun geste en cours
  if(e && e.pointerId !== gestureId) return;        // un autre doigt : on ne suit que le premier
  gestureId = null;
  lastDrag = null;
  dragging = false;
  awardDrag = false;                                // relache : le trophee garde l'orientation donnee
  if(stage) stage.style.cursor = "";
  const action = cancelled ? null : pendingTap;     // action differee : elle est abandonnee si swipe
  pendingTap = null;
  if(cancelled) return;
  const dx = (e ? e.clientX : swipeX) - swipeX, dy = (e ? e.clientY : swipeY) - swipeY;
  const dt = Math.max(1, performance.now() - swipeT);
  // le swipe est un geste de DOIGT : a la souris, c'est la molette qui feuillette
  const dir = (e && e.pointerType === "mouse") ? 0 : swipeDir(dx, dy, dt, viewSize().h);
  if(dir && !detailOpen && !openPanel && !stampingLock && !boothsClosed){
    /* Aucun clic ne part : " action " (mise en attente) est abandonnee et le billet en main
       RESTE en main — un feuilletage ne le repose pas sur la pile. */
    if(awardTaken || awardNext){                    // une main = une chose (meme regle que la molette) :
      putAward();                                   // le trophee rejoint le comptoir, le geste s'arrete la
      return;
    }
    /* Si l'appui avait DEJA change de billet (le doigt s'est pose sur la pile, qui occupe le
       centre de l'ecran), le geste a fait son changement : on ne feuillette pas une seconde
       fois. UN GESTE = UN BILLET. Resultat : tant qu'aucun billet n'est en main, un swipe
       (d'un cote comme de l'autre) sort la carte du dessus, ou que le doigt se pose. */
    if(tookAtDown) return;
    const t = tickets[heroIdx];
    if(t){ t.dragY = 0; t.dragX = 0; }              // il repart bien droit
    browseTickets(dir, {force:true});               // +1 = suivant, -1 = precedent (bornes gerees a l'interieur)
    return;
  }
  if(action) action();
}
function onPointerUp(e){ endGesture(e, false); }
function onPointerCancel(e){ endGesture(e, true); }
function onKeyDown(e){
  if(e.key === "Escape"){
    if(openPanel) closePanel();
    else if(detailOpen) closeDetail();
    else if(awardTaken || awardNext) putAward();   // le trophee (ou la mise en attente) rejoint le comptoir
    else if(heroIdx >= 0) toPile(false);
    setMobileMenu(false, true);
    return;
  }
  if(detailOpen){
    // la fiche ouverte : on feuillette les fiches (le defilement du texte reste aux fleches
    // haut / bas, qui ne sont pas interceptees ici)
    if(e.key === "ArrowRight") stepDetail(1);
    if(e.key === "ArrowLeft") stepDetail(-1);
  } else if(!openPanel && !boothsClosed){
    /* Meme navigation que le doigt et la molette : vers le haut (+ pave vers le bas) = suivant.
       La navigation passe par browseTickets, donc les bornes sont gerees au meme endroit. */
    if(e.key === "ArrowUp"    || e.key === "ArrowRight") browseTickets(1);
    if(e.key === "ArrowDown"  || e.key === "ArrowLeft")  browseTickets(-1);
  }
}
/* Sensibilite de la molette / du pave tactile (augmente = MOINS sensible) :
   WHEEL_THRESHOLD : defilement cumule (px) necessaire pour changer de billet
   WHEEL_COOLDOWN  : pause minimale (ms) apres un changement
   WHEEL_QUIET     : tant que la molette / l'inertie du pave continue, la pause est
                     prolongee ; il faut ce silence (ms) pour qu'un nouveau geste compte */
const WHEEL_THRESHOLD = 500, WHEEL_COOLDOWN = 0, WHEEL_QUIET = 0;
let wheelAcc = 0, wheelIdle = 0, wheelCool = 0;
function onWheel(e){
  if(openPanel || detailOpen) return;   // laisse defiler le panneau / la fiche
  if(boothsClosed) return;              // guichet ferme : la molette ne selectionne plus de billet
  // molette peu sensible : il faut un vrai cran (delta cumule) pour changer de billet
  const px = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaMode === 2 ? e.deltaY * viewSize().h : e.deltaY;

  // -- la molette REMPLACE le clic, n'importe ou sur la scene : un cran sort la carte
  //    du dessus de la pile, puis la molette feuillette les billets (sens du defilement).
  e.preventDefault();                    // pas de defilement de page : on feuillette les billets
  if(awardTaken || awardNext){              // une main = une chose : le trophee rejoint le comptoir
    wheelAcc = 0;
    putAward();
    return;
  }
  if(Date.now() < wheelCool){            // un geste = un billet : on laisse le geste (et son inertie) se terminer
    wheelAcc = 0;
    wheelCool = Math.max(wheelCool, Date.now() + WHEEL_QUIET);
    return;
  }
  wheelAcc += px;
  clearTimeout(wheelIdle);
  wheelIdle = setTimeout(() => { wheelAcc = 0; }, 140);   // on oublie quand on s'arrete
  if(Math.abs(wheelAcc) < WHEEL_THRESHOLD) return;           // cran trop leger -> on ignore
  const dir = px > 0 ? 1 : -1;                            // sens du defilement = sens du doigt
  wheelAcc = 0;
  wheelCool = Date.now() + WHEEL_COOLDOWN;                  // anti-repetition pendant un long defilement

  // meme navigation que le doigt : vers le bas / doigt vers le haut = billet suivant.
  // La carte survolee est privilegiee quand aucun billet n'est en main.
  browseTickets(dir, {hover: pileHover ? pileHover.i : -1});
}
function bindWorld(){
  addEventListener("pointermove", onPointerMove, {passive:true});
  addEventListener("pointermove", trackCursor, {passive:true});   // suit le pointeur pour le projecteur
  addEventListener("pointerdown", trackCursor, {passive:true});
  addEventListener("pointerup",   trackCursor, {passive:true});
  addEventListener("pointerdown", onPointerDown);
  addEventListener("pointerup", onPointerUp, {passive:true});
  /* Le doigt peut sortir du canvas, changer d'app ou etre interrompu par le navigateur
     (barre d'URL, appel entrant, geste systeme) : pointercancel (et la perte de focus)
     ferment le geste proprement, sinon l'appui resterait " colle ". */
  addEventListener("pointercancel", onPointerCancel, {passive:true});
  addEventListener("blur", () => endGesture(null, true));
  addEventListener("keydown", onKeyDown);
  addEventListener("wheel", onWheel, {passive:false});
  addEventListener("resize", onResize);
  addEventListener("orientationchange", () => {
    setTimeout(onResize, 150);
    setTimeout(onResize, 300);
    setTimeout(onResize, 500);
  }, {passive:true});   // rotation : iOS redimensionne apres coup
  if(window.visualViewport) visualViewport.addEventListener("resize", onResize, {passive:true});   // barre d'URL mobile
  addEventListener("pointerout", e => { if(!e.relatedTarget) cursorOn = false; }, {passive:true});  // souris sortie de la page
  new IntersectionObserver(es => es.forEach(en => {
    heroActive = en.isIntersecting;
  }), {threshold:.55}).observe($("#hero"));
}
/* Pointeur -> NDC (sert au projecteur du curseur). Au doigt : pas de curseur,
   donc le faisceau ne s'allume que pendant l'appui, puis s'eteint au relachement.
   Sur tactile, le navigateur peut renvoyer un pointermove " mouse " fantome juste
   apres le doigt (evenement de compatibilite) : on l'ignore un court instant. */
function trackCursor(e){
  const touch = e.pointerType === "touch";
  if(touch) lastTouchAt = performance.now();
  if(e.type === "pointerup"){ if(touch) cursorOn = false; return; }
  if(touch && !e.buttons){ cursorOn = false; return; }
  if(!touch && performance.now() - lastTouchAt < 1200){ cursorOn = false; return; }
  const s = viewSize();
  cursorNdc.x = (e.clientX/s.w)*2 - 1;
  cursorNdc.y = -(e.clientY/s.h)*2 + 1;
  cursorOn = true;
}
/* Redimensionnement : on regroupe les evenements (rotation, barre d'URL qui se replie,
   fenetre etiree) en UNE mise a jour par image, au lieu de recalculer toute la scene a
   chaque evenement. On reajuste aussi la densite de pixels si l'ecran en change. */
let resizeQueued = false;
function onResize(){
  if(!renderer || !camera || resizeQueued) return;
  resizeQueued = true;
  requestAnimationFrame(() => {
    resizeQueued = false;
    if(!renderer || !camera) return;
    const dpr = Math.min(devicePixelRatio || 1, 2);          // jamais plus de 2x : leger et net
    if(renderer.getPixelRatio() !== dpr) renderer.setPixelRatio(dpr);
    const v = viewSize();                                    // taille REELLE du canvas (pas innerWidth)
    camera.aspect = v.w/v.h;                                 // ratio exact : aucune deformation
    camera.updateProjectionMatrix();
    renderer.setSize(v.w, v.h, false);                        // le canvas reste plein ecran
    computeLayout();                   // repositionne camera, rang des billets et rideaux
    measureHeroZone();                 // la zone libre a change de taille : le billet en main se recadre
    layoutProjectList();               // la liste des projets : on re-mesure (elle a change de place ?)
    placeBellHint();
  });
}

/* Distances oeil -> objet tenu en main : le billet et les trophees sont contemples
   a la meme distance, donc a la meme echelle apparente. */
const HERO_D  = 1.12;      // billet en main (m)
const AWARD_D = 1.15;      // trophee en main (m)

/* Demi-hauteur / demi-largeur visibles a la distance d (en metres) : sert a calibrer
   tout ce qui est tenu " en main " (billet, trophees) sur la taille reelle de l'ecran,
   pour que rien ne soit jamais coupe quelle que soit la fenetre. */
const viewHalfH = d => Math.tan(camera.fov*Math.PI/360)*d;
const viewHalfW = d => viewHalfH(d)*viewAspect();

/* ================== LE BILLET EN MAIN : LA ZONE UTILE ==================
   Un billet en main doit apparaitre CENTRE dans la zone reellement LIBRE de
   l'ecran : l'ecran MOINS ce que l'interface occupe (barres noires, encoches,
   invite d'etat, bouton STAMP). Et il doit y TENIR entierement.
   On ne touche PAS a la camera : la scene garde son cadrage, ses proportions
   et sa perspective. On CALCULE la position monde du billet pour qu'il tombe
   exactement la ou il doit etre vu (meme methode que la fleche de la cloche :
   on projette, on mesure, on repositionne).
   Sur un GRAND ecran, le cadrage d'origine est deja le bon (le billet reste
   au-dessus du comptoir, comme un billet tenu a la main) : on n'y touche pas.
   La rampe de recentrage est DOUCE : aucun format ne " saute ". */

/* La zone libre, en pixels ecran. MESUREE, jamais devinee : on interroge les
   elements de l'interface (barres noires, invite d'etat) et les encoches. */
let heroZone = null;
function measureHeroZone(){
  const v = viewSize();
  const ins = safeInsets();
  const topBar = cineBarTop ? cineBarTop.getBoundingClientRect().height : 0;
  const botBar = cineBarBottom ? cineBarBottom.getBoundingClientRect().height : 0;
  let top    = topBar + ins.t;                                // barre du haut + encoche
  let bottom = v.h - botBar - ins.b;                           // barre du bas + barre gestuelle
  if(stampMeta && getComputedStyle(stampMeta).visibility !== "hidden"){
    const r = stampMeta.getBoundingClientRect();
    if(r.height) bottom = Math.min(bottom, r.top - 6);         // l'invite d'etat, juste au-dessus
  }
  const left = Math.max(18, ins.l), right = v.w - Math.max(18, ins.r);
  if(bottom - top < 140) top = Math.max(0, bottom - 140);      // filet de securite
  heroZone = {top, bottom, left, right,
              cx:(left+right)/2, cy:(top+bottom)/2,
              w:Math.max(1,right-left), h:Math.max(1,bottom-top)};
  return heroZone;
}

/* Un point ECRAN (px) -> la position MONDE qui s'y projette, sur le plan z du
   billet. Exact : on passe par le repere de la camera, puis on intersecte le
   rayon avec le plan du billet. La perspective est donc respectee au pixel pres. */
const heroRay = newV3();
function worldAtScreen(px, py, zPlane){
  const v = viewSize();
  const tanY = Math.tan(camera.fov*Math.PI/360), tanX = tanY*camera.aspect;
  const ndcX = (px/v.w)*2 - 1, ndcY = -((py/v.h)*2 - 1);
  heroRay.set(ndcX*tanX, ndcY*tanY, -1).applyQuaternion(camera.quaternion);
  const k = (zPlane - camera.position.z)/heroRay.z;
  return {x: camera.position.x + heroRay.x*k, y: camera.position.y + heroRay.y*k, z: zPlane};
}
/* L'inverse : une position monde -> sa place a l'ecran (px). */
const heroTmp = newV3();
function screenAtWorld(x, y, z){
  const v = viewSize();
  heroTmp.set(x,y,z).project(camera);
  return {x:(heroTmp.x+1)*.5*v.w, y:(1-heroTmp.y)*.5*v.h};
}

/* Recentrage : d'autant plus fort que l'ecran est ETROIT (telephone en
   portrait, tablette) ou que la zone libre est BASSE (telephone en paysage).
   Grand ecran : 0 -> le cadrage d'origine est conserve tel quel. */
function heroCenterGain(aspect, zoneH){
  const etroit = clamp((1.30 - aspect)/.45, 0, 1);   // ecran etroit -> 1
  const bas    = clamp((620 - zoneH)/280, 0, 1);     // zone libre tres basse -> 1
  return Math.max(etroit, bas);
}

/* Position de REPOS du billet en main (hors tremblement). Elle sert a trois choses :
   - placer le billet lui-meme (taille ET place) ;
   - dire a la plaque des projets (liste des films) jusqu'ou elle peut descendre sur
     la devanture sans masquer le billet.
   Le billet REMONTE un peu par rapport a sa position d'avant : il se detache
   visuellement du comptoir. Le deplacement est proportionnel a la taille de l'ecran
   (donc discret sur mobile, ou la place manque) et borne : le billet entierement
   dans le cadre, toujours. */
function heroRest(){
  const hh = viewHalfH(HERO_D);                               // demi-hauteur visible au plan du billet
  const hw = viewHalfW(HERO_D);                               // demi-largeur visible
  const aspect = viewAspect();
  const v = viewSize();
  const wf = aspect < .85 ? .90 : .74;                        // on tient le billet dans le cadre
  const fit = Math.min((2*hw*wf)/1.5, (2*hh*.52)/.9);         // jamais coupe, le plus grand possible
  const rise = Math.min(.10, hh*(aspect < .85 ? .075 : .16)); // remontee : forte sur grand ecran, legere sur mobile
  const zone = heroZone || measureHeroZone();
  const zPlane = Math.max(.6, camera.position.z - HERO_D);
  /* 1. la TAILLE : le billet doit TENIR entierement dans la zone libre (qui est
        plus petite que l'ecran : barres, invite, bouton). La remontee est
        comptee dans la place disponible, elle aussi, et on garde 8 px de rab
        (la perspective fait remonter un peu les coins). */
  const risePx = rise*(v.h/(2*hh));                            // la remontee, en pixels ecran
  const fitW = (2*hw*(zone.w/v.w))/1.5;
  const fitH = (2*hh*(zone.h - 2*risePx - 8)/v.h)/.9;
  const scale = Math.max(.05, Math.min(fit, .58, fitW, fitH));   // jamais de billet invisible ni aplati
  /* 2. la POSITION : on part du cadrage d'origine (il suit la parallaxe de la
        camera) et on le corrige vers le CENTRE de la zone libre, d'autant plus
        que le format l'exige. Grand ecran : rien ne bouge. */
  const base = {x:0, y: camBaseY - .14 + rise, z: zPlane};
  const g = heroCenterGain(aspect, zone.h);
  camera.updateMatrixWorld();
  if(g <= 0) return {x:base.x, y:base.y, z:base.z, scale, rise};
  const cur = screenAtWorld(base.x, base.y, base.z);          // l'ancienne place, a l'ecran
  const tgt = {x: zone.cx, y: zone.cy - risePx};               // la cible : centre de la zone, moins la remontee
  const p = worldAtScreen(cur.x + (tgt.x-cur.x)*g, cur.y + (tgt.y-cur.y)*g, zPlane);
  return {x:p.x, y:p.y, z:zPlane, scale, rise};
}

function desired(t, now){
  const h = t.home;
  const isHero = (heroIdx >= 0 && !t.stamped && t.i === heroIdx);
  const isHover = t === hovered;
  let x=h.x, y=h.y, z=h.z, rx=h.rx, ry=h.ry, scale=h.scale, op=1;
  if(t.sway > .01){
    y += Math.sin(now*.7 + t.phase)*.012*t.sway;
    ry += Math.sin(now*.45 + t.phase*1.7)*.03*t.sway;
  }
  if(heroIdx < 0 && t === pileHover){           // pile au repos : la carte du dessus s'offre sous le curseur
    y += .06; z += .06; ry += .05; scale *= 1.05;
  }
  if(isHero){                                   // le billet vintage, en main, bien lisible au-dessus du comptoir
    const hr = heroRest();                                   // position de repos (taille + place + remontee)
    x = hr.x; y = hr.y + Math.sin(now*.6 + t.phase)*.02;
    z = hr.z;
    rx = -.02 + t.dragXc; ry = t.dragYc + Math.sin(now*.4 + t.phase*1.7)*.03;
    scale = hr.scale; op = 1;
  }
  if(isHover){
    if(isHero){ scale *= 1.05; }
    else { y += .12; z += .16; rx += .1; scale *= 1.06; }
  }
  return {x,y,z,rx,ry,scale,op};
}

/* ================== Boucle de rendu ================== */
/* Une passe d'image = une petite fonction nommee, une seule responsabilite. startLoop()
   ne fait que les enchainer dans l'ordre : camera, poussieres, rideaux, projecteur du
   curseur, halo de la pile, trophees, billets — puis le rendu. */

/* Parallaxe du pointeur + secousse (impact de tampon), appliquees a la camera. */
function updateCamera(){
  camera.position.x += (pointerNdc.x*.18 - camera.position.x)*.04;
  camera.position.y += (camBaseY + pointerNdc.y*.06 - camera.position.y)*.06;
  if(shake > 0){
    camera.position.x += (Math.random()-.5)*shake*.09;
    camera.position.y += (Math.random()-.5)*shake*.09;
    shake *= .86;
  }
  camera.lookAt(0, camLookY, 0);
}

/* Poussieres : lente montee dans le faisceau du projecteur. */
function updateDust(){
  const pos = dustPts.geometry.attributes.position;
  for(let i=0;i<pos.count;i++){
    pos.array[i*3+1] += .0015;
    if(pos.array[i*3+1] > 6.5) pos.array[i*3+1] = -1.5;
  }
  pos.needsUpdate = true;
}

/* Rideaux ouverts <-> fermes (bascule par la cloche) + eclairage du guichet qui en decoule. */
function updateCurtains(now){
  const cT = boothsClosed ? 1 : 0;
  curtainT += (cT - curtainT)*.055;
  if(Math.abs(curtainT - cT) < .0015) curtainT = cT;
  if(boothCurtains.length) layoutCurtains();
  applyCurtainLighting();
  // rideau ferme : la cloche " respire " (halo pulsant) -> on comprend qu'un clic l'ouvre
  if(bellGlow && curtainT > .02) bellGlow.material.opacity *= .78 + .22*Math.sin(now*2.6);
  if(bellHint){
    placeBellHint();                                   // la fleche suit la cloche (parallaxe de la camera comprise)
    bellHint.classList.toggle("show", curtainT > .45);
  }
}

/* Halo de la pile : tres visible au repos (attire l'oeil), discret lorsqu'un billet est en
   main, eteint rideaux fermes (plus rien n'eclaire la pile). */
function updatePileGlow(now){
  const rest = heroIdx < 0;
  const glowTarget = ((rest ? .78 : .14) + (rest ? Math.sin(now*1.6)*.12 : 0)) * (1 - curtainT);
  pileGlow.material.opacity += (glowTarget - pileGlow.material.opacity)*.08;
  pileGlow.scale.setScalar(1 + (rest ? Math.sin(now*1.6)*.05 + .05 : 0));
}

/* Trophees : posee au comptoir <-> en main (meme souplesse que le billet), source " studio "
   qui les suit, et changement de statuette SEQUENTIEL (awardNext n'aboutit qu'une fois la
   precedente entierement reposee). */
function updateAwards(now){
  let heldAward = null, heldT = 0;                      // trophee reellement en main (pour la source studio)
  [boothCesar, boothOscar].forEach(o => {
    if(!o) return;
    const h = o.userData.home; if(!h) return;
    const goal = (o === awardTaken) ? 1 : 0;
    // montee / descente en douceur (le rangement presse un peu pendant un changement de statuette)
    o.userData.at += (goal - o.userData.at)*(awardNext ? .20 : .12);
    const t = o.userData.at < .0025 ? 0 : o.userData.at;
    if(o === awardTaken && t > 0){ heldAward = o; heldT = t; }
    if(t > 0 && camera){
      const hh = viewHalfH(AWARD_D);                    // demi-hauteur visible a cette distance
      const s = Math.min(hh*1.16/o.userData.hLocal, viewHalfW(AWARD_D)*.55/o.userData.wLocal);
      o.position.set(0, camBaseY + .05 - o.userData.hLocal*s*.46 + Math.sin(now*.8)*.012*t,
                     Math.max(.5, camera.position.z - AWARD_D));
      // pose contemplative par defaut (leger penchant pour lire la plaque GRAVEE du socle
      // + tournoiement lent), a laquelle s'ajoutent les angles donnes au pointeur — comme
      // pour le billet en main
      const u = o.userData;
      u.dyc += (u.dy - u.dyc)*.22;                      // lissage, identique au billet
      u.dxc += (u.dx - u.dxc)*.22;
      o.rotation.set(-.18*t + u.dxc, Math.sin(now*.5)*.20*t + u.dyc, 0);
      o.scale.setScalar(h.scale + (s - h.scale)*t);
    } else {
      o.position.set(h.x, h.y, h.z);
      o.rotation.set(0, h.ry || 0, 0);
      o.scale.setScalar(h.scale);
    }
  });
  // source " studio " : elle ne s'allume que pour le trophee en main et le suit
  // (position + cible recalculees a chaque frame ; cible = le corps, pas le socle)
  if(awardSpot){
    const want = heldAward ? 1.05*heldT : 0;
    awardSpot.intensity += (want - awardSpot.intensity)*.10;
    if(awardSpot.intensity < .01){ awardSpot.intensity = 0; awardSpot.visible = false; }
    else if(heldAward){                            // la source ne s'allume que pour le trophee EN MAIN
      awardSpot.visible = true;
      heldAward.getWorldPosition(awardSpotV);
      awardSpotV.y += heldAward.userData.hLocal*.42;        // on vise le torse / la compression
      awardSpot.position.set(awardSpotV.x*.30, awardSpotV.y + .62, camera.position.z - .45);
      awardSpot.target.position.copy(awardSpotV);
      awardSpot.target.updateMatrixWorld();
    }else{
      // le trophee vient d'etre repose : plus rien a viser, la source s'eteint
      // (son intensite descend toute seule — avant, ce chemin levait une erreur
      //  et le rendu se figeait le temps que la lumiere s'eteigne).
      awardSpot.visible = false;
    }
  }
  // la plaque d'un trophee passe en version " eclairee " des que le trophee est
  // pris en main (la gravure ressort sous la source studio) et rebascule quand
  // il repose. Bascule a mi-course : le changement passe inapercu.
  [boothCesar, boothOscar].forEach(o => {
    if(!o) return;
    const lit = o.userData.at > .5;
    if(lit !== o.userData.plateLit){
      o.userData.plateLit = lit;
      setPlateLit(o, lit);
    }
  });
  if(awardNext && !awardTaken){
    const rest = [boothCesar, boothOscar].every(o => !o || o.userData.at < .0025);
    if(rest) takeAward(awardNext);              // le rangement est fini : on prend la suivante
  }
}

/* Billets : lissage de la pose visee, apparition du tampon, du cadre laiton et de la punaise. */
function updateTickets(now, dt, frame){
  for(const t of tickets){
    t.dragYc += (t.dragY - t.dragYc)*.22;
    t.dragXc += (t.dragX - t.dragXc)*.22;
    const isStack = !t.stamped && t.i !== heroIdx;   // billets poses en pile : pile fixe et plate
    const swayGoal = (isStack || t===hovered) ? 0 : 1;
    t.sway += (swayGoal - t.sway)*.05;
    if(t.stampAnim > 0 && t.stampAnim < 1){
      t.stampAnim = Math.min(1, t.stampAnim + dt*3.2);
      if(t.stampAnim >= 1) t.stampDone = true; // tampon definitivement appose
      drawFront(t, false);
      drawBack(t, false);
    }
    const d = desired(t, now);
    t.cx = lerp(t.cx,d.x,.16); t.cy = lerp(t.cy,d.y,.16); t.cz = lerp(t.cz,d.z,.16);
    t.crx = lerp(t.crx,d.rx,.16); t.cry = lerp(t.cry,d.ry,.16);
    t.cs = lerp(t.cs,d.scale,.16); t.cop = lerp(t.cop,d.op,.12);
    t.group.position.set(t.cx,t.cy,t.cz);
    t.group.rotation.set(t.crx,t.cry,0);
    t.group.scale.setScalar(t.cs);
    t.frontMat.opacity = t.backMat.opacity = t.edgeMat.opacity = t.cop;
    // cadre laiton + punaise : on attend que le billet soit arrive au mur, puis on les
    // fait apparaitre en douceur - ils ne peuvent plus etre masques ni clignoter.
    if(t.stamped && !t.pinnedIn){
      const gx = t.cx - t.home.x, gy = t.cy - t.home.y, gz = t.cz - t.home.z;
      if(gx*gx + gy*gy + gz*gz < .03) t.pinnedIn = true;
    }
    const frameTarget = (t.stamped && t.pinnedIn) ? 1 : 0;
    t.frameOp += (frameTarget - t.frameOp)*.14;
    t.frameMat.opacity = t.pinMat.opacity = t.frameOp;
    if(t.hasVideo && (t===hovered || t.i===heroIdx || (t.stampAnim>0 && t.stampAnim<1)) && (frame & 3) === 0){
      drawFront(t, false); drawBack(t, false);
    }
  }
}

function startLoop(){
  let frame = 0, prevMs = performance.now();
  (function loop(){
    requestAnimationFrame(loop);
    const now = performance.now()/1000;                        // temps courant (s)
    const dt  = Math.min((now - prevMs/1000) || .016, .05);    // pas de temps, borne (s)
    prevMs = performance.now();
    frame++;
    if(document.hidden) return;

    updateCamera();
    updateDust();
    updateCurtains(now);
    placeCursorBeam(dt);       // projecteur du curseur : faisceau qui eclaire le point vise
    updatePileGlow(now);
    updateAwards(now);
    updateTickets(now, dt, frame);
    placeProjectList();        // la plaque des projets reste collee au bois du guichet

    renderer.render(scene, camera);
    if((frame & 31) === 0) updateClock();       // horloge de la cabine : heure locale (2 x/s)
    if((frame & 63) === 63) ticketWatchdog();   // ~1 x/s : un billet ne reste jamais transparent
  })();
}

function ticketWatchdog(){
  for(const t of tickets){
    try{
      if(t.frontCtx){
        const d = t.frontCtx.getImageData(12,12,1,1).data;   // zone papier (hors bande accent)
        if(d[3] < 8) drawFront(t, false);                    // canvas vide -> repeint
      }
      if(t.backCtx){
        const d2 = t.backCtx.getImageData(12,12,1,1).data;
        if(d2[3] < 8) drawBack(t, false);
      }
    }catch(_){ /* canvas tainted : deja peint, lecture bloquee, rien a faire */ }
  }
}

/* ================== Fiche film (le " film ") ================== */
function figureHtml(spec){
  const info = getMedia(spec.src);
  if(info.kind === "missing"){
    return `<figure><div class="detail-empty">PHOTO <b>PLACE RESERVED</b><br>IMAGE COMING SOON - 16:10<br>Drop <b>${spec.src}</b> into <b>assets/</b></div><figcaption>${spec.cap}</figcaption></figure>`;
  }
  return info.kind === "video"
    ? `<figure><video src="${spec.src}" controls muted loop playsinline preload="metadata"></video><figcaption>${spec.cap}</figcaption></figure>`
    : `<figure><img src="${spec.src}" alt="${spec.cap}" loading="lazy"><figcaption>${spec.cap}</figcaption></figure>`;
}
function openDetail(p){
  if(!p) return;
  detailOpen = true;
  document.body.classList.add("detail-open");     // masque les invites du guichet
  detailSheet.style.setProperty("--accent", p.accent);
  $("#dRoom").textContent = `${ROOMS[p.id]} * SCREENING`;
  const dIdx = ORDER.indexOf(p.id);
  if($("#dCount")) $("#dCount").textContent = `${dIdx + 1} / ${ORDER.length}`;
  $("#dKicker").textContent = [p.domain, p.year].filter(Boolean).join(" \u2022 ");
  $("#dTitle").textContent = p.title;
  $("#dTagline").textContent = p.tagline;
  $("#dHeadline").textContent = p.headline;
  /* AFFICHE EPUREE : uniquement des informations REELLES sur le projet.
     Les metadonnees de cinema fictives (SHOWTIME, ticket n°) ne sont PAS reprises
     ici - elles n'ont de sens que sur les TICKETS (decoration).
     On garde : le domaine, l'annee, le role et les outils reellement utilises. */
  $("#dMeta").innerHTML = [
    ["DOMAIN", p.domain],
    ["YEAR", p.year],
    ["ROLE", p.role],
    ["TOOLS", (p.tools || []).join(" \u00b7 ")],
  ].filter(m => m[1]).map(m => `<div><dt>${m[0]}</dt><dd><strong>${m[1]}</strong></dd></div>`).join("");
  // medias dedupliques
  const seen = [], figs = [];
  [p.front, p.back].forEach(m => { if(!seen.includes(m.src)){ seen.push(m.src); figs.push(m); } });
  $("#dMedia").innerHTML = figs.length === 1
    ? figureHtml(figs[0]).replace(/^<figure>/, '<figure class="span2">')
    : figs.map(figureHtml).join("");
  let body = p.blurb ? `<h5>SYNOPSIS</h5><p>${p.blurb}</p>` : "";
  body += p.sections.map(s => {
    if(s.flowchart) {
      if(s.flowchart === 'steps') {
        const steps = s.steps || [];
        const mid = 'arrFlow-' + p.id;
        const flowDefs = `<defs><marker id="${mid}" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L6,3 L0,6 Z" /></marker></defs>`;
        const isWeather = p.id === 'weather';
        let out = '';
        for(let i=0;i<steps.length;i++){
          const step = steps[i];
          if(step && step.type === 'decision'){
            const branches = step.branches || [];
            const yes = branches.find(b => /yes/i.test(b.label||'')) || branches[0] || {};
            const no  = branches.find(b => /no/i.test(b.label||''))  || branches[1] || {};
            if(isWeather){
              out += `<div class="flow-v"><div class="flow-node flow-node--accent" style="border-style:dashed"><div class="flow-step">${step.t}</div><div class="flow-label">${step.d||''}</div></div></div>`;
              out += `<div class="flow-split-wrap" aria-hidden="true"><svg class="flow-split-svg" width="100%" height="44">${flowDefs}<line x1="50%" y1="0" x2="50%" y2="16" /><line x1="50%" y1="16" x2="25%" y2="16" /><line x1="50%" y1="16" x2="75%" y2="16" /><line x1="25%" y1="16" x2="25%" y2="38" marker-end="url(#${mid})" /><line x1="75%" y1="16" x2="75%" y2="38" marker-end="url(#${mid})" /></svg></div>`;
              out += `<div class="flow-v-branch-row"><div class="flow-v-branch"><div class="flow-pill flow-pill--no">${no.label||'No'}</div><div class="flow-branch-conn" aria-hidden="true"><svg class="flow-branch-svg" width="12" height="18"><line x1="6" y1="0" x2="6" y2="14" marker-end="url(#${mid})" /></svg></div><div class="flow-node flow-node--accent"><div class="flow-step">${no.t||''}</div><div class="flow-label">${no.d||''}</div></div></div><div class="flow-v-branch"><div class="flow-pill flow-pill--yes">${yes.label||'Yes'}</div><div class="flow-branch-conn" aria-hidden="true"><svg class="flow-branch-svg" width="12" height="18"><line x1="6" y1="0" x2="6" y2="14" marker-end="url(#${mid})" /></svg></div><div class="flow-node flow-node--accent"><div class="flow-step">${yes.t||''}</div><div class="flow-label">${yes.d||''}</div></div></div></div>`;
              out += `<div class="flow-merge-wrap" aria-hidden="true"><svg class="flow-merge-svg" width="100%" height="44"><line x1="25%" y1="0" x2="25%" y2="16" /><line x1="75%" y1="0" x2="75%" y2="16" /><line x1="25%" y1="16" x2="75%" y2="16" /><line x1="50%" y1="16" x2="50%" y2="38" marker-end="url(#${mid})" /></svg></div>`;
              i++;
              const mergeStep = steps[i];
              if(mergeStep){
                out += `<div class="flow-v-end"><div class="flow-node flow-node--final"><div class="flow-step">${mergeStep.t}</div><div class="flow-label">${mergeStep.d||''}</div></div></div>`;
              }
              continue;
            } else {
              out += `<div class="flow-v"><div class="flow-node flow-node--accent" style="border-style:dashed"><div class="flow-step">${step.t}</div><div class="flow-label">${step.d||''}</div></div></div>`;
              out += `<div class="flow-arrow flow-arrow--down" aria-hidden="true"><svg class="flow-arrow-svg" viewBox="0 0 12 28">${flowDefs}<path d="M6 0 L6 22" marker-end="url(#${mid})" /></svg></div><div class="flow-split-wrap" aria-hidden="true"><svg class="flow-split-svg" width="100%" height="44"><line x1="50%" y1="0" x2="50%" y2="16" /><line x1="50%" y1="16" x2="25%" y2="16" /><line x1="50%" y1="16" x2="75%" y2="16" /><line x1="25%" y1="16" x2="25%" y2="38" marker-end="url(#${mid})" /><line x1="75%" y1="16" x2="75%" y2="38" marker-end="url(#${mid})" /></svg></div>`;
              out += `<div class="flow-v-branch-row"><div class="flow-v-branch"><div class="flow-pill flow-pill--no">${no.label||'No'}</div><div class="flow-branch-conn" aria-hidden="true"><svg class="flow-branch-svg" width="12" height="18"><line x1="6" y1="0" x2="6" y2="14" marker-end="url(#${mid})" /></svg></div><div class="flow-node flow-node--accent"><div class="flow-step">${no.t||''}</div><div class="flow-label">${no.d||''}</div></div></div><div class="flow-v-branch"><div class="flow-pill flow-pill--yes">${yes.label||'Yes'}</div><div class="flow-branch-conn" aria-hidden="true"><svg class="flow-branch-svg" width="12" height="18"><line x1="6" y1="0" x2="6" y2="14" marker-end="url(#${mid})" /></svg></div><div class="flow-node flow-node--accent"><div class="flow-step">${yes.t||''}</div><div class="flow-label">${yes.d||''}</div></div></div></div>`;
              out += `<div class="flow-merge-wrap" aria-hidden="true"><svg class="flow-merge-svg" width="100%" height="44"><line x1="25%" y1="0" x2="25%" y2="16" /><line x1="75%" y1="0" x2="75%" y2="16" /><line x1="25%" y1="16" x2="75%" y2="16" /><line x1="50%" y1="16" x2="50%" y2="38" marker-end="url(#${mid})" /></svg></div>`;
              i++;
              const mergeStep = steps[i];
              if(mergeStep){
                out += `<div class="flow-v-end"><div class="flow-node flow-node--final"><div class="flow-step">${mergeStep.t}</div><div class="flow-label">${mergeStep.d||''}</div></div></div>`;
              }
              continue;
            }
          }
          if(isWeather){
            const last = i === steps.length - 1;
            const cls = i === 0 ? "flow-node flow-node--black" : (last ? "flow-node flow-node--final" : "flow-node flow-node--accent");
            out += `<div class="flow-v"><div class="${cls}"><div class="flow-step">${step.t}</div><div class="flow-label">${step.d||''}</div></div>`;
            if(!last){ out += `<div class="flow-arrow flow-arrow--down" aria-hidden="true"><svg class="flow-arrow-svg" viewBox="0 0 12 28">${i===0?flowDefs:''}<path d="M6 0 L6 22" marker-end="url(#${mid})" /></svg></div></div>`; } else { out += `</div>`; }
            continue;
          }
          const last = i === steps.length - 1;
          const cls = i === 0 ? "flow-node flow-node--start" : (last ? "flow-node flow-node--end flow-node--final" : "flow-node flow-node--accent");
          out += `<div class="flow-v"><div class="${cls}"><div class="flow-step">${i===0?'':('Step '+(i+1)+' — ')}${step.t}</div><div class="flow-label">${step.d||''}</div></div>`;
          if(!last){ out += `<div class="flow-arrow flow-arrow--down" aria-hidden="true"><svg class="flow-arrow-svg" viewBox="0 0 12 28">${i===0?flowDefs:''}<path d="M6 0 L6 22" marker-end="url(#${mid})" /></svg></div></div>`; } else { out += `</div>`; }
        }
        return `<h5>${s.h}</h5><div class="flowchart flowchart--vert" role="group" aria-label="${p.title === 'WeatherApp' ? 'WeatherApp flowchart vertical' : p.title + ' pipeline'}"><div class="flow-v flow-v--steps">${out}</div></div>`;
      }
    }
    if(s.list) {
      return `<h5>${s.h}</h5><ul>${s.list.map(li => `<li>${li}</li>`).join("")}</ul>`;
    }
    if(Array.isArray(s.p)) {
      return `<h5>${s.h}</h5>${s.p.map(par => `<p>${par.replace(/\n/g,'<br>')}</p>`).join("")}`;
    }
    return `<h5>${s.h}</h5><p>${(s.p||'').replace(/\n/g,'<br>')}</p>`;
  }).join("");
  $("#dBody").innerHTML = body;
  detail.classList.add("open"); detail.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
  if(detailScroll) detailScroll.scrollTop = 0;
  // le focus entre dans la fiche : la touche Echap et le clavier fonctionnent tout de suite
  const back = detail.querySelector("[data-close]");
  if(back) back.focus();
  updateProjectListActive();
}
function closeDetail(){
  detailOpen = false;
  document.body.classList.remove("detail-open");  // les invites du guichet reviennent
  detail.classList.remove("open"); detail.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
  updateProjectListActive();
}
function stepDetail(dir){
  if(!detailOpen) return;
  const cur = PROJECTS.find(p => p.title === $("#dTitle").textContent);
  const idx = cur ? ORDER.indexOf(cur.id) : 0;
  openDetail(PROJECTS[(idx + dir + PROJECTS.length) % PROJECTS.length]);
}

/* ================== Panneaux plein ecran (A propos / Contact) ================== */
let panelEls = null;
function initPanels(){
  panelEls = new Map();
  $$(".panel").forEach(el => {
    panelEls.set(el.id, el);
    /* bouton FERMER des panneaux (indispensable au doigt : sur telephone le
       header z-index 360 est sous le panneau z-index 400, donc rien d'autre
       n'offre de sortie visible que la touche Echap) */
    $$("[data-close]", el).forEach(b => b.addEventListener("click", closePanel));
  });
}
function openPanelById(id){
  if(!panelEls) return;
  const el = panelEls.get(id);
  if(!el) return;
  if(openPanel && openPanel !== el) openPanel.classList.remove("open");
  openPanel = el;
  el.scrollTop = 0;
  const body = el.querySelector(".panel-body"); if(body) body.scrollTop = 0;
  el.classList.add("open");
  document.body.classList.add("panel-open");
  $$(".reveal", el).forEach(r => r.classList.add("in"));   // contenu deja revele
  if(id === "about") el.classList.add("skills-on");
}
function closePanel(){
  if(!openPanel) return;
  openPanel.classList.remove("open");
  openPanel = null;
  document.body.classList.remove("panel-open");
}

/* ================== Secours sans WebGL : les six fiches restent accessibles ================== */
function buildNoWebgl(){
  const box = $("#noWebglList");
  if(!box) return;
  box.innerHTML = PROJECTS.map(p =>
    `<button class="nw-film" data-fiche="${p.id}">${p.num} - ${p.title} <span>${p.year}</span></button>`).join("");
  box.querySelectorAll("[data-fiche]").forEach(b =>
    b.addEventListener("click", () => openDetail(PROJECTS.find(p => p.id === b.dataset.fiche))));
}

/* ================== Menu mobile : ouverture / fermeture ================== */
/* Le menu est un <nav> plein ecran : on tient a jour son etat pour les lecteurs d'ecran
   (aria-hidden) et celui du bouton MENU (aria-expanded), et on rend le focus au bouton
   quand on ferme au clavier. */
function setMobileMenu(open, focusBack){
  const m = $("#mobileMenu"), b = $("#menuBtn");
  if(!m) return;
  m.classList.toggle("open", open);
  m.setAttribute("aria-hidden", String(!open));
  if(b) b.setAttribute("aria-expanded", String(open));
  if(open){ const first = m.querySelector("a,button"); if(first) first.focus(); }
  else if(focusBack && b) b.focus();
}

/* ================== HUD classique (grain, timecode, reveal...) ================== */
function initHud(){
  initPanels();

  /* grain : petit bitmap etire par le CSS (jamais plus d'un demi-ecran, et plafonne en
     pixels pour que le tirage aleatoire reste bon marche sur un grand ecran). */
  const cg = grain.getContext("2d");
  const GRAIN_PX = 460*260;                      // budget de pixels de bruit (~120 k)
  const sizeG = () => {
    const v = viewSize();                        // taille reelle du canvas (et non innerWidth)
    const k = Math.min(.5, Math.sqrt(GRAIN_PX/(v.w*v.h)));
    grain.width  = Math.max(1, Math.round(v.w*k));
    grain.height = Math.max(1, Math.round(v.h*k));
  };
  sizeG(); addEventListener("resize", sizeG);
  setInterval(() => {
    if(document.hidden) return;                  // onglet en arriere-plan : aucun calcul
    const d = cg.createImageData(grain.width, grain.height), b = d.data;
    for(let i=0;i<b.length;i+=4){ const v=Math.random()*255|0; b[i]=b[i+1]=b[i+2]=v; b[i+3]=30; }
    cg.putImageData(d,0,0);
  }, 130);

  /* timecode */
  const tc = $("#timecode"); let f = 0;
  setInterval(() => {
    if(document.hidden) return;
    f = (f+1)%24;
    const t = performance.now()/1000|0;
    const hh=String(t/3600|0).padStart(2,"0"), mm=String((t/60|0)%60).padStart(2,"0"),
          ss=String(t%60).padStart(2,"0"), ff=String(f).padStart(2,"0");
    tc.textContent = `${hh}:${mm}:${ss}:${ff}`;
  }, 1000/24);

  /* reveal */
  const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add("in")), {threshold:.12});
  $$(".reveal").forEach(el => io.observe(el));
  $$("[data-split] h2").forEach(h => {
    const walk = node => [...node.childNodes].forEach(n => {
      if(n.nodeType === 3){
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(part => {
          if(!part) return;
          if(/^\s+$/.test(part)){ frag.appendChild(document.createTextNode(" ")); return; }
          const w = document.createElement("span"); w.className="w";
          const wi = document.createElement("span"); wi.className="wi"; wi.textContent = part;
          w.appendChild(wi); frag.appendChild(w);
        });
        node.replaceChild(frag,n);
      } else if(n.nodeType === 1) walk(n);
    });
    walk(h);
    [...h.querySelectorAll(".wi")].forEach((wi,i) => wi.style.transitionDelay = (i*45)+"ms");
  });

  /* skills */
  const skillsBox = $(".about-skills");
  if(skillsBox){
    let counted = false;
    const countUp = () => {
      if(counted) return; counted = true;
      skillsBox.classList.add("skills-on");
      $$("[data-count]", skillsBox).forEach(b => {
        const target = +b.dataset.count, t0 = performance.now(), dur = 1300;
        (function step(t){
          const p = Math.min(1,(t-t0)/dur), e = 1-Math.pow(1-p,3);
          b.textContent = Math.round(target*e);
          if(p<1) requestAnimationFrame(step);
        })(t0);
      });
    };
    new IntersectionObserver((es,o) => es.forEach(e => e.isIntersecting && (countUp(), o.disconnect())), {threshold:.3}).observe(skillsBox);
  }

  /* menu mobile */
  $("#menuBtn").addEventListener("click", () => setMobileMenu(true));
  $("#menuClose").addEventListener("click", () => setMobileMenu(false, true));
  $$("#mobileMenu a").forEach(a => a.addEventListener("click", () => setMobileMenu(false)));

  /* l'invite sous la cloche est un vrai bouton : elle sonne la cloche, ce qui donne
     aussi un moyen d'ouvrir le guichet au clavier */
  if(bellHint) bellHint.addEventListener("click", () => { if(boothsClosed) toggleCurtains(); });

  /* liens internes : #top -> guichet, sections -> panneaux plein ecran */
  $$('a[href^="#"]').forEach(a => a.addEventListener("click", e => {
    const href = a.getAttribute("href");
    if(!href || href.length < 2) return;
    const tgt = document.getElementById(href.slice(1));
    if(!tgt) return;
    e.preventDefault();
    setMobileMenu(false);
    if(tgt.classList.contains("panel")) openPanelById(tgt.id);
    else closePanel();                                   // #top -> retour au guichet
  }));

  /* boutons magnetiques */
  if(matchMedia("(hover:hover)").matches) $$(".magnetic").forEach(b => {
    b.addEventListener("mousemove", e => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX-r.left-r.width/2)*.15}px,${(e.clientY-r.top-r.height/2)*.25}px)`;
    });
    b.addEventListener("mouseleave", () => b.style.transform = "");
  });

  /* ticket actif */
  $("#stampBtn").addEventListener("click", doStamp);

  /* fiche film */
  $$("[data-close]", detail).forEach(b => b.addEventListener("click", closeDetail));
  const dPrevBtn = $("#dPrev"), dNextBtn = $("#dNext");
  if(dPrevBtn) dPrevBtn.addEventListener("click", () => stepDetail(-1));
  if(dNextBtn) dNextBtn.addEventListener("click", () => stepDetail(1));
}

/* ================== Boot ================== */
async function fontsReady(){
  try{
    await Promise.race([
      Promise.all([
        document.fonts.load("90px Anton"),
        document.fonts.load("600 22px Archivo"),
        document.fonts.load("italic 26px \"Playfair Display\""),
        document.fonts.load("700 88px \"Playfair Display\""),
      ]),
      new Promise(r => setTimeout(r, 6000)),      // garde-fou : CDN bloque, on n'attend pas indefiniment
    ]);
  }catch(e){ /* fonts blocked: carry on with fallback fonts */ }
  fontsLoaded = true; updateLoaderProgress();
}
async function boot(){
  /* On lance en parallele : prechargement des medias, des rendus de plaque, des
     polices, et (au plus tot) la construction de la scene, pour que le compte a
     rebours ait le moins a attendre. */
  const assets = preloadAll();
  const plates = preloadPlates();
  const fonts  = fontsReady();
  await Promise.all([assets, plates, fonts]);
  if(buildStarted) return; buildStarted = true;
  try{
    if(typeof window === "undefined" || typeof window.THREE === "undefined"){
      throw new Error("THREE missing");
    }
    initHud();
    buildProjectList();
    buildNoWebgl();
    try{
      const canvas = document.getElementById('stage');
      if(canvas){
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if(!gl) throw new Error("WebGL missing");
      }
    }catch(glErr){
      throw glErr;
    }
    buildScene();
  }catch(e){
    // une etape a echoue (3D, HUD...) : on n'expose pas une scene inutilisable,
    console.error("[box office] boot step failed", e);
    if(noWebgl){
      noWebgl.hidden = false;
    }
    if(document.body){
      document.body.removeAttribute('data-loading');
      document.body.removeAttribute('aria-busy');
    }
    loaderDone = true;
    const loader = document.getElementById('loader');
    if(loader){ loader.style.opacity='0'; loader.style.visibility='hidden'; loader.style.pointerEvents='none'; }
  }finally{
    /* QUOI QU'IL ARRIVE, la barre inferieure est visible : c'est ELLE qui porte la
       LISTE des projets (et l'invite " SCROLL TO CHOOSE A TICKET "). Si la scene 3D
       a echoue ou si WebGL est indisponible, buildScene() s'arrete avant d'afficher
       la barre : sans ce filet, les projets et le STAMP disparaissaient. */
    syncHandUI();
    updateProjectListActive();
    sceneBuilt = true; maybeFinish();              // scene prete (ou repli) -> le loader se libere
  }
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", boot) : boot();
console.log("%c LL PICTURES - THE BOX OFFICE %c 6 tickets on the counter. Hover, click, spin, stamp. ", "background:#e03131;color:#fff", "background:#111;color:#efe9dc");