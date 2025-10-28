interface StatItemProps {
  value: string;
  label: string;
}

function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="text-blue-600 text-[25.5px] font-['Inter']">{value}</div>
      <div className="text-gray-600 text-[11.9px] font-['Inter']">{label}</div>
    </div>
  );
}

interface HeroStatsProps {
  stats: Array<{ value: string; label: string }>;
}

export function HeroStats({ stats }: HeroStatsProps) {
  return (
    <div className="flex gap-8 lg:gap-16 justify-center lg:justify-start flex-wrap">
      {stats.map((stat, index) => (
        <StatItem key={index} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
}
