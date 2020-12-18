import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductDetailCard from "../Cards/ProductDetailCard";
import imgPhone from "../../assets/phone791.png";
import './ProductCardGroupBig.css';

const ProductCardGroupBig = (props) => {
  return (
    <div>
      <Row className="ProductCardGroupBig">
        <Col sm="6" md="4" lg="2">
          <ProductDetailCard
            productImg={imgPhone}
            productName={`Samsung Galaxy A50..`}
          />
        </Col>
        <Col sm="6" md="4" lg="2">
          <ProductDetailCard
            productImg={imgPhone}
            productName={`Samsung Galaxy A50..`}
          />
        </Col>
        <Col sm="6" md="4" lg="2">
          <ProductDetailCard
            productImg={imgPhone}
            productName={`Samsung Galaxy A50..`}
          />
        </Col>
        <Col sm="6" md="4" lg="2">
          <ProductDetailCard
            productImg={imgPhone}
            productName={`Samsung Galaxy A50..`}
          />
        </Col>
        <Col sm="6" md="4" lg="2">
          <ProductDetailCard
            productImg={imgPhone}
            productName={`Samsung Galaxy A50..`}
          />
        </Col>
        <Col sm="6" md="4" lg="2">
          <ProductDetailCard
            productImg={imgPhone}
            productName={`Samsung Galaxy A50..`}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ProductCardGroupBig;
