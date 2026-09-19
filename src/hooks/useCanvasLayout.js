import { useEffect, useState } from "react";

function getCanvasLayout() {
  if (typeof window === "undefined") {
    return { scale: 1, grayStart: 776, panelLeft: 920, stepsLeft: 1203 };
  }

  const scale = Math.min(1, window.innerWidth / 1728, window.innerHeight / 1140);
  const canvasLeft = (window.innerWidth - 1728 * scale) / 2;
  const extraRight = Math.max(0, window.innerWidth - (canvasLeft + 1728 * scale));
  const panelLeft = 920 + extraRight / scale / 2;

  return {
    scale,
    grayStart: canvasLeft + 776 * scale,
    panelLeft,
    stepsLeft: panelLeft + 283.5,
  };
}

export function useCanvasLayout() {
  const [layout, setLayout] = useState(getCanvasLayout);

  useEffect(() => {
    const updateLayout = () => setLayout(getCanvasLayout());

    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return layout;
}
