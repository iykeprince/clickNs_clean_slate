import React from 'react'
// import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import "./Header.module.css"
import Search from '../Search/Search'
import { Row, Col, } from 'react-bootstrap';
// import {dispatchHeader, socialsHeader, hangoutsHeader} from '../assets/header';

export default function Header() {
  return (
    <header className={styles.header__container}>
      <Row>
        <Col md='12'>
        <div>
        {/* <Link href="/"> */}
          <img
            src="/images/"
            alt="top advert"
            className={styles.advertImage}
          />
        {/* </Link> */}
      </div>
        </Col>  
      </Row> 
      
      <Row className={styles.headerSecondRow}>
        <Col md='4'>
        <div className={styles.sell}>
          <img src="/images/header/star.svg" alt="sell"/>
          <span>Sell on Woozeee</span>
        </div>
        </Col>
        <Col md='6'>
            <span  className={styles.headerSecondIcon}>
            <img src="/images/header/woozeeeSmall.svg" alt="sell" /> 
            </span>
            <span   className={styles.headerSecondIcon}>
            <img src="/images/header/payHeader.svg" alt="sell"/> 
            </span>
            <span  className={styles.headerSecondIcon}>
            <img src="/images/header/dispatchHeader.svg" alt="sell" /> 
            </span>
            <span className={styles.headerSecondIcon}>
            <img src="/images/header/socialsHeader.svg" alt="sell"/> 
            </span>
            <span className={styles.headerSecondIcon}>
            <img src="/images/header/hangoutsHeader.svg" alt="sell" /> 
            </span>
        </Col>
      </Row>
      <Row className={styles.headerThirdRow}>
        <Col sm='6' md='3'>
          <div >
            {/* <Link href="/"> */}
              <img
                src="/images/woozeeeLogo.svg"
                alt=""
                className={styles.header__logo}
              />
            {/* </Link>   */}
          </div>    
        </Col>

        <Col md='6'>
          <Search/>
        </Col>

        <Col sm='6' md='3'>
        <div className={styles.header__nav}>
          <div className={styles.header__option}>
            <span className={styles.option__lineOne}>Hi, Sign in</span>
            <img
              src="/images/arrowdown.svg"
              alt=""
              className={styles.header__icon}
            />
          </div>
          <div className={styles.header__option}>
            <img
              src="/images/alertCircle.svg"
              alt=""
              className={styles.header__icon}
            />
            <span className={styles.option__lineOne}>Help</span>
            <img
              src="/images/arrowdown.svg"
              alt=""
              className={styles.header__icon}
            />
          </div>
          <div className={styles.header__option}>
            <img
              src="/images/cart.svg"
              alt=""
              className={styles.cart}
            />
            <span className={styles.purchaseCount}>
              <span>4</span>
            </span>
            <span className={styles.option__lineOne}>Cart</span>

            
          </div>
        </div>
        </Col>


      </Row> 
    </header>
  );
}
