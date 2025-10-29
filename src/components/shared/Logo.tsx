import { Stethoscope } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 font-bold text-normal md:text-xl">
      <Stethoscope size={32} className="text-primary" />
      <span>JS Health Care</span>
    </div>
  );
}
