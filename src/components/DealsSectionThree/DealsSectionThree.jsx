import React from 'react'
import styles from '../DealsSection/DealsSection.module.css'
import stylesThree from './DealsSectionThree.module.css'
import {Container, Row, Col} from 'react-bootstrap'

function DealsSectionThree() {
    return (
        <div  className={styles.dealsSectionTwo}>
             <Container fluid className={styles.dealsSectionContainer}>
                <Row>
                    <Col md='12' className={styles.dealsSectionTitle__container}>
                        <div className={`${styles.dealsSectionTitle} ${stylesThree.bgYellow}`}>
                        <p>Deals of The Day</p>
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

export default DealsSectionThree
