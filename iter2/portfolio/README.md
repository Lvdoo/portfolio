# Portfolio — Ludo La Bête (cinéma × creative tech)

Portfolio one-page façon **cinéma** : hall avec 6 affiches-salles, **salle de projection** au clic (actes, médias, film suivant), ticket ADMIT ONE, grain 35mm, timecode 24fps.

## Lancer
Ouvre `index.html` dans un navigateur (double-clic). Aucun build requis.

## Personnaliser (2 min)
1. **Email de Ludo** : ouvre `app.js`, en haut → `CONFIG.email = "..."`. Le bouton ticket + l'adresse se mettent à jour seuls.
2. **Nom / liens** : `CONFIG.name`, `CONFIG.github`.
3. **Textes projets** : objet `CASES` dans `app.js` (synopsis, stack, rôles).
4. **Citations presse** : section `#reviews` dans `index.html` (actuellement citations d'ambiance à remplacer par de vrais retours).
5. **Assets** : dossier `assets/` — `breathin-1.png`, `breathin-2.png`, `terubot-demo.mp4` (copiés depuis `Test/`).

## Projets (« films »)
| Nº | Film | Vrai projet | Source |
|----|------|-------------|--------|
| 001 | TERUBOT | Robotique sociale, émotions collectives | Description projet.txt + vidéo Test |
| 002 | BREATHIN | Respiration / Unity 6.2 | 2 screenshots Test |
| 003 | KAPSUL | Produit + Kickstarter | Description projet.txt |
| 004 | KEYMOTION | Gestes → son/lumière (Python + Unity) | github.com/Lvdoo/KeyMotion |
| 005 | NEURAL VISION | 3 repos reconnaissance (dessin, écriture, multi-nombres) | github.com/Lvdoo |
| 006 | WEATHERAPP | App météo Python/Tkinter, 66 commits | github.com/Lvdoo/WeatherApp |

## Interactions
- Preloader amorce 3-2-1, grain animé (canvas), letterbox cinéma.
- Curseur custom, boutons magnétiques, tilt 3D sur affiches, parallaxe douce du hero.
- Hall vertical : 6 affiches-salles alternées, clic sur la carte = entrée en salle.
- Salle de projection : écran letterbox, actes, film suivant (bouton + flèches clavier), Échap pour sortir.
- Vidéo TeruBot : bouton lecture explicite ▶ + contrôles (le survol seul ne suffit pas).
- Timecode REC 24fps, barre de progression, reveal on scroll, compteurs skills, menu mobile.

*Durées et genres = clin d'œil à siena.film (fictifs, table SALLE en haut de app.js).*

## Visuels à demander à Ludo (shot list)
Objectif : 1 à 2 images par projet manquant, format **1600×1000 (16:10)**, JPG/PNG < 500 Ko, déposées dans `assets/` :
- `kapsul-1.png` — le prototype en situation (bureau, main qui le manipule) + idéalement 1 capture de la page Kickstarter.
- `keymotion-1.png` — main devant caméra + écran du mapping (photo d'atelier, ambiance labo sombre = parfait).
- `vision-1.png` — capture d'écran de l'app qui reconnaît un chiffre dessiné.
- `weather-1.png` — capture d'écran de l'app météo.
Puis : 1) décommenter la ligne correspondante dans `MEDIA` (app.js) → l'image apparaît dans la salle ; 2) dans l'affiche du projet (index.html), remplacer le `<span class="poster-soon">` par `<img src="assets/xxx-1.png" alt="...">` → l'ardoise « VISUEL PHOTO À VENIR » disparaît.
