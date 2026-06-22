import { useState, type RefObject } from "react";

export function useTilt(ref: RefObject<HTMLDivElement | null>, max = 10) {
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: "perspective(900px) rotateX(0deg) rotateY(0deg)",
  });

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (py - 0.5) * -2 * max;
    const ry = (px - 0.5) * 2 * max;
    setStyle({
      transform: `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`,
    });
  };

  const onMouseLeave = () =>
    setStyle({ transform: "perspective(900px) rotateX(0deg) rotateY(0deg)" });

  return { style, onMouseMove, onMouseLeave };
}
