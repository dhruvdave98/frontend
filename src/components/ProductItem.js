import React from "react";
import "../styles/ProductList.css";

function ProductItem({ product }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>SKU: <span className="sku">{product.sku}</span></p>
      <p>Price: <span className="price">${product.price}</span></p>
    </div>
  );
}

export default ProductItem;
