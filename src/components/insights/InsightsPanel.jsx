import { motion } from "motion/react";
import { asset } from "../../lib/assets";
import { ProductWindow } from "./ProductWindow";
import { StoreLink } from "./StoreLink";

export function InsightsPanel({ reduceMotion }) {
  const enter = (delay, distance, duration = 1.55) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: distance },
          animate: { opacity: 1, y: 0 },
          transition: { delay, duration, ease: "linear" },
        };
  const fade = (delay, duration) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay, duration, ease: "linear" },
        };

  return (
    <motion.section className="insights-panel" aria-label="Demonstração Noctralspy" {...enter(0.25, 26, 1)}>
      <motion.div className="panel-topline" {...enter(0.35, 16, 0.9)}>
        <div>
          <p>Descubra oportunidades de apps na</p>
          <div className="stores">
            <StoreLink icon={asset("apple.svg")}>App Store</StoreLink>
            <span className="store-separator">e</span>
            <StoreLink icon={asset("google-play.svg")}>Google Play</StoreLink>
          </div>
        </div>
        <img className="animated-eye" src={asset("view.svg")} alt="" aria-hidden="true" />
      </motion.div>

      <motion.img className="watermark" src={asset("noctralspy-wordmark.svg")} alt="" aria-hidden="true" {...enter(0.4, 12, 0.95)} />
      <ProductWindow animation={fade(0.5, 1.1)} tableAnimation={enter(0.78, 18, 1)} />
    </motion.section>
  );
}
