import React from "react";
import ProductDetailCard from "../Cards/ProductDetailCard";
import { Row, Col } from "react-bootstrap";
import imgSamsung from "../../assets/samsungFrontBack809.png";

const ProductCardGroupSmall = (props) => {
  return (
    <div>
      <Row>
        <Col sm="6" md="4" lg="1">
          <ProductDetailCard productImg={imgSamsung} productName={`Samsung Galaxy..`}/>
        </Col>
        <Col sm="6" md="4" lg="1">
          <ProductDetailCard productImg={imgSamsung} productName={`Samsung Galaxy..`}/>
        </Col>
        <Col sm="6" md="4" lg="1">
          <ProductDetailCard productImg={imgSamsung} productName={`Samsung Galaxy..`}/>
        </Col>
        <Col sm="6" md="4" lg="1">
          <ProductDetailCard productImg={imgSamsung} productName={`Samsung Galaxy..`}/>
        </Col>
        <Col sm="6" md="4" lg="1">
          <ProductDetailCard productImg={imgSamsung} productName={`Samsung Galaxy..`}/>
        </Col>
        <Col sm="6" md="4" lg="1">
          <ProductDetailCard productImg={imgSamsung} productName={`Samsung Galaxy..`}/>
        </Col>
      </Row>
    </div>
  );
};

export default ProductCardGroupSmall;
