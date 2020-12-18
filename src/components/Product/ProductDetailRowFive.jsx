import React from "react";
import ProductCardGroupBig from "../Cards/ProductCardGroupBig";
import CardGroupTitle from "../Cards/CardGroupTitle";
import './ProductDetailRowFive.css'

function ProductDetailRowFive() {
  return (
    <div className="prodWrapper">
      <div className="prodBigWrapper">
        <CardGroupTitle titleText={`More Items From This Seller `} />
        <ProductCardGroupBig />
      </div>
      <br />
      <div className="prodBigWrapper"> 
        <CardGroupTitle titleText={`Recently Viewed`} />
        <ProductCardGroupBig />
      </div>
      <br />
    </div>
  );
}

export default ProductDetailRowFive;
