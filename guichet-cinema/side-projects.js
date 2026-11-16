/* =============================================================
   SIDE PROJECTS - rendu des cartes
   Les projets vivent dans side-projects-data.js (tableau SIDE_PROJECTS).
   Ce script ne fait que construire le DOM a partir de ce tableau.
   ============================================================= */
(function () {
  const grid = document.getElementById("sideProjectsGrid");
  if (!grid || typeof SIDE_PROJECTS === "undefined" || !Array.isArray(SIDE_PROJECTS)) return;

  const frag = document.createDocumentFragment();

  SIDE_PROJECTS.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = "side-card";

    /* visuel : image si fournie, sinon un numero de bobine dans la DA du site */
    const media = document.createElement("div");
    media.className = "side-card-media";
    if (project.image) {
      const img = document.createElement("img");
      img.src = project.image;
      img.alt = project.name ? project.name + " preview" : "";
      img.loading = "lazy";
      img.decoding = "async";
      media.appendChild(img);
    } else {
      media.classList.add("side-card-media--empty");
      media.setAttribute("aria-hidden", "true");
      const num = document.createElement("span");
      num.className = "side-card-num";
      num.textContent = String(index + 1).padStart(2, "0");
      media.appendChild(num);
    }
    card.appendChild(media);

    const body = document.createElement("div");
    body.className = "side-card-body";

    const kicker = document.createElement("p");
    kicker.className = "side-card-kicker";
    kicker.textContent = "SIDE PROJECT " + String(index + 1).padStart(2, "0");
    body.appendChild(kicker);

    const title = document.createElement("h3");
    title.textContent = project.name || "Untitled";
    body.appendChild(title);

    const description = document.createElement("p");
    description.className = "side-card-desc";
    description.textContent = project.description || "";
    body.appendChild(description);

    if (Array.isArray(project.tech) && project.tech.length) {
      const tags = document.createElement("div");
      tags.className = "chips side-card-tags";
      project.tech.forEach((tag) => {
        const span = document.createElement("span");
        span.textContent = tag;
        tags.appendChild(span);
      });
      body.appendChild(tags);
    }

    const links = document.createElement("div");
    links.className = "side-card-links";

    if (project.github) {
      const github = document.createElement("a");
      github.className = "btn btn--small magnetic";
      github.href = project.github;
      github.target = "_blank";
      github.rel = "noopener noreferrer";
      github.textContent = "GITHUB ->";
      links.appendChild(github);
    }

    if (project.demo) {
      const demo = document.createElement("a");
      demo.className = "btn btn--small btn--ghost magnetic";
      demo.href = project.demo;
      demo.target = "_blank";
      demo.rel = "noopener noreferrer";
      demo.textContent = "DEMO ->";
      links.appendChild(demo);
    }

    if (links.children.length) body.appendChild(links);
    card.appendChild(body);
    frag.appendChild(card);
  });

  grid.appendChild(frag);
})();
