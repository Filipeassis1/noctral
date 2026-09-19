export const products = [
  { name: "Meshy", category: "AI · Design", mrr: "$375K", growth: "+28%", image: "product-meshy.png" },
  { name: "Gamma", category: "AI · Slides", mrr: "$680K", growth: "+42%", image: "product-gamma.png" },
  { name: "PictureThis", category: "AI · Lifestyle", mrr: "$400K", growth: "+42%", image: "product-picturethis.png" },
  { name: "Lovable", category: "AI · Code", mrr: "$2.4M", growth: "+86%", image: "product-lovable.png" },
  { name: "Photoroom", category: "AI · Photo", mrr: "$1.4M", growth: "+48%", image: "product-photoroom.png" },
  { name: "Jasper", category: "AI · Marketing", mrr: "$95K", growth: "+34%", image: "product-jasper.png" },
];

export const marqueeProducts = [
  ...products,
  ...products.slice(0, 2).map((product) => ({ ...product, duplicate: true })),
];
