# AI 3D Virtual Try-On 👗✨

[![Three.js](https://img.shields.io/badge/Three.js-r120+-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![WebGL](https://img.shields.io/badge/WebGL-2.0-red?style=for-the-badge&logo=webgl)](https://www.khronos.org/webgl/)
[![WebXR](https://img.shields.io/badge/WebXR-Enabled-blue?style=for-the-badge)](https://immersiveweb.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

An interactive, browser-based **AI 3D Virtual Try-On** application engineered with Three.js, WebGL, and WebXR. This platform enables users to experience real-time 3D garment fitting, model manipulation, and interactive clothing simulation directly within the web browser without any external plugins.

---

## 🌟 Key Features

- **Real-Time 3D Fitting**: High-fidelity 3D garment rendering with realistic lighting, shadows, and fabric textures.
- **Interactive Try-On Simulation**: Hover and interact directly with clothes or avatar body parts to test different garment configurations.
- **Hardware-Accelerated WebGL Engine**: Smooth frame rates powered by custom Three.js Player runtime architecture.
- **WebXR & VR Ready**: Full compatibility with VR headsets and spatial interfaces via WebXR polyfills.
- **Responsive Viewport**: Automatically adapts across desktop monitors, laptops, and mobile screens.
- **Seamless Loading HUD**: Built-in animated loader with visual feedback while 3D mesh assets are initialized.

---

## 🛠️ Tech Stack

- **Graphics & Rendering**: [Three.js](https://threejs.org/) (WebGL 2.0)
- **XR Capabilities**: WebXR Device API, Helio WebXR Polyfill, Three.js VRButton
- **Language**: Modern JavaScript (ES Modules), HTML5, CSS3
- **Scene Serialization**: Three.js JSON Object Scene Specification (`app.json`)

---

## 🚀 Getting Started

Because the 3D scene data (`app.json` ~75MB) and ES modules are loaded dynamically, modern web browsers require the project to be served through a local HTTP server to satisfy CORS requirements.

### Prerequisites

Make sure you have either **Python 3** or **Node.js** installed:

```powershell
python --version
# or
node --version
```

### Installation & Running Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/tprincel/ai-virtual-try-on.git
   cd ai-virtual-try-on
   ```

2. **Start the local server**:
   
   Using Python:
   ```powershell
   python -m http.server 8000
   ```
   
   *Or using npm / npx:*
   ```bash
   npm start
   # or
   npx serve -l 8000
   ```

3. **Open in your browser**:
   Navigate to:
   ```
   http://localhost:8000
   ```

> 💡 **Tip**: When opening the page, the 3D scene loads into memory in ~3–5 seconds. Once the loading spinner fades out, you can drag to rotate the camera, zoom with the scroll wheel, and hover over clothing pieces to try them on.

---

## 📁 Project Architecture

```
ai-virtual-try-on/
├── css/
│   └── style.css            # Modern dark UI, responsive styling, and loading spinner
├── js/
│   ├── app.js               # Three.js Player runtime and event dispatcher
│   ├── dat.gui.module.js    # Interactive developer debug controls
│   ├── HelioWebXRPolyfill.js# WebXR polyfill for extended browser support
│   ├── three.module.js      # Three.js core 3D library (ES module)
│   └── VRButton.js          # WebXR VR hardware trigger button
├── app.json                 # 3D avatar, garment geometries, materials & lights (~75MB)
├── index.html               # Main application entry point and WebGL canvas
├── package.json             # Project metadata, keywords, and launch scripts
├── .gitignore               # Ignored system and local files
├── LICENSE                  # MIT License
└── README.md                # Project documentation and guide
```

---

## 👨‍💻 Author

**Princel Tixeira**  
- GitHub: [@tprincel](https://github.com/tprincel)  
- Email: [princetixeira@gmail.com](mailto:princetixeira@gmail.com)

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).
