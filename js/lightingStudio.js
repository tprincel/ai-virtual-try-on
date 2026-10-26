/**
 * 2D Virtual Try-On - Studio Lighting Atmosphere Engine
 * Configures dynamic stage illumination, ambient glow, and high-fashion backdrops.
 */

export const LIGHTING_PRESETS = [
  {
    id: 'studio-spotlight',
    name: 'Studio Spotlight',
    icon: '💡',
    background: 'radial-gradient(circle at 50% 35%, #1e2638 0%, #0a0d14 100%)',
    shadowColor: 'rgba(0, 0, 0, 0.45)',
    ambientGlow: 'rgba(99, 102, 241, 0.12)',
    stageBorder: 'rgba(255, 255, 255, 0.08)'
  },
  {
    id: 'cyberpunk-neon',
    name: 'Cyberpunk Neon',
    icon: '🔮',
    background: 'radial-gradient(circle at 50% 40%, #1a102f 0%, #090514 100%)',
    shadowColor: 'rgba(217, 70, 239, 0.35)',
    ambientGlow: 'rgba(6, 182, 212, 0.2)',
    stageBorder: 'rgba(217, 70, 239, 0.3)'
  },
  {
    id: 'golden-hour',
    name: 'Golden Hour Sunset',
    icon: '🌅',
    background: 'radial-gradient(circle at 50% 40%, #2b1f14 0%, #0d0a07 100%)',
    shadowColor: 'rgba(245, 158, 11, 0.3)',
    ambientGlow: 'rgba(251, 191, 36, 0.18)',
    stageBorder: 'rgba(245, 158, 11, 0.25)'
  },
  {
    id: 'runway-editorial',
    name: 'Runway Editorial',
    icon: '✨',
    background: 'radial-gradient(circle at 50% 30%, #2c3240 0%, #11141c 100%)',
    shadowColor: 'rgba(255, 255, 255, 0.15)',
    ambientGlow: 'rgba(255, 255, 255, 0.1)',
    stageBorder: 'rgba(255, 255, 255, 0.2)'
  },
  {
    id: 'midnight-emerald',
    name: 'Midnight Velvet',
    icon: '🌿',
    background: 'radial-gradient(circle at 50% 40%, #0d281e 0%, #040d0a 100%)',
    shadowColor: 'rgba(16, 185, 129, 0.3)',
    ambientGlow: 'rgba(52, 211, 153, 0.18)',
    stageBorder: 'rgba(16, 185, 129, 0.25)'
  }
];

export class LightingStudio {
  constructor(stageElementId) {
    this.stage = document.getElementById(stageElementId);
    this.currentLighting = LIGHTING_PRESETS[0];
  }

  setLighting(presetId) {
    const preset = LIGHTING_PRESETS.find(p => p.id === presetId);
    if (!preset || !this.stage) return;

    this.currentLighting = preset;
    this.stage.style.background = preset.background;

    // Dispatch custom event for stage updates
    window.dispatchEvent(new CustomEvent('vto:lighting-changed', {
      detail: { preset }
    }));
  }

  getCurrentLighting() {
    return this.currentLighting;
  }
}
