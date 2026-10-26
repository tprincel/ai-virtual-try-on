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
  <!-- Heavy Denim Diagonal Twill Texture -->
  <pattern id="denimTwill" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
    <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(255,255,255,0.08)" stroke-width="1.2" />
    <line x1="3" y1="0" x2="3" y2="6" stroke="rgba(0,0,0,0.14)" stroke-width="1.2" />
  </pattern>
`;
