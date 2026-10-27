/* ══ CONFIG — ✎ CHANGE ICI : email, nom, liens ══ */
const CONFIG = {
  name: "Ludo La Bête",
  email: "LUDO.CREATIVE@EMAIL.COM", // <-- remplace par le vrai email de Ludo
  github: "https://github.com/Lvdoo",
};

/* ══ CASE STUDIES ══ */
const CASES = {
  terubot: {
    n: "001", title: "TeruBot", headline: "“A film based on collective emotions”",
    meta: [["ROLE","Interaction · Proto · Code"],["YEAR","2025"],["TYPE","Robotique sociale"],["STATUS","Prototype fonctionnel"]],
    body: `
      <h5>SYNOPSIS</h5>
      <p>TeruBot transforme les émotions d'un groupe en représentation physique et interactive. Inspiré du Teru Teru Bōzu japonais, le robot visualise l'ambiance émotionnelle collective de façon simple, ludique et intuitive.</p>
      <h5>INTENTION UX</h5>
      <ul><li>Lisible à 3 mètres : une émotion = une couleur / un mouvement.</li><li>Zéro écran : le feedback est le corps du robot.</li><li>Rituel collectif : chacun contribue, tous comprennent.</li></ul>
      <h5>PROTO</h5>
      <p>Capteurs → microcontrôleur → actionneurs + lumière. Schémas et PCB sous KiCad (voir dossier <i>Test / HMA Rendu1</i>), itérations filmées — dont la démo <i>assets/terubot-demo.mp4</i>.</p>
      <h5>CE QUE JE RETIENS</h5>
      <p>Le test avec de vrais groupes a tout changé : le mapping émotion → mouvement a été simplifié 3 fois pour rester compris par un enfant de 8 ans.</p>`,
    link: CONFIG.github,
  },
  breathin: {
    n: "002", title: "BreathIN", headline: "“Breathtaking cinematography”",
    meta: [["ROLE","Interaction Design · Unity"],["YEAR","2026"],["MOTEUR","Unity 6.2 · C#"],["TYPE","Bien-être immersif"]],
    body: `
      <h5>SYNOPSIS</h5>
      <p>BreathIN aide à prendre conscience de sa respiration et à installer des moments de calme au quotidien. Un robot-guide, un cerisier en fleurs, des pétales qui suivent le souffle.</p>
      <h5>DESIGN D'INTERACTION</h5>
      <ul><li>Boucle respiratoire guidée : le décor (lumière, pétales, eau) respire avec toi.</li><li>Feedback immédiat, jamais punitif.</li><li>Monde ouvert apaisant : colline, rivière, forêt rouge.</li></ul>
      <h5>TECH</h5>
      <p>Unity 6.2 (SampleScene), particules, skybox dynamique, path de caméra. Stills : <i>assets/breathin-1.png</i> et <i>breathin-2.png</i> — captures du dossier Test.</p>
      <h5>CE QUE JE RETIENS</h5>
      <p>Le bien-être se designe comme un plan-séquence : rythme lent, pas de cut brutal, toujours une sortie de secours (pause / quitter).</p>`,
    link: CONFIG.github,
  },
  kapsul: {
    n: "003", title: "Kapsul — Kickstarter", headline: "“Groundbreaking product cinema”",
    meta: [["ROLE","Produit · DA · Proto"],["YEAR","2025"],["TYPE","Crowdfunding"],["PLATEFORME","Kickstarter"]],
    body: `
      <h5>SYNOPSIS</h5>
      <p>Kapsul transforme une idée de produit en projet concret et commercialisable : conception, prototypage, design produit et identité pensée pour le lancement en crowdfunding.</p>
      <h5>CE QUE J'AI FAIT</h5>
      <ul><li>Positionnement + naming + identité.</li><li>Prototypage rapide, photos / rendus pour la page campagne.</li><li>Storytelling de campagne : problème → démo → contreparties.</li></ul>
      <h5>ANGLE UX</h5>
      <p>Une page Kickstarter est une interface : hiérarchie, preuve, prix, urgence. J'ai designé Kapsul comme un funnel, pas comme une affiche.</p>`,
    link: "#contact",
  },
  keymotion: {
    n: "004", title: "KeyMotion", headline: "“Pure interaction, no remote”",
    meta: [["ROLE","Vision · Dev"],["YEAR","2025"],["STACK","Python · MediaPipe"],["PONT","→ Unity · ShaderLab"]],
    body: `
      <h5>SYNOPSIS</h5>
      <p>Contrôler le son, la couleur et le volume d'un geste de la main. KeyMotion capte les landmarks de la main, mappe les doigts à des actions et envoie les données à Unity et au système.</p>
      <h5>ARCHI</h5>
      <ul><li><i>camera.py + fingers_detection.py</i> : capture et landmarks (hand_landmarker.task).</li><li><i>mapping.py + interaction.py</i> : gestes → commandes.</li><li><i>send_data.py + hardware_controls.py + audio.py</i> : pont vers Unity / OS.</li><li>Dossier <i>KeyMotion_Unity</i> + <i>Button_Color_Volume_Control</i> côté scène.</li></ul>
      <h5>ANGLE UX</h5>
      <p>Le plus dur n'est pas la détection, c'est le <i>faux positif</i> : deadzone, hystérésis, feedback visuel immédiat pour que l'utilisateur comprenne ce qui est capté.</p>`,
    link: "https://github.com/Lvdoo/KeyMotion",
  },
  vision: {
    n: "005", title: "Neural Vision Lab", headline: "“A fascinating voyage into ML”",
    meta: [["ROLE","ML · Python"],["YEAR","2024 — 2025"],["STACK","CNN · OpenCV"],["REPOS","3"]],
    body: `
      <h5>SYNOPSIS</h5>
      <p>Triptyque de reconnaissance visuelle : chiffres dessinés, écriture manuscrite, détection multi-nombres. Trois repos, une obsession — rendre l'IA lisible pour un humain.</p>
      <ul><li><b>Drawing_Number_Recognition</b> : dessine un chiffre, le modèle le lit.</li><li><b>Hand_Written_Recognition</b> : écriture manuscrite au clavier-lumière.</li><li><b>MultiNumbersDetection</b> : plusieurs nombres dans une image.</li></ul>
      <h5>ANGLE UX</h5>
      <p>Dessiner l'interface d'entraînement (feedback de confiance, exemples, erreurs pédagogiques) compte autant que le score du modèle.</p>`,
    link: CONFIG.github,
  },
  weather: {
    n: "006", title: "WeatherApp", headline: "“Simple, honest interface”",
    meta: [["ROLE","Design + Dev"],["YEAR","2024"],["STACK","Python · Tkinter"],["COMMITS","66"]],
    body: `
      <h5>SYNOPSIS</h5>
      <p>Météo temps réel + 5 jours (conditions, min/max) via OpenWeatherMap. Recherche par ville, température, humidité, vent, gestion d'erreurs.</p>
      <h5>STRUCTURE</h5>
      <p><i>main.py · gui.py · weather_api.py · utils.py</i> — entrée, interface, requêtes, formatage. 66 commits : preuve de rigueur itérative.</p>
      <h5>ANGLE UX</h5>
      <p>Une app utilitaire se juge à ses états d'erreur (ville invalide, hors-ligne, quota API). Ici : messages clairs, jamais d'écran vide.</p>`,
    link: "https://github.com/Lvdoo/WeatherApp",
  },
};

/* ══ BOOT ══ */
(function(){
  "use strict";
  const $ = (s, c=document) => c.querySelector(s);
  const $$ = (s, c=document) => [...c.querySelectorAll(s)];

  /* email depuis CONFIG */
  const mailBtn = $("#mailBtn"), ticketEmail = $("#ticketEmail");
  if (CONFIG.email && !CONFIG.email.includes("EMAIL.COM")) {
    mailBtn.href = `mailto:${CONFIG.email}?subject=Projet x ${encodeURIComponent(CONFIG.name)} — Let's talk`;
    ticketEmail.textContent = CONFIG.email;
  }

  /* ── loader compte à rebours ── */
  const loaderCount = $("#loaderCount"), loaderPct = $("#loaderPct");
  let n = 3, pct = 0;
  const tick = setInterval(() => {
    pct = Math.min(100, pct + 22 + Math.random()*18);
    loaderPct.textContent = Math.floor(pct) + "%";
    if (n > 1) { n--; loaderCount.textContent = n; }
    if (pct >= 100) {
      clearInterval(tick);
      loaderCount.textContent = "▶";
      setTimeout(() => document.body.removeAttribute("data-loading"), 450);
    }
  }, 550);

  /* ── grain 35mm (8 ips, comme la pellicule) ── */
  const cv = $("#grain"), ctx = cv.getContext("2d");
  function sizeGrain(){ cv.width = innerWidth/2; cv.height = innerHeight/2; }
  sizeGrain(); addEventListener("resize", sizeGrain);
  setInterval(() => {
    const d = ctx.createImageData(cv.width, cv.height), b = d.data;
    for (let i=0;i<b.length;i+=4){ const v = Math.random()*255|0; b[i]=b[i+1]=b[i+2]=v; b[i+3]=28; }
    ctx.putImageData(d,0,0);
  }, 120);

  /* ── poussières dans le faisceau (canvas dédié, mélange normal = bien visibles) ── */
  const dc = $("#dust"), dctx = dc ? dc.getContext("2d") : null;
  if (dctx) {
    const sizeDust = () => { dc.width = innerWidth; dc.height = innerHeight; };
    sizeDust(); addEventListener("resize", sizeDust);
    const motes = Array.from({length: 34}, () => ({
      x: Math.random(), y: Math.random(),
      r: 1 + Math.random()*2.2, s: .00035 + Math.random()*.001,
      ph: Math.random()*Math.PI*2, sw: 8 + Math.random()*26,
    }));
    (function dustLoop(){
      requestAnimationFrame(dustLoop);
      dctx.clearRect(0, 0, dc.width, dc.height);
      const tt = performance.now()/1000;
      motes.forEach(m => {
        m.y -= m.s; if (m.y < -.02) { m.y = 1.02; m.x = Math.random(); }
        const x = (m.x*dc.width) + Math.sin(tt*.5 + m.ph)*m.sw;
        const a = .12 + .20*(.5 + .5*Math.sin(tt*1.8 + m.ph));
        dctx.beginPath();
        dctx.fillStyle = `rgba(255,240,210,${a.toFixed(3)})`;
        dctx.arc(x, m.y*dc.height, m.r, 0, 7);
        dctx.fill();
      });
    })();
  }

  /* ── timecode 24fps ── */
  const tc = $("#timecode"); let f = 0;
  setInterval(() => {
    f = (f+1)%24;
    const t = performance.now()/1000|0;
    const hh = String(t/3600|0).padStart(2,"0"), mm = String((t/60|0)%60).padStart(2,"0"),
          ss = String(t%60).padStart(2,"0"), ff = String(f).padStart(2,"0");
    tc.textContent = `${hh}:${mm}:${ss}:${ff}`;
  }, 1000/24);

  /* ── curseur custom ── */
  const cur = $("#cursor"), curLabel = $("#cursorLabel");
  let cx=0, cy=0, tx=0, ty=0;
  addEventListener("mousemove", e => { tx=e.clientX; ty=e.clientY; cur.classList.add("on"); });
  document.addEventListener("mouseleave", () => cur.classList.remove("on"));
  (function loop(){ cx+=(tx-cx)*.2; cy+=(ty-cy)*.2; cur.style.left=cx+"px"; cur.style.top=cy+"px"; requestAnimationFrame(loop); })();
  $$("[data-hover], .prog-card, a, button").forEach(el => {
    el.addEventListener("mouseenter", () => {
      cur.classList.add("view");
      curLabel.textContent = el.dataset.cursor || el.dataset.hover || el.closest("[data-cursor]")?.dataset.cursor || "VIEW";
    });
    el.addEventListener("mouseleave", () => cur.classList.remove("view"));
  });

  /* ── reveal on scroll (+délais stagger) ── */
  $$(".reveal[data-delay]").forEach(el => el.style.setProperty("--d", el.dataset.delay + "ms"));
  const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add("in")), {threshold:.12});
  $$(".reveal").forEach(el => io.observe(el));

  /* ── split-text : titres qui montent mot à mot ── */
  $$("[data-split] h2").forEach(h => {
    const walk = node => [...node.childNodes].forEach(n => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(part => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(" ")); return; }
          const w = document.createElement("span"); w.className = "w";
          const wi = document.createElement("span"); wi.className = "wi"; wi.textContent = part;
          w.appendChild(wi); frag.appendChild(w);
        });
        node.replaceChild(frag, n);
      } else if (n.nodeType === 1) walk(n);
    });
    walk(h);
    [...h.querySelectorAll(".wi")].forEach((wi, i) => wi.style.transitionDelay = (i*45) + "ms");
  });

  /* ── skills : barres + compteurs ── */
  const skillsBox = $(".about-skills");
  let counted = false;
  function countUp(){
    if (counted) return; counted = true;
    skillsBox.classList.add("skills-on");
    $$("[data-count]", skillsBox).forEach(b => {
      const target = +b.dataset.count, t0 = performance.now(), dur = 1300;
      (function step(t){
        const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
        b.textContent = Math.round(target * e);
        if (p < 1) requestAnimationFrame(step);
      })(t0);
    });
  }
  if (skillsBox) new IntersectionObserver((es, o) => es.forEach(e => {
    if (e.isIntersecting) { skillsBox.classList.add("skills-on"); countUp(); o.disconnect(); }
  }), {threshold:.3}).observe(skillsBox);

  /* ── progression scroll ── */
  const bar = $("#progressBar");
  addEventListener("scroll", () => {
    const h = document.documentElement;
    bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + "%";
  }, {passive:true});

  /* ══ HALL DU CINÉMA : programme vertical, immersion au clic ══ */
  const ORDER = ["terubot","breathin","kapsul","keymotion","vision","weather"];
  const SALLE = {
    terubot:  {room:"SALLE 01", seance:"SÉANCE 21H00", genre:"Film choral · science-fiction douce", duree:"77 MIN"},
    breathin: {room:"SALLE 02", seance:"SÉANCE 18H30", genre:"Plan-séquence contemplatif", duree:"109 MIN"},
    kapsul:   {room:"SALLE 03", seance:"SÉANCE 20H00", genre:"Blockbuster produit · trailer de lancement", duree:"93 MIN"},
    keymotion:{room:"SALLE 04", seance:"SÉANCE 22H15 · INTERDIT DE NE PAS BOUGER", genre:"Film interactif · geste", duree:"66 MIN"},
    vision:   {room:"SALLE 05", seance:"SÉANCE 19H00", genre:"Found footage · archives IA", duree:"88 MIN"},
    weather:  {room:"SALLE 06", seance:"SÉANCE 17H00 · COURT-MÉTRAGE", genre:"Chronique utilitaire", duree:"27 MIN"},
  };
  const MEDIA = {
    terubot: [{t:"video", src:"assets/terubot-demo.mp4", cap:"BANDE-ANNONCE — DÉMO ATELIER (dossier Test)"}],
    breathin: [{t:"img", src:"assets/breathin-1.png", cap:"PHOTOGRAMME 01 — LE CERISIER / RESPIRATION GUIDÉE"},
               {t:"img", src:"assets/breathin-2.png", cap:"PHOTOGRAMME 02 — TRAVERSÉE / COHÉRENCE"}],
    /* Quand Ludo envoie ses visuels : dépose le fichier dans assets/ et décommente la ligne.
       Format conseillé : 1600×1000 (16:10), JPG/PNG < 500 Ko. */
    // kapsul: [{t:"img", src:"assets/kapsul-1.png", cap:"PHOTOGRAMME — PROTOTYPE KAPSUL"}],
    // keymotion: [{t:"img", src:"assets/keymotion-1.png", cap:"PHOTOGRAMME — GESTE / MAPPING TEMPS RÉEL"}],
    // vision: [{t:"img", src:"assets/vision-1.png", cap:"PHOTOGRAMME — ENTRAÎNEMENT DU MODÈLE"}],
    // weather: [{t:"img", src:"assets/weather-1.png", cap:"PHOTOGRAMME — INTERFACE APP"}],
  };
  const cards = $$(".prog-card[data-film]");
  const hero = $("#hero"), heroTitle = $("#heroTitle"), heroBg = $("#heroBg");

  /* étiquettes salle + accent par carte (générées, rien à maintenir en HTML) */
  cards.forEach(card => {
    const s = SALLE[card.dataset.film]; if (!s) return;
    card.style.setProperty("--card-accent", card.dataset.accent || "#d4a373");
    const info = $(".film-info", card);
    if (info && !$(".prog-room", info)) {
      const p = document.createElement("p");
      p.className = "prog-room";
      p.textContent = `${s.room} · ${s.seance} · ${s.duree}`;
      info.prepend(p);
      const g = document.createElement("p");
      g.className = "prog-genre";
      g.textContent = s.genre;
      info.insertBefore(g, info.children[1]);
    }
    /* la carte entière est cliquable → entrée en salle (sauf liens, boutons et vidéo) */
    card.addEventListener("click", e => {
      if (e.target.closest("a,button,video")) return;
      openCase(card.dataset.film);
    });
  });

  /* lecture démo : survol = lecture muette, clic sur la vidéo = contrôles (pas de bouton central) */
  cards.forEach(card => {
    const v = $("video", card);
    if (!v) return;
    card.addEventListener("mouseenter", () => { if (!v.hasAttribute("controls")) v.play().catch(()=>{}); });
    card.addEventListener("mouseleave", () => { if (!v.hasAttribute("controls")) v.pause(); });
  });
  document.addEventListener("click", e => {
    const vv = e.target.closest(".film-poster video");
    if (!vv) return;
    e.stopPropagation();
    if (!vv.hasAttribute("controls")) { vv.setAttribute("controls", ""); vv.play().catch(()=>{}); }
  });

  /* hero : parallaxe douce au scroll (simple, sans boucle) */
  if (hero) addEventListener("scroll", () => {
    const r = hero.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) return;
    const p = Math.max(0, Math.min(1, -r.top / (r.height || 1)));
    heroTitle.style.transform = `translateY(${p*110}px)`;
    heroTitle.style.opacity = Math.max(0, 1 - p*1.4);
    heroBg.style.transform = `translateY(${p*160}px)`;
  }, {passive:true});

  /* (travelling horizontal supprimé : le hall est vertical, la salle fait l'immersion) */

  /* stills : léger tilt au survol */
  $$(".stills-grid figure").forEach(fig => {
    fig.addEventListener("mousemove", e => {
      const r = fig.getBoundingClientRect();
      const x = (e.clientX - r.left)/r.width - .5;
      fig.style.transform = `perspective(800px) rotateY(${x*4}deg)`;
    });
    fig.addEventListener("mouseleave", () => fig.style.transform = "");
  });

  /* ── tilt léger sur posters ── */
  $$(".prog-card").forEach(card => {
    const poster = $(".film-poster", card);
    if (!poster) return;
    card.addEventListener("mousemove", e => {
      const r = poster.getBoundingClientRect();
      const x = (e.clientX - r.left)/r.width - .5, y = (e.clientY - r.top)/r.height - .5;
      poster.style.transform = `perspective(900px) rotateY(${x*6}deg) rotateX(${-y*6}deg)`;
    });
    card.addEventListener("mouseleave", () => poster.style.transform = "");
  });

  /* ── salle de projection ── */
  const modal = $("#modal"), sallePanel = $("#sallePanel"), salleScreen = $("#salleScreen");
  let currentKey = null;
  function renderMedia(key){
    const box = $("#mMedia"), items = MEDIA[key] || [];
    if (!items.length) {
      const s = SALLE[key];
      box.innerHTML = `<div class="salle-empty">SÉANCE ARCHIVES — MÉDIAS SUR DEMANDE · ${s ? s.room : ""} · <a href="https://github.com/Lvdoo" target="_blank" rel="noopener" style="color:var(--salle-accent,#d4a373)">GITHUB.COM/LVDOO</a></div>`;
      salleScreen.style.display = "";
      return;
    }
    box.innerHTML = items.map(m => m.t === "video"
      ? `<figure class="${items.length===1?"span2":""}"><video src="${m.src}" controls autoplay muted loop playsinline preload="auto"></video><figcaption>${m.cap}</figcaption></figure>`
      : `<figure class="${items.length===1?"span2":""}"><img src="${m.src}" alt="${m.cap}" loading="lazy"><figcaption>${m.cap}</figcaption></figure>`
    ).join("");
    salleScreen.style.display = "";
    const sv = box.querySelector("video");
    if (sv) sv.play().catch(()=>{});
  }
  function openCase(key){
    const c = CASES[key], s = SALLE[key]; if(!c) return;
    currentKey = key;
    const card = cards.find(cd => cd.dataset.film === key);
    sallePanel.style.setProperty("--salle-accent", (card && card.dataset.accent) || "#d4a373");
    $("#mRoom").textContent = `${s ? s.room : "SALLE"} ● PROJECTION`;
    $("#mKicker").textContent = `${s ? s.seance : "SÉANCE"} — ${c.n} / 006 · ${s ? s.duree : ""}`;
    $("#mTitle").textContent = c.title;
    $("#mHeadline").textContent = c.headline;
    renderMedia(key);
    $("#mMeta").innerHTML = [
      ["SALLE", s ? s.room : "—"],
      ["GENRE", s ? s.genre : "—"],
      ["DURÉE", s ? s.duree : "—"],
      ["ANNÉE", (c.meta.find(m => m[0]==="YEAR") || ["","—"])[1]],
    ].map(m => `<div><label>${m[0]}</label><strong>${m[1]}</strong></div>`).join("");
    $("#mBody").innerHTML = c.body;
    $("#mLink").href = c.link;
    $("#mLink").style.display = c.link.startsWith("#") ? "none" : "";
    const i = ORDER.indexOf(key);
    $("#mNext").textContent = `FILM SUIVANT → ${CASES[ORDER[(i+1)%ORDER.length]].title.toUpperCase()}`;
    sallePanel.scrollTop = 0;
    modal.classList.add("open"); modal.setAttribute("aria-hidden","false");
    document.body.style.overflow = "hidden";
  }
  function closeCase(){ modal.classList.remove("open"); modal.setAttribute("aria-hidden","true"); document.body.style.overflow = ""; currentKey = null; }
  function stepCase(dir){
    if (!currentKey) return;
    const i = ORDER.indexOf(currentKey);
    openCase(ORDER[(i + dir + ORDER.length) % ORDER.length]);
  }
  $$("[data-open]").forEach(b => b.addEventListener("click", e => { e.stopPropagation(); openCase(b.dataset.open); }));
  $$("[data-close]", modal).forEach(b => b.addEventListener("click", closeCase));
  $("#mNext").addEventListener("click", () => stepCase(1));
  addEventListener("keydown", e => {
    if (e.key === "Escape") { closeCase(); $("#mobileMenu").classList.remove("open"); }
    if (!modal.classList.contains("open")) return;
    if (e.key === "ArrowRight") stepCase(1);
    if (e.key === "ArrowLeft") stepCase(-1);
  });

  /* ── ancres douces (scroll-behavior piloté par le moteur) ── */
  $$('a[href^="#"]').forEach(a => a.addEventListener("click", e => {
    const t = $(a.getAttribute("href"));
    if (!t) return;
    e.preventDefault();
    $("#mobileMenu").classList.remove("open");
    t.scrollIntoView({behavior:"smooth", block:"start"});
  }));

  /* ── menu mobile ── */
  $("#menuBtn").addEventListener("click", () => $("#mobileMenu").classList.add("open"));
  $("#menuClose").addEventListener("click", () => $("#mobileMenu").classList.remove("open"));
  $$("#mobileMenu a").forEach(a => a.addEventListener("click", () => $("#mobileMenu").classList.remove("open")));

  /* ── boutons magnétiques ── */
  if (matchMedia("(hover:hover)").matches) $$(".magnetic").forEach(b => {
    b.addEventListener("mousemove", e => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX-r.left-r.width/2)*.15}px,${(e.clientY-r.top-r.height/2)*.25}px)`;
    });
    b.addEventListener("mouseleave", () => b.style.transform = "");
  });

  console.log("%c LLB PICTURES %c hall + 6 salles prêts — cliquez pour entrer en projection ", "background:#e03131;color:#fff", "background:#111;color:#efe9dc");
})();
