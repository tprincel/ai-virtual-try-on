/**
 * 2D Virtual Try-On - Redesigned Garment Definition Catalog (Game Avatar Z-Index Architecture)
 * High-fidelity vector fashion apparel engineered for seamless layering, dynamic drape physics,
 * and zero-gap anatomical alignment.
 *
 * Strict Z-Index Architecture:
 * - Layer 20: Bottoms (Jeans, Chinos, Cargos, Shorts, Joggers)
 * - Layer 30: Tops (Tees, Shirts, Turtlenecks, Sweaters, Hoodies)
 * - Layer 35: Footwear (Sneakers, Chelsea Boots, High-Tops)
 * - Layer 45: Outerwear (Biker Jackets, Denim Jackets, Trench Coats, Blazers, Vests)
 * - Layer 55: Torso/Neck Accessories (Cuban Chain, Crossbody Sling)
 * - Layer 65: Headwear & Eyewear (Dad Cap, Aviator Shades, Cyber Visor)
 */

export const GARMENTS = [
  // =========================================================================
  // TOPS (Layer 30) - Draped past waistband to Y:295-308 (Zero Midriff Gap)
  // =========================================================================
  {
    id: 'crew-tshirt',
    name: 'Classic Crewneck T-Shirt',
    category: 'tops',
    layerOrder: 30,
    price: '$28',
    defaultColor: '#2563eb',
    availableColors: ['#2563eb', '#1e293b', '#ffffff', '#dc2626', '#059669', '#d97706', '#7c3aed', '#ec4899', '#06b6d4', '#e11d48', '#84cc16', '#facc15', '#6366f1', '#14b8a6'],
    render: (color, fit = 'regular') => {
      const wMod = fit === 'slim' ? -3 : (fit === 'oversized' ? 7 : 0);
      const lMod = fit === 'slim' ? -4 : (fit === 'oversized' ? 8 : 0);
      const hemY = 298 + lMod;
      return `
        <g id="garment-crew-tshirt" class="garment-group">
          <!-- Main Torso & Sleeves -->
          <path d="M ${172 - wMod * 0.4} 116
                   C 185 128, 215 128, ${228 + wMod * 0.4} 116
                   L ${278 + wMod} 136
                   L ${264 + wMod} 204
                   L ${246 + wMod} 195
                   L ${250 + wMod} ${hemY}
                   C 230 ${hemY + 4}, 170 ${hemY + 4}, ${150 - wMod} ${hemY}
                   L ${154 - wMod} 195
                   L ${136 - wMod} 204
                   L ${122 - wMod} 136
                   Z"
                fill="${color}" stroke="rgba(0,0,0,0.22)" stroke-width="1.4" />

          <!-- Ribbed Collar Trim -->
          <path d="M 172 116 C 185 130, 215 130, 228 116" fill="none" stroke="rgba(0,0,0,0.35)" stroke-width="3" stroke-linecap="round" />
          <path d="M 173 114 C 185 127, 215 127, 227 114" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1.2" />

          <!-- Sleeve Cuffs & Seams -->
          <line x1="${136 - wMod}" y1="204" x2="${154 - wMod}" y2="195" stroke="rgba(0,0,0,0.22)" stroke-width="1.5" />
          <line x1="${264 + wMod}" y1="204" x2="${246 + wMod}" y2="195" stroke="rgba(0,0,0,0.22)" stroke-width="1.5" />

          <!-- Subtle Fabric Draping & Creases -->
          <path d="M 156 220 Q 180 250, 168 288" fill="none" stroke="rgba(0,0,0,0.12)" stroke-width="1.4" stroke-linecap="round" />
          <path d="M 244 220 Q 220 250, 232 288" fill="none" stroke="rgba(0,0,0,0.12)" stroke-width="1.4" stroke-linecap="round" />
          <path d="M 194 140 Q 192 185, 200 230" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="2.5" />

          <!-- Bottom Hem Hemline Stitch -->
          <path d="M ${152 - wMod} ${hemY - 4} C 170 ${hemY}, 230 ${hemY}, ${248 + wMod} ${hemY - 4}" 
                fill="none" stroke="rgba(0,0,0,0.18)" stroke-width="1.2" stroke-dasharray="3,2" />
          <!-- Hem Cast Shadow onto Pants -->
          <path d="M ${150 - wMod} ${hemY} C 170 ${hemY + 4}, 230 ${hemY + 4}, ${250 + wMod} ${hemY} L ${250 + wMod} ${hemY + 3} C 230 ${hemY + 7}, 170 ${hemY + 7}, ${150 - wMod} ${hemY + 3} Z" 
                fill="rgba(0,0,0,0.18)" />
        </g>
      `;
    }
  },
  {
    id: 'graphic-tee',
    name: 'Vintage Graphic Rock Tee',
    category: 'tops',
    layerOrder: 30,
    price: '$34',
    defaultColor: '#18181b',
    availableColors: ['#18181b', '#3f3f46', '#f8fafc', '#7f1d1d', '#14532d', '#ea580c', '#4338ca'],
    render: (color, fit = 'regular') => {
      const wMod = fit === 'slim' ? -3 : (fit === 'oversized' ? 8 : 1);
      const lMod = fit === 'slim' ? -3 : (fit === 'oversized' ? 9 : 1);
      const hemY = 300 + lMod;
      return `
        <g id="garment-graphic-tee" class="garment-group">
          <!-- Torso & Sleeves -->
          <path d="M ${172 - wMod * 0.4} 116
                   C 185 128, 215 128, ${228 + wMod * 0.4} 116
                   L ${278 + wMod} 136
                   L ${264 + wMod} 204
                   L ${246 + wMod} 195
                   L ${250 + wMod} ${hemY}
                   C 230 ${hemY + 4}, 170 ${hemY + 4}, ${150 - wMod} ${hemY}
                   L ${154 - wMod} 195
                   L ${136 - wMod} 204
                   L ${122 - wMod} 136
                   Z"
                fill="${color}" stroke="rgba(0,0,0,0.25)" stroke-width="1.4" />

          <!-- Distressed Ribbed Collar -->
          <path d="M 172 116 C 185 130, 215 130, 228 116" fill="none" stroke="rgba(0,0,0,0.4)" stroke-width="3" stroke-linecap="round" />

          <!-- Vintage Graphic Print (Lightning & Star Emblem) -->
          <g id="rock-graphic" transform="translate(178, 160)">
            <polygon points="22,0 12,24 24,24 16,46 34,18 22,18" fill="#fbbf24" opacity="0.9" />
            <circle cx="22" cy="22" r="18" fill="none" stroke="#f87171" stroke-width="2" stroke-dasharray="4,3" opacity="0.8" />
            <text x="22" y="54" font-size="7" font-weight="900" fill="#f8fafc" text-anchor="middle" letter-spacing="1">WORLD TOUR</text>
          </g>

          <!-- Hemline Shadow -->
          <path d="M ${150 - wMod} ${hemY} C 170 ${hemY + 4}, 230 ${hemY + 4}, ${250 + wMod} ${hemY} L ${250 + wMod} ${hemY + 3} C 230 ${hemY + 7}, 170 ${hemY + 7}, ${150 - wMod} ${hemY + 3} Z" 
                fill="rgba(0,0,0,0.2)" />
        </g>
      `;
    }
  },
  {
    id: 'linen-vneck',
    name: 'Summer Linen V-Neck T-Shirt',
    category: 'tops',
    layerOrder: 30,
    price: '$32',
    defaultColor: '#f1f5f9',
    availableColors: ['#f1f5f9', '#fed7aa', '#bae6fd', '#dcfce7', '#fbcfe8', '#334155'],
    render: (color, fit = 'regular') => {
      const wMod = fit === 'slim' ? -3 : (fit === 'oversized' ? 7 : 0);
      const lMod = fit === 'slim' ? -3 : (fit === 'oversized' ? 8 : 0);
      const hemY = 296 + lMod;
      return `
        <g id="garment-linen-vneck" class="garment-group">
          <!-- V-Neck Torso -->
          <path d="M ${170 - wMod * 0.4} 116
                   L 200 148
                   L ${230 + wMod * 0.4} 116
                   L ${278 + wMod} 136
                   L ${264 + wMod} 202
                   L ${246 + wMod} 194
                   L ${250 + wMod} ${hemY}
                   C 230 ${hemY + 4}, 170 ${hemY + 4}, ${150 - wMod} ${hemY}
                   L ${154 - wMod} 194
                   L ${136 - wMod} 202
                   L ${122 - wMod} 136
                   Z"
                fill="${color}" stroke="rgba(0,0,0,0.18)" stroke-width="1.4" />

          <!-- V-Neck Band Stitching -->
          <path d="M 170 116 L 200 148 L 230 116" fill="none" stroke="rgba(0,0,0,0.25)" stroke-width="2" stroke-linecap="round" />
          <path d="M 171 114 L 200 146 L 229 114" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1" />

          <!-- Linen Fabric Slub Texture Creases -->
          <path d="M 160 215 Q 185 245, 172 284" fill="none" stroke="rgba(0,0,0,0.1)" stroke-width="1.2" />
          <path d="M 240 215 Q 215 245, 228 284" fill="none" stroke="rgba(0,0,0,0.1)" stroke-width="1.2" />
        </g>
      `;
    }
  },
  {
    id: 'striped-tee',
    name: 'Oversized Striped Skater Tee',
    category: 'tops',
    layerOrder: 30,
    price: '$36',
    defaultColor: '#1e3a8a',
    availableColors: ['#1e3a8a', '#14532d', '#7c2d12', '#312e81', '#18181b', '#0e7490'],
    render: (color, fit = 'regular') => {
      const wMod = fit === 'slim' ? 0 : (fit === 'oversized' ? 9 : 4);
      const lMod = fit === 'slim' ? 0 : (fit === 'oversized' ? 10 : 5);
      const hemY = 306 + lMod;
      return `
        <g id="garment-striped-skater-tee" class="garment-group">
          <!-- Boxy Oversized Body -->
          <path d="M ${170 - wMod * 0.4} 116
                   C 185 128, 215 128, ${230 + wMod * 0.4} 116
                   L ${282 + wMod} 138
                   L ${268 + wMod} 220
                   L ${248 + wMod} 210
                   L ${252 + wMod} ${hemY}
                   C 230 ${hemY + 4}, 170 ${hemY + 4}, ${148 - wMod} ${hemY}
                   L ${152 - wMod} 210
                   L ${132 - wMod} 220
                   L ${118 - wMod} 138
                   Z"
                fill="${color}" stroke="rgba(0,0,0,0.22)" stroke-width="1.5" />

          <!-- Horizontal Skater Stripes -->
          <path d="M 124 150 Q 200 156, 276 150" fill="none" stroke="#f8fafc" stroke-width="6" opacity="0.9" />
          <path d="M 130 174 Q 200 180, 270 174" fill="none" stroke="#f8fafc" stroke-width="6" opacity="0.9" />
          <path d="M 148 198 Q 200 204, 252 198" fill="none" stroke="#f8fafc" stroke-width="6" opacity="0.9" />
          <path d="M 150 222 Q 200 228, 250 222" fill="none" stroke="#f8fafc" stroke-width="6" opacity="0.9" />
          <path d="M 150 246 Q 200 252, 250 246" fill="none" stroke="#f8fafc" stroke-width="6" opacity="0.9" />
          <path d="M 150 270 Q 200 276, 250 270" fill="none" stroke="#f8fafc" stroke-width="6" opacity="0.9" />

          <!-- Thick Ribbed Skater Collar -->
          <path d="M 170 116 C 185 130, 215 130, 230 116" fill="none" stroke="#f8fafc" stroke-width="4" stroke-linecap="round" />
        </g>
      `;
    }
  },
  {
    id: 'dryfit-tee',
    name: 'Athletic Dry-Fit Training Tee',
    category: 'tops',
    layerOrder: 30,
    price: '$30',
    defaultColor: '#0284c7',
    availableColors: ['#0284c7', '#059669', '#dc2626', '#475569', '#18181b', '#d97706', '#7c3aed'],
    render: (color, fit = 'regular') => {
      const wMod = fit === 'slim' ? -4 : (fit === 'oversized' ? 5 : -1);
      const lMod = fit === 'slim' ? -3 : (fit === 'oversized' ? 6 : 0);
      const hemY = 298 + lMod;
      return `
        <g id="garment-dryfit-tee" class="garment-group">
          <!-- Athletic Fitted Torso -->
          <path d="M ${172 - wMod * 0.4} 116
                   C 185 128, 215 128, ${228 + wMod * 0.4} 116
                   L ${278 + wMod} 136
                   L ${264 + wMod} 200
                   L ${246 + wMod} 192
                   L ${248 + wMod} ${hemY}
                   C 230 ${hemY + 3}, 170 ${hemY + 3}, ${152 - wMod} ${hemY}
                   L ${154 - wMod} 192
                   L ${136 - wMod} 200
                   L ${122 - wMod} 136
                   Z"
                fill="${color}" stroke="rgba(0,0,0,0.2)" stroke-width="1.4" />

          <!-- Ergonomic Raglan Shoulder Seams -->
          <path d="M 176 122 Q 160 160, 154 192" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" />
          <path d="M 224 122 Q 240 160, 246 192" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" />

          <!-- Breathable Side Mesh Vent Strips -->
          <path d="M 152 210 L 150 ${hemY}" stroke="rgba(0,0,0,0.25)" stroke-width="3" stroke-linecap="round" />
          <path d="M 248 210 L 250 ${hemY}" stroke="rgba(0,0,0,0.25)" stroke-width="3" stroke-linecap="round" />
        </g>
      `;
    }
  },
  {
    id: 'oxford-shirt',
    name: 'Crisp Oxford Button-Down',
    category: 'tops',
    layerOrder: 30,
    price: '$45',
    defaultColor: '#f8fafc',
    availableColors: ['#f8fafc', '#bfdbfe', '#e2e8f0', '#fed7aa', '#1e293b'],
    render: (color, fit = 'regular') => {
      const wMod = fit === 'slim' ? -3 : (fit === 'oversized' ? 7 : 0);
      const lMod = fit === 'slim' ? -3 : (fit === 'oversized' ? 8 : 0);
      const hemY = 302 + lMod;
      return `
        <g id="garment-oxford-shirt" class="garment-group">
          <!-- Torso with Curved Shirt Hem -->
          <path d="M 174 116
                   L ${278 + wMod} 136
                   L ${264 + wMod} 210
                   L ${246 + wMod} 202
                   L ${250 + wMod} ${hemY}
                   C 230 ${hemY + 6}, 170 ${hemY + 6}, ${150 - wMod} ${hemY}
                   L ${154 - wMod} 202
                   L ${136 - wMod} 210
                   L ${122 - wMod} 136
                   Z"
                fill="${color}" stroke="rgba(0,0,0,0.22)" stroke-width="1.4" />

          <!-- Pointed Button-Down Collars -->
          <polygon points="174,116 192,136 186,116" fill="${color}" stroke="rgba(0,0,0,0.25)" stroke-width="1.2" />
          <polygon points="226,116 208,136 214,116" fill="${color}" stroke="rgba(0,0,0,0.25)" stroke-width="1.2" />

          <!-- Front Button Placket -->
          <rect x="196" y="118" width="8" height="${hemY - 116}" fill="rgba(0,0,0,0.04)" stroke="rgba(0,0,0,0.18)" stroke-width="1" />
          <!-- Buttons -->
          <circle cx="200" cy="140" r="1.8" fill="#f8fafc" stroke="#64748b" stroke-width="0.8" />
          <circle cx="200" cy="170" r="1.8" fill="#f8fafc" stroke="#64748b" stroke-width="0.8" />
          <circle cx="200" cy="200" r="1.8" fill="#f8fafc" stroke="#64748b" stroke-width="0.8" />
          <circle cx="200" cy="230" r="1.8" fill="#f8fafc" stroke="#64748b" stroke-width="0.8" />
          <circle cx="200" cy="260" r="1.8" fill="#f8fafc" stroke="#64748b" stroke-width="0.8" />
          <circle cx="200" cy="290" r="1.8" fill="#f8fafc" stroke="#64748b" stroke-width="0.8" />

          <!-- Left Chest Pocket -->
          <rect x="166" y="165" width="20" height="22" rx="2" fill="none" stroke="rgba(0,0,0,0.2)" stroke-width="1.2" />
        </g>
      `;
    }
  },
  {
    id: 'merino-turtleneck',
    name: 'Merino Wool Turtleneck',
    category: 'tops',
    layerOrder: 30,
    price: '$65',
    defaultColor: '#f1f5f9',
    availableColors: ['#f1f5f9', '#0f172a', '#1e293b', '#78350f', '#064e3b', '#831843'],
    render: (color, fit = 'regular') => {
      const wMod = fit === 'slim' ? -3 : (fit === 'oversized' ? 7 : 0);
      const hemY = 300;
      return `
        <g id="garment-merino-turtleneck" class="garment-group">
          <!-- Rollneck Collar -->
          <rect x="180" y="94" width="40" height="26" rx="4" fill="${color}" stroke="rgba(0,0,0,0.25)" stroke-width="1.4" />
          <line x1="180" y1="107" x2="220" y2="107" stroke="rgba(0,0,0,0.2)" stroke-width="1" />
          <rect x="180" y="94" width="40" height="26" fill="url(#knitRibbing)" opacity="0.45" />

          <!-- Torso & Long Sleeves -->
          <path d="M 180 118
                   L ${278 + wMod} 136
                   L ${264 + wMod} 260
                   L ${246 + wMod} 255
                   L ${250 + wMod} ${hemY}
                   C 230 ${hemY + 4}, 170 ${hemY + 4}, ${150 - wMod} ${hemY}
                   L ${154 - wMod} 255
                   L ${136 - wMod} 260
                   L ${122 - wMod} 136
                   Z"
                fill="${color}" stroke="rgba(0,0,0,0.2)" stroke-width="1.4" />

          <!-- Knit Ribbed Hem -->
          <path d="M ${150 - wMod} ${hemY - 8} C 170 ${hemY - 4}, 230 ${hemY - 4}, ${250 + wMod} ${hemY - 8} L ${250 + wMod} ${hemY} C 230 ${hemY + 4}, 170 ${hemY + 4}, ${150 - wMod} ${hemY} Z" 
                fill="url(#knitRibbing)" opacity="0.6" />
        </g>
      `;
    }
  },

  // =========================================================================
  // BOTTOMS (Layer 20) - Waistband at Y:258-272, Inseam to Ankles Y:610-618
  // =========================================================================
  {
    id: 'slim-jeans',
    name: 'Tailored Slim Denim Jeans',
    category: 'bottoms',
    layerOrder: 20,
    price: '$55',
    defaultColor: '#1d4ed8',
    availableColors: ['#1d4ed8', '#1e293b', '#0f172a', '#475569', '#3b82f6', '#f8fafc'],
    render: (color, fit = 'regular') => {
      const wMod = fit === 'slim' ? -3 : (fit === 'oversized' ? 7 : 0);
      return `
        <g id="garment-slim-jeans" class="garment-group">
          <!-- Pants Base Silhouette -->
          <path d="M 148 260
                   C 170 264, 230 264, 252 260
                   L ${258 + wMod} 325
                   L ${248 + wMod} 455
                   L ${240 + wMod} 612
                   L 224 612
                   L 204 322
                   L 196 322
                   L 176 612
                   L 160 612
                   L ${152 - wMod} 455
                   L ${142 - wMod} 325
                   Z"
                fill="${color}" stroke="rgba(0,0,0,0.3)" stroke-width="1.5" />

          <!-- Diagonal Denim Twill Texture -->
          <path d="M 148 260 C 170 264, 230 264, 252 260 L ${258 + wMod} 325 L ${240 + wMod} 612 L 160 612 L ${142 - wMod} 325 Z" 
                fill="url(#denimTwill)" opacity="0.3" />

          <!-- Waistband & Copper Rivet Button -->
          <path d="M 148 260 C 170 264, 230 264, 252 260 L 253 268 C 230 272, 170 272, 147 268 Z" 
                fill="rgba(0,0,0,0.15)" stroke="#d97706" stroke-width="1.2" />
          <circle cx="200" cy="264" r="2.5" fill="#f59e0b" stroke="#78350f" stroke-width="0.8" />

          <!-- Fly & Front Coin Pockets -->
          <line x1="200" y1="268" x2="200" y2="305" stroke="#d97706" stroke-width="1.5" />
          <path d="M 200 305 Q 206 314, 204 322" fill="none" stroke="#d97706" stroke-width="1.5" />
          <path d="M 149 268 Q 166 270, 168 285" fill="none" stroke="#d97706" stroke-width="1.4" />
          <path d="M 251 268 Q 234 270, 232 285" fill="none" stroke="#d97706" stroke-width="1.4" />

          <!-- Knee Whiskers & Ankle Creases -->
          <path d="M 152 450 Q 164 456, 172 452" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1.4" />
          <path d="M 248 450 Q 236 456, 228 452" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1.4" />
          <line x1="160" y1="608" x2="176" y2="608" stroke="#d97706" stroke-width="1.2" stroke-dasharray="3,1" />
          <line x1="224" y1="608" x2="240" y2="608" stroke="#d97706" stroke-width="1.2" stroke-dasharray="3,1" />
        </g>
      `;
    }
  },
  {
    id: 'chinos',
    name: 'Smart Casual Tailored Chinos',
    category: 'bottoms',
    layerOrder: 20,
    price: '$48',
    defaultColor: '#d97706',
    availableColors: ['#d97706', '#1e293b', '#475569', '#15803d', '#f1f5f9', '#78350f'],
    render: (color, fit = 'regular') => {
      const wMod = fit === 'slim' ? -3 : (fit === 'oversized' ? 7 : 0);
      return `
        <g id="garment-chinos" class="garment-group">
          <!-- Pants Silhouette -->
          <path d="M 148 260
                   C 170 264, 230 264, 252 260
                   L ${258 + wMod} 325
                   L ${248 + wMod} 455
                   L ${240 + wMod} 612
                   L 224 612
                   L 204 322
                   L 196 322
                   L 176 612
                   L 160 612
                   L ${152 - wMod} 455
                   L ${142 - wMod} 325
                   Z"
                fill="${color}" stroke="rgba(0,0,0,0.25)" stroke-width="1.4" />

          <!-- Waistband & Horn Button -->
          <path d="M 148 260 C 170 264, 230 264, 252 260 L 253 268 C 230 272, 170 272, 147 268 Z" 
                fill="rgba(0,0,0,0.12)" stroke="rgba(0,0,0,0.2)" stroke-width="1.2" />
          <circle cx="200" cy="264" r="2.2" fill="#451a03" />

          <!-- Clean Slant Pockets -->
          <line x1="150" y1="268" x2="164" y2="295" stroke="rgba(0,0,0,0.25)" stroke-width="1.5" />
          <line x1="250" y1="268" x2="236" y2="295" stroke="rgba(0,0,0,0.25)" stroke-width="1.5" />

          <!-- Center Pressed Crease Lines -->
          <line x1="168" y1="310" x2="168" y2="605" stroke="rgba(255,255,255,0.12)" stroke-width="1.2" />
          <line x1="232" y1="310" x2="232" y2="605" stroke="rgba(255,255,255,0.12)" stroke-width="1.2" />
        </g>
      `;
    }
  },
  {
    id: 'relaxed-cargo',
    name: 'Relaxed Streetwear Cargo Pants',
    category: 'bottoms',
    layerOrder: 20,
    price: '$58',
    defaultColor: '#3f3f46',
    availableColors: ['#3f3f46', '#18181b', '#365314', '#713f12', '#1e293b'],
    render: (color, fit = 'regular') => {
      const wMod = fit === 'slim' ? -1 : (fit === 'oversized' ? 9 : 3);
      return `
        <g id="garment-cargo-pants" class="garment-group">
          <!-- Baggy Cargo Pants Base -->
          <path d="M 148 260
                   C 170 264, 230 264, 252 260
                   L ${260 + wMod} 325
                   L ${252 + wMod} 460
                   L ${244 + wMod} 614
                   L 224 614
                   L 204 322
                   L 196 322
                   L 176 614
                   L 156 614
                   L ${148 - wMod} 460
                   L ${140 - wMod} 325
                   Z"
                fill="${color}" stroke="rgba(0,0,0,0.3)" stroke-width="1.5" />

          <!-- Side 3D Bellows Cargo Pockets with Flap -->
          <g id="left-cargo-pocket">
            <rect x="${134 - wMod}" y="365" width="22" height="34" rx="2" fill="rgba(0,0,0,0.18)" stroke="rgba(0,0,0,0.3)" stroke-width="1.2" />
            <polygon points="${134 - wMod},365 ${156 - wMod},365 ${152 - wMod},375 ${138 - wMod},375" fill="rgba(0,0,0,0.35)" />
            <circle cx="${145 - wMod}" cy="378" r="1.5" fill="#94a3b8" />
          </g>
          <g id="right-cargo-pocket">
            <rect x="${244 + wMod}" y="365" width="22" height="34" rx="2" fill="rgba(0,0,0,0.18)" stroke="rgba(0,0,0,0.3)" stroke-width="1.2" />
            <polygon points="${244 + wMod},365 ${266 + wMod},365 ${262 + wMod},375 ${248 + wMod},375" fill="rgba(0,0,0,0.35)" />
            <circle cx="${255 + wMod}" cy="378" r="1.5" fill="#94a3b8" />
          </g>

          <!-- Articulated Knee Pleats -->
          <path d="M 148 450 Q 164 456, 172 450" fill="none" stroke="rgba(0,0,0,0.25)" stroke-width="1.5" />
          <path d="M 252 450 Q 236 456, 228 450" fill="none" stroke="rgba(0,0,0,0.25)" stroke-width="1.5" />
        </g>
      `;
    }
  },
  {
    id: 'techwear-cargo-jogger',
    name: 'Tactical Techwear Cargo Joggers',
    category: 'bottoms',
    layerOrder: 20,
    price: '$72',
    defaultColor: '#18181b',
    availableColors: ['#18181b', '#27272a', '#1e293b', '#365314', '#713f12'],
    render: (color, fit = 'regular') => {
      const wMod = fit === 'slim' ? -3 : (fit === 'oversized' ? 7 : 1);
      return `
        <g id="garment-tech-jogger" class="garment-group">
          <!-- Pants Silhouette with Articulated Knees -->
          <path d="M 148 260
                   C 170 264, 230 264, 252 260
                   L ${258 + wMod} 325
                   L ${246 + wMod} 465
                   L ${238 + wMod} 606
                   L 218 606
                   L 204 322
                   L 196 322
                   L 182 606
                   L 162 606
                   L ${154 - wMod} 465
                   L ${142 - wMod} 325
                   Z"
                fill="${color}" stroke="rgba(0,0,0,0.35)" stroke-width="1.5" />

          <!-- Tactical Contrast Webbing Straps -->
          <path d="M 144 380 Q 170 410, 160 450" fill="none" stroke="#f59e0b" stroke-width="2.5" />
          <path d="M 256 380 Q 230 410, 240 450" fill="none" stroke="#f59e0b" stroke-width="2.5" />

          <!-- Tactical Bellows Pockets with Buckle -->
          <rect x="136" y="385" width="18" height="28" rx="2" fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.15)" stroke-width="1" />
          <rect x="246" y="385" width="18" height="28" rx="2" fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.15)" stroke-width="1" />

          <!-- Compression Ribbed Ankle Cuffs -->
          <rect x="162" y="600" width="20" height="8" rx="2" fill="#09090b" stroke="#3f3f46" stroke-width="1" />
          <rect x="218" y="600" width="20" height="8" rx="2" fill="#09090b" stroke="#3f3f46" stroke-width="1" />
        </g>
      `;
    }
  },
  {
    id: 'bermuda-shorts',
    name: 'Tailored Weekend Bermuda Shorts',
    category: 'bottoms',
    layerOrder: 20,
    price: '$38',
    defaultColor: '#334155',
    availableColors: ['#334155', '#d97706', '#1e293b', '#166534', '#f1f5f9'],
    render: (color, fit = 'regular') => {
      const wMod = fit === 'slim' ? -3 : (fit === 'oversized' ? 7 : 0);
      return `
        <g id="garment-bermuda-shorts" class="garment-group">
          <!-- Short Base ending at Y:435 -->
          <path d="M 148 260
                   C 170 264, 230 264, 252 260
                   L ${258 + wMod} 325
                   L ${254 + wMod} 435
                   L 220 435
                   L 204 322
                   L 196 322
                   L 180 435
                   L ${146 - wMod} 435
                   L ${142 - wMod} 325
                   Z"
                fill="${color}" stroke="rgba(0,0,0,0.25)" stroke-width="1.4" />

          <!-- Rolled Hem Cuffs -->
          <rect x="${146 - wMod}" y="428" width="${34 + wMod}" height="7" rx="1" fill="rgba(0,0,0,0.15)" />
          <rect x="220" y="428" width="${34 + wMod}" height="7" rx="1" fill="rgba(0,0,0,0.15)" />
        </g>
      `;
    }
  },

  // =========================================================================
  // FOOTWEAR (Layer 35) - Ankles Y:595 to Soles Y:644 Grounded on Floor
  // =========================================================================
  {
    id: 'urban-sneakers',
    name: 'Minimalist Leather Sneakers',
    category: 'shoes',
    layerOrder: 35,
    price: '$75',
    defaultColor: '#ffffff',
    availableColors: ['#ffffff', '#0f172a', '#dc2626', '#2563eb', '#16a34a', '#d97706'],
    render: (color) => `
      <g id="garment-urban-sneakers" class="garment-group">
        <!-- Left Sneaker -->
        <path d="M 152 610 L 176 610 L 178 632 L 182 642 L 138 642 L 142 630 Z" fill="${color}" stroke="rgba(0,0,0,0.2)" stroke-width="1.2" />
        <!-- Left Sole -->
        <path d="M 136 638 L 184 638 L 182 645 L 138 645 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
        <!-- Laces & Eyelet Stay -->
        <line x1="150" y1="616" x2="168" y2="616" stroke="#94a3b8" stroke-width="1.5" />
        <line x1="152" y1="622" x2="166" y2="622" stroke="#94a3b8" stroke-width="1.5" />

        <!-- Right Sneaker -->
        <path d="M 224 610 L 248 610 L 258 630 L 262 642 L 218 642 L 222 632 Z" fill="${color}" stroke="rgba(0,0,0,0.2)" stroke-width="1.2" />
        <!-- Right Sole -->
        <path d="M 216 638 L 264 638 L 262 645 L 218 645 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
        <!-- Laces & Eyelet Stay -->
        <line x1="232" y1="616" x2="250" y2="616" stroke="#94a3b8" stroke-width="1.5" />
        <line x1="234" y1="622" x2="248" y2="622" stroke="#94a3b8" stroke-width="1.5" />
      </g>
    `
  },
  {
    id: 'chelsea-boots',
    name: 'Suede Chelsea Boots',
    category: 'shoes',
    layerOrder: 35,
    price: '$120',
    defaultColor: '#78350f',
    availableColors: ['#78350f', '#1c1917', '#451a03', '#57534e', '#a16207'],
    render: (color) => `
      <g id="garment-chelsea-boots" class="garment-group">
        <!-- Left Boot Shaft & Vamp -->
        <path d="M 152 594 L 176 594 L 178 628 L 182 642 L 138 642 L 142 626 Z" fill="${color}" stroke="rgba(0,0,0,0.3)" stroke-width="1.2" />
        <!-- Elastic Side Gusset -->
        <polygon points="158,598 170,598 166,618 162,618" fill="#18181b" />
        <!-- Stacked Heel & Welt -->
        <path d="M 138 638 L 182 638 L 180 645 L 140 645 Z" fill="#451a03" stroke="#291305" stroke-width="1" />

        <!-- Right Boot Shaft & Vamp -->
        <path d="M 224 594 L 248 594 L 258 626 L 262 642 L 222 642 L 222 628 Z" fill="${color}" stroke="rgba(0,0,0,0.3)" stroke-width="1.2" />
        <!-- Elastic Side Gusset -->
        <polygon points="230,598 242,598 238,618 234,618" fill="#18181b" />
        <!-- Stacked Heel & Welt -->
        <path d="M 218 638 L 262 638 L 260 645 L 220 645 Z" fill="#451a03" stroke="#291305" stroke-width="1" />
      </g>
    `
  },
  {
    id: 'retro-high-top-sneakers',
    name: 'Retro Color-Blocked High-Tops',
    category: 'shoes',
    layerOrder: 35,
    price: '$110',
    defaultColor: '#dc2626',
    availableColors: ['#dc2626', '#2563eb', '#16a34a', '#0f172a', '#9333ea', '#ea580c'],
    render: (color) => `
      <g id="garment-retro-dunks" class="garment-group">
        <!-- Left High-Top -->
        <path d="M 152 590 L 176 590 L 178 625 L 182 642 L 138 642 L 142 612 Z" fill="${color}" stroke="rgba(0,0,0,0.25)" stroke-width="1" />
        <path d="M 148 602 L 172 602 L 174 624 L 144 624 Z" fill="#ffffff" />
        <!-- Left Rubber Cupsole -->
        <path d="M 136 636 L 184 636 L 182 645 L 138 645 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />

        <!-- Right High-Top -->
        <path d="M 224 590 L 248 590 L 258 612 L 262 642 L 218 642 L 222 625 Z" fill="${color}" stroke="rgba(0,0,0,0.25)" stroke-width="1" />
        <path d="M 228 602 L 252 602 L 256 624 L 226 624 Z" fill="#ffffff" />
        <!-- Right Rubber Cupsole -->
        <path d="M 216 636 L 264 636 L 262 645 L 218 645 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
      </g>
    `
  },

  // =========================================================================
  // OUTERWEAR (Layer 45) - Wider Shoulders, Natural Opening, Over Tops & Pants
  // =========================================================================
  {
    id: 'fleece-hoodie',
    name: 'Cozy Oversized Fleece Hoodie',
    category: 'tops',
    layerOrder: 45,
    price: '$65',
    defaultColor: '#475569',
    availableColors: ['#475569', '#1e293b', '#0f172a', '#d97706', '#dc2626', '#059669', '#f8fafc'],
    render: (color, fit = 'regular') => {
      const wMod = fit === 'slim' ? 0 : (fit === 'oversized' ? 10 : 5);
      const hemY = 308;
      return `
        <g id="garment-fleece-hoodie" class="garment-group">
          <!-- Cross-Over Hood -->
          <path d="M 166 118 C 160 82, 240 82, 234 118 Z" fill="${color}" stroke="rgba(0,0,0,0.3)" stroke-width="1.5" />
          <path d="M 180 120 Q 200 134, 220 120" fill="none" stroke="rgba(0,0,0,0.25)" stroke-width="2" />

          <!-- Main Heavy Body & Sleeves -->
          <path d="M 166 118
                   L ${284 + wMod} 136
                   L ${268 + wMod} 265
                   L ${246 + wMod} 255
                   L ${252 + wMod} ${hemY}
                   C 230 ${hemY + 5}, 170 ${hemY + 5}, ${148 - wMod} ${hemY}
                   L ${154 - wMod} 255
                   L ${132 - wMod} 265
                   L ${116 - wMod} 136
                   Z"
                fill="${color}" stroke="rgba(0,0,0,0.25)" stroke-width="1.5" />

          <!-- Kangaroo Pouch Pocket -->
          <path d="M 162 245 L 238 245 L 244 295 L 156 295 Z" fill="rgba(0,0,0,0.08)" stroke="rgba(0,0,0,0.2)" stroke-width="1.5" />

          <!-- Thick Ribbed Waistband Hem -->
          <path d="M ${148 - wMod} ${hemY - 10} C 170 ${hemY - 5}, 230 ${hemY - 5}, ${252 + wMod} ${hemY - 10} L ${252 + wMod} ${hemY} C 230 ${hemY + 5}, 170 ${hemY + 5}, ${148 - wMod} ${hemY} Z" 
                fill="url(#knitRibbing)" opacity="0.5" />
        </g>
      `;
    }
  },
  {
    id: 'leather-biker',
    name: 'Asymmetric Leather Biker Jacket',
    category: 'outerwear',
    layerOrder: 45,
    price: '$180',
    defaultColor: '#18181b',
    availableColors: ['#18181b', '#27272a', '#78350f', '#451a03', '#dc2626'],
    render: (color, fit = 'regular') => {
      const wMod = fit === 'slim' ? -2 : (fit === 'oversized' ? 8 : 1);
      const hemY = 306;
      return `
        <g id="garment-leather-biker" class="garment-group">
          <!-- Main Leather Jacket Silhouette -->
          <path d="M 164 116
                   L ${284 + wMod} 136
                   L ${268 + wMod} 265
                   L ${248 + wMod} 255
                   L ${252 + wMod} ${hemY}
                   C 225 ${hemY + 4}, 175 ${hemY + 4}, ${148 - wMod} ${hemY}
                   L ${152 - wMod} 255
                   L ${132 - wMod} 265
                   L ${116 - wMod} 136
                   Z"
                fill="${color}" stroke="rgba(0,0,0,0.4)" stroke-width="1.6" />

          <!-- Pebbled Leather Specular Grain -->
          <path d="M 164 116 L ${284 + wMod} 136 L ${252 + wMod} ${hemY} L ${148 - wMod} ${hemY} Z" 
                fill="url(#leatherGrain)" opacity="0.3" />

          <!-- Open V-Neck Revealing Under-Shirt -->
          <polygon points="174,116 200,210 226,116" fill="none" />

          <!-- Wide Asymmetric Notched Lapels with Metal Snaps -->
          <polygon points="174,116 190,175 160,165" fill="${color}" stroke="#cbd5e1" stroke-width="1" />
          <polygon points="226,116 210,175 240,165" fill="${color}" stroke="#cbd5e1" stroke-width="1" />
          <circle cx="166" cy="162" r="2" fill="#cbd5e1" />
          <circle cx="234" cy="162" r="2" fill="#cbd5e1" />

          <!-- Diagonal Heavy Metal Zipper -->
          <line x1="200" y1="210" x2="188" y2="${hemY}" stroke="#94a3b8" stroke-width="3" stroke-dasharray="2,1" />

          <!-- Zippered Waist Pockets -->
          <line x1="158" y1="265" x2="182" y2="275" stroke="#94a3b8" stroke-width="2" />
          <line x1="242" y1="265" x2="218" y2="275" stroke="#94a3b8" stroke-width="2" />
        </g>
      `;
    }
  },
  {
    id: 'denim-jacket',
    name: 'Vintage Trucker Denim Jacket',
    category: 'outerwear',
    layerOrder: 45,
    price: '$95',
    defaultColor: '#1e40af',
    availableColors: ['#1e40af', '#1d4ed8', '#1e293b', '#475569', '#f8fafc'],
    render: (color, fit = 'regular') => {
      const wMod = fit === 'slim' ? -2 : (fit === 'oversized' ? 8 : 1);
      const hemY = 298;
      return `
        <g id="garment-denim-jacket" class="garment-group">
          <!-- Trucker Jacket Silhouette -->
          <path d="M 166 116
                   L ${284 + wMod} 136
                   L ${268 + wMod} 265
                   L ${248 + wMod} 255
                   L ${252 + wMod} ${hemY}
                   C 225 ${hemY + 4}, 175 ${hemY + 4}, ${148 - wMod} ${hemY}
                   L ${152 - wMod} 255
                   L ${132 - wMod} 265
                   L ${116 - wMod} 136
                   Z"
                fill="${color}" stroke="rgba(0,0,0,0.3)" stroke-width="1.5" />

          <!-- Pointed Collars -->
          <polygon points="174,116 190,135 180,116" fill="${color}" stroke="#d97706" stroke-width="1" />
          <polygon points="226,116 210,135 220,116" fill="${color}" stroke="#d97706" stroke-width="1" />

          <!-- Dual Button Flap Chest Pockets -->
          <rect x="160" y="165" width="22" height="24" rx="2" fill="none" stroke="#d97706" stroke-width="1.2" />
          <circle cx="171" cy="172" r="1.5" fill="#f59e0b" />
          <rect x="218" y="165" width="22" height="24" rx="2" fill="none" stroke="#d97706" stroke-width="1.2" />
          <circle cx="229" cy="172" r="1.5" fill="#f59e0b" />

          <!-- Center Button Track -->
          <line x1="200" y1="135" x2="200" y2="${hemY}" stroke="#d97706" stroke-width="1.2" />
        </g>
      `;
    }
  },
  {
    id: 'trench-coat',
    name: 'Heritage Double-Breasted Trench',
    category: 'outerwear',
    layerOrder: 45,
    price: '$220',
    defaultColor: '#d97706',
    availableColors: ['#d97706', '#1e293b', '#475569', '#f8fafc', '#15803d'],
    render: (color, fit = 'regular') => {
      const wMod = fit === 'slim' ? -2 : (fit === 'oversized' ? 8 : 2);
      const hemY = 460;
      return `
        <g id="garment-trench-coat" class="garment-group">
          <!-- Longline Trench Silhouette down to Y:460 -->
          <path d="M 166 114
                   L ${284 + wMod} 136
                   L ${268 + wMod} 265
                   L ${250 + wMod} 255
                   L ${262 + wMod} ${hemY}
                   C 225 ${hemY + 8}, 175 ${hemY + 8}, ${138 - wMod} ${hemY}
                   L ${150 - wMod} 255
                   L ${132 - wMod} 265
                   L ${116 - wMod} 136
                   Z"
                fill="${color}" stroke="rgba(0,0,0,0.3)" stroke-width="1.5" />

          <!-- Wide Peak Lapels -->
          <polygon points="172,116 192,175 160,168" fill="${color}" stroke="rgba(0,0,0,0.25)" stroke-width="1.2" />
          <polygon points="228,116 208,175 240,168" fill="${color}" stroke="rgba(0,0,0,0.25)" stroke-width="1.2" />

          <!-- Waist Buckle Tie Belt -->
          <rect x="${144 - wMod}" y="258" width="${112 + wMod * 2}" height="10" rx="2" fill="rgba(0,0,0,0.25)" stroke="rgba(0,0,0,0.35)" stroke-width="1" />
          <rect x="194" y="256" width="12" height="14" rx="2" fill="#d4af37" />

          <!-- Horn Buttons -->
          <circle cx="188" cy="205" r="2.5" fill="#451a03" />
          <circle cx="212" cy="205" r="2.5" fill="#451a03" />
          <circle cx="188" cy="235" r="2.5" fill="#451a03" />
          <circle cx="212" cy="235" r="2.5" fill="#451a03" />
        </g>
      `;
    }
  },
  {
    id: 'blazer-double-breasted',
    name: 'Tailored Double-Breasted Blazer',
    category: 'outerwear',
    layerOrder: 45,
    price: '$145',
    defaultColor: '#1e293b',
    availableColors: ['#1e293b', '#0f172a', '#334155', '#475569', '#78350f', '#064e3b', '#4c1d95', '#ffffff'],
    render: (color, fit = 'regular') => {
      const wMod = fit === 'slim' ? -2 : (fit === 'oversized' ? 7 : 0);
      const hemY = 304;
      return `
        <g id="garment-blazer-db" class="garment-group">
          <!-- Main Blazer Body -->
          <path d="M 166 114
                   L ${284 + wMod} 136
                   L ${268 + wMod} 265
                   L ${250 + wMod} 255
                   L ${252 + wMod} ${hemY}
                   C 225 ${hemY + 4}, 175 ${hemY + 4}, ${148 - wMod} ${hemY}
                   L ${150 - wMod} 255
                   L ${132 - wMod} 265
                   L ${116 - wMod} 136
                   Z"
                fill="${color}" stroke="rgba(0,0,0,0.3)" stroke-width="1.6" />

          <!-- Satin Peak Lapels -->
          <path d="M 172 116 L 188 178 L 160 172 L 198 245 L 200 245 L 238 172 L 210 178 L 228 116 Z" 
                fill="rgba(0,0,0,0.22)" stroke="rgba(255,255,255,0.12)" stroke-width="1" />

          <!-- Double-Breasted Brass Buttons -->
          <circle cx="188" cy="225" r="3" fill="#d4af37" stroke="#92400e" stroke-width="0.8" />
          <circle cx="212" cy="225" r="3" fill="#d4af37" stroke="#92400e" stroke-width="0.8" />
          <circle cx="188" cy="245" r="3" fill="#d4af37" stroke="#92400e" stroke-width="0.8" />
          <circle cx="212" cy="245" r="3" fill="#d4af37" stroke="#92400e" stroke-width="0.8" />

          <!-- Welt Pockets -->
          <line x1="160" y1="262" x2="182" y2="262" stroke="rgba(0,0,0,0.35)" stroke-width="2.5" stroke-linecap="round" />
          <line x1="218" y1="262" x2="240" y2="262" stroke="rgba(0,0,0,0.35)" stroke-width="2.5" stroke-linecap="round" />
        </g>
      `;
    }
  },
  {
    id: 'puffer-vest',
    name: 'Quilted Down Puffer Vest',
    category: 'outerwear',
    layerOrder: 45,
    price: '$88',
    defaultColor: '#0f172a',
    availableColors: ['#0f172a', '#1e3a8a', '#15803d', '#b91c1c', '#c2410c', '#e2e8f0'],
    render: (color, fit = 'regular') => {
      const wMod = fit === 'slim' ? -1 : (fit === 'oversized' ? 8 : 2);
      const hemY = 298;
      return `
        <g id="garment-puffer-vest" class="garment-group">
          <!-- High Puffer Storm Collar -->
          <path d="M 174 100 C 185 106, 215 106, 226 100 L 228 116 C 215 120, 185 120, 172 116 Z" 
                fill="${color}" stroke="rgba(0,0,0,0.3)" stroke-width="1.5" />

          <!-- Sleeveless Vest Body -->
          <path d="M 172 116
                   C 185 122, 215 122, 228 116
                   L ${252 + wMod} 136
                   L ${248 + wMod} 195
                   L ${250 + wMod} ${hemY}
                   C 225 ${hemY + 4}, 175 ${hemY + 4}, ${150 - wMod} ${hemY}
                   L ${152 - wMod} 195
                   L ${148 - wMod} 136
                   Z"
                fill="${color}" stroke="rgba(0,0,0,0.3)" stroke-width="1.5" />

          <!-- Horizontal Baffle Quilting Lines -->
          <path d="M 152 148 Q 200 154, 248 148" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="2.5" />
          <path d="M 152 178 Q 200 184, 248 178" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="2.5" />
          <path d="M 152 208 Q 200 214, 248 208" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="2.5" />
          <path d="M 152 238 Q 200 244, 248 238" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="2.5" />
          <path d="M 152 268 Q 200 274, 248 268" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="2.5" />

          <!-- Center Waterproof Zip Baffle -->
          <line x1="200" y1="102" x2="200" y2="${hemY}" stroke="rgba(0,0,0,0.4)" stroke-width="3" />
          <circle cx="200" cy="120" r="2.2" fill="#94a3b8" />
        </g>
      `;
    }
  },

  // =========================================================================
  // ACCESSORIES - JEWELRY & BAGS (Layer 55)
  // =========================================================================
  {
    id: 'gold-chain',
    name: 'Cuban Link Chain Necklace',
    category: 'accessories',
    layerOrder: 55,
    price: '$85',
    defaultColor: '#d4af37',
    availableColors: ['#d4af37', '#e2e8f0', '#78350f'],
    render: (color) => `
      <g id="garment-gold-chain" class="garment-group">
        <!-- Choker & Chest Drape Chain around Neck -->
        <path d="M 184 116 C 185 145, 215 145, 216 116" fill="none" stroke="${color}" stroke-width="3" stroke-dasharray="3,2" stroke-linecap="round" />
        <circle cx="200" cy="142" r="3" fill="${color}" stroke="#b45309" stroke-width="0.8" />
      </g>
    `
  },
  {
    id: 'crossbody-bag',
    name: 'Designer Crossbody Sling',
    category: 'accessories',
    layerOrder: 55,
    price: '$48',
    defaultColor: '#18181b',
    availableColors: ['#18181b', '#78350f', '#064e3b', '#1e3a8a', '#ffffff'],
    render: (color) => `
      <g id="garment-crossbody-bag" class="garment-group">
        <!-- Diagonal Heavy Nylon Strap -->
        <path d="M 152 126 L 246 255" stroke="#09090b" stroke-width="6" stroke-linecap="round" />
        <!-- Leather Sling Pouch -->
        <rect x="204" y="215" width="46" height="30" rx="8" transform="rotate(-15 227 230)" fill="${color}" stroke="rgba(255,255,255,0.18)" stroke-width="1.2" />
        <circle cx="212" cy="225" r="3" fill="#cbd5e1" stroke="#475569" stroke-width="1" />
        <line x1="210" y1="230" x2="238" y2="222" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" />
      </g>
    `
  },

  // =========================================================================
  // ACCESSORIES - HEADWEAR & EYEWEAR (Layer 65) - Contoured to Skull Curvature
  // =========================================================================
  {
    id: 'baseball-cap',
    name: 'Embroidered Dad Cap',
    category: 'accessories',
    layerOrder: 65,
    price: '$25',
    defaultColor: '#1e293b',
    availableColors: ['#1e293b', '#dc2626', '#166534', '#1e40af', '#ffffff'],
    render: (color) => `
      <g id="garment-baseball-cap" class="garment-group">
        <!-- Crown Dome (snugly hugging skull curvature Y:24 to Y:54) -->
        <path d="M 172 52
                 C 170 24, 230 24, 228 52
                 Z"
              fill="${color}" stroke="rgba(0,0,0,0.35)" stroke-width="1.4" />
        <!-- Top Button -->
        <circle cx="200" cy="24" r="2.5" fill="rgba(0,0,0,0.3)" />

        <!-- Radial Panel Stitching -->
        <path d="M 200 25 Q 185 36, 178 52" fill="none" stroke="rgba(0,0,0,0.18)" stroke-width="1" />
        <path d="M 200 25 Q 215 36, 222 52" fill="none" stroke="rgba(0,0,0,0.18)" stroke-width="1" />

        <!-- Curved Visor/Brim with Forehead Overlap & Depth -->
        <path d="M 166 50
                 C 185 45, 215 45, 234 50
                 C 246 58, 226 62, 200 62
                 C 174 62, 154 58, 166 50
                 Z"
              fill="${color}" stroke="rgba(0,0,0,0.4)" stroke-width="1.4" />
        <path d="M 170 52 C 185 48, 215 48, 230 52" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1.2" />

        <!-- Cast Forehead Drop Shadow -->
        <ellipse cx="200" cy="58" rx="26" ry="3" fill="rgba(0,0,0,0.3)" />
      </g>
    `
  },
  {
    id: 'aviator-shades',
    name: 'Polarized Aviator Sunglasses',
    category: 'accessories',
    layerOrder: 65,
    price: '$60',
    defaultColor: '#0f172a',
    availableColors: ['#0f172a', '#78350f', '#064e3b', '#1e3a8a', '#d4af37'],
    render: (color) => `
      <g id="garment-aviator-shades" class="garment-group">
        <!-- Left Teardrop Lens -->
        <path d="M 180 58 C 180 50, 196 50, 196 58 C 196 68, 184 70, 180 64 Z" 
              fill="${color}" fill-opacity="0.88" stroke="#d4af37" stroke-width="1.4" />
        <path d="M 183 55 L 189 66" stroke="rgba(255,255,255,0.4)" stroke-width="1" />

        <!-- Right Teardrop Lens -->
        <path d="M 220 58 C 220 50, 204 50, 204 58 C 204 68, 216 70, 220 64 Z" 
              fill="${color}" fill-opacity="0.88" stroke="#d4af37" stroke-width="1.4" />
        <path d="M 211 55 L 217 66" stroke="rgba(255,255,255,0.4)" stroke-width="1" />

        <!-- Double Gold Bridge -->
        <line x1="196" y1="56" x2="204" y2="56" stroke="#d4af37" stroke-width="1.4" />
        <line x1="196" y1="52" x2="204" y2="52" stroke="#d4af37" stroke-width="1.4" />

        <!-- Temples to Ears -->
        <line x1="180" y1="56" x2="173" y2="55" stroke="#d4af37" stroke-width="1.4" />
        <line x1="220" y1="56" x2="227" y2="55" stroke="#d4af37" stroke-width="1.4" />
      </g>
    `
  },
  {
    id: 'cyber-visor-shades',
    name: 'Cyber Mirrored Visor Shades',
    category: 'accessories',
    layerOrder: 65,
    price: '$42',
    defaultColor: '#06b6d4',
    availableColors: ['#06b6d4', '#d946ef', '#f59e0b', '#10b981', '#6366f1'],
    render: (color) => `
      <g id="garment-cyber-visor" class="garment-group">
        <!-- Wraparound Monoshield Visor (over eyes Y:56-68) -->
        <path d="M 173 56 Q 200 60, 227 56 L 228 67 Q 200 74, 172 67 Z" 
              fill="${color}" opacity="0.9" stroke="rgba(255,255,255,0.6)" stroke-width="1" />
        <!-- Specular Highlight Strip -->
        <line x1="178" y1="60" x2="222" y2="60" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" opacity="0.8" />
      </g>
    `
  }
];

export const PRESET_OUTFITS = [
  {
    id: 'casual-streetwear',
    name: 'Casual Streetwear',
    description: 'Relaxed fleece hoodie with slim denim and crisp leather sneakers.',
    items: {
      tops: { id: 'fleece-hoodie', color: '#475569', fit: 'oversized' },
      bottoms: { id: 'slim-jeans', color: '#1d4ed8', fit: 'regular' },
      shoes: { id: 'urban-sneakers', color: '#ffffff' },
      accessories: { id: 'baseball-cap', color: '#1e293b' }
    }
  },
  {
    id: 'smart-casual',
    name: 'Smart Casual Elegance',
    description: 'Crisp oxford button-down paired with tailored chinos and suede Chelsea boots.',
    items: {
      tops: { id: 'oxford-shirt', color: '#f8fafc', fit: 'slim' },
      bottoms: { id: 'chinos', color: '#d97706', fit: 'regular' },
      shoes: { id: 'chelsea-boots', color: '#78350f' },
      accessories: { id: 'aviator-shades', color: '#0f172a' }
    }
  },
  {
    id: 'biker-edge',
    name: 'Biker Rock Edge',
    description: 'Asymmetric leather jacket layered over a classic crewneck with dark denim.',
    items: {
      tops: { id: 'crew-tshirt', color: '#ffffff', fit: 'slim' },
      outerwear: { id: 'leather-biker', color: '#18181b', fit: 'regular' },
      bottoms: { id: 'slim-jeans', color: '#1e293b', fit: 'slim' },
      shoes: { id: 'chelsea-boots', color: '#1c1917' },
      accessories: { id: 'aviator-shades', color: '#0f172a' }
    }
  },
  {
    id: 'vintage-denim',
    name: 'Vintage Trucker Denim',
    description: 'Classic royal blue crewneck tee paired with vintage denim trucker jacket.',
    items: {
      tops: { id: 'crew-tshirt', color: '#dc2626', fit: 'regular' },
      outerwear: { id: 'denim-jacket', color: '#1e40af', fit: 'regular' },
      bottoms: { id: 'chinos', color: '#1e293b', fit: 'regular' },
      shoes: { id: 'urban-sneakers', color: '#ffffff' },
      accessories: { id: 'baseball-cap', color: '#dc2626' }
    }
  },
  {
    id: 'skater-summer',
    name: 'Skater Summer Vibes',
    description: 'Oversized striped skater tee paired with casual weekend shorts and white sneakers.',
    items: {
      tops: { id: 'striped-tee', color: '#1e3a8a', fit: 'oversized' },
      bottoms: { id: 'bermuda-shorts', color: '#334155', fit: 'regular' },
      shoes: { id: 'urban-sneakers', color: '#ffffff' },
      accessories: { id: 'baseball-cap', color: '#1e40af' }
    }
  },
  {
    id: 'vintage-rocker',
    name: 'Vintage Rocker Look',
    description: 'Distressed vintage rock tee with tactical cargos and Cuban link chain.',
    items: {
      tops: { id: 'graphic-tee', color: '#18181b', fit: 'regular' },
      bottoms: { id: 'relaxed-cargo', color: '#3f3f46', fit: 'oversized' },
      shoes: { id: 'chelsea-boots', color: '#1c1917' },
      accessories: { id: 'gold-chain', color: '#d4af37' }
    }
  },
  {
    id: 'met-gala-couture',
    name: 'Met Gala High Fashion',
    description: 'Double-breasted silk blazer layered over crisp oxford with gold chain and chelsea boots.',
    items: {
      tops: { id: 'oxford-shirt', color: '#ffffff', fit: 'slim' },
      outerwear: { id: 'blazer-double-breasted', color: '#1e293b', fit: 'regular' },
      bottoms: { id: 'chinos', color: '#0f172a', fit: 'slim' },
      shoes: { id: 'chelsea-boots', color: '#1c1917' },
      accessories: { id: 'gold-chain', color: '#d4af37' }
    }
  },
  {
    id: 'tokyo-techwear',
    name: 'Tokyo Cyber Techwear',
    description: 'Down puffer vest, tactical jogger, retro dunks, and mirrored cyber visor.',
    items: {
      tops: { id: 'dryfit-tee', color: '#18181b', fit: 'regular' },
      outerwear: { id: 'puffer-vest', color: '#0f172a', fit: 'oversized' },
      bottoms: { id: 'techwear-cargo-jogger', color: '#18181b', fit: 'regular' },
      shoes: { id: 'retro-high-top-sneakers', color: '#dc2626' },
      accessories: { id: 'cyber-visor-shades', color: '#06b6d4' }
    }
  },
  {
    id: 'autumn-merino',
    name: 'Autumn Merino Minimalist',
    description: 'Fine ribbed merino rollneck paired with slim jeans, crossbody sling, and dunks.',
    items: {
      tops: { id: 'merino-turtleneck', color: '#f1f5f9', fit: 'regular' },
      bottoms: { id: 'slim-jeans', color: '#1e293b', fit: 'slim' },
      shoes: { id: 'retro-high-top-sneakers', color: '#0f172a' },
      accessories: { id: 'crossbody-bag', color: '#18181b' }
    }
  }
];
