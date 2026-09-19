import { useReducedMotion } from "motion/react";
import { LoginPanel } from "./components/auth/LoginPanel";
import { InsightsPanel } from "./components/insights/InsightsPanel";
import { useCanvasLayout } from "./hooks/useCanvasLayout";

function CarouselDots() {
  return (
    <div className="carousel-dots" aria-label="Slide 2 de 4">
      <span />
      <span className="active" />
      <span />
      <span />
    </div>
  );
}

export default function App() {
  const reduceMotion = useReducedMotion();
  const canvasLayout = useCanvasLayout();

  return (
    <main
      className="login-page"
      aria-label="Login Noctralspy"
      style={{
        "--canvas-scale": canvasLayout.scale,
        "--gray-start": `${canvasLayout.grayStart}px`,
        "--panel-left": `${canvasLayout.panelLeft}px`,
        "--steps-left": `${canvasLayout.stepsLeft}px`,
      }}
    >
      <div className="design-canvas">
        <LoginPanel reduceMotion={reduceMotion} />
        <InsightsPanel reduceMotion={reduceMotion} />
        <CarouselDots />
      </div>
    </main>
  );
}
