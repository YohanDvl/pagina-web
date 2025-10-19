export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    fill="none"
    {...props}
  >
    {/* Fondo circular blanco */}
    <circle cx="50" cy="50" r="50" fill="#FFFFFF" />
    
    <g transform="translate(0, 0)">
      {/* Edificio principal */}
      <path
        d="M38 20 H62 V60 H38 Z"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
      />
      {/* Ventanas edificio principal */}
      <path d="M42 25 H48 V30 H42 Z" fill="hsl(var(--accent))" />
      <path d="M52 25 H58 V30 H52 Z" fill="hsl(var(--accent))" />
      <path d="M42 35 H48 V40 H42 Z" fill="hsl(var(--accent))" />
      <path d="M52 35 H58 V40 H52 Z" fill="hsl(var(--accent))" />
      <path d="M42 45 H48 V50 H42 Z" fill="hsl(var(--accent))" />
      <path d="M52 45 H58 V50 H52 Z" fill="hsl(var(--accent))" />

      {/* Casa pequeña */}
      <path
        d="M20 60 L35 45 L50 60 H20 Z"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
      />
      <path
        d="M22 60 H48 V75 H22 Z"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
      />
      {/* Puerta de garaje */}
      <rect x="25" y="62" width="20" height="10" fill="hsl(var(--accent))" />
      <line x1="25" y1="65" x2="45" y2="65" stroke="hsl(var(--primary))" strokeWidth="0.5" />
      <line x1="25" y1="68" x2="45" y2="68" stroke="hsl(var(--primary))" strokeWidth="0.5" />
      <line x1="25" y1="71" x2="45" y2="71" stroke="hsl(var(--primary))" strokeWidth="0.5" />

      {/* Construcción lateral */}
      <path
        d="M62 40 H75 V75 H62"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        fill="hsl(var(--primary) / 0.2)"
      />
       <path d="M65 45 H72 V50 H65 Z" fill="hsl(var(--accent))" />
      {/* Andamio */}
      <path d="M68 30 L80 30" stroke="hsl(var(--primary))" strokeWidth="1" />
      <path d="M72 30 L72 38" stroke="hsl(var(--primary))" strokeWidth="1" />
      <path d="M76 30 L76 42" stroke="hsl(var(--primary))" strokeWidth="1" />
      <path d="M70 34 L82 34" stroke="hsl(var(--primary))" strokeWidth="1" />
      <path d="M74 38 L84 38" stroke="hsl(var(--primary))" strokeWidth="1" />

       {/* Base */}
       <path d="M15 75 L85 75" stroke="hsl(var(--primary))" strokeWidth="2" />
    </g>

    {/* Texto */}
    <text
      x="50"
      y="88"
      fontFamily="sans-serif"
      fontSize="12"
      fill="hsl(var(--primary))"
      textAnchor="middle"
      fontWeight="bold"
    >
      MULTY
    </text>
    <text
      x="50"
      y="98"
      fontFamily="sans-serif"
      fontSize="6"
      fill="hsl(var(--accent))"
      textAnchor="middle"
    >
      SOLUCIONES MOICA
    </text>
  </svg>
);
