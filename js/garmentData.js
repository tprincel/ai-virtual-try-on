/**
 * 2D Virtual Try-On - Garment Definition Catalog
 * Precision anatomical SVG paths calibrated for 400x700 mannequin coordinate system.
 */

export const GARMENTS = [
  // =================== TOPS ===================
  {
    id: 'crew-tshirt',
    name: 'Classic Crewneck T-Shirt',
    category: 'tops',
    layerOrder: 30,
    price: '$28',
    defaultColor: '#2563eb',
    availableColors: ['#2563eb', '#1e293b', '#ffffff', '#dc2626', '#059669', '#d97706', '#7c3aed', '#ec4899'],
    render: (color, fit = 'regular') => {
      const wMod = fit === 'slim' ? -4 : (fit === 'oversized' ? 7 : 0);
      const lMod = fit === 'slim' ? -3 : (fit === 'oversized' ? 8 : 0);
      return `
        <g id="garment-crew-tshirt" class="garment-group">
          <!-- Main Torso -->
          <path d="M ${172 - wMod * 0.5} 115 
                   C 185 132, 215 132, ${228 + wMod * 0.5} 115
                   L ${278 + wMod} 135
                   L ${260 + wMod} 200
                   L ${245 + wMod} 190
                   L ${248 + wMod} ${275 + lMod}
                   C 230 ${280 + lMod}, 170 ${280 + lMod}, ${152 - wMod} ${275 + lMod}
                   L ${155 - wMod} 190
                   L ${140 - wMod} 200
                   L ${122 - wMod} 135
                   Z" 
                fill="${color}" stroke="rgba(0,0,0,0.18)" stroke-width="1.5" />
          
          <!-- Sleeve Details -->
          <path d="M ${140 - wMod} 200 L ${155 - wMod} 190" stroke="rgba(0,0,0,0.2)" stroke-width="1.5" />
          <path d="M ${260 + wMod} 200 L ${245 + wMod} 190" stroke="rgba(0,0,0,0.2)" stroke-width="1.5" />
          
          <!-- Crewneck Collar Trim -->
          <path d="M 172 115 C 185 134, 215 134, 228 115" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="3" stroke-linecap="round" />
          <path d="M 173 113 C 185 130, 215 130, 227 113" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1" />
          
          <!-- Fabric Shadow & Creases -->
          <path d="M 160 210 Q 185 240, 175 275" fill="none" stroke="rgba(0,0,0,0.12)" stroke-width="1.5" stroke-linecap="round" />
          <path d="M 240 210 Q 215 240, 225 275" fill="none" stroke="rgba(0,0,0,0.12)" stroke-width="1.5" stroke-linecap="round" />
          <path d="M 195 140 Q 192 185, 200 230" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="3" />
        </g>
      `;
    }
  },
  {
    id: 'oxford-shirt',
    name: 'Tailored Oxford Button-Down',
    category: 'tops',
    layerOrder: 30,
    price: '$58',
    defaultColor: '#f8fafc',
    availableColors: ['#f8fafc', '#93c5fd', '#fbcfe8', '#334155', '#fed7aa', '#a7f3d0'],
    render: (color, fit = 'regular') => {
      const wMod = fit === 'slim' ? -5 : (fit === 'oversized' ? 6 : 0);
      return `
        <g id="garment-oxford-shirt" class="garment-group">
          <!-- Torso -->
          <path d="M 174 112 
                   L 200 135
                   L 226 112
                   L ${278 + wMod} 133
                   L ${262 + wMod} 205
                   L ${246 + wMod} 195
                   L ${250 + wMod} 285
                   C 225 292, 175 292, ${150 - wMod} 285
                   L ${154 - wMod} 195
                   L ${138 - wMod} 205
                   L ${122 - wMod} 133
                   Z" 
                fill="${color}" stroke="rgba(0,0,0,0.2)" stroke-width="1.5" />
          
          <!-- Center Button Placket -->
          <line x1="200" y1="135" x2="200" y2="288" stroke="rgba(0,0,0,0.15)" stroke-width="7" />
          <line x1="200" y1="135" x2="200" y2="288" stroke="rgba(0,0,0,0.25)" stroke-width="1" stroke-dasharray="1,4" />
          
          <!-- Buttons -->
          <circle cx="200" cy="155" r="2" fill="#e2e8f0" stroke="#64748b" stroke-width="0.8" />
          <circle cx="200" cy="180" r="2" fill="#e2e8f0" stroke="#64748b" stroke-width="0.8" />
          <circle cx="200" cy="205" r="2" fill="#e2e8f0" stroke="#64748b" stroke-width="0.8" />
          <circle cx="200" cy="230" r="2" fill="#e2e8f0" stroke="#64748b" stroke-width="0.8" />
          <circle cx="200" cy="255" r="2" fill="#e2e8f0" stroke="#64748b" stroke-width="0.8" />
          
          <!-- Collar Lapels -->
          <polygon points="174,110 188,142 200,135 186,112" fill="${color}" stroke="rgba(0,0,0,0.3)" stroke-width="1.2" />
          <polygon points="226,110 212,142 200,135 214,112" fill="${color}" stroke="rgba(0,0,0,0.3)" stroke-width="1.2" />
          
          <!-- Chest Pocket -->
          <path d="M 168 165 L 184 165 L 184 182 L 176 187 L 168 182 Z" fill="none" stroke="rgba(0,0,0,0.18)" stroke-width="1.2" />
        </g>
      `;
    }
  },
  {
    id: 'fleece-hoodie',
    name: 'Cozy Fleece Pullover Hoodie',
    category: 'tops',
    layerOrder: 30,
    price: '$65',
    defaultColor: '#475569',
    availableColors: ['#475569', '#0f172a', '#e2e8f0', '#7c2d12', '#14532d', '#581c87'],
    render: (color, fit = 'regular') => {
      const wMod = fit === 'slim' ? 0 : (fit === 'oversized' ? 10 : 4);
      return `
        <g id="garment-fleece-hoodie" class="garment-group">
          <!-- Hood Back -->
          <path d="M 160 110 C 150 70, 250 70, 240 110 Z" fill="rgba(0,0,0,0.25)" />
          
          <!-- Main Body -->
          <path d="M 168 116 
                   C 185 130, 215 130, 232 116
                   L ${284 + wMod} 136
                   L ${268 + wMod} 225
                   L ${250 + wMod} 215
                   L ${254 + wMod} 290
                   C 230 295, 170 295, ${146 - wMod} 290
                   L ${150 - wMod} 215
                   L ${132 - wMod} 225
                   L ${116 - wMod} 136
                   Z" 
                fill="${color}" stroke="rgba(0,0,0,0.25)" stroke-width="1.5" />
          
          <!-- Kangaroo Pocket -->
          <path d="M 168 230 L 232 230 L 240 275 L 160 275 Z" fill="rgba(0,0,0,0.1)" stroke="rgba(0,0,0,0.2)" stroke-width="1.2" />
          
          <!-- Drawstrings -->
          <path d="M 188 128 Q 185 155, 187 180" fill="none" stroke="#f1f5f9" stroke-width="2" stroke-linecap="round" />
          <path d="M 212 128 Q 215 155, 213 180" fill="none" stroke="#f1f5f9" stroke-width="2" stroke-linecap="round" />
          <circle cx="187" cy="182" r="2.5" fill="#94a3b8" />
          <circle cx="213" cy="182" r="2.5" fill="#94a3b8" />
          
          <!-- Ribbed Waist Hem -->
          <rect x="${147 - wMod}" y="282" width="${106 + wMod * 2}" height="10" rx="3" fill="rgba(0,0,0,0.15)" />
        </g>
      `;
    }
  },

  // =================== BOTTOMS ===================
  {
    id: 'slim-jeans',
    name: 'Slim Fit Denim Jeans',
    category: 'bottoms',
    layerOrder: 20,
    price: '$64',
    defaultColor: '#1d4ed8',
    availableColors: ['#1d4ed8', '#1e293b', '#60a5fa', '#0f172a', '#64748b'],
    render: (color, fit = 'regular') => {
      const wMod = fit === 'slim' ? -3 : (fit === 'oversized' ? 5 : 0);
      return `
        <g id="garment-slim-jeans" class="garment-group">
          <!-- Waistband -->
          <path d="M ${146 - wMod} 265 L ${254 + wMod} 265 L ${256 + wMod} 280 L ${144 - wMod} 280 Z" fill="${color}" stroke="rgba(0,0,0,0.3)" stroke-width="1.5" />
          <!-- Belt loops & Button -->
          <rect x="198" y="267" width="4" height="11" fill="rgba(0,0,0,0.2)" />
          <circle cx="200" cy="273" r="2.5" fill="#d4af37" stroke="#78350f" stroke-width="0.8" />
          <line x1="200" y1="280" x2="200" y2="330" stroke="rgba(0,0,0,0.2)" stroke-width="1.5" />
          
          <!-- Left Leg -->
          <path d="M ${144 - wMod} 280 
                   L ${138 - wMod} 350
                   L ${144 - wMod} 460
                   L ${148 - wMod} 595
                   L 172 595
                   L 174 460
                   L 200 330
                   Z" 
                fill="${color}" stroke="rgba(0,0,0,0.3)" stroke-width="1.5" />
          
          <!-- Right Leg -->
          <path d="M ${256 + wMod} 280 
                   L ${262 + wMod} 350
                   L ${256 + wMod} 460
                   L ${252 + wMod} 595
                   L 228 595
                   L 226 460
                   L 200 330
                   Z" 
                fill="${color}" stroke="rgba(0,0,0,0.3)" stroke-width="1.5" />
          
          <!-- Whiskers & Knee Creases -->
          <path d="M 152 305 Q 170 320, 192 315" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2" />
          <path d="M 248 305 Q 230 320, 208 315" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2" />
          <path d="M 148 455 Q 160 460, 172 455" fill="none" stroke="rgba(0,0,0,0.18)" stroke-width="1.5" />
          <path d="M 252 455 Q 240 460, 228 455" fill="none" stroke="rgba(0,0,0,0.18)" stroke-width="1.5" />
          
          <!-- Hem Cuffs -->
          <line x1="${148 - wMod}" y1="590" x2="172" y2="590" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
          <line x1="${252 + wMod}" y1="590" x2="228" y2="590" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
        </g>
      `;
    }
  },
  {
    id: 'chinos',
    name: 'Pleated Smart Chino Trousers',
    category: 'bottoms',
    layerOrder: 20,
    price: '$55',
    defaultColor: '#d97706',
    availableColors: ['#d97706', '#1e293b', '#334155', '#475569', '#15803d', '#ffffff'],
    render: (color, fit = 'regular') => {
      const wMod = fit === 'slim' ? -3 : (fit === 'oversized' ? 6 : 0);
      return `
        <g id="garment-chinos" class="garment-group">
          <!-- Waistband -->
          <rect x="${144 - wMod}" y="265" width="${112 + wMod * 2}" height="14" fill="${color}" stroke="rgba(0,0,0,0.2)" stroke-width="1.2" />
          
          <!-- Left Leg -->
          <path d="M ${144 - wMod} 279 
                   L ${140 - wMod} 355
                   L ${146 - wMod} 460
                   L 150 595
                   L 174 595
                   L 176 460
                   L 200 328
                   Z" 
                fill="${color}" stroke="rgba(0,0,0,0.2)" stroke-width="1.2" />
          
          <!-- Right Leg -->
          <path d="M ${256 + wMod} 279 
                   L ${260 + wMod} 355
                   L ${254 + wMod} 460
                   L 250 595
                   L 226 595
                   L 224 460
                   L 200 328
                   Z" 
                fill="${color}" stroke="rgba(0,0,0,0.2)" stroke-width="1.2" />
          
          <!-- Ironed Center Crease -->
          <line x1="160" y1="290" x2="162" y2="590" stroke="rgba(255,255,255,0.2)" stroke-width="1.2" />
          <line x1="240" y1="290" x2="238" y2="590" stroke="rgba(255,255,255,0.2)" stroke-width="1.2" />
          <line x1="159" y1="290" x2="161" y2="590" stroke="rgba(0,0,0,0.15)" stroke-width="0.8" />
          <line x1="241" y1="290" x2="239" y2="590" stroke="rgba(0,0,0,0.15)" stroke-width="0.8" />
        </g>
      `;
    }
  },
  {
    id: 'bermuda-shorts',
    name: 'Casual Weekend Shorts',
    category: 'bottoms',
    layerOrder: 20,
    price: '$38',
    defaultColor: '#0284c7',
    availableColors: ['#0284c7', '#334155', '#e2e8f0', '#15803d', '#f59e0b'],
    render: (color, fit = 'regular') => {
      const wMod = fit === 'slim' ? -3 : (fit === 'oversized' ? 6 : 0);
      return `
        <g id="garment-bermuda-shorts" class="garment-group">
          <!-- Waist -->
          <rect x="${144 - wMod}" y="265" width="${112 + wMod * 2}" height="14" rx="2" fill="${color}" stroke="rgba(0,0,0,0.2)" stroke-width="1.2" />
          <!-- Drawstring -->
          <circle cx="200" cy="272" r="3" fill="#cbd5e1" />
          <!-- Left Leg Short -->
          <path d="M ${144 - wMod} 279 L 140 370 L 142 435 L 182 435 L 180 370 L 200 330 Z" fill="${color}" stroke="rgba(0,0,0,0.25)" stroke-width="1.5" />
          <!-- Right Leg Short -->
          <path d="M ${256 + wMod} 279 L 260 370 L 258 435 L 218 435 L 220 370 L 200 330 Z" fill="${color}" stroke="rgba(0,0,0,0.25)" stroke-width="1.5" />
          <!-- Hem Rolled Edge -->
          <rect x="142" y="428" width="40" height="7" rx="1" fill="rgba(0,0,0,0.15)" />
          <rect x="218" y="428" width="40" height="7" rx="1" fill="rgba(0,0,0,0.15)" />
        </g>
      `;
    }
  },

  // =================== OUTERWEAR ===================
  {
    id: 'denim-jacket',
    name: 'Vintage Trucker Denim Jacket',
    category: 'outerwear',
    layerOrder: 40,
    price: '$89',
    defaultColor: '#1e40af',
    availableColors: ['#1e40af', '#1e293b', '#3b82f6', '#374151', '#f3f4f6'],
    render: (color, fit = 'regular') => {
      const wMod = fit === 'slim' ? -2 : (fit === 'oversized' ? 8 : 2);
      return `
        <g id="garment-denim-jacket" class="garment-group">
          <!-- Left Flap / Torso -->
          <path d="M 166 112 
                   L 190 145
                   L 188 285
                   L ${148 - wMod} 280
                   L ${152 - wMod} 190
                   L ${132 - wMod} 205
                   L ${116 - wMod} 133
                   Z" 
                fill="${color}" stroke="rgba(0,0,0,0.3)" stroke-width="1.8" />
          
          <!-- Right Flap / Torso -->
          <path d="M 234 112 
                   L 210 145
                   L 212 285
                   L ${252 + wMod} 280
                   L ${248 + wMod} 190
                   L ${268 + wMod} 205
                   L ${284 + wMod} 133
                   Z" 
                fill="${color}" stroke="rgba(0,0,0,0.3)" stroke-width="1.8" />
          
          <!-- Collar Points -->
          <polygon points="166,110 186,145 198,125 178,110" fill="${color}" stroke="rgba(0,0,0,0.4)" stroke-width="1.2" />
          <polygon points="234,110 214,145 202,125 222,110" fill="${color}" stroke="rgba(0,0,0,0.4)" stroke-width="1.2" />
          
          <!-- Flap Pockets -->
          <rect x="150" y="160" width="26" height="22" rx="2" fill="rgba(0,0,0,0.15)" stroke="rgba(0,0,0,0.25)" stroke-width="1.2" />
          <circle cx="163" cy="170" r="2" fill="#d4af37" />
          <rect x="224" y="160" width="26" height="22" rx="2" fill="rgba(0,0,0,0.15)" stroke="rgba(0,0,0,0.25)" stroke-width="1.2" />
          <circle cx="237" cy="170" r="2" fill="#d4af37" />
          
          <!-- Brass Buttons on Placket -->
          <circle cx="188" cy="180" r="2.5" fill="#d4af37" stroke="#78350f" stroke-width="0.8" />
          <circle cx="188" cy="210" r="2.5" fill="#d4af37" stroke="#78350f" stroke-width="0.8" />
          <circle cx="188" cy="240" r="2.5" fill="#d4af37" stroke="#78350f" stroke-width="0.8" />
          <circle cx="188" cy="270" r="2.5" fill="#d4af37" stroke="#78350f" stroke-width="0.8" />
        </g>
      `;
    }
  },
  {
    id: 'leather-biker',
    name: 'Asymmetric Leather Biker Jacket',
    category: 'outerwear',
    layerOrder: 40,
    price: '$149',
    defaultColor: '#18181b',
    availableColors: ['#18181b', '#78350f', '#3f3f46', '#7f1d1d'],
    render: (color, fit = 'regular') => {
      const wMod = fit === 'slim' ? -2 : (fit === 'oversized' ? 7 : 2);
      return `
        <g id="garment-leather-biker" class="garment-group">
          <!-- Main Body -->
          <path d="M 166 112 
                   L 175 140
                   L 218 200
                   L 205 285
                   L ${148 - wMod} 280
                   L ${150 - wMod} 190
                   L ${132 - wMod} 205
                   L ${116 - wMod} 133
                   Z" 
                fill="${color}" stroke="#000" stroke-width="2" />
          
          <path d="M 234 112 
                   L 205 155
                   L 218 200
                   L 205 285
                   L ${252 + wMod} 280
                   L ${250 + wMod} 190
                   L ${268 + wMod} 205
                   L ${284 + wMod} 133
                   Z" 
                fill="${color}" stroke="#000" stroke-width="2" />
          
          <!-- Diagonal Chrome Zipper -->
          <line x1="175" y1="140" x2="205" y2="285" stroke="#e2e8f0" stroke-width="2.5" stroke-dasharray="2,2" />
          
          <!-- Biker Notched Lapels with Silver Studs -->
          <polygon points="166,110 152,142 178,142" fill="${color}" stroke="#000" stroke-width="1.2" />
          <circle cx="162" cy="138" r="2" fill="#cbd5e1" />
          <polygon points="234,110 248,142 222,142" fill="${color}" stroke="#000" stroke-width="1.2" />
          <circle cx="238" cy="138" r="2" fill="#cbd5e1" />
          
          <!-- Zipper Pockets -->
          <line x1="155" y1="230" x2="175" y2="225" stroke="#cbd5e1" stroke-width="1.8" />
          <line x1="225" y1="230" x2="245" y2="225" stroke="#cbd5e1" stroke-width="1.8" />
          
          <!-- Waist Belt Buckle -->
          <rect x="188" y="278" width="24" height="8" rx="1" fill="#cbd5e1" stroke="#475569" stroke-width="1" />
        </g>
      `;
    }
  },

  // =================== SHOES ===================
  {
    id: 'urban-sneakers',
    name: 'Minimalist Leather Sneakers',
    category: 'shoes',
    layerOrder: 50,
    price: '$79',
    defaultColor: '#ffffff',
    availableColors: ['#ffffff', '#0f172a', '#dc2626', '#10b981', '#f59e0b'],
    render: (color) => `
      <g id="garment-urban-sneakers" class="garment-group">
        <!-- Left Shoe -->
        <path d="M 148 595 L 140 625 L 132 638 L 134 645 L 175 645 L 174 615 L 168 595 Z" fill="${color}" stroke="rgba(0,0,0,0.3)" stroke-width="1.5" />
        <rect x="132" y="640" width="44" height="6" rx="2" fill="#f8fafc" stroke="rgba(0,0,0,0.3)" stroke-width="1" />
        <line x1="145" y1="615" x2="162" y2="615" stroke="rgba(0,0,0,0.25)" stroke-width="1.2" />
        <line x1="147" y1="622" x2="160" y2="622" stroke="rgba(0,0,0,0.25)" stroke-width="1.2" />
        
        <!-- Right Shoe -->
        <path d="M 252 595 L 260 625 L 268 638 L 266 645 L 225 645 L 226 615 L 232 595 Z" fill="${color}" stroke="rgba(0,0,0,0.3)" stroke-width="1.5" />
        <rect x="224" y="640" width="44" height="6" rx="2" fill="#f8fafc" stroke="rgba(0,0,0,0.3)" stroke-width="1" />
        <line x1="255" y1="615" x2="238" y2="615" stroke="rgba(0,0,0,0.25)" stroke-width="1.2" />
        <line x1="253" y1="622" x2="240" y2="622" stroke="rgba(0,0,0,0.25)" stroke-width="1.2" />
      </g>
    `
  },
  {
    id: 'chelsea-boots',
    name: 'Suede Chelsea Boots',
    category: 'shoes',
    layerOrder: 50,
    price: '$110',
    defaultColor: '#78350f',
    availableColors: ['#78350f', '#1c1917', '#a16207', '#44403c'],
    render: (color) => `
      <g id="garment-chelsea-boots" class="garment-group">
        <!-- Left Boot -->
        <path d="M 148 580 L 138 625 L 130 642 L 133 648 L 176 648 L 175 615 L 172 580 Z" fill="${color}" stroke="rgba(0,0,0,0.4)" stroke-width="1.5" />
        <!-- Elastic Gusset -->
        <polygon points="152,585 162,585 160,615 154,615" fill="#292524" />
        <!-- Sole & Heel -->
        <rect x="131" y="644" width="46" height="5" fill="#292524" />
        <rect x="165" y="646" width="12" height="4" fill="#1c1917" />
        
        <!-- Right Boot -->
        <path d="M 252 580 L 262 625 L 270 642 L 267 648 L 224 648 L 225 615 L 228 580 Z" fill="${color}" stroke="rgba(0,0,0,0.4)" stroke-width="1.5" />
        <!-- Elastic Gusset -->
        <polygon points="248,585 238,585 240,615 246,615" fill="#292524" />
        <!-- Sole & Heel -->
        <rect x="223" y="644" width="46" height="5" fill="#292524" />
        <rect x="223" y="646" width="12" height="4" fill="#1c1917" />
      </g>
    `
  },

  // =================== ACCESSORIES ===================
  {
    id: 'aviator-shades',
    name: 'Classic Aviator Sunglasses',
    category: 'accessories',
    layerOrder: 60,
    price: '$45',
    defaultColor: '#0f172a',
    availableColors: ['#0f172a', '#78350f', '#0284c7', '#059669'],
    render: (color) => `
      <g id="garment-aviator-shades" class="garment-group">
        <!-- Left Lens -->
        <path d="M 182 52 C 182 45, 196 45, 196 52 C 196 62, 185 64, 182 58 Z" fill="${color}" fill-opacity="0.85" stroke="#d4af37" stroke-width="1.5" />
        <path d="M 185 49 L 191 58" stroke="rgba(255,255,255,0.4)" stroke-width="1" />
        
        <!-- Right Lens -->
        <path d="M 218 52 C 218 45, 204 45, 204 52 C 204 62, 215 64, 218 58 Z" fill="${color}" fill-opacity="0.85" stroke="#d4af37" stroke-width="1.5" />
        <path d="M 209 49 L 215 58" stroke="rgba(255,255,255,0.4)" stroke-width="1" />
        
        <!-- Bridge & Temples -->
        <line x1="196" y1="50" x2="204" y2="50" stroke="#d4af37" stroke-width="1.5" />
        <line x1="196" y1="46" x2="204" y2="46" stroke="#d4af37" stroke-width="1" />
        <line x1="182" y1="50" x2="174" y2="48" stroke="#d4af37" stroke-width="1.5" />
        <line x1="218" y1="50" x2="226" y2="48" stroke="#d4af37" stroke-width="1.5" />
      </g>
    `
  },
  {
    id: 'baseball-cap',
    name: 'Embroidered Dad Cap',
    category: 'accessories',
    layerOrder: 60,
    price: '$25',
    defaultColor: '#1e293b',
    availableColors: ['#1e293b', '#dc2626', '#166534', '#1e40af', '#ffffff'],
    render: (color) => `
      <g id="garment-baseball-cap" class="garment-group">
        <!-- Crown Dome -->
        <path d="M 170 48 C 170 20, 230 20, 230 48 Z" fill="${color}" stroke="rgba(0,0,0,0.3)" stroke-width="1.5" />
        <!-- Top Button -->
        <circle cx="200" cy="22" r="3" fill="rgba(0,0,0,0.3)" />
        <!-- Curved Brim/Visor -->
        <path d="M 166 46 C 185 40, 215 40, 234 46 C 248 55, 225 58, 200 58 C 175 58, 152 55, 166 46 Z" fill="${color}" stroke="rgba(0,0,0,0.4)" stroke-width="1.5" />
        <path d="M 172 47 C 185 43, 215 43, 228 47" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1" />
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
  }
];
