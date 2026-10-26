/**
 * 2D Virtual Try-On - Toast Notification System
 * Renders non-intrusive floating feedback messages with smooth physics animations.
 */

class ToastManager {
  constructor() {
    this.container = null;
    this.ensureContainer();
  }

  ensureContainer() {
    let el = document.getElementById('vto-toast-container');
    if (!el) {
      el = document.createElement('div');
      el.id = 'vto-toast-container';
      el.className = 'vto-toast-container';
      document.body.appendChild(el);
    }
    this.container = el;
  }

  show(message, icon = '✨', duration = 2600) {
    this.ensureContainer();
    const toast = document.createElement('div');
    toast.className = 'vto-toast';
    toast.innerHTML = `
      <span class="vto-toast-icon">${icon}</span>
      <span class="vto-toast-msg">${message}</span>
    `;

    this.container.appendChild(toast);

    // Trigger entrance animation
    requestAnimationFrame(() => {
      toast.classList.add('visible');
    });

    setTimeout(() => {
      toast.classList.remove('visible');
      toast.addEventListener('transitionend', () => {
        toast.remove();
      });
    }, duration);
  }
}

export const toast = new ToastManager();
