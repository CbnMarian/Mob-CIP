import "./product.scss";
import React from "react";
import { PRODUCTS } from "../../products";
import { Item } from "./item";

function Product() {
  return (
    <div className="product">
      <div className="shopTitle">
        {" "}
        <h1>Furniture Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Item data={product} />
        ))}
      </div>
    </div>
  );
}

export default Product;
