import { useRef } from "react";
import { useTilt } from "../hooks/useTilt";

interface Props { icon: React.ReactNode; label: string; value: string; }

export default function StatCard({ icon, label, value }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const tilt = useTilt(ref, 8);
  return (
    <div
      ref={ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      style={tilt.style}
      className="glass rounded-3xl p-5 shadow-card transition-shadow duration-300 hover:shadow-glow will-change-transform"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/10 text-forest">
          {icon}
        </div>
        <div style={{ transform: "translateZ(30px)" }}>
          <p className="text-sm text-muted">{label}</p>
          <p className="font-display text-2xl font-semibold text-forest">{value}</p>
        </div>
      </div>
    </div>
  );
}
