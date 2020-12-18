import React from "react";
import { Row, Col } from "react-bootstrap";
import "./SlimCard.css";
const SlimCard = (props) => {
  return (
    <Row className="slimRow flex-wrap flex-lg-nowrap">
      <div className="slimLogo ml-auto">
        <img className="img-fluid" src={props.companyLogo} alt="slim logo" />
      </div>

      <Col xs="12" lg="auto">
        <Row className="flex-wrap">
          <Col className="slimImage">
            <img src={props.productImg} alt="phone" />
          </Col>
          <Col className="slimText">
            <Row className='flex-wrap flex-lg-nowrap'>
            <Col xs='auto' md='5' className='slimTextContainer'>
              <p className="slimTextBig">&#8358; 99,500</p>
              <p className="slimTextSmall">
                Samsung Galaxy A50 6.4-Inch (4GB,128GB ROM)
              </p>
            </Col>

            <div className="slimButton mt-2 mt-lg-0">
              <button type="button" className="mediumButton">
                Buy Now
              </button>
            </div>
            </Row>
            
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SlimCard;
