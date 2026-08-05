"use client";

interface CocoRoseLogoProps {
  className?: string;
  size?: number;
  color?: string;
  showText?: boolean;
}

export default function CocoRoseLogo({ 
  className = '', 
  size = 120, 
  color = '#900C27',
  showText = true 
}: CocoRoseLogoProps) {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 200 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-full"
      >
        <defs>
          <path id="textArc" d="M 32 100 A 68 68 0 0 1 168 100" />
        </defs>

        {showText && (
          <text fill={color} fontSize="23" fontWeight="900" fontFamily="'Fredoka', 'Poppins', 'Inter', sans-serif" letterSpacing="4">
            <textPath href="#textArc" startOffset="50%" textAnchor="middle">
              COCO ROSE
            </textPath>
          </text>
        )}

        <path 
          d="M 28 102 A 72 72 0 0 0 172 102" 
          stroke={color} 
          strokeWidth="3" 
          strokeLinecap="round" 
          fill="none" 
        />

        <g fill={color} stroke={color}>
          <path d="M 103 85 C 103 85 125 70 138 78 C 138 78 128 92 103 85 Z" fill={color} stroke="none" />
          <path d="M 102 85 C 90 100 80 115 79 125" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M 102 85 C 108 100 118 110 122 118" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M 78 122 C 60 120 54 135 62 148 C 70 160 88 156 94 145 C 99 135 90 122 78 122 Z" fill={color} stroke="none" />
          <path d="M 70 133 C 68 131 65 132 65 134 C 65 136 70 140 70 140 C 70 140 75 136 75 134 C 75 132 72 131 70 133 Z" fill="#FFFFFF" stroke="none" />
          <path d="M 122 115 C 108 115 102 128 110 140 C 118 152 136 148 141 137 C 146 127 134 115 122 115 Z" fill={color} stroke="none" />
        </g>
      </svg>
    </div>
  );
}
