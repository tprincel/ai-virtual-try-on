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
- **Proper Garment Alignment & Fitting**: Every garment in the catalog is engineered to wrap and align precisely to the mannequin's anatomical landmarks, eliminating distortion and clipping.
- **Dynamic Fit Drape Controls**: Toggle between **Slim**, **Regular**, and **Oversized** fits with real-time silhouette adjustment and fold creep calculations.
- **Multi-Layer Stacking Engine**: Seamless depth layering for realistic fashion composition:
  - *Base*: Anatomical mannequin silhouette & contour highlights
  - *Layer 20*: Tailored bottoms (Jeans, chinos, shorts, cargo pants)
  - *Layer 30*: Inner tops (Crewnecks, button-down oxfords, hoodies)
  - *Layer 40*: Outerwear (Trucker denim jackets, leather biker jackets, heritage trench coats)
  - *Layer 50*: Footwear (Minimalist leather sneakers, suede Chelsea boots)
  - *Layer 60*: Accessories (Aviator sunglasses, embroidered dad caps, Cuban link chains)
- **Live Fabric Color Swatching**: Switch fabric colorways dynamically with preserved ambient shading, fold creases, and highlights.
- **Curated Style Presets & Randomizer**: One-click styling for *Casual Streetwear*, *Smart Casual Elegance*, *Biker Rock Edge*, and *Vintage Trucker*, plus an "Inspire Me" random outfit generator.
- **AI Sizing & Fit Advisor**: Integrated calculator providing personalized size recommendations (S, M, L, XL) based on height, weight, and silhouette preferences.
- **High-Resolution Look Exporter**: Capture and download 800x1400 PNG snapshots of customized outfits for sharing or lookbook creation.
- **Zero Heavy Assets**: Instant 0-second loading with no bulky 3D files or WebGL lag.

---

## 🛠️ Tech Stack

- **Rendering Engine**: Dynamic Scalable Vector Graphics (SVG 1.1 / 2.0) with XML serialization and Canvas 2D export.
- **Architecture**: Modular ES6 Modules (`TryOnEngine`, `Mannequin`, `GarmentCatalog`, `StudioApp`).
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

```
ai-virtual-try-on/
├── css/
│   └── style.css            # Studio dark mode theme, glassmorphic panels & responsive styles
├── js/
│   ├── garmentData.js       # Anatomical SVG vector garment catalog & preset outfits
│   ├── mannequin.js         # Anatomical 2D mannequin model with dynamic skin tones
│   ├── tryOnEngine.js       # Stacking order, fit drape transformations & scene composer
│   └── studioApp.js         # UI orchestrator, event bindings, size advisor & snapshot exporter
├── index.html               # Main studio atelier application
├── package.json             # Project metadata & npm run scripts
├── LICENSE                  # MIT License
└── README.md                # Project documentation
```

---

## 👨‍💻 Author

**Princel Tixeira**  
- GitHub: [@tprincel](https://github.com/tprincel)  
- Email: [princetixeira@gmail.com](mailto:princetixeira@gmail.com)

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).
