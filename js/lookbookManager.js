/**
 * 2D Virtual Try-On - Lookbook & Outfit Bookmark Manager
 * Manages saved styling combinations, local storage persistence, and one-click look restoration.
 */

export class LookbookManager {
  constructor(engine) {
    this.engine = engine;
    this.storageKey = 'vto_saved_lookbook_v1';
    this.looks = this.loadLooks();
  }

  loadLooks() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  saveLooks() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.looks));
    } catch (e) {
      console.warn('Failed to save lookbook to localStorage:', e);
    }
  }

  saveCurrentLook(customName = '') {
    const state = this.engine.getState();
    const equippedEntries = Object.entries(state.equipped);
    if (equippedEntries.length === 0) {
      return null;
    }

    const name = customName.trim() || `Look #${this.looks.length + 1} (${equippedEntries.length} Items)`;
    const newLook = {
      id: 'look_' + Date.now(),
      name,
      createdAt: new Date().toISOString(),
      skinToneId: state.skinTone.id,
      globalFit: state.globalFit,
      items: Object.values(state.equipped).map(item => ({
        id: item.id,
        name: item.name,
        category: item.category,
        color: item.color,
        price: item.price
      }))
    };

    this.looks.unshift(newLook);
    this.saveLooks();
    return newLook;
  }

  deleteLook(lookId) {
    this.looks = this.looks.filter(l => l.id !== lookId);
    this.saveLooks();
  }

  applyLook(lookId) {
    const look = this.looks.find(l => l.id === lookId);
    if (!look) return false;

    // Apply skin tone
    if (look.skinToneId) {
      this.engine.setSkinTone(look.skinToneId);
    }
    // Apply global fit
    if (look.globalFit) {
      this.engine.setFit(look.globalFit);
    }

    // Equip garments
    this.engine.clearAll();
    look.items.forEach(item => {
      this.engine.equip(item.id, item.color);
    });

    return true;
  }

  getLooks() {
    return this.looks;
  }
}
