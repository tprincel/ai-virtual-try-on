/**
 * 2D Virtual Try-On - Stage Viewport & Angle Controls
 * Supports zoom levels, detail inspection pan, and breathing avatar animation.
 */

export class StageControls {
  constructor(viewportContainerId) {
    this.container = document.getElementById(viewportContainerId);
    this.currentZoom = 1.0;
    this.minZoom = 0.8;
    this.maxZoom = 2.0;
    this.breathingActive = false;
    this.anglePerspective = 'frontal'; // 'frontal' | 'perspective'
  }

  zoomIn() {
    this.setZoom(this.currentZoom + 0.15);
  }

  zoomOut() {
    this.setZoom(this.currentZoom - 0.15);
  }

  resetZoom() {
    this.setZoom(1.0);
  }

  setZoom(val) {
    this.currentZoom = Math.min(this.maxZoom, Math.max(this.minZoom, parseFloat(val.toFixed(2))));
    this.applyTransform();
  }

  toggleBreathing() {
    this.breathingActive = !this.breathingActive;
    if (this.container) {
      this.container.classList.toggle('breathing-active', this.breathingActive);
    }
    return this.breathingActive;
  }

  togglePerspective() {
    this.anglePerspective = this.anglePerspective === 'frontal' ? 'perspective' : 'frontal';
    this.applyTransform();
    return this.anglePerspective;
  }

  applyTransform() {
    const svg = document.getElementById('tryon-viewport');
    if (!svg) return;

    const perspectiveSkew = this.anglePerspective === 'perspective' 
      ? 'rotateY(-12deg) rotateX(2deg) scale(0.96)' 
      : 'none';

    svg.style.transform = `scale(${this.currentZoom}) ${perspectiveSkew}`;
    svg.style.transformOrigin = 'center 40%';
    svg.style.transition = 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)';
  }
}
