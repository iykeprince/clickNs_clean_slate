import React from "react";
import Header from "../components/Header/Header";
import ProductDetailRowOne from "../components/Product/ProductDetailRowOne";
import ProductDetailRowTwo from "../components/Product/ProductDetailRowTwo";
import ProductDetailRowThree from "../components/Product/ProductDetailRowThree";
import ProductDetailRowFour from "../components/Product/ProductDetailRowFour";
import ProductDetailRowFive from "../components/Product/ProductDetailRowFive";
import Footer from "../components/Footer/Footer";
import ProductLocation from "../components/Product/ProductLocation";
import { connect } from "react-redux";

function ProductDetail({products}) {
  return (
    <div>
      <Header showHamburger={true} />
      <div className="body__wrapper putAtMiddle">
        <ProductLocation />
        <ProductDetailRowOne />
        <ProductDetailRowTwo />
        <ProductDetailRowThree />
        <ProductDetailRowFour />
        <ProductDetailRowFive />
      </div>
      <Footer />
    </div>
  );
}
//TO BE CONTINUED...

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(ProductDetail);
