/**
 * 2D Virtual Try-On - SVG Fabric Texture Shaders
 * Injects realistic micro-texture patterns.
 */

export const FABRIC_SHADERS = `
  <!-- Micro Fabric Weave Filter -->
  <filter id="fabricWeave" x="0%" y="0%" width="100%" height="100%">
    <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise" />
    <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.05 0" in="noise" result="alphaNoise" />
    <feComposite in="SourceGraphic" in2="alphaNoise" operator="over" />
  </filter>
`;
