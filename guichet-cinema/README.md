# 🎟 LL PICTURES — THE BOX OFFICE · 3D Cinema Portfolio

**Ludo La Bête**'s interactive portfolio, reinvented as a **3D cinema box office**: six tickets laid on a counter (Three.js / WebGL), each one a project. The tickets wait in a **fixed flat pile** on the counter; **just scroll (no click needed) or click the pile to pick one up**, **spin it** with the mouse to read the back, then **STAMP it**: the full "film" card opens.

The site fits on **a single screen**. **Scrolling anywhere** picks the top ticket up and then **cycles the tickets**; a ticket in hand is cycled the same way, and the page itself never scrolls. The classic sections (**About / Contact**) open as **full-screen panels** from the menu.

> ✨ **No build, no server.** Just open `index.html` (double-click).

---

## ▶ Run it

1. Double-click `index.html` (works over `file://`).
2. An internet connection helps on first load: Google fonts (Anton / Archivo / Playfair Display) + Three.js r160 from jsdelivr (cached afterwards).

**At the counter:**
- **Start** → the site **boots with the curtains shut** (`boothsClosed = true`, `curtainT = 1`): the ticket window is covered by the red velvet, **every light is out except the brass bell**, which glows and **pulses** under a small **pulsing arrow** pointing at it (`#bellHint`, only the `.bh-arrow`, no text, placed under the bell by `placeBell()`). Nothing else is selectable yet — you ring to open.
- **Click the brass bell** (on the counter, left of the pile) → **opens / closes the red velvet curtains**. Open = the lights come back, no ticket in hand, the pile of tickets to stamp sits **flat and fixed**, **centred** on the counter, lit by a **strong pulsing halo**. Closed = the booth is shut: the curtains draw across the ticket window, **every light goes out except the bell**, the tickets can **no longer be selected** (neither by scroll nor by click), and the arrow pointing at the bell comes back — click the bell again to reopen.
- **Move the mouse** → a **little projector follows the cursor**: a soft **light shaft** drops from above onto the exact spot you're pointing at, a real `SpotLight` **lights the surface** and a warm **pool of light** lies flat on it (`placeCursorBeam()`). Point at a **ticket** and the projector targets *the ticket itself*: the pool sits on its paper and the ticket **lights up** — its panels are unlit (`MeshBasicMaterial`), so their colour is raised to fake the spotlight. It fades out with the rest of the lights when the booth closes, off the 3D scene (panels / film card / scrolled away), and on touch screens it only lights up **while you press**.
- **Scroll anywhere** (or click the pile) → the top ticket **rises to the centre** (large, readable; scaled to fit, never cropped); keep scrolling to browse the tickets.
- **Hold left click + drag** → rotate (front / back).
- **Wheel or ← / →** → cycle the ticket in hand; **with no ticket in hand the wheel picks the top ticket up** (replaces the click). The page never scrolls.
- **Click outside the ticket** → put it back on the pile.
- **STAMP** → the ticket straightens up, takes the red **"ADMITTED"** stamp, the "film" card opens, then the ticket is **pinned up inside the booth** and you're back to the pile.
- **On a pinned ticket** → hover to lift it, click to **reopen its "film" card** (stamped tickets stay visible and reachable at all times).
- **The "film" card shares the ticket's art direction**: aged ivory paper, sepia ink, Playfair letterpress title, gold photo frame and dashed perforation rules, with the **accent band of that project** down the left (faded band on the right) — the card reads as the same printing as the ticket.
- **The card's top bar (stamp + ROOM / SCREENING) stays fixed** while the poster scrolls under it. Close the card by **clicking outside** it or with `Esc` (or browse with `←` / `→`).
- **Menu (About · Contact)** → opens the section as a **full-screen sheet printed like a ticket** (cream paper, sepia ink, gold accents, accent band down the left, fixed top bar with stamp + ROOM); `Esc` (or the header's **BOX OFFICE** link) closes it.
- `Esc` → close the panel, otherwise the film card, otherwise put the ticket back down on the pile.

---

## ✎ Customise it (2 minutes)

Everything is set at the top of **`app.js`**:

```js
const CONFIG = {
  name: "Ludo La Bête",
  email: "LUDO.CREATIVE@EMAIL.COM",   // ← your real email
  github: "https://github.com/Lvdoo",
  sound: true,                        // default sound (♪ button, top right)
};
```

The 6 projects (title, year, domain, role, genre, room, runtime, tools, tagline, blurb, sections, links) live in `const PROJECTS = [...]` just below.

**Your CV:** drop it in `assets/cv/` named exactly **`CV-Ludovic-LI.pdf`** — the **ABOUT** panel's "* CV - PDF" button links to `assets/cv/CV-Ludovic-LI.pdf`. (Change the `href` of that link in `index.html` if you rename the file.)

> `accent` = the project colour (ticket stripe, title, card). Pick it **dark/saturated** enough to stay legible on the cream paper.

---

## 🎬 ARTWORK TO COME — THE FILES TO DROP IN

Drop the files under the **exact name** in `assets/`: the "IMAGE COMING SOON" slot disappears on its own, both on the ticket **and** in the card.

| Project          | Front (ticket)     | Back (ticket)      | Suggested format   |
|------------------|--------------------|--------------------|--------------------|
| **TeruBot**     | ✅ `terubot-demo.mp4` | ✅ `terubot-demo.mp4` | video 480×848 |
| **BreathIN**    | ✅ `breathin-1.png` | ✅ `breathin-2.png` | 16:10 / 4:5 works |
| **Kapsul**      | ⬜ `kapsul-1.png`    | ⬜ `kapsul-2.png`    | 16:10, 1.5–2 MB max |
| **KeyMotion**   | ⬜ `keymotion-1.png` | ⬜ `keymotion-2.png` | 16:10             |
| **Neural Vision**| ⬜ `vision-1.png`   | ⬜ `vision-2.png`   | 16:10             |
| **WeatherApp**  | ⬜ `weather-1.png`  | ⬜ `weather-2.png`  | 16:10             |

> Shot list suggested by Ludo: prototype in context, campaign page, gesture mapping, Unity scene, training curve, handwriting, weather interface, 5-day view.

---

## 🛠 Technical details

- **Three.js r160** (UMD build via CDN) — real WebGL, textures **drawn on canvas**: vintage **horizontal tickets with a tear-off stub** (vertical perforation, torn edges, punch notches, Playfair serif type, typed mentions, rosette, series + barcode, PRIX/PRICE box), aged cream paper, "ADMITTED" stamp.
- **Vintage box office** (all UI text in English): dark waxed panelling, worn brass, a **shallow wooden counter** (you're leaning on it), a **giant ticket window with no bars** that **fills the entire screen** (the booth stays fully visible), a **red/cream striped scalloped awning spanning the WHOLE width**, a "marquee" bulb garland along its lower edge, a **"BOX OFFICE" plaque** and **English cinema posters** (both **flat on the wall** — no backing board and no added frame; the thin gold border is part of the artwork), a **framed PRICES board standing on the counter** (fully visible, never cropped), a brass counter bell, and a chequered floor. The **plaque and posters sit on the SAME PLANE as the stamped-tickets board** (the booth's back wall), so they read as mounted and never drift relative to it; the **PRICES board rests on the counter** and the **red velvet curtains** stay **on the sides**, pinned to the screen edges — until you **click the brass bell**, which **draws them shut across the window** (`layoutCurtains()`, animated through `curtainT`).
- **You ARE at the counter**: the camera sits **right at the window** (very short pull-back on desktop) and tilts slightly down; the wall is at `z = 0` and the **ticket window fills the whole screen** — it *is* the screen. The **BOX OFFICE plaque** and the **posters** are **fixed on the booth's back wall, co-planar with the stamped-tickets board** (left/right of it and just above it), the **PRICES board** stands **on the counter**; only the **curtains** follow the screen edges (`placeFacade()` / `layoutCurtains()`), the **brass bell** is kept visible (`placeBell()`) and the **wall clock** (`placeClock()`) slides to stay clear of the plaque whatever the width.
- **Customer POV — you see the booth**: the ticket window is a **real opening** in the wall; behind it the **booth interior** is kept deliberately **bare and lit** — a **wall clock set to the viewer's local time** (hung to the **left of the BOX OFFICE plaque**), on the same back wall the **BOX OFFICE plaque** and the two **posters** are mounted on (flat, co-planar with the stamped-tickets board), plus **two award statuettes resting on the counter, just to the RIGHT of the red poster** (`placeCesar()`): a **CÉSAR** (the French trophy by César Baldaccini — a massive vertical **"compressed" bronze** block, creased and with a crushed top, resting on a black marble base with a gilt ring and plate — `makeCesarStatue()`) and, right beside it, an **OSCAR** (the Art Deco knight by Cedric Gibbons — polished gold, **sword held point-down**, standing on a **five-spoke film-reel base** — `makeOscarStatue()`), replacing the former cashier silhouette (the middle table, till, decorative tickets, stamp and desk lamp have been removed). A faint glass reflection keeps the pane readable.
- **Stamped tickets = pinned to the board**: a brass frame made of 4 bars laid **in front of** the ticket (so it always frames it, never hidden behind), + a pin; laid out in a **3 × 2 grid on the display board inside the booth** (seen through the window). The frame + pin fade in only once the ticket has reached the board; hover = lift, click = reopen the card.
- **Un-stamped tickets**: nothing is in hand at rest — the tickets wait in a **fixed flat pile, centred on the counter** (highlighted by a **strong, pulsing warm halo**) that **never reshuffles** as you pick, cycle or stamp. **Scroll or click the pile** to bring the top ticket into your hand (scaled to fit the viewport, never cropped, so it stays readable); click outside it to lay it back down. You always see how many are left to stamp.
- **Closing time (the bell)**: clicking the **brass bell** (`toggleCurtains()`) closes the booth — the curtains sweep shut, **every light is damped down except a dedicated spot + glow on the bell** (`applyCurtainLighting()`), the pile halo goes out, and ticket interaction is **fully locked** (wheel, click, drag, swipe and arrow keys are all ignored); any ticket in hand is laid back down. Click the bell again to reopen.
- **Cursor projector** (`placeCursorBeam()`): the pointer ray is first tested against **every ticket** (`ticketMeshes`); a hit targets **that ticket** (its paper, its own face normal). Otherwise the ray is intersected with the **counter** (`y = 0`, when the hit lands between `z ≈ .15` and `2.05`) or, failing that, the **back wall** (`z = -2.19`). A `SpotLight` (angle `.19`, penumbra `.9`, warm `#ffe4bc`) hangs `(+0, +2.2, +1.05)` above the point — always clamped to stay **in front of the camera** — and the **visible beam** is a single **camera-facing quad** (a soft canvas cone texture, no hard silhouette edges) spanned from the source to the hit; the **pool of light** is a `PlaneGeometry` laid **on the surface plane** (i.e. on the ticket). Since tickets are unlit, the target ticket's **material colour is raised to `1 + .22 * lit`** (`lit` lerping back to `0`), which is what makes it read as lit. Everything is scaled by a single `cursorFade` ramped by `(1 - curtainT)` and gated by `cursorOn && heroActive && !openPanel && !detailOpen && !stampingLock`; touch pointers (`trackCursor()`) only hold it while pressed.
- **TeruBot video** redrawn ~15 fps onto the ticket while it's hovered/focused (one video at a time, for performance).
- **100% synthesised sound** (WebAudio): hover, pick-up, paper, stamp, open, bell — mute button `SOUND ON`.
- **Cinema art direction**: animated 35 mm grain, letterbox, 24 fps timecode, projector beam, dust.
- **"Film" card**: a **fixed top bar** (stamp + ROOM / SCREENING) over a **scrolling poster**; room, genre, runtime, synopsis, sections, 1–2 de-duplicated media, keyboard navigation (`←` / `→` / `Esc`, click outside to close).
- **Single page**: the section panels never scroll the page itself; **the wheel picks a ticket up / cycles the tickets, anywhere on the screen** (the page never scrolls). About and Contact are **full-screen panels** opened from the menu (`Esc`, or the header's **BOX OFFICE** link, to leave), each scrolling internally if needed.
- **Responsive**: on **desktop** the camera is glued to the counter (you're at the window); **tablet** and **mobile portrait** pull back to fit the width. The **row of stamped tickets** (3 × 2 grid on the board) and the **stack of tickets to stamp** (now **centred**) recompute against the visible width on every resize; the **curtains** are pinned to the screen edges (and, when closed, are sized to cover the whole viewport), the **brass bell** is kept at a constant on-screen position (`placeBell()`), the **wall clock** is re-centred to the free space **left of the BOX OFFICE plaque** (and shrunk on narrow screens so it is never hidden), while the **BOX OFFICE plaque** and **posters** stay fixed on the booth's back wall (co-planar with the stamped-tickets board) and the **PRICES board** stands on the counter. Click = rotate on mobile, stamp = button. The panels follow (`padding` and counter height via `--bar`).
- **Fallback**: without WebGL, a fallback list (in the message) opens the 6 cards directly.

---

## 📁 Structure

```
guichet-cinema/
├─ index.html        structure + HUD + film-card overlay
├─ styles.css        cinema art direction (grain, letterbox, box office)
├─ app.js            CONFIG, data, canvas textures, Three.js scene, interactions
├─ assets/           project media (drop the missing visuals here)
└─ README.md         this file
```

The parent folder holds the old site (`Itération 2.zip`) — kept intact.
