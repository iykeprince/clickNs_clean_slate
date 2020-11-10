import React from "react";
import Header from "../components/Header/Header";
import { Container } from "react-bootstrap";
import "./ProductDetail.css";
import ProductDetailRowOne from "../components/Product/ProductDetailRowOne";
import ProductDetailRowTwo from "../components/Product/ProductDetailRowTwo";
import ProductDetailRowThree from "../components/Product/ProductDetailRowThree";
import ProductDetailRowFour from "../components/Product/ProductDetailRowFour";
import ProductDetailRowFive from "../components/Product/ProductDetailRowFive";
import Footer from "../components/Footer/Footer";
// import PhoneLarge from "../assets/phoneProduct.png";

function ProductDetail() {
  return (
    <div>
      <Header />
      <Container className="Container">
        <div className="productLocation">
          <p>
            {`Home > Phones & Tablets > Mobile Phones > Smartphones > Android Phones
          > Galaxy A51 6.5-Inch(4GB,128GB ROM) Android10.0,(48MP +12MP + 5MP +
          5MP) + 32MP Dual SIM - Prism Crush Black`}
          </p>
        </div>
        
      <ProductDetailRowOne/>
      <ProductDetailRowTwo/>
      <ProductDetailRowThree/>
      <ProductDetailRowFour/>
      <ProductDetailRowFive/>
        
      </Container>
      <Footer/>
    </div>
  );
}

export default ProductDetail;
