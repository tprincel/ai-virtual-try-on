# AI 2D Virtual Try-On Studio 👗✨

[![Version](https://img.shields.io/badge/Version-2.0.0-blue?style=for-the-badge)](package.json)
[![HTML5](https://img.shields.io/badge/HTML5-Modern%20Semantic-orange?style=for-the-badge&logo=html5)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Glassmorphic%20UI-1572b6?style=for-the-badge&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES%20Modules-f7df1e?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

An interactive, high-fidelity **2D AI Virtual Try-On Studio** engineered with pure modern web technologies. Designed for seamless, instantaneous garment fitting on an anatomical 2D fashion mannequin with dynamic drape physics, real-time colorway customization, and curated outfit presets.

---

## 🌟 Key Features

- **Precision Anatomical Mannequin**: Scalable vector mannequin with realistic proportions (shoulders, chest, waist, hips, and limbs) and customizable skin tone palettes (Fair Ivory, Warm Beige, Sunlit Tan, Rich Bronze, Deep Espresso, Studio Slate).
- **Studio Lighting Atmosphere Engine**: 5 dynamic lighting environments (*Studio Spotlight*, *Cyberpunk Neon*, *Golden Hour Sunset*, *Runway Editorial*, *Midnight Velvet*) with responsive background gradients, ambient rim glows, and dynamic ground shadows.
- **Web Audio Soundscape Synthesizer**: Native Web Audio API procedural audio effects providing tactile sensory feedback (fabric rustle swoosh, button clicks, camera shutter, and preset sparkle chords) with mute toggle.
- **Stage Viewport Zoom & Inspection**: Interactive stage toolbar featuring Zoom In/Out/Reset, Idle Breathing Avatar physics, and dynamic 3/4 perspective angle view.
- **SVG Fabric Texture Shaders**: Micro-textured fabric shaders providing realistic textile depth (denim twill weave, knit ribbing, luxury satin sheen, and pebbled leather specular grain).
- **Curated Wardrobe Lookbook**: Save, bookmark, and name custom outfit combinations to local storage with one-click re-equipping and management.
- **Real-Time Wardrobe Search**: Instant text search filtering across garments, fabric types, and colors with instant count updates.
- **Expanded Luxury & Streetwear Catalog**:
  - *Tops*: Classic Crewneck, Vintage Graphic Rock Tee, Summer Linen V-Neck, Oversized Skater Tee, Athletic Dry-Fit, Oxford Button-Down, Fleece Hoodie, Merino Wool Turtleneck.
  - *Outerwear*: Leather Biker, Denim Trucker, Heritage Trench, Tailored Double-Breasted Silk Blazer, Quilted Down Puffer Vest.
  - *Bottoms*: Slim Jeans, Tailored Chinos, Relaxed Cargo, Bermuda Shorts, Tactical Techwear Cargo Joggers.
  - *Footwear*: Urban Minimalist Sneakers, Suede Chelsea Boots, Retro Two-Tone High-Top Dunks.
  - *Accessories*: Baseball Cap, Aviator Shades, Chunky Gold Chain, Designer Crossbody Sling Bag, Mirrored Cyber Visor Glasses.
- **Dynamic Fit Drape Controls**: Toggle between **Slim**, **Regular**, and **Oversized** fits with real-time silhouette adjustment and fold creep calculations.
- **Curated Style Presets & Randomizer**: One-click styling for *Casual Streetwear*, *Smart Casual Elegance*, *Biker Rock Edge*, *Vintage Trucker*, *Met Gala High Fashion*, *Tokyo Cyber Techwear*, and *Autumn Merino Minimalist*, plus "Inspire Me" randomizer.
- **AI Sizing & Fit Advisor**: Integrated calculator providing personalized size recommendations (S, M, L, XL) based on height, weight, and silhouette preferences.
- **High-Resolution Look Exporter**: Capture and download 800x1400 PNG snapshots of customized outfits for sharing or lookbook creation.
- **Zero Heavy Assets**: Instant 0-second loading with no bulky 3D files or WebGL lag.

---

## 🛠️ Tech Stack

- **Rendering Engine**: Dynamic Scalable Vector Graphics (SVG 1.1 / 2.0) with XML serialization, filter effects, and Canvas 2D export.
- **Audio Synthesis**: Procedural Web Audio API sound synthesis without external audio asset downloads.
- **Architecture**: Modular ES6 Modules (`TryOnEngine`, `Mannequin`, `LightingStudio`, `AudioEffects`, `LookbookManager`, `StageControls`, `StudioApp`).
- **Styling**: Modern Glassmorphic Dark UI, CSS Custom Properties, and responsive flex/grid layouts.
- **Exporting**: HTML5 Canvas rendering pipeline for high-res PNG snapshot generation.

---

## 🚀 Getting Started

Because the studio uses native ES modules (`import`/`export`), it is best run through a local HTTP server:

### Quick Start with Python

```powershell
python -m http.server 8000
```

### Or with Node.js

```bash
npm start
# or
npx serve -l 8000
```

### Open in Browser

Visit [http://localhost:8000](http://localhost:8000) in any modern web browser (Chrome, Edge, Safari, Firefox).

---

## 📁 Project Architecture

```text
ai-virtual-try-on/
├── css/
│   └── style.css            # Studio dark mode theme, glassmorphic panels, toast styles & responsive rules
├── js/
│   ├── audioEffects.js      # Procedural Web Audio API synthesizer for tactile UI soundscape
│   ├── fabricShaders.js     # SVG pattern and filter definitions for cloth textures and weaves
│   ├── garmentData.js       # Anatomical SVG vector garment catalog & curated outfit presets
│   ├── lightingStudio.js    # Studio lighting modes, backdrop themes, and ambient glow controller
│   ├── lookbookManager.js   # Local storage outfit persistence, bookmarking, and restoration
│   ├── mannequin.js         # Anatomical 2D mannequin model with dynamic skin tones & muscle contours
│   ├── stageControls.js     # Viewport zoom levels, idle breathing animation, and 3/4 perspective angle
│   ├── toastManager.js      # Non-intrusive animated toast notification feedback system
│   ├── tryOnEngine.js       # Stacking order, fit drape transformations & scene composer
│   └── studioApp.js         # UI orchestrator, event bindings, size advisor & snapshot exporter
├── index.html               # Main studio atelier application
├── package.json             # Project metadata & npm run scripts
├── LICENSE                  # MIT License
└── README.md                # Project documentation
```

---

## 👨‍💻 Author

Princel Tixeira

- GitHub: [@tprincel](https://github.com/tprincel)
- Email: [princetixeira@gmail.com](mailto:princetixeira@gmail.com)

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).
