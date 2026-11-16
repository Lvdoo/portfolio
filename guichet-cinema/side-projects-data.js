/* =============================================================
   SIDE PROJECTS - donnees
   Pour ajouter un projet, ajouter simplement un objet a ce tableau.
   Champs :
   - id          : identifiant unique (string)
   - name        : nom du projet
   - description : description courte
   - tech        : tableau de technologies (tags)
   - github      : lien GitHub (obligatoire)
   - demo        : lien demo (optionnel, null si absent)
   - image       : chemin d'image (optionnel, null si absent)
   ============================================================= */
const SIDE_PROJECTS = [
  {
    id: "midnight-loop",
    name: "Midnight Loop",
    description:
      "A tiny generative short film: one loop, one light source, and a few lines of code that never repeat the same frame twice.",
    tech: ["JavaScript", "Canvas", "Generative"],
    github: "https://github.com/Lvdoo",
    demo: "https://example.com",
    image: null,
  },
  {
    id: "pocket-booth",
    name: "Pocket Booth",
    description:
      "A pocket-sized ticket booth for the browser - pick a card, spin it, and stamp it, with no page reload and no framework.",
    tech: ["HTML", "CSS", "Vanilla JS"],
    github: "https://github.com/Lvdoo",
    demo: null,
    image: null,
  },
  {
    id: "signal-noise",
    name: "Signal / Noise",
    description:
      "A small sensor-to-screen experiment that turns live motion data into sound, grain and a very short, very loud film.",
    tech: ["Web Audio", "MediaPipe", "Sensors"],
    github: "https://github.com/Lvdoo",
    demo: null,
    image: null,
  },
];
