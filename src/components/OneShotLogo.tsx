import React from 'react';

interface OneShotLogoProps {
  className?: string;
  variant?: 'full' | 'emblem' | 'horizontal';
  showTagline?: boolean;
  useImage?: boolean;
  imageSrc?: string;
}

export const OneShotLogo: React.FC<OneShotLogoProps> = ({
  className = 'h-16 sm:h-20 w-auto',
  variant = 'full',
  showTagline = true,
  useImage = true,
  imageSrc = '/logo.png',
}) => {
  const [imageFailed, setImageFailed] = React.useState(false);

  if (useImage && !imageFailed) {
    return (
      <img
        src={imageSrc}
        alt="ONE SHOT ANIMATION Logo"
        onError={() => setImageFailed(true)}
        className={`object-contain ${className}`}
      />
    );
  }

  // Determine viewBox dynamically based on variant
  const getViewBox = () => {
    if (variant === 'emblem') {
      return '10 0 710 420'; // Tight cropped viewBox for emblem icon
    }
    return '0 0 740 560'; // Full logo with emblem + typography
  };

  return (
    <svg
      viewBox={getViewBox()}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      aria-label="ONE SHOT ANIMATION Logo"
    >
      <defs>
        {/* Glow Filters */}
        <filter id="redGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* ========================================== */}
      {/* 1. EMBLEM SECTION (Top Part: 1 + Straw Hat + Aperture) */}
      {/* ========================================== */}
      <g id="logo-emblem">
        {/* Red Brush Ring / Enso Circle (Left side around anime character) */}
        <path
          d="M 120 70 C 50 100 20 180 30 250 C 40 320 90 380 160 390 C 200 396 230 380 240 370 C 200 390 130 385 85 345 C 45 305 35 240 50 180 C 65 120 110 75 160 65 C 135 60 120 70 120 70 Z"
          fill="#ED1C24"
        />
        {/* Splatter / Brush accents */}
        <path d="M 60 140 C 55 130 45 135 50 145 C 55 155 65 150 60 140 Z" fill="#ED1C24" />
        <path d="M 170 410 C 180 415 185 405 175 400 C 165 395 160 405 170 410 Z" fill="#ED1C24" />
        <path d="M 145 425 C 152 428 155 420 148 418 C 141 416 138 422 145 425 Z" fill="#ED1C24" />

        {/* Anime Luffy Straw Hat & Boy Silhouette */}
        <g id="strawhat-character">
          {/* Straw Hat Crown */}
          <path
            d="M 145 105 C 160 90 220 90 245 110 C 235 125 155 125 145 105 Z"
            fill="#FFFFFF"
            stroke="#000000"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          {/* Straw Hat Ribbon */}
          <path d="M 145 118 C 175 112 215 112 245 118" stroke="#ED1C24" strokeWidth="10" />
          {/* Straw Hat Wide Brim */}
          <path
            d="M 90 185 C 130 160 210 125 315 120 C 260 140 180 160 90 185 Z"
            fill="#FFFFFF"
            stroke="#000000"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          {/* Spiky Anime Hair Profile */}
          <path
            d="M 180 165 L 170 185 L 185 180 L 175 205 L 195 195 L 190 220 L 210 205 L 215 235 L 235 210 L 250 245 C 250 245 270 215 285 200 C 275 190 260 185 250 175 Z"
            fill="#000000"
          />
          {/* Face Profile & Nose/Mouth */}
          <path
            d="M 215 235 L 230 250 L 220 258 L 245 275 L 225 280 L 210 320 C 200 310 195 290 195 270 Z"
            fill="#FFFFFF"
            stroke="#000000"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          {/* Eye / Brow expression */}
          <path d="M 220 230 L 238 235" stroke="#000000" strokeWidth="6" strokeLinecap="round" />
          {/* Jacket Collar / Shoulders */}
          <path
            d="M 225 280 C 240 310 260 330 295 350 L 265 380 C 245 350 210 330 185 315 L 210 320 Z"
            fill="#000000"
            stroke="#FFFFFF"
            strokeWidth="4"
          />
          <path
            d="M 185 315 C 160 360 140 400 120 440 C 145 420 175 390 195 365 Z"
            fill="#000000"
            stroke="#FFFFFF"
            strokeWidth="3"
          />
        </g>

        {/* Large Numeral '1' */}
        <path
          d="M 285 45 L 360 0 L 360 410 L 250 410 L 250 345 L 290 345 L 290 85 L 285 85 Z"
          fill="currentColor"
          className="text-white fill-current"
        />

        {/* Camera Outline & Shutter Button */}
        <rect x="585" y="60" width="55" height="18" rx="8" fill="#ED1C24" />
        <rect
          x="545"
          y="95"
          width="170"
          height="280"
          rx="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="20"
          className="text-white stroke-current"
        />

        {/* Camera Aperture / Lens '0' Circle */}
        <g id="aperture-lens" transform="translate(490, 230)">
          {/* Outer Ring */}
          <circle r="135" fill="none" stroke="currentColor" strokeWidth="20" className="text-white stroke-current" />
          <circle r="122" fill="none" stroke="currentColor" strokeWidth="8" className="text-white stroke-current" />

          {/* Aperture Iris Blades */}
          {/* Blade 1 (Top Right Red Accent Blade) */}
          <path d="M 0 0 L 60 -110 C 110 -60 120 10 115 50 Z" fill="#ED1C24" />

          {/* Blade 2 (Right) */}
          <path
            d="M 0 0 L 115 50 C 100 105 40 120 0 122 Z"
            fill="currentColor"
            className="text-white fill-current"
          />

          {/* Blade 3 (Bottom) */}
          <path
            d="M 0 0 L 0 122 C -65 115 -110 60 -118 10 Z"
            fill="currentColor"
            className="text-white fill-current"
          />

          {/* Blade 4 (Bottom Left) */}
          <path
            d="M 0 0 L -118 10 C -115 -50 -60 -110 0 -120 Z"
            fill="currentColor"
            className="text-white fill-current"
          />

          {/* Blade 5 (Top Left) */}
          <path
            d="M 0 0 L 0 -120 C 35 -120 50 -115 60 -110 Z"
            fill="currentColor"
            className="text-white fill-current"
          />

          {/* Hexagonal Center Opening */}
          <polygon
            points="0,-25 22,-12 22,12 0,25 -22,12 -22,-12"
            fill="#000000"
          />
        </g>
      </g>

      {/* ========================================== */}
      {/* 2. TYPOGRAPHY SECTION */}
      {/* ========================================== */}
      {variant !== 'emblem' && (
        <g id="logo-typography">
          {/* "ONE SHOT" Main Line */}
          {/* "ONE" in Red */}
          <text
            x="10"
            y="480"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="78"
            fill="#ED1C24"
            letterSpacing="2"
          >
            ONE
          </text>

          {/* "SH" in White/Current */}
          <text
            x="200"
            y="480"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="78"
            fill="currentColor"
            className="text-white fill-current"
            letterSpacing="2"
          >
            SH
          </text>

          {/* Focus Corner Brackets [ ] and Red 'O' */}
          <g id="focus-O" transform="translate(325, 415)">
            {/* Top-Left Corner */}
            <path d="M 0 16 L 0 0 L 16 0" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="text-white stroke-current" />
            {/* Top-Right Corner */}
            <path d="M 44 0 L 60 0 L 60 16" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="text-white stroke-current" />
            {/* Bottom-Right Corner */}
            <path d="M 60 44 L 60 60 L 44 60" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="text-white stroke-current" />
            {/* Bottom-Left Corner */}
            <path d="M 16 60 L 0 60 L 0 44" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="text-white stroke-current" />

            {/* Red Circle 'O' with Center Hole */}
            <circle cx="30" cy="30" r="24" fill="#ED1C24" />
            <circle cx="30" cy="30" r="10" fill="#000000" />
          </g>

          {/* "T" in White/Current */}
          <text
            x="410"
            y="480"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="78"
            fill="currentColor"
            className="text-white fill-current"
            letterSpacing="2"
          >
            T
          </text>

          {/* "ANIMATION" Sub-line */}
          <text
            x="10"
            y="520"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="36"
            fill="currentColor"
            className="text-white fill-current"
            letterSpacing="14"
          >
            ANIMATION
          </text>

          {/* "BRINGING IMAGINATION TO LIFE" Tagline */}
          {showTagline && (
            <text
              x="10"
              y="545"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontWeight="600"
              fontSize="16"
              fill="currentColor"
              className="text-white/70 fill-current"
              letterSpacing="6"
            >
              BRINGING IMAGINATION TO LIFE
            </text>
          )}
        </g>
      )}
    </svg>
  );
};
