import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
// import stylesFour from './DealsSectionFour.module.css'
// import styles from '../DealsSection/DealsSection.module.css'

function DealsSectionFour() {
    return (
        <div  className="dealsSectionTwo">
             <Container fluid className="dealsSectionContainer">
                <Row>
                    <Col md='12' className="dealsSectionTitle__container">
                        <div className="dealsSectionTitle bgGreen">
                        <p>Deals of The Day</p>
                        </div>
                    </Col>                  
                    
                    <Col sm='6' md='4' lg='2' className="dealsProduct">
                    <div className="percentDiscount">
                        <span className="percentDiscount__text">-20%</span>
                    </div>
                    <div className="productImage">
                        <img src="/images/Products/samsungGalaxy.png" alt="product"/>
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

                    <Col sm='6' md='4' lg='2'  className="dealsProduct">
                    <div className="percentDiscount">
                        <span className="percentDiscount__text">-20%</span>
                    </div>
                    <div className="productImage">
                        <img src="/images/Products/shoe.png" alt="product"/>
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

                    <Col sm='6' md='4' lg='2'  className="dealsProduct">
                    <div className="percentDiscount">
                        <span className="percentDiscount__text">-20%</span>
                    </div>
                    <div className="productImage">
                        <img src="/images/Products/laptop.png" alt="product"/>
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
                    <Col sm='6' md='4' lg='2'  className="dealsProduct">
                    <div className="percentDiscount">
                        <span className="percentDiscount__text">-20%</span>
                    </div>
                    <div className="productImage">
                        <img src="/images/Products/dress.png" alt="product"/>
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
                    <Col sm='6' md='4' lg='2'  className="dealsProduct">
                    <div className="percentDiscount">
                        <span className="percentDiscount__text">-20%</span>
                    </div>
                    <div className="productImage">
                        <img src="/images/Products/fridge.png" alt="product"/>
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
                    <Col sm='6' md='4' lg='2'  className="dealsProduct">
                    <div className="percentDiscount">
                        <span className="percentDiscount__text">-20%</span>
                    </div>
                    <div className="productImage">
                        <img src="/images/Products/shoe.png" alt="product"/>
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
    )
}

export default DealsSectionFour
