/**
 * 2D Virtual Try-On - Mannequin Engine
 * Anatomical 2D fashion mannequin with dynamic skin tones, muscle shading, and ground shadow.
 */

export const SKIN_TONES = [
  { id: 'fair', name: 'Fair Ivory', hex: '#f6d5bd', shadow: '#e4b69b' },
  { id: 'warm', name: 'Warm Beige', hex: '#e8be96', shadow: '#d09f73' },
  { id: 'tan', name: 'Sunlit Tan', hex: '#c58d60', shadow: '#a97042' },
  { id: 'bronze', name: 'Rich Bronze', hex: '#8c5235', shadow: '#6b3c22' },
  { id: 'deep', name: 'Deep Espresso', hex: '#4e2f1d', shadow: '#371f11' },
  { id: 'slate', name: 'Studio Slate', hex: '#64748b', shadow: '#475569' }
];

export class Mannequin {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.skinTone = options.skinTone || SKIN_TONES[1];
    this.silhouette = options.silhouette || 'athletic';
    this.showContours = options.showContours !== false;
  }

  setSkinTone(toneId) {
    const tone = SKIN_TONES.find(t => t.id === toneId);
    if (tone) {
      this.skinTone = tone;
      this.updateColors();
    }
  }

  setSilhouette(type) {
    this.silhouette = type;
  }

  getSVGMarkup() {
    const { hex, shadow } = this.skinTone;

    return `
      <g id="mannequin-root">
        <defs>
          <!-- Dynamic Skin Gradient -->
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="${shadow}" />
            <stop offset="50%" stop-color="${hex}" />
            <stop offset="100%" stop-color="${shadow}" />
          </linearGradient>

          <!-- Head Spherical Lighting -->
          <radialGradient id="headGrad" cx="45%" cy="40%" r="60%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.3" />
            <stop offset="60%" stop-color="${hex}" />
            <stop offset="100%" stop-color="${shadow}" />
          </radialGradient>

          <!-- Floor Contact Shadow -->
          <radialGradient id="floorShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="rgba(0,0,0,0.45)" />
            <stop offset="60%" stop-color="rgba(0,0,0,0.15)" />
            <stop offset="100%" stop-color="rgba(0,0,0,0)" />
          </radialGradient>
        </defs>

        <!-- Pedestal / Floor Shadow -->
        <ellipse cx="200" cy="650" rx="90" ry="14" fill="url(#floorShadow)" />
        <ellipse cx="200" cy="650" rx="100" ry="8" fill="rgba(0,0,0,0.18)" />

        <!-- Mannequin Base Body Group -->
        <g id="mannequin-body" class="mannequin-skin">
          
          <!-- Left Leg -->
          <path class="skin-fill" d="M 148 290 
                   C 142 350, 142 420, 148 480 
                   C 150 520, 152 570, 155 625 
                   L 170 625 
                   C 174 570, 178 520, 178 480 
                   C 182 420, 188 350, 196 325 
                   Z" 
                fill="url(#skinGrad)" stroke="${shadow}" stroke-width="1.2" />

          <!-- Right Leg -->
          <path class="skin-fill" d="M 252 290 
                   C 258 350, 258 420, 252 480 
                   C 250 520, 248 570, 245 625 
                   L 230 625 
                   C 226 570, 222 520, 222 480 
                   C 218 420, 212 350, 204 325 
                   Z" 
                fill="url(#skinGrad)" stroke="${shadow}" stroke-width="1.2" />

          <!-- Knee Highlights -->
          <ellipse cx="163" cy="485" rx="7" ry="9" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
          <ellipse cx="237" cy="485" rx="7" ry="9" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />

          <!-- Left Foot (Base) -->
          <path class="skin-fill" d="M 155 625 L 140 642 L 175 642 L 170 625 Z" fill="${hex}" stroke="${shadow}" stroke-width="1" />

          <!-- Right Foot (Base) -->
          <path class="skin-fill" d="M 245 625 L 260 642 L 225 642 L 230 625 Z" fill="${hex}" stroke="${shadow}" stroke-width="1" />

          <!-- Pelvis & Underwear Line -->
          <path class="skin-fill" d="M 148 270 Q 200 280, 252 270 L 255 310 Q 200 338, 145 310 Z" fill="${shadow}" opacity="0.4" />

          <!-- Main Torso (Chest to Waist to Hips) -->
          <path class="skin-fill" d="M 172 110 
                   L 228 110 
                   L 280 135 
                   L 260 215 
                   L 252 290 
                   Q 200 300, 148 290 
                   L 140 215 
                   L 120 135 
                   Z" 
                fill="url(#skinGrad)" stroke="${shadow}" stroke-width="1.5" />

          <!-- Left Arm -->
          <path class="skin-fill" d="M 120 135 
                   C 106 170, 96 220, 95 260 
                   C 94 285, 90 320, 86 350 
                   L 98 350 
                   C 104 320, 110 285, 114 260 
                   C 120 220, 130 180, 138 155 
                   Z" 
                fill="url(#skinGrad)" stroke="${shadow}" stroke-width="1.2" />

          <!-- Left Hand -->
          <ellipse cx="92" cy="362" rx="7" ry="14" fill="${hex}" stroke="${shadow}" stroke-width="1" />

          <!-- Right Arm -->
          <path class="skin-fill" d="M 280 135 
                   C 294 170, 304 220, 305 260 
                   C 306 285, 310 320, 314 350 
                   L 302 350 
                   C 296 320, 290 285, 286 260 
                   C 280 220, 270 180, 262 155 
                   Z" 
                fill="url(#skinGrad)" stroke="${shadow}" stroke-width="1.2" />

          <!-- Right Hand -->
          <ellipse cx="308" cy="362" rx="7" ry="14" fill="${hex}" stroke="${shadow}" stroke-width="1" />

          <!-- Sculpted Anatomical Details / Contours -->
          <!-- Pectoral / Chest Contours -->
          <path d="M 152 165 Q 175 185, 198 175" fill="none" stroke="rgba(0,0,0,0.12)" stroke-width="2" stroke-linecap="round" />
          <path d="M 248 165 Q 225 185, 202 175" fill="none" stroke="rgba(0,0,0,0.12)" stroke-width="2" stroke-linecap="round" />
          <!-- Sternum & Abdominal Line -->
          <line x1="200" y1="165" x2="200" y2="255" stroke="rgba(0,0,0,0.08)" stroke-width="2" stroke-linecap="round" />
          <path d="M 180 205 Q 200 215, 220 205" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1.5" />
          <path d="M 182 235 Q 200 245, 218 235" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1.5" />

          <!-- Neck -->
          <path class="skin-fill" d="M 188 80 L 186 115 L 214 115 L 212 80 Z" fill="url(#skinGrad)" stroke="${shadow}" stroke-width="1.2" />
          <!-- Clavicles / Collarbones -->
          <path d="M 172 115 Q 186 122, 200 118 Q 214 122, 228 115" fill="none" stroke="rgba(0,0,0,0.18)" stroke-width="1.5" stroke-linecap="round" />

          <!-- Sculpted Mannequin Head (Abstract Fashion Form) -->
          <path d="M 200 24 
                   C 222 24, 225 45, 224 64 
                   C 223 80, 210 94, 200 96 
                   C 190 94, 177 80, 176 64 
                   C 175 45, 178 24, 200 24 
                   Z" 
                fill="url(#headGrad)" stroke="${shadow}" stroke-width="1.5" />
          
          <!-- Head Center Line Highlight & Minimalist Face Plane -->
          <path d="M 200 38 L 200 78" stroke="rgba(255,255,255,0.25)" stroke-width="1.5" stroke-linecap="round" />
          <path d="M 194 65 Q 200 70, 206 65" fill="none" stroke="rgba(0,0,0,0.15)" stroke-width="1.2" />
        </g>
      </g>
    `;
  }

  updateColors() {
    const skinGrad = document.getElementById('skinGrad');
    const headGrad = document.getElementById('headGrad');
    if (skinGrad && headGrad) {
      const { hex, shadow } = this.skinTone;
      skinGrad.innerHTML = `
        <stop offset="0%" stop-color="${shadow}" />
        <stop offset="50%" stop-color="${hex}" />
        <stop offset="100%" stop-color="${shadow}" />
      `;
      headGrad.innerHTML = `
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.3" />
        <stop offset="60%" stop-color="${hex}" />
        <stop offset="100%" stop-color="${shadow}" />
      `;
    }
  }
}
