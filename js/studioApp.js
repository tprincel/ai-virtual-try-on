/**
 * 2D Virtual Try-On - Studio Application Orchestrator
 * Connects UI interactions, wardrobe catalog, fit controls, presets, audio FX,
 * lighting atmosphere, lookbook bookmarks, and stage viewport zoom/angle inspection.
 */

import { GARMENTS, PRESET_OUTFITS } from './garmentData.js';
import { SKIN_TONES } from './mannequin.js';
import { TryOnEngine } from './tryOnEngine.js';
import { soundFx } from './audioEffects.js';
import { LightingStudio, LIGHTING_PRESETS } from './lightingStudio.js';
import { toast } from './toastManager.js';
import { LookbookManager } from './lookbookManager.js';
import { StageControls } from './stageControls.js';

class StudioApp {
  constructor() {
    this.engine = new TryOnEngine('mannequin-stage-container');
    this.lighting = new LightingStudio('stage-section');
    this.lookbook = new LookbookManager(this.engine);
    this.stageControls = new StageControls('mannequin-frame');
    this.currentCategory = 'all';
    this.searchQuery = '';

    this.initUI();
    this.bindEvents();
    this.engine.onStateChange(() => this.updateUI());
    this.updateUI();
  }

  initUI() {
    this.renderSkinTonePills();
    this.renderLightingPills();
    this.renderCategoryTabs();
    this.renderGarmentCatalog();
    this.updateAudioButtonState();
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
        soundFx.playClick();
      });
    });
  }

  renderLightingPills() {
    const list = document.getElementById('lighting-pill-list');
    if (!list) return;

    const current = this.lighting.getCurrentLighting();
    list.innerHTML = LIGHTING_PRESETS.map(preset => `
      <button class="lighting-pill ${preset.id === current.id ? 'active' : ''}" 
              data-lighting="${preset.id}" 
              title="${preset.name}">
        ${preset.icon}
      </button>
    `).join('');

    list.querySelectorAll('.lighting-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-lighting');
        this.lighting.setLighting(id);
        list.querySelectorAll('.lighting-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        soundFx.playClick();
        const p = LIGHTING_PRESETS.find(x => x.id === id);
        if (p) toast.show(`Lighting: ${p.name}`, p.icon);
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
        soundFx.playClick();
        this.renderGarmentCatalog();
      });
    });
  }

  renderGarmentCatalog() {
    const container = document.getElementById('garments-container');
    if (!container) return;

    let filtered = this.currentCategory === 'all' 
      ? GARMENTS 
      : GARMENTS.filter(g => g.category === this.currentCategory);

    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      filtered = filtered.filter(g => 
        g.name.toLowerCase().includes(q) || 
        g.category.toLowerCase().includes(q) ||
        (g.price && g.price.includes(q))
      );
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; color: var(--text-muted);">
          <div style="font-size: 32px; margin-bottom: 8px;">🔍</div>
          <div style="font-size: 14px; font-weight: 600; color: #cbd5e1;">No garments found</div>
          <div style="font-size: 12px; margin-top: 4px;">Try searching for "jacket", "shirt", "denim", or "sneakers".</div>
        </div>
      `;
      return;
    }

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
        soundFx.playFabricSwoosh();
        const g = GARMENTS.find(x => x.id === id);
        if (g) toast.show(`Updated ${g.name}`, '👕');
      });
    });

    // Swatch color selection
    container.querySelectorAll('.color-swatch-mini').forEach(swatch => {
      swatch.addEventListener('click', (e) => {
        const id = swatch.getAttribute('data-garment');
        const color = swatch.getAttribute('data-color');
        this.engine.equip(id, color);
        soundFx.playFabricSwoosh();
      });
    });
  }

  updateAudioButtonState() {
    const btn = document.getElementById('audio-toggle-btn');
    const icon = document.getElementById('audio-icon');
    if (btn && icon) {
      btn.classList.toggle('muted', !soundFx.enabled);
      icon.textContent = soundFx.enabled ? '🔊' : '🔇';
    }
  }

  renderLookbookModal() {
    const container = document.getElementById('lookbook-content');
    if (!container) return;

    const looks = this.lookbook.getLooks();
    if (looks.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 40px 10px; color: var(--text-muted);">
          <div style="font-size: 36px; margin-bottom: 8px;">📖</div>
          <div style="font-size: 15px; font-weight: 600; color: #fff;">Your Lookbook is Empty</div>
          <div style="font-size: 12px; margin-top: 6px;">
            Equip clothes on the mannequin and click "⭐ Save" to bookmark custom outfits!
          </div>
        </div>
      `;
      return;
    }

    container.innerHTML = looks.map(look => `
      <div class="lookbook-card" data-id="${look.id}">
        <div>
          <div class="lookbook-info-title">${look.name}</div>
          <div class="lookbook-info-meta">
            ${look.items.map(i => i.name).join(' • ')}
          </div>
        </div>
        <div class="lookbook-actions">
          <button class="nav-btn primary apply-look-btn" data-id="${look.id}" style="padding: 6px 12px; font-size: 12px;">
            Equip ✨
          </button>
          <button class="nav-btn delete-look-btn" data-id="${look.id}" style="padding: 6px 10px; font-size: 12px; color: #ef4444;">
            🗑️
          </button>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.apply-look-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        this.lookbook.applyLook(id);
        soundFx.playSparkle();
        toast.show('Equipped look from Lookbook!', '✨');
        document.getElementById('lookbook-modal')?.classList.remove('active');
      });
    });

    container.querySelectorAll('.delete-look-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        this.lookbook.deleteLook(id);
        soundFx.playClick();
        this.renderLookbookModal();
        toast.show('Look removed from Lookbook', '🗑️');
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
        soundFx.playClick();
        toast.show(`Drape Fit: ${fit.toUpperCase()}`, '📐');
      });
    });

    // Reset button
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.engine.clearAll();
        soundFx.playClick();
        toast.show('Wardrobe cleared', '🔄');
      });
    }

    // Randomize / Inspire Me
    const inspireBtn = document.getElementById('inspire-btn');
    if (inspireBtn) {
      inspireBtn.addEventListener('click', () => {
        const randomPreset = PRESET_OUTFITS[Math.floor(Math.random() * PRESET_OUTFITS.length)];
        this.engine.loadOutfit(randomPreset);
        soundFx.playSparkle();
        toast.show(`Inspired by: ${randomPreset.name}`, '🎲');
      });
    }

    // Preset look selector
    const presetSelect = document.getElementById('preset-select');
    if (presetSelect) {
      presetSelect.addEventListener('change', (e) => {
        const preset = PRESET_OUTFITS.find(p => p.id === e.target.value);
        if (preset) {
          this.engine.loadOutfit(preset);
          soundFx.playSparkle();
          toast.show(`Loaded: ${preset.name}`, '👗');
        }
      });
    }

    // Audio FX Toggle
    const audioBtn = document.getElementById('audio-toggle-btn');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        const isEnabled = soundFx.toggle();
        this.updateAudioButtonState();
        if (isEnabled) soundFx.playClick();
        toast.show(isEnabled ? 'Sound Effects Enabled' : 'Sound Effects Muted', isEnabled ? '🔊' : '🔇');
      });
    }

    // Viewport Stage Tools
    document.getElementById('tool-zoom-in')?.addEventListener('click', () => {
      this.stageControls.zoomIn();
      soundFx.playClick();
    });
    document.getElementById('tool-zoom-out')?.addEventListener('click', () => {
      this.stageControls.zoomOut();
      soundFx.playClick();
    });
    document.getElementById('tool-zoom-reset')?.addEventListener('click', () => {
      this.stageControls.resetZoom();
      soundFx.playClick();
    });
    document.getElementById('tool-breathe')?.addEventListener('click', (e) => {
      const active = this.stageControls.toggleBreathing();
      e.currentTarget.classList.toggle('active', active);
      soundFx.playClick();
      toast.show(active ? 'Breathing Animation Active' : 'Breathing Animation Paused', '🌬️');
    });
    document.getElementById('tool-angle')?.addEventListener('click', (e) => {
      const angle = this.stageControls.togglePerspective();
      e.currentTarget.classList.toggle('active', angle === 'perspective');
      soundFx.playClick();
      toast.show(angle === 'perspective' ? 'Dynamic 3/4 Perspective' : 'Frontal Studio View', '📐');
    });

    // Wardrobe Search Input
    const searchInput = document.getElementById('wardrobe-search');
    const clearBtn = document.getElementById('search-clear');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim();
        if (clearBtn) clearBtn.style.display = this.searchQuery ? 'block' : 'none';
        this.renderGarmentCatalog();
      });
    }
    if (clearBtn && searchInput) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        this.searchQuery = '';
        clearBtn.style.display = 'none';
        this.renderGarmentCatalog();
        soundFx.playClick();
      });
    }

    // Save look to lookbook button
    const saveLookBtn = document.getElementById('save-look-btn');
    if (saveLookBtn) {
      saveLookBtn.addEventListener('click', () => {
        const saved = this.lookbook.saveCurrentLook();
        if (saved) {
          soundFx.playSparkle();
          toast.show('Outfit saved to Lookbook! ⭐', '✨');
        } else {
          toast.show('Equip at least one piece to save look', '⚠️');
        }
      });
    }

    // Lookbook Modal triggers
    const lookbookBtn = document.getElementById('lookbook-btn');
    const lookbookModal = document.getElementById('lookbook-modal');
    const lookbookClose = document.getElementById('lookbook-close');

    if (lookbookBtn && lookbookModal) {
      lookbookBtn.addEventListener('click', () => {
        this.renderLookbookModal();
        lookbookModal.classList.add('active');
        soundFx.playClick();
      });
    }
    if (lookbookClose && lookbookModal) {
      lookbookClose.addEventListener('click', () => {
        lookbookModal.classList.remove('active');
        soundFx.playClick();
      });
    }
    if (lookbookModal) {
      lookbookModal.addEventListener('click', (e) => {
        if (e.target === lookbookModal) lookbookModal.classList.remove('active');
      });
    }

    // Complete Look / Checkout Button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        soundFx.playSparkle();
        const total = document.getElementById('outfit-total-price')?.textContent || '$0';
        toast.show(`Curated Look Confirmed! (${total})`, '🛍️');
      });
    }

    // Snapshot Exporter
    const snapshotBtn = document.getElementById('snapshot-btn');
    if (snapshotBtn) {
      snapshotBtn.addEventListener('click', () => {
        soundFx.playShutter();
        toast.show('Rendering high-res look snapshot...', '📸');
        this.exportSnapshot();
      });
    }

    // Sizing Advisor Modal triggers
    const advisorBtn = document.getElementById('advisor-btn');
    const advisorModal = document.getElementById('advisor-modal');
    const advisorClose = document.getElementById('advisor-close');

    if (advisorBtn && advisorModal) {
      advisorBtn.addEventListener('click', () => {
        advisorModal.classList.add('active');
        soundFx.playClick();
      });
    }
    if (advisorClose && advisorModal) {
      advisorClose.addEventListener('click', () => {
        advisorModal.classList.remove('active');
        soundFx.playClick();
      });
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

        soundFx.playClick();
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

      // Studio backdrop gradient from active lighting
      const lighting = this.lighting.getCurrentLighting();
      const grad = ctx.createRadialGradient(400, 500, 100, 400, 700, 700);
      grad.addColorStop(0, '#1a2233');
      grad.addColorStop(1, '#090c12');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 800, 1400);

      // Title watermark & branding
      ctx.fillStyle = '#f8fafc';
      ctx.font = 'bold 28px -apple-system, sans-serif';
      ctx.fillText('AI VIRTUAL TRY-ON STUDIO', 40, 60);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '16px -apple-system, sans-serif';
      ctx.fillText(`Curated Atelier Look • Lighting: ${lighting.name}`, 40, 92);

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
      toast.show('Look saved to downloads!', '🎉');
    };
    image.src = blobURL;
  }
}

// Bootstrap once DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  window.studio = new StudioApp();
});
