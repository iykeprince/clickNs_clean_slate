import React from "react";
import ProductCardGroupBig from "../Cards/ProductCardGroupBig";
import CardGroupTitle from "../Cards/CardGroupTitle";

function ProductDetailRowFive() {
  return (
    <div>
      <div>
        <CardGroupTitle titleText={`More Items From This Seller `} />
        <ProductCardGroupBig />
      </div>
      <br />
      <div>
        <CardGroupTitle titleText={`Recently Viewed`} />
        <ProductCardGroupBig />
      </div>
      <br />
    </div>
  );
}

export default ProductDetailRowFive;
