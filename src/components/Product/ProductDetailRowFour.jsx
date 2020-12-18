import React from "react";
import { Row, Col } from "react-bootstrap";
import CardGroupTitle from "../Cards/CardGroupTitle";
import ProductCardGroupSmall from "../Cards/ProductCardGroupSmall";
import "./ProductDetailRowFour.css";

function ProductDetailRowFour() {
  return (
    <Row>
      <Col sm="9" className="prodDetailWrapper">
        <div className="prodSmallWrapper">
          <CardGroupTitle titleText={`Customers who viewed this also viewed`} />
          <ProductCardGroupSmall />
        </div>
        <br />
        <div  className="prodSmallWrapper">
          <CardGroupTitle titleText={`Customers Also Bought`} />
          <ProductCardGroupSmall />
        </div>
        <br />
      </Col>
    </Row>
  );
}

export default ProductDetailRowFour;
