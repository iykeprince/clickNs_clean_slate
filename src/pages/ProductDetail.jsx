import React from "react";
import Header from "../components/Header/Header";
import ProductDetailRowOne from "../components/Product/ProductDetailRowOne";
import ProductDetailRowTwo from "../components/Product/ProductDetailRowTwo";
import ProductDetailRowThree from "../components/Product/ProductDetailRowThree";
import ProductDetailRowFour from "../components/Product/ProductDetailRowFour";
import ProductDetailRowFive from "../components/Product/ProductDetailRowFive";
import Footer from "../components/Footer/Footer";
import ProductLocation from "../components/Product/ProductLocation";
// import PhoneLarge from "../assets/phoneProduct.png";

function ProductDetail() {
  return (
    <div>
      <Header showHamburger={true} />
      <div className="body__wrapper putAtMiddle">
      <ProductLocation/>
      <ProductDetailRowOne/>
      <ProductDetailRowTwo/>
      <ProductDetailRowThree/>
      <ProductDetailRowFour/>
      <ProductDetailRowFive/>
      </div>
      <Footer/>
    </div>
  );
}

export default ProductDetail;
