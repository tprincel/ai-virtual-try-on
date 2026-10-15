/**
 * 2D Virtual Try-On - Core Try-On Engine
 * Manages garment layering, fitting transformations, color grading, and scene composition.
 */

import { GARMENTS, PRESET_OUTFITS } from './garmentData.js';
import { Mannequin } from './mannequin.js';

export class TryOnEngine {
  constructor(canvasContainerId, options = {}) {
    this.container = document.getElementById(canvasContainerId);
    this.mannequin = new Mannequin(canvasContainerId, options);
    this.equipped = new Map(); // category -> { garment, color, fit }
    this.globalFit = 'regular'; // 'slim' | 'regular' | 'oversized'
    this.listeners = [];

    // Initialize with default outfit
    this.loadOutfit(PRESET_OUTFITS[0]);
  }

  onStateChange(callback) {
    this.listeners.push(callback);
  }

  notifyStateChange() {
    const state = this.getState();
    this.listeners.forEach(cb => cb(state));
    this.render();
  }

  getState() {
    const items = {};
    for (const [cat, data] of this.equipped.entries()) {
      items[cat] = {
        id: data.garment.id,
        name: data.garment.name,
        price: data.garment.price,
        color: data.color,
        fit: data.fit,
        availableColors: data.garment.availableColors
      };
    }
    return {
      equipped: items,
      globalFit: this.globalFit,
      skinTone: this.mannequin.skinTone
    };
  }

  equip(garmentId, customColor = null, customFit = null) {
    const garment = GARMENTS.find(g => g.id === garmentId);
    if (!garment) return;

    const existing = this.equipped.get(garment.category);
    // If clicking same garment, keep or update
    const color = customColor || (existing && existing.garment.id === garment.id ? existing.color : garment.defaultColor);
    const fit = customFit || (existing && existing.garment.id === garment.id ? existing.fit : this.globalFit);

    this.equipped.set(garment.category, {
      garment,
      color,
      fit
    });

    this.notifyStateChange();
  }

  toggle(garmentId) {
    const garment = GARMENTS.find(g => g.id === garmentId);
    if (!garment) return;

    const current = this.equipped.get(garment.category);
    if (current && current.garment.id === garmentId) {
      this.equipped.delete(garment.category);
    } else {
      this.equip(garmentId);
      return;
    }
    this.notifyStateChange();
  }

  unequip(category) {
    if (this.equipped.has(category)) {
      this.equipped.delete(category);
      this.notifyStateChange();
    }
  }

  clearAll() {
    this.equipped.clear();
    this.notifyStateChange();
  }

  setColor(category, hexColor) {
    const item = this.equipped.get(category);
    if (item) {
      item.color = hexColor;
      this.notifyStateChange();
    }
  }

  setFit(fitType) {
    this.globalFit = fitType;
    for (const [cat, item] of this.equipped.entries()) {
      item.fit = fitType;
    }
    this.notifyStateChange();
  }

  setSkinTone(toneId) {
    this.mannequin.setSkinTone(toneId);
    this.notifyStateChange();
  }

  loadOutfit(preset) {
    this.equipped.clear();
    for (const [category, item] of Object.entries(preset.items)) {
      const garment = GARMENTS.find(g => g.id === item.id);
      if (garment) {
        this.equipped.set(category, {
          garment,
          color: item.color || garment.defaultColor,
          fit: item.fit || this.globalFit
        });
      }
    }
    this.notifyStateChange();
  }

  render() {
    if (!this.container) return;

    // Sort equipped garments by layerOrder for natural depth stacking
    const sortedLayers = Array.from(this.equipped.values()).sort(
      (a, b) => a.garment.layerOrder - b.garment.layerOrder
    );

    const garmentsSVG = sortedLayers
      .map(item => item.garment.render(item.color, item.fit))
      .join('\n');

    const svgContent = `
      <svg id="tryon-viewport" viewBox="0 0 400 700" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="garmentShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="rgba(0,0,0,0.3)" />
          </filter>
        </defs>
        ${this.mannequin.getSVGMarkup()}
        <g id="garment-layers" filter="url(#garmentShadow)">
          ${garmentsSVG}
        </g>
      </svg>
    `;

    this.container.innerHTML = svgContent;
  }
}
