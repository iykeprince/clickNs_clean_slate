import React from "react";
import { Link } from "react-router-dom";

const DealsSectionContent = (props) => {
  return (
    <Link
      to="/product"
      className="dealsProduct col-lg-2 col-sm-4 col-6"
    >
      <div className="percentDiscount">
        <span className="percentDiscount__text">-20%</span>
      </div>
      <div className="productImage">
        <img src={props.productImage} alt="product" />
      </div>
      <div className="productName">
        <p className="">Samsung Galaxy A50 6... </p>
      </div>
      <div className="currentProductPrice">
        <p>&#8358; 100,000</p>
      </div>
      <div className="previousProductPrice">
        <p>&#8358; 80,000</p>
      </div>
    </Link>
  );
};

export default DealsSectionContent;
