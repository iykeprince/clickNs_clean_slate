import React from "react";
import DiscountPercent from "../DiscountPercent/DiscountPercent";
import './ProductDetailCard.css'

const ProductDetailCard = (props) => {
  return (
    <div className='productDetailCard'>
      <div className='discAlign'>
      <DiscountPercent DiscountText='-20%'/>
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
