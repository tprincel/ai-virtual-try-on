/**
 * 2D Virtual Try-On - SVG Fabric Texture Shaders
 * Injects realistic micro-texture patterns (denim twill, knit ribbing, leather grain, silk sheen).
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

  <!-- Knit Ribbing Texture -->
  <pattern id="knitRibbing" width="4" height="8" patternUnits="userSpaceOnUse">
    <line x1="1" y1="0" x2="1" y2="8" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
    <line x1="3" y1="0" x2="3" y2="8" stroke="rgba(0,0,0,0.12)" stroke-width="1" />
  </pattern>

  <!-- Luxury Silk Satin Highlight Gradient -->
  <linearGradient id="silkSheen" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="rgba(255,255,255,0.18)" />
    <stop offset="35%" stop-color="rgba(255,255,255,0)" />
    <stop offset="70%" stop-color="rgba(255,255,255,0.12)" />
    <stop offset="100%" stop-color="rgba(0,0,0,0.2)" />
  </linearGradient>

  <!-- Pebbled Leather Specular Grain -->
  <filter id="leatherGrain" x="-10%" y="-10%" width="120%" height="120%">
    <feTurbulence type="turbulence" baseFrequency="0.45" numOctaves="2" result="grain" />
    <feDiffuseLighting in="grain" lighting-color="#ffffff" surfaceScale="1.2" diffuseConstant="0.8" result="light">
      <feDistantLight azimuth="60" elevation="50" />
    </feDiffuseLighting>
    <feBlend mode="multiply" in="SourceGraphic" in2="light" />
  </filter>
`;
