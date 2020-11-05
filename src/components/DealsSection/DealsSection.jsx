import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styles from './DealsSection.module.css'

function DealsSection() {
    return (
        <div>
            <Container fluid className={styles.dealsSectionContainer}>
                <Row>
                    <Col md='12' className={styles.dealsSectionTitle__container}>
                        <div className={styles.dealsSectionTitle}>
                        <p>Recommended for you</p>
                        </div>
                    </Col>
                    
                    <Col sm='6' md='4' lg='2' className={styles.dealsProduct}>
                    <div className={styles.percentDiscount}>
                        <span className={styles.percentDiscount__text}>-20%</span>
                    </div>
                    <div className={styles.productImage}>
                        <img src="/images/Products/samsungGalaxy.png" alt="product"/>
                    </div>
                    <div className={styles.productName}>
                        <p className="">Samsung Galaxy A50 6... </p>
                    </div>
                    <div className={styles.currentProductPrice}>
                        <p>&#8358; 100,000</p>
                    </div>
                    <div className={styles.previousProductPrice}>
                        <p>&#8358; 80,000</p>
                    </div>
                    </Col>

                    <Col sm='6' md='4' lg='2'  className={styles.dealsProduct}>
                    <div className={styles.percentDiscount}>
                        <span className={styles.percentDiscount__text}>-20%</span>
                    </div>
                    <div className={styles.productImage}>
                        <img src="/images/Products/shoe.png" alt="product"/>
                    </div>
                    <div className={styles.productName}>
                        <p className="">Samsung Galaxy A50 6... </p>
                    </div>
                    <div className={styles.currentProductPrice}>
                        <p>&#8358; 100,000</p>
                    </div>
                    <div className={styles.previousProductPrice}>
                        <p>&#8358; 80,000</p>
                    </div>
                    </Col>

                    <Col sm='6' md='4' lg='2'  className={styles.dealsProduct}>
                    <div className={styles.percentDiscount}>
                        <span className={styles.percentDiscount__text}>-20%</span>
                    </div>
                    <div className={styles.productImage}>
                        <img src="/images/Products/laptop.png" alt="product"/>
                    </div>
                    <div className={styles.productName}>
                        <p className="">Samsung Galaxy A50 6... </p>
                    </div>
                    <div className={styles.currentProductPrice}>
                        <p>&#8358; 100,000</p>
                    </div>
                    <div className={styles.previousProductPrice}>
                        <p>&#8358; 80,000</p>
                    </div>
                    </Col>
                    <Col sm='6' md='4' lg='2'  className={styles.dealsProduct}>
                    <div className={styles.percentDiscount}>
                        <span className={styles.percentDiscount__text}>-20%</span>
                    </div>
                    <div className={styles.productImage}>
                        <img src="/images/Products/dress.png" alt="product"/>
                    </div>
                    <div className={styles.productName}>
                        <p className="">Samsung Galaxy A50 6... </p>
                    </div>
                    <div className={styles.currentProductPrice}>
                        <p>&#8358; 100,000</p>
                    </div>
                    <div className={styles.previousProductPrice}>
                        <p>&#8358; 80,000</p>
                    </div>
                    </Col>
                    <Col sm='6' md='4' lg='2'  className={styles.dealsProduct}>
                    <div className={styles.percentDiscount}>
                        <span className={styles.percentDiscount__text}>-20%</span>
                    </div>
                    <div className={styles.productImage}>
                        <img src="/images/Products/fridge.png" alt="product"/>
                    </div>
                    <div className={styles.productName}>
                        <p className="">Samsung Galaxy A50 6... </p>
                    </div>
                    <div className={styles.currentProductPrice}>
                        <p>&#8358; 100,000</p>
                    </div>
                    <div className={styles.previousProductPrice}>
                        <p>&#8358; 80,000</p>
                    </div>
                    </Col>
                    <Col sm='6' md='4' lg='2'  className={styles.dealsProduct}>
                    <div className={styles.percentDiscount}>
                        <span className={styles.percentDiscount__text}>-20%</span>
                    </div>
                    <div className={styles.productImage}>
                        <img src="/images/Products/shoe.png" alt="product"/>
                    </div>
                    <div className={styles.productName}>
                        <p className="">Samsung Galaxy A50 6... </p>
                    </div>
                    <div className={styles.currentProductPrice}>
                        <p>&#8358; 100,000</p>
                    </div>
                    <div className={styles.previousProductPrice}>
                        <p>&#8358; 80,000</p>
                    </div>
                    </Col>
                </Row>
            </Container>   
        </div>
    )
}

export default DealsSection
