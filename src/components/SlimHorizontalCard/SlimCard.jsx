import React from "react";
import { Row, Col } from "react-bootstrap";

const SlimCard = props=> {
  return (
      <Row>
        <Col md="2">
          <img src={props.companyLogo} alt="slot logo" />
        </Col>
        <Col md="1">
          <img src={props.productImg} alt="phone" />
        </Col>
        <Col md="4">
            <p>&#8358; 99,500</p>
          <p>Samsung Galaxy A50 6.4-Inch (4GB,128GB ROM)</p>
        </Col>
        <Col md="2">
          <button type="button">Buy Now</button>
        </Col>
      </Row>
  );
}

export default SlimCard;
