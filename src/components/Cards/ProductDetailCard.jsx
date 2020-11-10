import React from "react";

const ProductDetailCard = (props) => {
  return (
    <div>
      <div>
        <span className="percentDiscount__text">-20%</span>
      </div>
      <div>
        <img src={props.productImg} alt="product" />
      </div>
      <div className="productName">
        <p className="">{props.productName} </p>
      </div>
      <div className="currentProductPrice">
        <p>&#8358; 100,000</p>
      </div>
      <div className="previousProductPrice">
        <p>&#8358; 80,000</p>
      </div>
    </div>
  );
};

export default ProductDetailCard;
