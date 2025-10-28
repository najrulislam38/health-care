import { ReactNode } from "react";

interface FloatingCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  className?: string;
}

export function FloatingCard({
  icon,
  title,
  subtitle,
  className = "",
}: FloatingCardProps) {
  return (
    <div className={`bg-white rounded-[12px] shadow-lg p-3 ${className}`}>
      <div className="flex items-center gap-3">
        {icon}
        <div className="flex flex-col gap-1">
          <div className="text-gray-900 text-[11.9px] font-medium font-['Inter']">
            {title}
          </div>
          <div className="text-gray-600 text-[10.2px] font-['Inter']">
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  );
}
