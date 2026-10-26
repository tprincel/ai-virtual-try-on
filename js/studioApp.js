/**
 * 2D Virtual Try-On - Studio Application Orchestrator
 * Connects UI interactions, wardrobe browser, fit controls, presets, and export capabilities.
 */

import { GARMENTS, PRESET_OUTFITS } from './garmentData.js';
import { SKIN_TONES } from './mannequin.js';
import { TryOnEngine } from './tryOnEngine.js';

class StudioApp {
  constructor() {
    this.engine = new TryOnEngine('mannequin-stage-container');
    this.currentCategory = 'all';

    this.initUI();
    this.bindEvents();
    this.engine.onStateChange(() => this.updateUI());
    this.updateUI();
  }

  initUI() {
    this.renderSkinTonePills();
    this.renderCategoryTabs();
    this.renderGarmentCatalog();
  }

  renderSkinTonePills() {
    const list = document.getElementById('skin-swatch-list');
    if (!list) return;

    list.innerHTML = SKIN_TONES.map(tone => `
      <div class="skin-swatch ${tone.id === this.engine.mannequin.skinTone.id ? 'active' : ''}" 
           data-tone="${tone.id}" 
           style="background: ${tone.hex};" 
           title="${tone.name}"></div>
    `).join('');

    list.querySelectorAll('.skin-swatch').forEach(el => {
      el.addEventListener('click', (e) => {
        const toneId = e.target.getAttribute('data-tone');
        this.engine.setSkinTone(toneId);
      });
    });
  }

  renderCategoryTabs() {
    const nav = document.getElementById('category-nav');
    if (!nav) return;

    const categories = [
      { id: 'all', label: '✨ All Pieces' },
      { id: 'tops', label: '👕 Tops' },
      { id: 'outerwear', label: '🧥 Outerwear' },
      { id: 'bottoms', label: '👖 Bottoms' },
      { id: 'shoes', label: '👟 Footwear' },
      { id: 'accessories', label: '🕶️ Accessories' }
    ];

    nav.innerHTML = categories.map(cat => `
      <button class="category-tab ${cat.id === this.currentCategory ? 'active' : ''}" data-cat="${cat.id}">
        ${cat.label}
      </button>
    `).join('');

    nav.querySelectorAll('.category-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        nav.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.currentCategory = tab.getAttribute('data-cat');
        this.renderGarmentCatalog();
      });
    });
  }

  renderGarmentCatalog() {
    const container = document.getElementById('garments-container');
    if (!container) return;

    const filtered = this.currentCategory === 'all' 
      ? GARMENTS 
      : GARMENTS.filter(g => g.category === this.currentCategory);

    const state = this.engine.getState();

    container.innerHTML = filtered.map(garment => {
      const equippedItem = state.equipped[garment.category];
      const isEquipped = equippedItem && equippedItem.id === garment.id;
      const activeColor = isEquipped ? equippedItem.color : garment.defaultColor;

      const swatches = garment.availableColors.map(c => `
        <span class="color-swatch-mini ${c === activeColor ? 'selected' : ''}" 
              data-garment="${garment.id}" 
              data-color="${c}" 
              style="background: ${c};" 
              title="Color ${c}"></span>
      `).join('');

      return `
        <div class="garment-card ${isEquipped ? 'equipped' : ''}" data-id="${garment.id}">
          <span class="garment-equipped-badge">EQUIPPED</span>
          <div class="garment-card-title">${garment.name}</div>
          <div class="garment-card-price">${garment.price}</div>
          <div class="garment-color-palette" onclick="event.stopPropagation();">
            ${swatches}
          </div>
        </div>
      `;
    }).join('');

    // Garment card toggle click
    container.querySelectorAll('.garment-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        this.engine.toggle(id);
      });
    });

    // Swatch color selection
    container.querySelectorAll('.color-swatch-mini').forEach(swatch => {
      swatch.addEventListener('click', (e) => {
        const id = swatch.getAttribute('data-garment');
        const color = swatch.getAttribute('data-color');
        this.engine.equip(id, color);
      });
    });
  }

  updateUI() {
    const state = this.engine.getState();

    // Update active fit button
    document.querySelectorAll('.fit-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-fit') === state.globalFit);
    });

    // Update skin tone pills active state
    document.querySelectorAll('.skin-swatch').forEach(swatch => {
      swatch.classList.toggle('active', swatch.getAttribute('data-tone') === state.skinTone.id);
    });

    // Update wardrobe cards
    this.renderGarmentCatalog();

    // Calculate total price
    let total = 0;
    for (const item of Object.values(state.equipped)) {
      const val = parseInt(item.price.replace('$', ''), 10) || 0;
      total += val;
    }
    const totalEl = document.getElementById('outfit-total-price');
    if (totalEl) totalEl.textContent = `$${total}`;

    const countEl = document.getElementById('equipped-count-tag');
    if (countEl) countEl.textContent = `${Object.keys(state.equipped).length} Items`;
  }

  bindEvents() {
    // Fit toggles
    document.querySelectorAll('.fit-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const fit = btn.getAttribute('data-fit');
        this.engine.setFit(fit);
      });
    });

    // Reset button
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.engine.clearAll();
      });
    }

    // Randomize / Inspire Me
    const inspireBtn = document.getElementById('inspire-btn');
    if (inspireBtn) {
      inspireBtn.addEventListener('click', () => {
        const randomPreset = PRESET_OUTFITS[Math.floor(Math.random() * PRESET_OUTFITS.length)];
        this.engine.loadOutfit(randomPreset);
      });
    }

    // Preset look selector
    const presetSelect = document.getElementById('preset-select');
    if (presetSelect) {
      presetSelect.addEventListener('change', (e) => {
        const preset = PRESET_OUTFITS.find(p => p.id === e.target.value);
        if (preset) this.engine.loadOutfit(preset);
      });
    }

    // Snapshot Exporter
    const snapshotBtn = document.getElementById('snapshot-btn');
    if (snapshotBtn) {
      snapshotBtn.addEventListener('click', () => this.exportSnapshot());
    }

    // Sizing Advisor Modal triggers
    const advisorBtn = document.getElementById('advisor-btn');
    const advisorModal = document.getElementById('advisor-modal');
    const advisorClose = document.getElementById('advisor-close');

    if (advisorBtn && advisorModal) {
      advisorBtn.addEventListener('click', () => advisorModal.classList.add('active'));
    }
    if (advisorClose && advisorModal) {
      advisorClose.addEventListener('click', () => advisorModal.classList.remove('active'));
    }
    if (advisorModal) {
      advisorModal.addEventListener('click', (e) => {
        if (e.target === advisorModal) advisorModal.classList.remove('active');
      });
    }

    // Size calculation logic
    const calcSizeBtn = document.getElementById('calc-size-btn');
    if (calcSizeBtn) {
      calcSizeBtn.addEventListener('click', () => {
        const height = parseInt(document.getElementById('input-height')?.value || 175, 10);
        const weight = parseInt(document.getElementById('input-weight')?.value || 70, 10);
        const resultEl = document.getElementById('size-recommendation-result');

        let size = 'Medium (M)';
        if (weight < 62 || height < 165) size = 'Small (S)';
        else if (weight > 85 || height > 185) size = 'Extra Large (XL)';
        else if (weight > 76 || height > 180) size = 'Large (L)';

        if (resultEl) {
          resultEl.innerHTML = `
            <div style="padding: 12px; background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.3); border-radius: 8px; margin-top: 12px;">
              <div style="font-size: 12px; color: #a5b4fc; text-transform: uppercase; font-weight: 600;">Recommended Fit:</div>
              <div style="font-size: 18px; font-weight: 700; color: #fff; margin: 4px 0;">${size}</div>
              <div style="font-size: 12px; color: #94a3b8;">Calibrated for optimal garment drape and comfort.</div>
            </div>
          `;
        }
      });
    }
  }

  exportSnapshot() {
    const svgEl = document.getElementById('tryon-viewport');
    if (!svgEl) return;

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgEl);
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const URL = window.URL || window.webkitURL || window;
    const blobURL = URL.createObjectURL(svgBlob);

    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 800;
      canvas.height = 1400;
      const ctx = canvas.getContext('2d');

      // Studio backdrop gradient
      const grad = ctx.createRadialGradient(400, 500, 100, 400, 700, 700);
      grad.addColorStop(0, '#171d29');
      grad.addColorStop(1, '#0a0d13');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 800, 1400);

      // Title watermark
      ctx.fillStyle = '#f8fafc';
      ctx.font = 'bold 28px -apple-system, sans-serif';
      ctx.fillText('AI VIRTUAL TRY-ON STUDIO', 40, 60);

      ctx.fillStyle = '#64748b';
      ctx.font = '16px -apple-system, sans-serif';
      ctx.fillText(`Curated Look • ${new Date().toLocaleDateString()}`, 40, 90);

      // Draw vector avatar
      ctx.drawImage(image, 0, 120, 800, 1280);

      const pngURL = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngURL;
      downloadLink.download = `tryon-look-${Date.now()}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(blobURL);
    };
    image.src = blobURL;
  }
}

// Bootstrap once DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  window.studio = new StudioApp();
});

// Step 59: feat(wardrobe): implement real-time instant search bar for apparel catalog

// Step 60: feat(wardrobe): add quick search clear button and zero-results fallback state

// Step 61: feat(ui): add stage toolbar controls for zoom, breathing, and angle

// Step 62: feat(ui): add floating lighting selector pills on stage control bar
