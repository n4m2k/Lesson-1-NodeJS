import React from "react";
import Product from "../Product/Product";
import "./ProductList.css";
const ProductList = ({ products, handleSetCart }) => {
  return (
    <div className="productList">
      {products.map((item) => (
        <Product product={item} key={item.id} onAddCart={handleSetCart} />
      ))}
    </div>
  );
};

export default ProductList;
