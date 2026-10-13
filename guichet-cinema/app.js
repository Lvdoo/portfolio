/* ===================================================================
   LUDO LA BETE - LE GUICHET - portfolio cinema 3D (Three.js)
   Chaque ticket = un projet. Survole -> clique -> tourne le ticket ->
   tamponne-le -> la fiche " film " s'ouvre.
   =================================================================== */

/* -- CONFIG - * modifie ici : email, nom, liens, son -- */
const CONFIG = {
  name: "Ludovic LI",
  email: "LUDO.CREATIVE@EMAIL.COM", // <- remplace par le vrai email
  github: "https://github.com/Lvdoo",
  sound: true,
};

/* -- LES 6 FILMS (projets) ------------------------------------------
   front / back = media du ticket (recto / verso).
   Pas encore de fichier ? L'emplacement " VISUEL A VENIR " s'affiche.
   Depose le fichier au bon nom dans assets/ et il apparait tout seul. */
const PROJECTS = [
  {
    id:"terubot", num:"001", title:"TeruBot", accent:"#e03131",
    domain:"Social robotics - Installation", year:"2025", role:"Prototyping - Code - Electronics",
    genre:"Ensemble film - soft sci-fi", duration:"77 MIN", seance:"SHOWTIME 9:00 PM",
    tools:["Arduino","KiCad","Sensors","Realtime"],
    front:{src:"assets/terubot-demo.mp4", cap:"TRAILER - WORKSHOP DEMO"},
    back:{src:"assets/terubot-demo.mp4", cap:"WORKSHOP DEMO (REPRISE)"},
    tagline:"The robot that makes a group's mood visible to everyone.",
    blurb:"TeruBot turns a group's emotions into a physical, interactive representation. Inspired by the Japanese Teru Teru Bozu, it visualises the collective emotional mood in a simple, playful and intuitive way.",
    headline:"'A film about collective emotions'",
    sections:[
      {h:"SYSTEM INTENT", list:["Readable from 3 metres away: one emotion = one colour / one movement.","No screen: the feedback is the robot's body.","Collective ritual: everyone contributes, everyone understands."]},
      {h:"PROTO", p:"Sensors -> microcontroller -> actuators + light. Schematics and PCB in KiCad (Test / HMA Rendu1 folder), filmed iterations - including the assets/terubot-demo.mp4 demo."},
      {h:"KEY TAKEAWAY", p:"Testing with real groups changed everything: the emotion -> movement mapping was simplified 3 times so an 8-year-old could still follow it."},
    ],
    link: CONFIG.github,
  },
  {
    id:"breathin", num:"002", title:"BreathIN", accent:"#2f7fe0",
    domain:"Breathing - Unity - Particles", year:"2026", role:"Unity - C# - Realtime",
    genre:"Contemplative long take", duration:"109 MIN", seance:"SHOWTIME 6:30 PM",
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
    domain:"Product - Kickstarter - Launch", year:"2025", role:"Prototyping - Web - Launch",
    genre:"Product blockbuster - launch trailer", duration:"93 MIN", seance:"SHOWTIME 8:00 PM",
    tools:["Prototyping","Art Direction","Crowdfunding"],
    front:{src:"assets/kapsul-1.png", cap:"PROTOTYPE IN CONTEXT"},
    back:{src:"assets/kapsul-2.png", cap:"KICKSTARTER PAGE"},
    tagline:"From an idea to a campaign that takes off.",
    blurb:"Kapsul turns a product idea into a concrete, marketable project: concept, prototyping, product design and an identity built for a crowdfunding launch.",
    headline:"'Groundbreaking product cinema'",
    sections:[
      {h:"WHAT I DID", list:["Positioning + naming + identity.","Fast prototyping, photos / renders for the campaign page.","Campaign storytelling: problem -> demo -> rewards."]},
      {h:"TECH NOTES", p:"A Kickstarter page is an interface: hierarchy, proof, price, urgency. I built the page like a funnel, not a poster."},
    ],
    link: "#contact",
  },
  {
    id:"keymotion", num:"004", title:"KeyMotion", accent:"#4a58d8",
    domain:"Gesture - Computer Vision", year:"2025", role:"Vision - Dev",
    genre:"Interactive film - gesture", duration:"66 MIN", seance:"SHOWTIME 10:15 PM",
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
    domain:"AI - Computer Vision", year:"2024 - 2025", role:"ML - Python",
    genre:"Found footage - AI archives", duration:"88 MIN", seance:"SHOWTIME 7:00 PM",
    tools:["Python","CNN","OpenCV"],
    front:{src:"assets/vision-1.png", cap:"MODEL TRAINING"},
    back:{src:"assets/vision-2.png", cap:"HANDWRITING"},
    tagline:"The machine learns to read your hand.",
    blurb:"A triptych of visual recognition: drawn digits, handwritten text, multi-number detection. Three repos, one obsession - making AI readable for a human.",
    headline:"'A fascinating voyage into ML'",
    sections:[
      {h:"THE THREE REPOS", list:["Drawing_Number_Recognition: draw a digit, the model reads it.","Hand_Written_Recognition: handwritten text.","MultiNumbersDetection: several numbers in one image."]},
      {h:"TECH NOTES", p:"Training the model (confidence feedback, examples, teaching errors) matters as much as its score."},
    ],
    link: CONFIG.github,
  },
  {
    id:"weather", num:"006", title:"WeatherApp", accent:"#2f9e44",
    domain:"App - Python - API", year:"2024", role:"Dev - Python - API",
    genre:"Utility chronicle - short film", duration:"27 MIN", seance:"SHOWTIME 5:00 PM",
    tools:["Python","Tkinter","OpenWeatherMap"],
    front:{src:"assets/weather-1.png", cap:"WEATHER APP INTERFACE"},
    back:{src:"assets/weather-2.png", cap:"5-DAY VIEW / ERRORS"},
    tagline:"The weather, without friction.",
    blurb:"Realtime weather + 5-day forecast (conditions, min/max) via OpenWeatherMap. City search, temperature, humidity, wind, error handling.",
    headline:"'Simple, honest interface'",
    sections:[
      {h:"STRUCTURE", p:"main.py - gui.py - weather_api.py - utils.py - input, interface, requests, formatting. 66 commits: proof of iterative rigour."},
      {h:"TECH NOTES", p:"A utility app is judged by its error states (invalid city, offline, API quota). Here: clear messages, never a blank screen."},
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

function hexA(hex,a){
  let h = hex.replace("#","");
  if(h.length===3) h = h.split("").map(c=>c+c).join("");
  const r=parseInt(h.slice(0,2),16), g=parseInt(h.slice(2,4),16), b=parseInt(h.slice(4,6),16);
  return `rgba(${r},${g},${b},${a})`;
}
function shade(hex,amt){
  let h=hex.replace("#","");
  if(h.length===3) h=h.split("").map(c=>c+c).join("");
  const f=v=>Math.max(0,Math.min(255,Math.round(v*(1-amt))));
  return `rgb(${f(parseInt(h.slice(0,2),16))},${f(parseInt(h.slice(2,4),16))},${f(parseInt(h.slice(4,6),16))})`;
}
function seedRng(seed){
  let s=2166136261;
  for(const ch of String(seed)){ s ^= ch.charCodeAt(0); s=Math.imul(s,16777619); }
  return ()=> { s ^= s<<13; s ^= s>>>17; s ^= s<<5; return ((s>>>0)%1000)/1000; };
}

/* ================== Sons discrets (WebAudio, zero fichier) ================== */
const snd = (() => {
  let ctx = null, on = CONFIG.sound;
  const ensure = () => {
    if(!ctx){ try{ ctx = new (window.AudioContext || window.webkitAudioContext)(); }catch(e){ ctx=null; } }
    if(ctx && ctx.state === "suspended") ctx.resume();
    return ctx;
  };
  const tone = (f0,dur,type,gain,f1) => {
    if(!on || !ensure()) return;
    const t0 = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(f0,t0);
    if(f1) o.frequency.exponentialRampToValueAtTime(f1, t0+dur);
    g.gain.setValueAtTime(0.0001,t0);
    g.gain.exponentialRampToValueAtTime(gain, t0+0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t0+dur);
    o.connect(g).connect(ctx.destination); o.start(t0); o.stop(t0+dur+0.05);
  };
  const noise = (dur,gain,cut) => {
    if(!on || !ensure()) return;
    const t0 = ctx.currentTime, len = Math.max(1, Math.floor(ctx.sampleRate*dur));
    const buf = ctx.createBuffer(1,len,ctx.sampleRate), d = buf.getChannelData(0);
    for(let i=0;i<len;i++) d[i] = (Math.random()*2-1)*(1-i/len);
    const s = ctx.createBufferSource(); s.buffer = buf;
    const f = ctx.createBiquadFilter(); f.type="bandpass"; f.frequency.value = cut;
    const g = ctx.createGain();
    g.gain.setValueAtTime(gain,t0); g.gain.exponentialRampToValueAtTime(0.0001,t0+dur);
    s.connect(f).connect(g).connect(ctx.destination); s.start(t0);
  };
  return {
    on: () => on,
    unlock: () => { ensure(); },
    toggle(){ on = !on; if(on) ensure(); return on; },
    hover(){ tone(1250,.04,"triangle",.011); },
    pick(){ tone(300,.18,"sine",.05,680); noise(.05,.012,3200); },
    paper(){ tone(950,.05,"triangle",.018); noise(.03,.014,2400); },
    stamp(){ tone(80,.25,"sine",.16,55); noise(.16,.12,720); },
    put(){ tone(540,.16,"sine",.05,300); },
    open(){ tone(420,.22,"sine",.05,980); },
  };
})();

/* ================== Elements DOM ================== */
const stage = $("#stage"), grain = $("#grain");
const loaderCount = $("#loaderCount"), loaderPct = $("#loaderPct");
const hint = $("#guichetHint"), ticketBar = $("#ticketBar");
const stampTitle = $("#stampTitle"), stampCounter = $("#stampCounter"), stampBtn = $("#stampBtn");
const detail = $("#detail"), detailSheet = $("#detailSheet"), detailScroll = $("#detailScroll"), noWebgl = $("#noWebgl");

/* ================== Medias (prechargement) ================== */
const MEDIA = new Map(); // src -> {kind:'image'|'video'|'missing', el, ok}
let loadedCount = 0, assetsReady = false, buildStarted = false;
const uniqueSrcs = [...new Set(PROJECTS.flatMap(p => [p.front.src, p.back.src]))];
const TOTAL = uniqueSrcs.length;

function getMedia(src){ return MEDIA.get(src) || {kind:"missing", el:null, ok:false}; }

function preloadOne(src){
  return new Promise(res => {
    const record = (kind, el, ok) => {
      if(MEDIA.has(src)) return;
      MEDIA.set(src, ok ? {kind, el, ok:true} : {kind:"missing", el:null, ok:false});
      loadedCount++; updateLoaderProgress(); res();
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
      im.src = src;
    }
  });
}
async function preloadAll(){ await Promise.all(uniqueSrcs.map(preloadOne)); assetsReady = true; maybeFinish(); }

function unlockMedia(){
  snd.unlock();
  for(const m of MEDIA.values()){
    if(m.kind === "video" && m.el && m.el.paused) m.el.play().catch(()=>{});
  }
}

/* ================== Loader ================== */
let loaderDone = false, minElapsed = false;
setTimeout(() => { minElapsed = true; maybeFinish(); }, 2400);
let n = 3;
loaderCount.textContent = n;
setInterval(() => { if(n > 1){ n--; loaderCount.textContent = n; } }, 780);
function updateLoaderProgress(){
  loaderPct.textContent = Math.min(99, Math.round(loadedCount/TOTAL*100)) + "%";
}
function maybeFinish(){
  if(loaderDone || !assetsReady || !minElapsed) return;
  loaderDone = true;
  loaderPct.textContent = "100%";
  // visuel "play" du cinema (dessine en CSS, aucun caractere special, non cliquable) :
  // simple signal de demarrage, le site s'ouvre tout seul juste apres
  loaderCount.textContent = "";
  const play = document.createElement("span");
  play.className = "loader-play"; play.setAttribute("aria-hidden","true");
  loaderCount.appendChild(play);
  setTimeout(() => document.body.removeAttribute("data-loading"), 1200);
}

/* ================== Papier + dessin des tickets ================== */
const PW = 1600, PH = 960;
let PAPER_LIGHT = null, PAPER_INK = null;

function makePaper(base){
  const c = document.createElement("canvas"); c.width = PW; c.height = PH;
  const g = c.getContext("2d");
  const grd = g.createLinearGradient(0,0,0,PH);
  grd.addColorStop(0, base); grd.addColorStop(1, shade(base, .10));
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

function rr(ctx,x,y,w,h,r){
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
function capsFill(ctx,text,x,y,{px=13,weight=700,color="#000",ls=3,align="left",baseline}){
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
function drawCover(ctx,el,x,y,w,h){
  ctx.fillStyle = "#101014"; ctx.fillRect(x,y,w,h);        // fond sombre garanti
  const sw = el.videoWidth || el.naturalWidth || el.width || 0;
  const sh = el.videoHeight || el.naturalHeight || el.height || 0;
  if(!sw || !sh) return;
  const s = Math.max(w/sw, h/sh);
  try{ ctx.drawImage(el, x+(w-sw*s)/2, y+(h-sh*s)/2, sw*s, sh*s); }catch(_){}
}
function drawReserved(ctx,x,y,w,h,spec,accent,active){
  ctx.fillStyle = "#101014"; ctx.fillRect(x,y,w,h);
  ctx.fillStyle = hexA(accent,.55);
  for(let i=0;i<5;i++){
    const xx = x+12 + i*((w-24)/5);
    ctx.fillRect(xx, y+10, 13, 8); ctx.fillRect(xx, y+h-18, 13, 8);
  }
  ctx.save();
  ctx.translate(x+w/2, y+h/2);
  const sw = Math.min(300, w-56), sh = 124;
  ctx.strokeStyle = hexA(accent,.8); ctx.lineWidth = 2.5;
  rr(ctx,-sw/2,-sh/2,sw,sh,8); ctx.stroke();
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
  const r = seedRng(seed);
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
  const r = seedRng("stamp"+date);
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
function drawMedia(t,ctx,x,y,w,h,spec,active){
  rr(ctx,x,y,w,h,10); ctx.save(); ctx.clip();
  try{
    const info = getMedia(spec.src);
    if(info.kind === "missing") drawReserved(ctx,x,y,w,h,spec,t.p.accent,active);
    else if(info.kind === "video"){
      if(info.el && info.el.readyState >= 2) drawCover(ctx,info.el,x,y,w,h);
      else { ctx.fillStyle = "#0c0c0e"; ctx.fillRect(x,y,w,h); ctx.fillStyle = "#8b8577"; ctx.font = fBodyFont(600,15); ctx.fillText("LOADING...", x+20, y+h/2); }
    } else if(info.el) drawCover(ctx,info.el,x,y,w,h);
    else { ctx.fillStyle = "#101014"; ctx.fillRect(x,y,w,h); }
  }catch(e){
    ctx.fillStyle = "#101014"; ctx.fillRect(x,y,w,h);          // zone media jamais transparente
    ctx.fillStyle = "#8b8577"; ctx.font = fBodyFont(600,15);
    ctx.fillText("IMAGE COMING SOON", x+20, y+h/2);
    console.warn("[box office] drawMedia fallback for", spec.src, e);
  }
  ctx.restore();
  ctx.strokeStyle = active ? t.p.accent : "rgba(20,18,16,.35)";
  ctx.lineWidth = active ? 3 : 1.5;
  rr(ctx,x,y,w,h,10); ctx.stroke();
}

function drawFrontCore(t, active){
  const ctx = t.frontCtx, p = t.p, W = PW, H = PH;
  ctx.setTransform(1,0,0,1,0,0);
  ctx.clearRect(0,0,W,H);
  ctx.drawImage(PAPER_LIGHT, 0, 0);

  const ink = "#2e2518", faded = "#6b5d47", accent = p.accent;
  const serif = (w,px) => `${w} ${px}px "Playfair Display", Georgia, serif`;
  const seamX = 1216, cxm = 630;                 // perforation + centre du corps du billet

  // bandes de couleur sur les bords
  ctx.fillStyle = accent; ctx.fillRect(0,0,9,H);
  ctx.fillStyle = hexA(accent,.4); ctx.fillRect(W-9,0,9,H);

  // --- bandeau cinema ---
  capsFill(ctx,"LUDO CINEMA - OFFICIAL BOX OFFICE", W/2, 44, {px:19,color:ink,ls:6,align:"center",baseline:"middle"});
  ctx.font = serif(700,22); ctx.textAlign = "center"; ctx.fillStyle = accent;
  ctx.fillText("*", 98, 46); ctx.fillText("*", W-98, 46);
  ctx.fillStyle = ink; ctx.fillRect(60,74,W-120,1.6);
  ctx.fillStyle = "rgba(46,37,24,.4)"; ctx.fillRect(86,80,W-172,1);
  capsFill(ctx,"No. " + p.num, 58, 118, {px:13,color:faded,ls:4});
  capsFill(ctx,"ADMIT ONE - ONE SEAT PER TICKET", W-58, 118, {px:12,color:faded,ls:3,align:"right"});

  // --- titre du film (impression letterpress : double passe) ---
  ctx.font = serif(400,21); ctx.textAlign = "center"; ctx.fillStyle = accent;
  ctx.fillText("PRESENTS", cxm, 190);
  ctx.font = serif(700,80); ctx.textBaseline = "alphabetic";
  const tl = wrapLines(ctx, p.title.toUpperCase(), 1060);
  let ty = 268;
  tl.slice(0,2).forEach(l => {
    ctx.fillStyle = "rgba(46,37,24,.30)"; ctx.fillText(l, cxm+2.5, ty+3);   // passe en creux
    ctx.fillStyle = ink; ctx.fillText(l, cxm, ty);
    ty += 74;
  });
  ctx.strokeStyle = "rgba(46,37,24,.5)"; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(cxm-170, ty); ctx.lineTo(cxm+170, ty); ctx.stroke();
  ctx.font = serif(700,18); ctx.fillStyle = accent;
  const dl = wrapLines(ctx, p.domain.toUpperCase(), 1060);
  ctx.fillText(dl[0]||"", cxm, ty+40);

  // --- photo facon " carte de lobby " (grand format) ---
  const my = Math.min(ty + 58, 480), mh = 746 - my, mx = 70, mw = seamX - mx - 30;
  drawMedia(t, ctx, mx, my, mw, mh, p.front, active);
  ctx.strokeStyle = "rgba(46,37,24,.5)"; ctx.lineWidth = 1.4;
  rr(ctx, mx-7, my-7, mw+14, mh+14, 4); ctx.stroke();      // double cadre
  photoCorners(ctx, mx, my, mw, mh, "#b08a3e");            // coins dores
  capsFill(ctx, p.front.cap, cxm, my+mh+20, {px:12,color:faded,ls:2,align:"center"});

  // --- mentions tapees (label + valeur, chaque valeur calee dans sa colonne) ---
  const dd = my + mh + 46;
  const cell = [
    ["DATE", p.year],
    ["SHOWTIME", p.seance.replace(/^SHOWTIME\s*/i, "")],     // le label porte deja SHOWTIME
    ["ROOM", ROOMS[p.id].replace(/^ROOM\s*/i, "")],          // le label porte deja ROOM
    ["RANG", "CODE - PLACE 00" + p.num],
  ];
  ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
  for(let i=0;i<4;i++){
    const x = 84 + i*266, vx = x+112;              // valeur collee au label
    ctx.font = fBodyFont(600,15.5); ctx.fillStyle = ink;
    ctx.fillText(cell[i][0], x, dd);
    const dw = ctx.measureText(cell[i][0]).width;
    const lx0 = x+dw+10, lx1 = vx-14;               // pointilles courts entre label et valeur
    if(lx1 > lx0){
      ctx.strokeStyle = "rgba(46,37,24,.35)"; ctx.setLineDash([2,5]); ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.moveTo(lx0, dd-4); ctx.lineTo(lx1, dd-4); ctx.stroke();
      ctx.setLineDash([]);
    }
    // la valeur ne doit jamais deborder sur la colonne suivante
    const maxW = (i < 3 ? 266 : 300) - 112 - 8;
    let vf = 15.5; ctx.font = fBodyFont(600,vf);
    while(ctx.measureText(cell[i][1]).width > maxW && vf > 10){ vf -= .5; ctx.font = fBodyFont(600,vf); }
    ctx.fillStyle = ink; ctx.fillText(cell[i][1], vx, dd);
  }

  // --- bas du corps : serie + code + prix ---
  perforation(ctx, 58, 818, seamX-116, "rgba(46,37,24,.5)");
  barcode(ctx, 76, 856, 250, 46, p.num);
  capsFill(ctx,"SERIES " + p.num + " - BOX OFFICE 01 - SEASON 25/26", 76, 922, {px:11,color:faded,ls:2});
  const pxb = seamX-320, pyb = 838;
  ctx.strokeStyle = ink; ctx.lineWidth = 2; ctx.setLineDash([7,5]);
  rr(ctx,pxb,pyb,246,84,6); ctx.stroke(); ctx.setLineDash([]);
  capsFill(ctx,"PRICE", pxb+123, pyb+30, {px:13,color:faded,ls:4,align:"center",baseline:"middle"});
  ctx.font = serif(700,44); ctx.textAlign = "center"; ctx.fillStyle = ink;
  ctx.fillText("12 F", pxb+123, pyb+68);

  // --- talon a detacher ---
  ctx.font = serif(700,26); ctx.textAlign = "center";
  ctx.fillStyle = ink; ctx.fillText("SOUVENIR", seamX+176, 96);
  ctx.font = serif(700,30); ctx.fillText("ADMIT ONE", seamX+176, 160);
  rosette(ctx, seamX+176, 264, 46, ink);
  capsFill(ctx,"USHER", seamX+176, 344, {px:11,color:faded,ls:3,align:"center"});
  ctx.font = serif(700,24); ctx.fillStyle = "#c22b27"; ctx.fillText("No. " + p.num, seamX+176, 400);
  barcode(ctx, seamX+104, 856, 132, 34, "S"+p.num);
  capsFill(ctx,"KEEP THIS", seamX+176, 928, {px:11,color:faded,ls:3,align:"center"});

  // --- dechirures + encoches ---
  const rip = "rgba(46,37,24,.16)";
  ctx.fillStyle = rip; tornTop(ctx, W, 10, 7);
  ctx.fillStyle = rip; tornEdge(ctx, W, H, 7);
  ctx.fillStyle = rip; tornRight(ctx, W-16, H, 7);
  perforationV(ctx, seamX, 26, H-52, "rgba(46,37,24,.55)");
  ctx.fillStyle = rip;
  ctx.beginPath(); ctx.arc(seamX, 16, 9, 0, Math.PI); ctx.fill();      // encoche poincon haut
  ctx.beginPath(); ctx.arc(seamX, H-16, 9, Math.PI, 0); ctx.fill();    // encoche poincon bas

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
  const serif = (w,px) => `${w} ${px}px "Playfair Display", Georgia, serif`;
  const seamX = 1216, cxm = 630;

  ctx.fillStyle = accent; ctx.fillRect(0,0,9,H);
  ctx.fillStyle = hexA(accent,.4); ctx.fillRect(W-9,0,9,H);

  // --- en-tete verso ---
  capsFill(ctx,"TICKET - BACK",58,54,{px:16,color:cream,ls:4});
  capsFill(ctx,"No. " + p.num + " - LL",W-58,54,{px:15,color:cream,ls:3,align:"right"});
  dashedLine(ctx,58,84,seamX-116,"rgba(239,233,220,.22)",10,6);

  ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";   // ! remis a chaque redraw (sinon reste "center")
  ctx.font = fBodyFont(700,19); ctx.fillStyle = hexA(accent,.95);
  ctx.fillText("No. " + p.num + " - " + p.domain.toUpperCase(), 58, 122);

  // --- titre + tagline ---
  ctx.font = serif(700,54); ctx.fillStyle = cream;
  const tl = wrapLines(ctx, p.title.toUpperCase(), 1040);
  let ty = 224;
  tl.slice(0,2).forEach(l => { ctx.fillText(l,58,ty); ty += 56; });
  ctx.font = fQuoteFont(23); ctx.fillStyle = accent;
  const ql = wrapLines(ctx, p.tagline, 1000);
  let qy = ty + 4;
  ql.slice(0,2).forEach(l => { ctx.fillText(l,58,qy); qy += 28; });

  // --- media verso (grand format) ---
  const my = Math.min(qy + 16, 400), mh = 632 - my, mx = 58, mw = seamX - mx - 30;
  drawMedia(t, ctx, mx, my, mw, mh, p.back, active);
  ctx.strokeStyle = "rgba(239,233,220,.35)"; ctx.lineWidth = 1.4;
  rr(ctx, mx-7, my-7, mw+14, mh+14, 4); ctx.stroke();
  photoCorners(ctx, mx, my, mw, mh, "#b08a3e");
  capsFill(ctx, p.back.cap, cxm, my+mh+18, {px:12,color:dim,ls:2,align:"center"});

  // --- synopsis tape ---
  ctx.font = fBodyFont(500,19); ctx.fillStyle = "#d8d1c2";
  const bl = wrapLines(ctx, p.blurb, 1050);
  let dy = my + mh + 46;
  bl.slice(0,5).forEach(l => { ctx.fillText(l,58,dy); dy += 29; });

  // --- chips outils ---
  const chipsY = Math.min(dy + 20, 856), chipH = 34;
  let cx = 58;
  ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
  ctx.font = fBodyFont(700,13.5);
  for(const tool of p.tools){
    const tw = ctx.measureText(tool).width + 34;
    if(cx + tw > seamX - 210){ cx = 58; break; }
    ctx.fillStyle = hexA(accent,.18);
    rr(ctx,cx,chipsY,tw,chipH,chipH/2); ctx.fill();
    ctx.fillStyle = cream; ctx.fillText(tool, cx+17, chipsY+chipH/2+5);
    cx += tw + 10;
  }

  // --- tampon rond dateur ---
  dateStamp(ctx, seamX-112, 846, 46, p.year);

  // --- pied verso ---
  perforation(ctx, 58, 872, seamX-160, "rgba(239,233,220,.3)");
  barcode(ctx, 58, 906, 200, 36, "V"+p.num);
  capsFill(ctx,"PROJECTIONIST'S STAMP", seamX-40, 904, {px:13,color:accent,ls:2,align:"right"});
  capsFill(ctx,"ADMITTED - PASSED AT THE SCREENING", seamX-40, 928, {px:11,color:dim,ls:2,align:"right",weight:500});

  // --- talon verso ---
  ctx.font = serif(700,26); ctx.textAlign = "center";
  ctx.fillStyle = cream; ctx.fillText("SOUVENIR", seamX+176, 96);
  ctx.font = serif(700,30); ctx.fillText("ADMIT ONE", seamX+176, 160);
  rosette(ctx, seamX+176, 264, 46, "rgba(239,233,220,.7)");
  capsFill(ctx,"USHER", seamX+176, 344, {px:11,color:dim,ls:3,align:"center"});
  ctx.font = serif(700,24); ctx.fillStyle = "#c97a72"; ctx.fillText("No. " + p.num, seamX+176, 400);
  barcode(ctx, seamX+104, 856, 132, 34, "V"+p.num);
  capsFill(ctx,"KEEP THIS", seamX+176, 928, {px:11,color:dim,ls:3,align:"center"});

  // --- dechirures + encoches ---
  const rip = "rgba(0,0,0,.32)";
  ctx.fillStyle = rip; tornTop(ctx, W, 10, 7);
  ctx.fillStyle = rip; tornEdge(ctx, W, H, 7);
  ctx.fillStyle = rip; tornRight(ctx, W-16, H, 7);
  perforationV(ctx, seamX, 26, H-52, "rgba(239,233,220,.35)");
  ctx.fillStyle = rip;
  ctx.beginPath(); ctx.arc(seamX, 16, 9, 0, Math.PI); ctx.fill();
  ctx.beginPath(); ctx.arc(seamX, H-16, 9, Math.PI, 0); ctx.fill();

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
  }catch(_){}
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
let boothCesar = null;                        // statuette facon Cesar posee sur le comptoir (repositionnee a droite de l'affiche rouge)
let boothWinOuter = 1.69;                     // bord exterieur du cadre de fenetre (repere)
let tickets = [], focused = null, hovered = null, dragging = false, lastDrag = null;
let heroActive = false, detailOpen = false, shake = 0;
let openPanel = null;                        // panneau plein ecran ouvert (ou null)
/* v7 - guichet " billet en main " : un seul billet vintage en scene, les autres rejoignent le rang quand on les tamponne */
let heroIdx = -1, stampedOrder = [], stampingLock = false;   // heroIdx = -1 -> aucun billet en main (pile au repos)
let pileHover = null, pileGlow = null;
const PILE_X = -1.02, PILE_Z = 1.46, PILE_Y = .014;          // emplacement fixe de la pile (sur le comptoir)
let swipeX = 0, swipeY = 0, swipeT = 0;
const pointerNdc = { x:0, y:0 };
const raycaster = new THREE.Raycaster();
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
function texWood(base,hi,dk){
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
    g.fillStyle = "#14110c"; rr(g,6,6,1188,156,10); g.fill();
    g.strokeStyle = "#c9a54e"; g.lineWidth = 3; rr(g,15,15,1170,138,7); g.stroke();
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
    g.fillStyle = "#14110c"; rr(g,6,6,1012,248,14); g.fill();
    g.strokeStyle = "#c9a54e"; g.lineWidth = 5; rr(g,18,18,988,224,9); g.stroke();
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
function texPlaque(){
  // plaque " BOX OFFICE 01 "
  return texCanvas(256,96,(g)=>{
    g.fillStyle = "#14110c"; rr(g,4,4,248,88,8); g.fill();
    g.strokeStyle = "#c9a54e"; g.lineWidth = 2.5; rr(g,10,10,236,76,6); g.stroke();
    g.fillStyle = "#e6c46a"; g.font = '700 28px "Playfair Display", Georgia, serif';
    g.textAlign = "center"; g.textBaseline = "middle"; g.fillText("BOX OFFICE 01", 128, 50);
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
function texLobbyPoster(n){
  // affiche encadree " COMING SOON " du hall (deux variantes)
  return texCanvas(300,420,(g)=>{
    const pal = n ? ["#7a1f1f","#2a0d0d","#e7c96a"] : ["#1f3a6b","#0e1b33","#9ec2ff"];
    g.fillStyle = "#160f0c"; g.fillRect(0,0,300,420);
    const grd = g.createLinearGradient(0,70,0,340);
    grd.addColorStop(0,pal[0]); grd.addColorStop(1,pal[1]);
    g.fillStyle = grd; g.fillRect(24,70,252,270);
    g.textAlign = "center"; g.textBaseline = "middle";
    g.fillStyle = "#e6c46a"; g.font = '700 24px "Playfair Display", Georgia, serif';
    g.fillText("COMING SOON", 150, 36);
    g.fillStyle = "#f0e6d2"; g.font = '700 34px "Playfair Display", Georgia, serif';
    if(n){ g.fillText("LATE", 150, 180); g.fillText("SHOW", 150, 222); }
    else { g.fillText("GRAND", 150, 180); g.fillText("CLASSIC", 150, 222); }
    g.fillStyle = pal[2]; g.font = '600 15px Archivo, Arial, sans-serif';
    g.fillText("LUDO CINEMA - BOX OFFICE 01", 150, 300);
    g.fillStyle = "#e6c46a"; g.fillText("* * *", 150, 380);
    g.strokeStyle = "#c9a54e"; g.lineWidth = 3; g.strokeRect(10,10,280,400);
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
function texBoothPoster(){
  // affiche encadree au fond de la cabine
  return texCanvas(320,440,(g)=>{
    g.fillStyle = "#1c1610"; g.fillRect(0,0,320,440);
    g.textAlign = "center"; g.textBaseline = "middle";
    g.fillStyle = "#e7c96a"; g.font = '700 30px "Playfair Display", Georgia, serif';
    g.fillText("TODAY", 160, 58);
    const grd = g.createLinearGradient(0,110,0,300);
    grd.addColorStop(0,"#8a1c1c"); grd.addColorStop(1,"#2a0d0d");
    g.fillStyle = grd; g.fillRect(34,112,252,188);
    g.fillStyle = "#f0e6d2"; g.font = '700 26px "Playfair Display", Georgia, serif';
    g.fillText("LATE", 160, 190);
    g.fillText("SHOW", 160, 224);
    g.font = '600 15px Archivo, Arial, sans-serif'; g.fillStyle = "#cdbfa4";
    g.fillText("CINEMA - BOX OFFICE 01", 160, 344);
    g.fillText("* * *", 160, 378);
    g.strokeStyle = "#e7c96a"; g.lineWidth = 3; g.strokeRect(16,16,288,408);
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
  const floorM = new THREE.MeshStandardMaterial({map:canvasTex(texWood("#3a2413","#4a2f1a","#1a0f08")), roughness:.92, side:THREE.DoubleSide, fog:false});
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

  // (table du milieu, caisse, billets decoratifs, tampon et lampe retires : la cabine reste epuree)

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

  // --- l'ancienne silhouette du caissier a ete retiree : elle est remplacee par une
  //     statuette facon Cesar posee sur le comptoir, a DROITE de l'affiche rouge
  //     (construite dans makeVintageBooth, position ajustee par placeCesar()) ---

  // --- lumiere chaude de la cabine ---
  const warm = new THREE.PointLight(0xffc07a, 1.2, 11, 2);
  warm.position.set(0, 2.35, -4.0); g.add(warm);
  const lampLight = new THREE.PointLight(0xffd9a0, .8, 5, 2);
  lampLight.position.set(2.05, 1.55, -3.6); g.add(lampLight);

  // --- la cabine remonte juste derriere la fenetre, a hauteur de comptoir ---
  g.position.set(0, -.95, 3.0);

  return g;
}
function makeVintageBooth(){
  const g = new THREE.Group();
  const mk = (geo, mat, x,y,z, rx=0,ry=0,rz=0) => {
    const m = new THREE.Mesh(geo, mat); m.position.set(x,y,z); m.rotation.set(rx,ry,rz); g.add(m); return m;
  };
  // --- materiaux vintage (bois fonces cires) ---
  const woodF = new THREE.MeshStandardMaterial({map:canvasTex(texWood("#452d1b","#5a3c26","#241708")), roughness:.82, metalness:.08});
  woodF.map.repeat.set(3,1);
  const woodD = new THREE.MeshStandardMaterial({map:canvasTex(texWood("#33200f","#412a18","#1a0f08")), roughness:.9, metalness:.05});
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
  const opW = 2.90, opB = -.60, opT = 2.90;      // ouverture : demi-largeur, bas, haut -> remplit TOUT l'ecran
  const winW = opW*2, winH = opT-opB, winY = (opB+opT)/2;
  boothWinOuter = winW/2 + .14;                  // bord exterieur du cadre (repere) - hors ecran ici
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

  // --- statuette facon CESAR (bronze compresse) posee SUR le comptoir, a DROITE de l'affiche rouge ---
  const bronzeM = new THREE.MeshStandardMaterial({color:0xbb9457, roughness:.44, metalness:.55, emissive:0x2a1c06, emissiveIntensity:.6, flatShading:true});
  const stoneM  = new THREE.MeshStandardMaterial({color:0x14110c, roughness:.42, metalness:.2});
  const cesar = new THREE.Group();
  // socle carre en marbre noir + petite plaque gravee
  const cBase = new THREE.Mesh(new THREE.BoxGeometry(.26,.055,.20), stoneM);
  cBase.position.y = .0275; cesar.add(cBase);
  const cPlate = new THREE.Mesh(new THREE.BoxGeometry(.16,.012,.003), new THREE.MeshStandardMaterial({color:0xd8b25a, roughness:.35, metalness:.6, emissive:0x2a1c06, emissiveIntensity:.6}));
  cPlate.position.set(0,.028,.101); cesar.add(cPlate);
  // bronze compresse : cylindre 8 pans dont on deplace les sommets (facettes irregulieres) + vrillage
  const cGeo = new THREE.CylinderGeometry(.060,.094,.43,8,16);
  const cp = cGeo.attributes.position;
  for(let i=0;i<cp.count;i++){
    const px = cp.getX(i), py = cp.getY(i), pz = cp.getZ(i);
    const r = Math.hypot(px,pz);
    if(r > 1e-4){
      const a = Math.atan2(pz,px);
      const k = 1 + .17*Math.sin(a*3 + py*11) + .09*Math.sin(py*27 + a*1.7);
      cp.setX(i, Math.cos(a)*r*k);
      cp.setZ(i, Math.sin(a)*r*k);
    }
  }
  cGeo.computeVertexNormals();
  const cBody = new THREE.Mesh(cGeo, bronzeM);
  cBody.scale.set(1.34, 1, .70);            // silhouette "ecrasee" (plus large que profonde)
  cBody.rotation.y = .45; cBody.rotation.z = .035;
  cBody.position.y = .055 + .215;           // pose sur le socle
  cesar.add(cBody);
  cesar.scale.setScalar(.88);
  cesar.position.set(1.85, 0, .45); g.add(cesar);   // x affine par placeCesar() selon la largeur d'ecran
  boothCesar = cesar;

  // (les affiches anglaises ont rejoint le MUR DU FOND, sur le meme plan que le panneau
  //  des billets tamponnes -> voir makeBoothInterior : plus de cadre en bois, rien ne bouge)

  // --- cloche de comptoir en laiton ---
  mk(new THREE.SphereGeometry(.10,16,12,0,Math.PI*2,0,Math.PI/2), brass, -1.5, 0, 1.45);
  mk(new THREE.SphereGeometry(.03,10,8), brass, -1.5, .075, 1.45);

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
  renderer.setSize(innerWidth, innerHeight, false);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NoToneMapping;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x140f0c);      // brun chaud " billetterie "
  scene.fog = new THREE.FogExp2(0x140f0c, 0.045);

  camera = new THREE.PerspectiveCamera(46, innerWidth/innerHeight, .1, 80);
  camera.position.set(0,.72,3.6);
  camera.lookAt(0,camLookY,0);

  scene.add(new THREE.AmbientLight(0xfff3e2, .88));
  const dir = new THREE.DirectionalLight(0xffe8d0, .9); dir.position.set(-4,6,5); scene.add(dir);
  const rim = new THREE.DirectionalLight(0x7799ff, .3); rim.position.set(4,2,-6); scene.add(rim);

  // guichet vintage (fenetre de caisse, auvent, lambris, comptoir)
  scene.add(makeVintageBooth());

  // la cabine du guichet, visible a travers la fenetre de caisse
  scene.add(makeBoothInterior());

  // faisceau projecteur
  const beam = new THREE.Mesh(new THREE.ConeGeometry(5.2,10,48,1,true),
    new THREE.MeshBasicMaterial({color:0xffe6bd, transparent:true, opacity:.05, blending:THREE.AdditiveBlending, depthWrite:false, side:THREE.DoubleSide}));
  beam.position.set(0,4.8,1); beam.rotation.x = .03; scene.add(beam);

  // poussieres
  const dustN = innerWidth < 700 ? 140 : 340;
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
      activPrev:false, stampAnim:0, stampDone:false, stamping:false,
      hasVideo: isVideo(p.front.src) || isVideo(p.back.src),
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
  ticketBar.classList.add("show"); ticketBar.setAttribute("aria-hidden","false");
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
  if(hovered){ setActive(hovered, false); hovered = null; }
  tickets.forEach(t => { t.dragY = 0; t.dragX = 0; });
  if(instant){
    const t = tickets[heroIdx];
    const d = desired(t, performance.now()/1000);
    t.cx=d.x; t.cy=d.y; t.cz=d.z; t.crx=d.rx; t.cry=d.ry; t.cs=d.scale; t.cop=d.op;
    t.group.position.set(t.cx,t.cy,t.cz);
    t.group.rotation.set(t.crx,t.cry,0);
    t.group.scale.setScalar(t.cs);
    t.frontMat.opacity = t.backMat.opacity = t.edgeMat.opacity = t.cop;
  }
  document.body.classList.add("ticket-open");
  syncHandUI();
  if(!instant) snd.paper();
}

/* Repos : aucun billet en main, la pile reste posee sur le comptoir. */
function toPile(instant){
  if(!tickets.length) return;
  heroIdx = -1;
  pileHover = null;
  if(hovered){ setActive(hovered, false); hovered = null; }
  tickets.forEach(t => { t.dragY = 0; t.dragX = 0; });
  stackLayout();
  document.body.classList.remove("ticket-open");
  syncHandUI();
  if(!instant) snd.put();
}

/* HUD : en main -> " STAMP " ; au repos -> invitation a cliquer la pile. */
function syncHandUI(){
  if(!ticketBar) return;
  ticketBar.classList.add("show");
  ticketBar.setAttribute("aria-hidden","false");
  const inHand = heroIdx >= 0 && !!tickets[heroIdx];
  if(inHand){
    document.body.classList.add("hand");
    if(stampTitle) stampTitle.textContent = tickets[heroIdx].p.title.toUpperCase();
    if(stampBtn) stampBtn.disabled = false;
  } else {
    document.body.classList.remove("hand");
    const left = tickets.filter(t => !t.stamped).length;
    if(stampTitle) stampTitle.textContent = left ? "PICK A TICKET" : "ALL STAMPED";
    if(stampBtn) stampBtn.disabled = true;
  }
  if(hint) hint.classList.toggle("hide", inHand);
}
let lastCycle = 0;
function cycleHero(dir){
  const now = performance.now();
  if(heroIdx < 0 || openPanel || detailOpen || stampingLock || !tickets.length) return;
  if(tickets[heroIdx] && tickets[heroIdx].stamped) return;
  if(now - lastCycle < 380) return;              // anti-repetition (molette moins sensible)
  lastCycle = now;
  showHero(heroIdx + (dir > 0 ? 1 : -1), false, dir);
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
  // pile FIXE et plate posee sur le comptoir : chaque billet garde TOUJOURS le meme
  // emplacement (deduit de son index), donc la pile ne se reorganise plus quand on
  // feuillette les billets ou qu'on en tamponne un.
  const BX = PILE_X, BZ = PILE_Z, BY = PILE_Y;
  const mid = (tickets.length - 1)/2;
  tickets.forEach(t => {
    if(t.stamped || t.i === heroIdx) return;      // en main (hero) ou deja punaise : hors de la pile
    const off = t.i - mid;                        // decalage stable, centre sur BX / BZ
    t.home = {
      x: BX + off*.006,
      y: BY + t.i*.0045,                          // epaisseur de la pile (index stable)
      z: BZ + off*.006,
      rx: -Math.PI/2, ry: 0, scale: .33,          // bien a plat, sans oscillation
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
  const aspect = innerWidth/innerHeight;
  const tanF = Math.tan(camera.fov*Math.PI/360);
  const dC = Math.max(1, camera.position.z - .16);        // plan des rideaux (z monde ~ .16)
  const cx = clamp(tanF*dC*aspect*1.02, 2.2, 5.0);        // centre du rideau ~ bord de l'ecran
  boothCurtains.forEach(c => { c.position.x = (c.userData.sgn || 1) * cx; });
}
/* ======== Horloge murale : calee a GAUCHE de la plaque BOX OFFICE ========
   La plaque est sur le mur du fond (x = -1.8, z ~ -2.19) ; on place l'horloge dans
   l'espace libre entre son bord gauche et le bord interieur du rideau gauche (elle doit
   aussi rester a gauche de l'affiche anglaise de gauche, x = -2.3), en la reduisant un
   peu si l'ecran est etroit, afin qu'elle reste lisible et jamais cachee. */
function placeClock(){
  if(!boothClock || !camera) return;
  const aspect = innerWidth/innerHeight;
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
  boothClock.position.x = clamp(midNdc * dz * tanX, -4.5, -2.1);
  boothClock.scale.setScalar(s);
}
/* ======== Statuette facon Cesar : posee sur le comptoir, juste a DROITE de l'affiche rouge ========
   On cale son centre NDC juste a droite du bord de l'affiche rouge (planche comprise) sans
   jamais la faire sortir de l'ecran ; elle est au premier plan, donc jamais masquee. */
function placeCesar(){
  if(!boothCesar || !camera) return;
  const aspect = innerWidth/innerHeight;
  const tanX = Math.tan(camera.fov*Math.PI/360)*aspect;
  const camZ = Math.max(1, camera.position.z);
  const posterRightNdc = 2.06 / Math.max(.25, (camZ - .025) * tanX);   // bord droit de l'affiche rouge
  const ndc = clamp(Math.max(posterRightNdc + .05, .58), .58, .90);
  boothCesar.position.x = ndc * Math.max(.5, camZ - boothCesar.position.z) * tanX;
}
function setStampCounter(){
  if(stampCounter) stampCounter.querySelector("b").textContent = String(stampedOrder.length);
}
window.__v7 = () => ({
  hero: heroIdx,
  heroTitle: tickets[heroIdx] ? tickets[heroIdx].p.title : null,
  stamped: stampedOrder.slice(),
  tickets: tickets.map(t => ({s:!!t.stamped, o:+t.cop.toFixed(2)})),
  lock: stampingLock,
  detail: detailOpen,
});

/* ================== Disposition : camera collee au comptoir ================== */
function computeLayout(){
  const aspect = innerWidth/innerHeight;
  let cz;
  if(aspect < .85) cz = 7.4;          // mobile : recule pour tenir la largeur
  else if(aspect < 1.3) cz = 5.0;     // tablette
  else cz = 3.6;                      // bureau : on est AU comptoir
  camBaseY = .72;
  camLookY = camBaseY - .05*cz;       // leger plongeon sur le comptoir
  camera.position.set(0, camBaseY, cz);
  camera.lookAt(0, camLookY, 0);
  // " home " par defaut pour chaque billet (meme non tamponne) avant le rang
  tickets.forEach(t => { t.home = { x:0, y:0, z:-2.18, rx:0, ry:0, scale:.6 }; });
  rowLayout();                        // range les billets deja tamponnes sur le panneau
  stackLayout();                      // pose la pile des billets encore a tamponner sur le comptoir
  placeFacade();                      // recolle rideaux + affiches aux bords de l'ecran
  placeClock();                       // cale l'horloge a gauche de la plaque BOX OFFICE
  placeCesar();                       // cale la statuette a droite de l'affiche rouge, sur le comptoir
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
function setActive(t,on){
  if(!t || t.activPrev === on) return;
  t.activPrev = on;
  // Plus aucun cadre colore n'est dessine sur le billet : on garde juste l'etat a jour.
}
function hoverTicket(t){
  if(hovered === t) return;
  setActive(hovered, false);
  hovered = t;
  setActive(t, true);
  if(t && !focused) snd.hover();
}
function focusTicket(t){
  if(!t || focused === t) return;
  focused = t;
  tickets.forEach(o => setActive(o, o === t));
  t.dragY=0; t.dragX=0; t.dragYc=0; t.dragXc=0; t.stampAnim=0; t.stampDone=false; t.stamping=false;
  document.body.classList.add("ticket-open");
  ticketBar.classList.add("show"); ticketBar.setAttribute("aria-hidden","false");
  if(hint) hint.classList.add("hide");
  snd.pick();
}
function unfocusTicket(){
  if(!focused) return;
  focused = null; dragging = false;
  tickets.forEach(o => setActive(o, false));
  document.body.classList.remove("ticket-open");
  ticketBar.classList.remove("show");
  if(hint) hint.classList.remove("hide");
  snd.put();
}
function doStamp(){
  if(stampingLock || openPanel || detailOpen || !tickets.length) return;
  const t = tickets[heroIdx];
  if(!t || t.stamped) return;
  stampingLock = true;
  if(hovered === t) hovered = null;
  setActive(t, false);                 // on retire le cadre " PRENDRE " : billet au propre
  // 0) on remet d'abord le billet droit, face a nous, puis on tamponne
  t.dragY = 0; t.dragX = 0;
  snd.paper();
  let waited = 0;
  const stampWhenStraight = () => {
    waited += 90;
    const straight = Math.abs(t.dragYc) < .02 && Math.abs(t.dragXc) < .02;
    if(!straight && waited < 640){ setTimeout(stampWhenStraight, 90); return; }
    // 1) le billet est droit : le tampon tombe dessus, qui reste en grand au premier plan
    snd.stamp(); shake = .45;
    t.stampAnim = 0.0001; t.stamping = true;
    // 2) une fois tamponne, le billet part dans le fond (il rejoint le rang)
    setTimeout(() => {
      t.stamping = false;
      stampedOrder.push(t.p.id);
      t.stamped = true;
      rowLayout();
      stackLayout();
      setStampCounter();
      setActive(t, false);
      // 3) la fiche s'ouvre ; on revient a la pile (le billet a rejoint le mur)
      setTimeout(() => {
        openDetail(t.p);
        toPile(false);
        stampingLock = false;
      }, 620);
    }, 760);
  };
  stampWhenStraight();
}

/* -- evenements -- */
function onPointerMove(e){
  if(openPanel || !heroActive || detailOpen || stampingLock) return;
  const px = (e.clientX/innerWidth)*2-1, py = -(e.clientY/innerHeight)*2+1;
  if(dragging && lastDrag){
    const dx = e.clientX - lastDrag.x, dy = e.clientY - lastDrag.y;
    lastDrag = {x:e.clientX, y:e.clientY};
    const t = tickets[heroIdx]; if(!t) return;
    t.dragY += dx*.009; t.dragX = clamp(t.dragX + dy*.008, -.4, .4);
    if(Math.abs(dx) > 1 || Math.abs(dy) > 1) snd.paper();
    return;
  }
  if(heroIdx < 0){                       // pile au repos : on survole la pile ou les billets tamponnes
    const pinned = pickTicket(px,py);
    const p = pinned ? null : pickPile(px,py);
    pileHover = p;
    stage.style.cursor = pinned ? "pointer" : (p ? "grab" : "");
    hoverTicket(pinned);
    return;
  }
  const hitH = pickHero(px,py);
  if(hitH){
    if(hovered !== hitH){ if(hovered) setActive(hovered, false); hovered = hitH; snd.hover(); }
    stage.style.cursor = "grab";
    return;
  }
  const pinned = pickTicket(px,py);      // billets deja tamponnes affiches sur le guichet
  stage.style.cursor = pinned ? "pointer" : "";   // cliquable -> revoir l'affiche
  hoverTicket(pinned);
}
function onPointerDown(e){
  unlockMedia();
  if(e.button !== 0 && e.pointerType !== "touch") return;
  if(e.target.closest("a,button,input,textarea,select,label,#detail,#mobileMenu,#ticketBar")) return;
  if(openPanel || !heroActive || detailOpen || stampingLock) return;
  e.preventDefault();
  const px = (e.clientX/innerWidth)*2-1, py = -(e.clientY/innerHeight)*2+1;
  lastDrag = {x:e.clientX, y:e.clientY};
  swipeX = e.clientX; swipeY = e.clientY; swipeT = performance.now();
  if(stage) stage.style.cursor = "";
  if(pickHero(px,py)){          // on saisit le billet en main (on peut le tourner)
    dragging = true; snd.pick();
    return;
  }
  const t = pickTicket(px,py);     // un billet deja tamponne -> rouvre sa fiche
  if(t){ openDetail(t.p); return; }
  if(heroIdx < 0){                 // au repos : clic sur la pile -> on prend la carte du dessus
    const p = pickPile(px,py);
    if(p) showHero(p.i, false);
  } else {                         // clic a cote du billet en main -> on le repose sur la pile
    toPile(false);
  }
}
function onPointerUp(e){
  dragging = false;
  if(stage) stage.style.cursor = "";
  const t = tickets[heroIdx];
  const dx = e.clientX - swipeX, dy = e.clientY - swipeY;
  if(Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)*1.4 && (performance.now()-swipeT) < 450
      && !detailOpen && !openPanel && !stampingLock){
    if(Math.abs(t ? t.dragY : 0) < .35) cycleHero(dx > 0 ? -1 : 1);   // swipe -> billet suivant
  }
}
function onKeyDown(e){
  if(e.key === "Escape"){
    if(openPanel) closePanel();
    else if(detailOpen) closeDetail();
    else if(heroIdx >= 0) toPile(false);
    else if(focused) unfocusTicket();
    $("#mobileMenu").classList.remove("open");
    return;
  }
  if(detailOpen){
    if(e.key === "ArrowRight") stepDetail(1);
    if(e.key === "ArrowLeft") stepDetail(-1);
  } else if(!openPanel){
    if(e.key === "ArrowRight") cycleHero(1);
    if(e.key === "ArrowLeft") cycleHero(-1);
  }
}
let wheelAcc = 0, wheelIdle = 0, wheelCool = 0;
function onWheel(e){
  if(openPanel || detailOpen) return;   // laisse defiler le panneau / la fiche
  // molette peu sensible : il faut un vrai cran (delta cumule) pour changer de billet
  const px = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaMode === 2 ? e.deltaY * innerHeight : e.deltaY;

  // -- la molette REMPLACE le clic, n'importe ou sur la scene : un cran sort la carte
  //    du dessus de la pile, puis la molette feuillette les billets (sens du defilement).
  e.preventDefault();                    // pas de defilement de page : on feuillette les billets
  if(Date.now() < wheelCool){            // un geste = un billet : on laisse le geste se terminer
    wheelAcc = 0;
    return;
  }
  wheelAcc += px;
  clearTimeout(wheelIdle);
  wheelIdle = setTimeout(() => { wheelAcc = 0; }, 140);   // on oublie quand on s'arrete
  if(Math.abs(wheelAcc) < 200) return;                    // cran trop leger -> on ignore
  const dir = px > 0 ? 1 : -1;                            // sens du defilement
  wheelAcc = 0;
  wheelCool = Date.now() + 360;                           // anti-repetition pendant un long defilement

  if(heroIdx < 0){                       // aucune carte en main -> on sort celle du dessus
    if(!heroActive || stampingLock) return;
    let start = pileHover ? pileHover.i : -1;
    if(start < 0){                       // carte du dessus = plus grand index encore a tamponner
      for(let i = tickets.length - 1; i >= 0; i--){ if(!tickets[i].stamped){ start = i; break; } }
    }
    if(start < 0) return;                // tout est tamponne : il ne reste rien a sortir
    showHero(start, false, dir);
    return;
  }
  cycleHero(dir);
}
function onScroll(){
  if(focused && !heroActive) unfocusTicket();
}

function bindWorld(){
  addEventListener("pointermove", onPointerMove, {passive:true});
  addEventListener("pointerdown", onPointerDown);
  addEventListener("pointerup", onPointerUp, {passive:true});
  addEventListener("keydown", onKeyDown);
  addEventListener("wheel", onWheel, {passive:false});
  addEventListener("scroll", onScroll, {passive:true});
  addEventListener("resize", onResize);
  new IntersectionObserver(es => es.forEach(en => {
    heroActive = en.isIntersecting;
    if(!heroActive && focused) unfocusTicket();
  }), {threshold:.55}).observe($("#hero"));
}
function onResize(){
  if(!renderer || !camera) return;
  camera.aspect = innerWidth/innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight, false);
  computeLayout();                   // repositionne camera, rang des billets et rideaux
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
    const d  = 1.12;                                            // distance oeil -> billet
    const hh = Math.tan(camera.fov*Math.PI/360)*d;              // demi-hauteur visible au plan du billet
    const hw = hh*(innerWidth/innerHeight);                     // demi-largeur visible
    const wf = (innerWidth/innerHeight) < .85 ? .90 : .74;      // on tient le billet dans le cadre
    const fit = Math.min((2*hw*wf)/1.5, (2*hh*.52)/.9);         // jamais coupe, le plus grand possible
    x = 0; y = camBaseY - .14 + Math.sin(now*.6 + t.phase)*.02;
    z = Math.max(.6, camera.position.z - d);
    rx = -.02 + t.dragXc; ry = t.dragYc + Math.sin(now*.4 + t.phase*1.7)*.03;
    scale = Math.min(fit, .58); op = 1;
  }
  if(isHover){
    if(isHero){ scale *= 1.05; }
    else { y += .12; z += .16; rx += .1; scale *= 1.06; }
  }
  return {x,y,z,rx,ry,scale,op};
}

/* ================== Boucle de rendu ================== */
function startLoop(){
  let frame = 0, prev = performance.now();
  (function loop(){
    requestAnimationFrame(loop);
    const now = performance.now()/1000;
    const dt = Math.min((now - prev/1000) || .016, .05); prev = performance.now();
    frame++;
    if(document.hidden) return;

    // parallaxe + secousse
    camera.position.x += (pointerNdc.x*.18 - camera.position.x)*.04;
    camera.position.y += (camBaseY + pointerNdc.y*.06 - camera.position.y)*.06;
    if(shake > 0){
      camera.position.x += (Math.random()-.5)*shake*.09;
      camera.position.y += (Math.random()-.5)*shake*.09;
      shake *= .86;
    }
    camera.lookAt(0,camLookY,0);

    // poussieres
    const pos = dustPts.geometry.attributes.position;
    for(let i=0;i<pos.count;i++){
      pos.array[i*3+1] += .0015;
      if(pos.array[i*3+1] > 6.5) pos.array[i*3+1] = -1.5;
    }
    pos.needsUpdate = true;

    // halo de la pile : tres visible au repos (attire l'oeil), discret lorsqu'un billet est en main
    const glowTarget = (heroIdx < 0 ? .78 : .14) + (heroIdx < 0 ? Math.sin(now*1.6)*.12 : 0);
    pileGlow.material.opacity += (glowTarget - pileGlow.material.opacity)*.08;
    pileGlow.scale.setScalar(1 + (heroIdx < 0 ? Math.sin(now*1.6)*.05 + .05 : 0));

    // tickets
    for(const t of tickets){
      t.dragYc += (t.dragY - t.dragYc)*.22;
      t.dragXc += (t.dragX - t.dragXc)*.22;
      const isStack = !t.stamped && t.i !== heroIdx;   // billets poses en pile : pile fixe et plate
      const swayGoal = (isStack || t===focused || t===hovered) ? 0 : 1;
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

    renderer.render(scene, camera);
    if((frame & 31) === 0) updateClock();       // horloge de la cabine : heure locale (2 x/s)
    if((frame & 63) === 63) ticketWatchdog();   // ~1 x/s : un billet ne reste jamais transparent
  })();
}

let wdCount = 0;
function ticketWatchdog(){
  wdCount++;
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
  detailSheet.style.setProperty("--accent", p.accent);
  $("#dRoom").textContent = `${ROOMS[p.id]} * SCREENING`;
  $("#dKicker").textContent = `${p.seance} - ${p.num} / 006 - ${p.duration}`;
  $("#dTitle").textContent = p.title;
  $("#dDomain").textContent = `${p.domain} - ${p.year}`;
  $("#dTagline").textContent = p.tagline;
  $("#dHeadline").textContent = p.headline;
  $("#dMeta").innerHTML = [
    ["ROOM", ROOMS[p.id]],
    ["GENRE", p.genre],
    ["RUNTIME", p.duration],
    ["YEAR", p.year],
  ].map(m => `<div><label>${m[0]}</label><strong>${m[1]}</strong></div>`).join("");
  // medias dedupliques
  const seen = [], figs = [];
  [p.front, p.back].forEach(m => { if(!seen.includes(m.src)){ seen.push(m.src); figs.push(m); } });
  $("#dMedia").innerHTML = figs.length === 1
    ? figureHtml(figs[0]).replace(/^<figure>/, '<figure class="span2">')
    : figs.map(figureHtml).join("");
  let body = `<h5>SYNOPSIS</h5><p>${p.blurb}</p>`;
  body += p.sections.map(s => s.list
    ? `<h5>${s.h}</h5><ul>${s.list.map(li => `<li>${li}</li>`).join("")}</ul>`
    : `<h5>${s.h}</h5><p>${s.p}</p>`).join("");
  $("#dBody").innerHTML = body;
  detail.classList.add("open"); detail.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
  if(detailScroll) detailScroll.scrollTop = 0;
  snd.open();
}
function closeDetail(){
  detailOpen = false;
  detail.classList.remove("open"); detail.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
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
  });
}
function openPanelById(id){
  if(!panelEls) return;
  const el = panelEls.get(id);
  if(!el) return;
  if(openPanel && openPanel !== el) openPanel.classList.remove("open");
  openPanel = el;
  el.scrollTop = 0;
  el.classList.add("open");
  document.body.classList.add("panel-open");
  $$(".reveal", el).forEach(r => r.classList.add("in"));   // contenu deja revele
  if(id === "about") el.classList.add("skills-on");
  snd.open();
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

/* ================== HUD classique (grain, timecode, reveal...) ================== */
function initHud(){
  initPanels();

  /* email CONFIG */
  if(CONFIG.email && !CONFIG.email.includes("EMAIL.COM")){
    const mb = $("#mailBtn"); if(mb){ mb.href = `mailto:${CONFIG.email}?subject=Project x ${encodeURIComponent(CONFIG.name)} - The Box Office`; }
    const te = $("#ticketEmail"); if(te) te.textContent = CONFIG.email;
  }

  /* grain */
  const cg = grain.getContext("2d");
  const sizeG = () => { grain.width = innerWidth/2; grain.height = innerHeight/2; };
  sizeG(); addEventListener("resize", sizeG);
  setInterval(() => {
    const d = cg.createImageData(grain.width, grain.height), b = d.data;
    for(let i=0;i<b.length;i+=4){ const v=Math.random()*255|0; b[i]=b[i+1]=b[i+2]=v; b[i+3]=30; }
    cg.putImageData(d,0,0);
  }, 130);

  /* timecode */
  const tc = $("#timecode"); let f = 0;
  setInterval(() => {
    f = (f+1)%24;
    const t = performance.now()/1000|0;
    const hh=String(t/3600|0).padStart(2,"0"), mm=String((t/60|0)%60).padStart(2,"0"),
          ss=String(t%60).padStart(2,"0"), ff=String(f).padStart(2,"0");
    tc.textContent = `${hh}:${mm}:${ss}:${ff}`;
  }, 1000/24);

  /* reveal */
  $$(".reveal[data-delay]").forEach(el => el.style.setProperty("--d", el.dataset.delay+"ms"));
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

  /* bouton son */
  const sb = $("#soundBtn");
  const sync = () => { sb.setAttribute("aria-pressed", String(snd.on())); sb.textContent = snd.on() ? "SOUND ON" : "SOUND OFF"; };
  sb.addEventListener("click", () => { snd.toggle(); sync(); unlockMedia(); });
  sync();

  /* menu mobile */
  $("#menuBtn").addEventListener("click", () => $("#mobileMenu").classList.add("open"));
  $("#menuClose").addEventListener("click", () => $("#mobileMenu").classList.remove("open"));
  $$("#mobileMenu a").forEach(a => a.addEventListener("click", () => $("#mobileMenu").classList.remove("open")));

  /* liens internes : #top -> guichet, sections -> panneaux plein ecran */
  $$('a[href^="#"]').forEach(a => a.addEventListener("click", e => {
    const href = a.getAttribute("href");
    if(!href || href.length < 2) return;
    const tgt = document.getElementById(href.slice(1));
    if(!tgt) return;
    e.preventDefault();
    $("#mobileMenu").classList.remove("open");
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
}

/* ================== Boot ================== */
async function fontsReady(){
  try{
    await Promise.all([
      document.fonts.load("90px Anton"),
      document.fonts.load("600 22px Archivo"),
      document.fonts.load("italic 26px \"Playfair Display\""),
      document.fonts.load("700 88px \"Playfair Display\""),
    ]);
  }catch(e){}
}
async function boot(){
  await Promise.all([preloadAll(), fontsReady()]);
  if(buildStarted) return; buildStarted = true;
  initHud();
  buildNoWebgl();
  buildScene();
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", boot) : boot();
console.log("%c LL PICTURES - THE BOX OFFICE %c 6 tickets on the counter. Hover, click, spin, stamp. ", "background:#e03131;color:#fff", "background:#111;color:#efe9dc");