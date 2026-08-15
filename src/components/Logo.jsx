export default function Logo({ size = 36, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="MSS Charitable Trust"
    >
      {/* Outer green circle */}
      <circle cx="50" cy="50" r="49" fill="#1A5C38" />

      {/* Subtle inner ring */}
      <circle cx="50" cy="50" r="44" fill="none" stroke="#D6EDDF" strokeWidth="0.6" opacity="0.5" />

      {/* Lotus petals – 5 petals fanning upward from base (50, 74) */}
      {/* Base petal shape: from (50,74) curves up to peak (50,28) */}
      <g>
        {/* Far-left petal (–72°) — shorter */}
        <path
          d="M 50 74 C 44 64 44 46 50 38 C 56 46 56 64 50 74 Z"
          fill="white" opacity="0.55"
          transform="rotate(-72, 50, 74)"
        />
        {/* Far-right petal (+72°) — shorter */}
        <path
          d="M 50 74 C 44 64 44 46 50 38 C 56 46 56 64 50 74 Z"
          fill="white" opacity="0.55"
          transform="rotate(72, 50, 74)"
        />
        {/* Left petal (–36°) */}
        <path
          d="M 50 74 C 43 62 43 38 50 28 C 57 38 57 62 50 74 Z"
          fill="white" opacity="0.8"
          transform="rotate(-36, 50, 74)"
        />
        {/* Right petal (+36°) */}
        <path
          d="M 50 74 C 43 62 43 38 50 28 C 57 38 57 62 50 74 Z"
          fill="white" opacity="0.8"
          transform="rotate(36, 50, 74)"
        />
        {/* Center petal (0°) — tallest */}
        <path
          d="M 50 74 C 43 62 43 38 50 28 C 57 38 57 62 50 74 Z"
          fill="white"
          transform="rotate(0, 50, 74)"
        />
      </g>

      {/* Gold stamen center circle */}
      <circle cx="50" cy="72" r="9" fill="#CB7D0B" />
      {/* Stamen shine */}
      <circle cx="46.5" cy="68.5" r="3" fill="white" opacity="0.25" />

      {/* "MSS" text inside circle at bottom */}
      <text
        x="50" y="94"
        textAnchor="middle"
        fill="white"
        fontSize="11"
        fontWeight="700"
        fontFamily="Georgia, 'Times New Roman', serif"
        letterSpacing="2"
      >
        MSS
      </text>
    </svg>
  )
}
