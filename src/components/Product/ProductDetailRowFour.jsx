import React from "react";
import CardGroupTitle from "../Cards/CardGroupTitle";
import ProductCardGroupSmall from "../Cards/ProductCardGroupSmall";

function ProductDetailRowFour() {
  return (
    <div>
      <div>
        <CardGroupTitle titleText={`Customers who viewed this also viewed`} />
        <ProductCardGroupSmall />
      </div>
      <br />
      <div>
        <CardGroupTitle titleText={`Customers Also Bought`}/>
        <ProductCardGroupSmall />
      </div>
      <br />
    </div>
  );
}

export default ProductDetailRowFour;
