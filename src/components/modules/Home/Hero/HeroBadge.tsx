import svgPaths from "./../../../../assets/svg/svg";

interface HeroBadgeProps {
  icon?: React.ReactNode;
  text: string;
}

export function HeroBadge({ icon, text }: HeroBadgeProps) {
  return (
    <div className="inline-flex bg-blue-100 rounded-full px-4 py-1 items-center gap-3">
      {icon || (
        <div className="size-16px">
          <svg
            className="block size-6"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 16 16"
          >
            <g>
              <path
                d={svgPaths.p144f51c0}
                stroke="#1D4ED8"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d={svgPaths.p1e94b080}
                stroke="#1D4ED8"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>
      )}
      <span className="text-blue-700 text-[11.9px] font-medium font-['Inter']">
        {text}
      </span>
    </div>
  );
}
