import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductDetailCard from "../Cards/ProductDetailCard";
import imgPhone from "../../assets/phone791.png";
import powerBank795 from '../../assets/powerBank795.png'
import phone790 from '../../assets/phone790.png'
import phone792 from '../../assets/phone792.png'

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
            productImg={phone792}
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
            productImg={phone790}
            productName={`Samsung Galaxy A50..`}
          />
        </Col>
        <Col sm="6" md="4" lg="2">
          <ProductDetailCard
            productImg={phone790}
            productName={`Samsung Galaxy A50..`}
          />
        </Col>
        <Col sm="6" md="4" lg="2">
          <ProductDetailCard
            productImg={powerBank795}
            productName={`Samsung Galaxy A50..`}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ProductCardGroupBig;
