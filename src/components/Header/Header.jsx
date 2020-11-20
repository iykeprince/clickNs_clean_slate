import React from 'react'
import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import "./Header.module.css"
import Search from '../Search/Search';
import SideNav from '../SideNav/SideNav';
import { Row, Col, } from 'react-bootstrap';

export default function Header() {
  return (



    <header className={styles.header__container}>
      <Row>
        <Col md='12'>
        <div className={styles.image__wrapper}>
        {/* <Link href="/"> */}

    

          <img
            src="/images/header/blackFridayAnimation.gif"
            alt="top advert"
            className={styles.advertImage}
          />
          <img
            src="/images/orangeRectangle.svg"
            alt="top advert"
            className={styles.rectImage}
          />
          <img
            src="/images/orangeRectangle.svg"
            alt="top advert"
            className={styles.rectImageTwo}
          />
          <img
            src="/images/header/calendarWhite.gif"
            alt="top advert"
            className={styles.advertImage__two}
          />
          <img
            src="/images/header/calendarWhite.gif"
            alt="top advert"
            className={styles.advertImage__three}
          />
        {/* </Link> */}
      </div>
        </Col>  
      </Row> 
      
      <Row className={styles.headerSecondRow}>
        <Col md='4'>
        <div className={styles.sell}>
          <img src="/images/blueStar.svg" alt="sell"/>
          <span>Sell on woozeee</span>
        </div>
        </Col>
        <Col md='6'>

     
            <span  className={styles.headerSecondIcon}>
            <img src="/images/header/woozeeeSmall.svg" alt="sell" /> 
            </span>
            <span   className={styles.headerSecondIcon}>
            <img src="/images/header/payCapital.svg" alt="sell"/> 
            </span>
            <span  className={styles.headerSecondIcon}>
            <img src="/images/header/DispatchCapital.svg" alt="sell" /> 
            </span>
            <span className={styles.headerSecondIcon}>
            <img src="/images/header/socialsCapital.svg" alt="sell"/> 
            </span>
            <span className={styles.headerSecondIcon}>
            <img src="/images/header/hangoutsCapital.svg" alt="sell" /> 
            </span>
        </Col>
      </Row>
  
      <Row className={styles.headerThirdRow}>

      <SideNav/>
        <div className={styles.grid__Container}>
        <div className={styles.grid__item} >

 
        <Link to="/">   
        
           <img
                src="/images/woozeeeLogo.svg"
                alt=""
                className={styles.header__logo}
              />
          </Link>    
        </div>

        <div  className={styles.grid__item} >
          <Search/>
        </div>

        <div  className={styles.grid__item} >
        <div className={styles.header__nav}>
          <div className={styles.header__option}>
            <span className={styles.option__lineOne}>Hi, Bukky</span>
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
            <span className={styles.option__lineOneCart}>Cart</span>

            
          </div>
        </div>
        </div>
        </div>
      </Row> 
    </header>
  );
}
