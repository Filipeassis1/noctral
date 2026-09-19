import { motion } from "motion/react";
import { asset } from "../../lib/assets";
import { ProductTable } from "./ProductTable";

export function ProductWindow({ animation, tableAnimation }) {
  return (
    <motion.article className="product-window" {...animation}>
      <header className="product-header">
        <div className="search-box">
          <img src={asset("search.svg")} alt="" />
          <span>Buscar produtos web…</span>
        </div>
        <button className="counter-pill" type="button" aria-label="Filtros selecionados">
          <img src={asset("filter.svg")} alt="" />
          <span>2</span>
        </button>
      </header>

      <div className="filter-row" aria-label="Filtros ativos">
        <span className="filter-chip active"><img src={asset("category.svg")} alt="" />Categoria · IA</span>
        <span className="filter-chip active"><img src={asset("growth.svg")} alt="" />Crescimento · &gt; 20%</span>
        <span className="filter-chip disabled"><img src={asset("mrr.svg")} alt="" />MRR · &gt; $200K</span>
      </div>

      <div className="results-summary">
        <p><strong>84</strong> produtos encontrados</p>
      </div>

      <ProductTable animation={tableAnimation} />
    </motion.article>
  );
}
