import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import styles from "./DealsSection.module.css";

function DealsSection() {
  return (
    <div>
      <Container fluid className="dealsSectionContainer">
        <Row>
          <Col md="12" className="dealsSectionTitle__container">
            <div className="dealsSectionTitle bgWhite" >
              <p>Recommended for you</p>
            </div>
          </Col>

          {/* <Link to="/product"  style={{ color: 'inherit', textDecoration: 'none'}}> */}
            <Col sm="6" md="4" lg="2" className="dealsProduct">
              <div className="percentDiscount">
                <span className="percentDiscount__text">-20%</span>
              </div>
              <div className="productImage">
                <img src="/images/Products/samsungGalaxy.png" alt="product" />
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
            </Col>
          {/* </Link> */}

          <Col sm="6" md="4" lg="2" className="dealsProduct">
            <div className="percentDiscount">
              <span className="percentDiscount__text">-20%</span>
            </div>
            <div className="productImage">
              <img src="/images/Products/shoe.png" alt="product" />
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
          </Col>

          <Col sm="6" md="4" lg="2" className="dealsProduct">
            <div className="percentDiscount">
              <span className="percentDiscount__text">-20%</span>
            </div>
            <div className="productImage">
              <img src="/images/Products/laptop.png" alt="product" />
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
          </Col>
          <Col sm="6" md="4" lg="2" className="dealsProduct">
            <div className="percentDiscount">
              <span className="percentDiscount__text">-20%</span>
            </div>
            <div className="productImage">
              <img src="/images/Products/dress.png" alt="product" />
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
          </Col>
          <Col sm="6" md="4" lg="2" className="dealsProduct">
            <div className="percentDiscount">
              <span className="percentDiscount__text">-20%</span>
            </div>
            <div className="productImage">
              <img src="/images/Products/fridge.png" alt="product" />
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
          </Col>
          <Col sm="6" md="4" lg="2" className="dealsProduct">
            <div className="percentDiscount">
              <span className="percentDiscount__text">-20%</span>
            </div>
            <div className ="productImage">
              <img src="/images/Products/shoe.png" alt="product" />
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DealsSection;
