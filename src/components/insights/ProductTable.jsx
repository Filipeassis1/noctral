import { motion } from "motion/react";
import { asset } from "../../lib/assets";
import { marqueeProducts } from "./products";

function ProductRow({ product }) {
  return (
    <div className="product-row" role="row" aria-hidden={product.duplicate || undefined}>
      <span className="product-name">
        <img src={asset(product.image)} alt="" />
        {product.name}
      </span>
      <span>{product.category}</span>
      <strong>{product.mrr}</strong>
      <span className="product-growth">{product.growth}</span>
    </div>
  );
}

export function ProductTable({ animation }) {
  return (
    <motion.div className="products-table" role="table" aria-label="Produtos encontrados" {...animation}>
      <div className="table-head" role="row">
        <span role="columnheader">Produto</span>
        <span role="columnheader">Categoria</span>
        <span role="columnheader">MRR</span>
        <span role="columnheader">Cresc.</span>
      </div>
      <div className="marquee-mask">
        <div className="marquee-list">
          {marqueeProducts.map((product, index) => (
            <ProductRow key={`${product.name}-${index}`} product={product} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
