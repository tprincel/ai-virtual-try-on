/**
 * 2D Virtual Try-On - Mannequin Engine (Redesigned Modern Game Avatar)
 * High-fidelity athletic fashion croquis with sleek seamless compression shapewear,
 * natural hand/limb anatomy, and ambient occlusion contact shadows.
 */

export const SKIN_TONES = [
  { id: 'fair', name: 'Fair Ivory', hex: '#f7d7c4', shadow: '#e2b399', highlight: '#fff2eb' },
  { id: 'warm', name: 'Warm Beige', hex: '#e8be96', shadow: '#c9986d', highlight: '#fbf0e3' },
  { id: 'tan', name: 'Sunlit Tan', hex: '#c58d60', shadow: '#a36d40', highlight: '#e0b28a' },
  { id: 'bronze', name: 'Rich Bronze', hex: '#8c5235', shadow: '#6a381f', highlight: '#b17454' },
  { id: 'deep', name: 'Deep Espresso', hex: '#4e2f1d', shadow: '#351d0e', highlight: '#6e442c' },
  { id: 'slate', name: 'Studio Slate', hex: '#64748b', shadow: '#475569', highlight: '#94a3b8' }
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
    const { hex, shadow, highlight } = this.skinTone;

    return `
      <g id="mannequin-root">
        <defs>
          <!-- Dynamic Skin Gradient -->
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="${shadow}" />
            <stop offset="28%" stop-color="${hex}" />
            <stop offset="50%" stop-color="${highlight || hex}" />
            <stop offset="72%" stop-color="${hex}" />
            <stop offset="100%" stop-color="${shadow}" />
          </linearGradient>

          <!-- Arm Left Shading -->
          <linearGradient id="armLeftGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="${shadow}" />
            <stop offset="45%" stop-color="${hex}" />
            <stop offset="100%" stop-color="${shadow}" stop-opacity="0.8" />
          </linearGradient>

          <!-- Arm Right Shading -->
          <linearGradient id="armRightGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="${shadow}" stop-opacity="0.8" />
            <stop offset="55%" stop-color="${hex}" />
            <stop offset="100%" stop-color="${shadow}" />
          </linearGradient>

          <!-- Head Spherical Lighting -->
          <radialGradient id="headGrad" cx="45%" cy="38%" r="62%">
            <stop offset="0%" stop-color="${highlight || '#ffffff'}" stop-opacity="0.5" />
            <stop offset="50%" stop-color="${hex}" />
            <stop offset="100%" stop-color="${shadow}" />
          </radialGradient>

          <!-- Shapewear Texture Gradient -->
          <linearGradient id="shapewearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1e293b" />
            <stop offset="50%" stop-color="#0f172a" />
            <stop offset="100%" stop-color="#090d16" />
          </linearGradient>

          <!-- Shapewear Top Gradient -->
          <linearGradient id="shapewearTopGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#334155" />
            <stop offset="100%" stop-color="#0f172a" />
          </linearGradient>

          <!-- Floor Contact Shadow -->
          <radialGradient id="floorShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="rgba(0,0,0,0.55)" />
            <stop offset="50%" stop-color="rgba(0,0,0,0.2)" />
            <stop offset="100%" stop-color="rgba(0,0,0,0)" />
          </radialGradient>

          <!-- Ambient Under-Chin Shadow -->
          <linearGradient id="chinShadowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="rgba(0,0,0,0.3)" />
            <stop offset="100%" stop-color="rgba(0,0,0,0)" />
          </linearGradient>
        </defs>

        <!-- Ground Pedestal Shadow -->
        <ellipse cx="200" cy="648" rx="88" ry="12" fill="url(#floorShadow)" />
        <ellipse cx="200" cy="648" rx="55" ry="6" fill="rgba(0,0,0,0.35)" />

        <!-- Base Mannequin Character Body -->
        <g id="mannequin-body" class="mannequin-skin">
          
          <!-- ================= LEGS ================= -->
          <!-- Left Leg (Natural Athletic Stance) -->
          <path class="skin-fill" d="M 148 290
                   C 140 340, 138 395, 144 445
                   C 146 470, 148 510, 152 560
                   C 154 585, 156 610, 156 630
                   L 172 630
                   C 174 610, 176 585, 176 560
                   C 178 510, 180 470, 180 445
                   C 183 395, 188 350, 194 322
                   Z"
                fill="url(#skinGrad)" stroke="${shadow}" stroke-width="1.2" />

          <!-- Right Leg (Natural Athletic Stance) -->
          <path class="skin-fill" d="M 252 290
                   C 260 340, 262 395, 256 445
                   C 254 470, 252 510, 248 560
                   C 246 585, 244 610, 244 630
                   L 228 630
                   C 226 610, 224 585, 224 560
                   C 222 510, 220 470, 220 445
                   C 217 395, 212 350, 206 322
                   Z"
                fill="url(#skinGrad)" stroke="${shadow}" stroke-width="1.2" />

          <!-- Left Knee Anatomy Definition -->
          <path d="M 152 445 Q 163 438, 173 445" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="1.5" />
          <path d="M 154 458 Q 163 464, 171 458" fill="none" stroke="rgba(0,0,0,0.12)" stroke-width="1.5" />

          <!-- Right Knee Anatomy Definition -->
          <path d="M 227 445 Q 237 438, 248 445" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="1.5" />
          <path d="M 229 458 Q 237 464, 246 458" fill="none" stroke="rgba(0,0,0,0.12)" stroke-width="1.5" />

          <!-- Left Foot (Contoured Model Stance) -->
          <path class="skin-fill" d="M 156 630 L 142 642 C 148 646, 174 646, 176 642 L 172 630 Z" 
                fill="${hex}" stroke="${shadow}" stroke-width="1" />
          <path d="M 148 642 Q 160 638, 172 642" fill="none" stroke="rgba(0,0,0,0.15)" stroke-width="1" />

          <!-- Right Foot (Contoured Model Stance) -->
          <path class="skin-fill" d="M 244 630 L 258 642 C 252 646, 226 646, 224 642 L 228 630 Z" 
                fill="${hex}" stroke="${shadow}" stroke-width="1" />
          <path d="M 252 642 Q 240 638, 228 642" fill="none" stroke="rgba(0,0,0,0.15)" stroke-width="1" />

          <!-- ================= TORSO & SHAPEWEAR ================= -->
          <!-- Main Athletic Torso -->
          <path class="skin-fill" d="M 172 114
                   L 228 114
                   L 278 136
                   C 268 180, 260 215, 252 245
                   C 246 270, 250 288, 252 300
                   C 230 310, 170 310, 148 300
                   C 150 288, 154 270, 148 245
                   C 140 215, 132 180, 122 136
                   Z"
                fill="url(#skinGrad)" stroke="${shadow}" stroke-width="1.4" />

          <!-- Sleek Modern High-Waist Compression Shorts (Replaces raw underwear) -->
          <g id="base-compression-shorts">
            <path d="M 148 252
                     C 170 256, 230 256, 252 252
                     C 255 272, 258 296, 257 325
                     L 224 328
                     C 214 316, 206 312, 200 312
                     C 194 312, 186 316, 176 328
                     L 143 325
                     C 142 296, 145 272, 148 252
                     Z"
                  fill="url(#shapewearGrad)" stroke="#334155" stroke-width="1.2" />
            <!-- Waistband Ribbing Accent -->
            <path d="M 148 252 C 170 256, 230 256, 252 252 L 253 259 C 230 263, 170 263, 147 259 Z" 
                  fill="#475569" opacity="0.6" />
            <!-- Ergonomic Laser Seams -->
            <path d="M 168 255 Q 164 288, 160 326" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
            <path d="M 232 255 Q 236 288, 240 326" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
          </g>

          <!-- Sleek Seamless Athletic Crop Top / Base Layer -->
          <g id="base-compression-top">
            <path d="M 166 126
                     C 180 134, 220 134, 234 126
                     L 252 142
                     L 248 198
                     C 230 205, 170 205, 152 198
                     L 148 142
                     Z"
                  fill="url(#shapewearTopGrad)" stroke="#334155" stroke-width="1" />
            <!-- Subtle Chest Compression Seam -->
            <path d="M 154 194 C 170 198, 230 198, 246 194" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" />
          </g>

          <!-- Clavicles & Neck Contours -->
          <path d="M 172 118 Q 186 124, 200 120 Q 214 124, 228 118" fill="none" stroke="rgba(0,0,0,0.16)" stroke-width="1.5" stroke-linecap="round" />

          <!-- ================= ARMS & HANDS ================= -->
          <!-- Left Arm (Relaxed Fashion Stance, Natural Width) -->
          <path class="skin-fill" d="M 122 136
                   C 112 165, 106 200, 105 235
                   C 104 265, 107 295, 108 320
                   L 122 320
                   C 121 295, 120 265, 122 235
                   C 125 200, 131 168, 138 145
                   Z"
                fill="url(#armLeftGrad)" stroke="${shadow}" stroke-width="1.2" />

          <!-- Left Hand (Sculpted Relaxed Pose) -->
          <g id="left-hand">
            <path class="skin-fill" d="M 108 320
                     C 106 332, 104 344, 105 352
                     C 106 356, 110 357, 113 354
                     L 116 342
                     L 119 353
                     C 120 356, 124 355, 124 351
                     L 122 320
                     Z"
                  fill="${hex}" stroke="${shadow}" stroke-width="1" />
            <!-- Thumb -->
            <path d="M 116 324 Q 123 332, 120 340" fill="none" stroke="${shadow}" stroke-width="1" />
          </g>

          <!-- Right Arm (Relaxed Fashion Stance, Natural Width) -->
          <path class="skin-fill" d="M 278 136
                   C 288 165, 294 200, 295 235
                   C 296 265, 293 295, 292 320
                   L 278 320
                   C 279 295, 280 265, 278 235
                   C 275 200, 269 168, 262 145
                   Z"
                fill="url(#armRightGrad)" stroke="${shadow}" stroke-width="1.2" />

          <!-- Right Hand (Sculpted Relaxed Pose) -->
          <g id="right-hand">
            <path class="skin-fill" d="M 292 320
                     C 294 332, 296 344, 295 352
                     C 294 356, 290 357, 287 354
                     L 284 342
                     L 281 353
                     C 280 356, 276 355, 276 351
                     L 278 320
                     Z"
                  fill="${hex}" stroke="${shadow}" stroke-width="1" />
            <!-- Thumb -->
            <path d="M 284 324 Q 277 332, 280 340" fill="none" stroke="${shadow}" stroke-width="1" />
          </g>

          <!-- ================= NECK & HEAD ================= -->
          <!-- Neck -->
          <path class="skin-fill" d="M 187 86 L 185 120 L 215 120 L 213 86 Z" 
                fill="url(#skinGrad)" stroke="${shadow}" stroke-width="1.2" />
          <!-- Under-Chin Shadow -->
          <ellipse cx="200" cy="94" rx="14" ry="4" fill="url(#chinShadowGrad)" />

          <!-- Sculpted Head (Fashion Croquis Proportions) -->
          <!-- Ears -->
          <ellipse cx="173" cy="62" rx="4" ry="8" fill="${shadow}" />
          <ellipse cx="227" cy="62" rx="4" ry="8" fill="${shadow}" />

          <!-- Head Shape -->
          <path d="M 200 28
                   C 224 28, 226 48, 225 66
                   C 224 82, 212 94, 200 96
                   C 188 94, 176 82, 175 66
                   C 174 48, 176 28, 200 28
                   Z"
                fill="url(#headGrad)" stroke="${shadow}" stroke-width="1.4" />

          <!-- Minimalist Editorial Face Planes & Highlight -->
          <path d="M 200 36 L 200 74" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" stroke-linecap="round" />
          <path d="M 194 68 Q 200 73, 206 68" fill="none" stroke="rgba(0,0,0,0.18)" stroke-width="1.2" />
        </g>
      </g>
    `;
  }

  updateColors() {
    const skinGrad = document.getElementById('skinGrad');
    const headGrad = document.getElementById('headGrad');
    const armLeftGrad = document.getElementById('armLeftGrad');
    const armRightGrad = document.getElementById('armRightGrad');

    if (skinGrad && headGrad) {
      const { hex, shadow, highlight } = this.skinTone;
      skinGrad.innerHTML = `
        <stop offset="0%" stop-color="${shadow}" />
        <stop offset="28%" stop-color="${hex}" />
        <stop offset="50%" stop-color="${highlight || hex}" />
        <stop offset="72%" stop-color="${hex}" />
        <stop offset="100%" stop-color="${shadow}" />
      `;
      headGrad.innerHTML = `
        <stop offset="0%" stop-color="${highlight || '#ffffff'}" stop-opacity="0.5" />
        <stop offset="50%" stop-color="${hex}" />
        <stop offset="100%" stop-color="${shadow}" />
      `;
      if (armLeftGrad) {
        armLeftGrad.innerHTML = `
          <stop offset="0%" stop-color="${shadow}" />
          <stop offset="45%" stop-color="${hex}" />
          <stop offset="100%" stop-color="${shadow}" stop-opacity="0.8" />
        `;
      }
      if (armRightGrad) {
        armRightGrad.innerHTML = `
          <stop offset="0%" stop-color="${shadow}" stop-opacity="0.8" />
          <stop offset="55%" stop-color="${hex}" />
          <stop offset="100%" stop-color="${shadow}" />
        `;
      }
    }
  }
}
