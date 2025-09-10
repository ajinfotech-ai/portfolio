interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
}

export function Logo({ size = "md", showText = true, className = "" }: LogoProps) {
  const sizeMap = {
    sm: { svg: 24, text: "text-lg" },
    md: { svg: 40, text: "text-xl" },
    lg: { svg: 60, text: "text-2xl" },
    xl: { svg: 120, text: "text-4xl" },
  };

  const { svg: svgSize, text: textSize } = sizeMap[size];

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="tech-logo">
        <svg
          width={svgSize}
          height={svgSize}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`logoGradient-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#3B82F6" }} />
              <stop offset="50%" style={{ stopColor: "#1D4ED8" }} />
              <stop offset="100%" style={{ stopColor: "#1E40AF" }} />
            </linearGradient>
          </defs>
          <path
            d="M20 2L28 10L20 18L12 10L20 2Z"
            fill={`url(#logoGradient-${size})`}
          />
          <path
            d="M20 22L28 30L20 38L12 30L20 22Z"
            fill={`url(#logoGradient-${size})`}
            opacity="0.7"
          />
          <circle cx="20" cy="20" r="3" fill="white" />
        </svg>
      </div>
      {showText && (
        <div className={`font-bold text-primary ${textSize}`}>TechStudio</div>
      )}
    </div>
  );
}
