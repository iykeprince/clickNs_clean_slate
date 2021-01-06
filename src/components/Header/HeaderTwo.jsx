import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import SideNav from "../SideNav/SideNav";
import { Row, Col } from "react-bootstrap";
import * as Ai from "react-icons/ai";

export default function HeaderTwo() {
  return (
    <header className="header__container Container">
      <Row>
        <Col md="12">
          <div className="image__wrapper">
            {/* <Link href="/"> */}
            <img
              src="/images/header/blackFridayAnimation.gif"
              alt="top advert"
              className="advertImage"
            />
            <img
              src="/images/orangeRectangle.svg"
              alt="top advert"
              className="rectImage"
            />
            <img
              src="/images/orangeRectangle.svg"
              alt="top advert"
              className="rectImageTwo"
            />
            <img
              src="/images/header/calendarWhite.gif"
              alt="top advert"
              className="advertImage__two"
            />
            <img
              src="/images/header/calendarWhite.gif"
              alt="top advert"
              className="advertImage__three"
            />
            {/* </Link> */}
          </div>
        </Col>
      </Row>

      <div className="bgSR">
        <div className="headerSecondRow row">
          <div className="sell">
            <img src="/images/blueStar.svg" alt="sell" />
            <span>Sell on woozeee</span>
          </div>

          <div className="m-auto">
            <div className="woozSpan">
              <span className="headerSecondIcon">
                <img src="/images/header/woozeeeSmall.svg" alt="sell" />
              </span>
              <span className="headerSecondIcon">
                <img src="/images/header/payCapital.svg" alt="sell" />
              </span>
              <span className="headerSecondIcon">
                <img src="/images/header/DispatchCapital.svg" alt="sell" />
              </span>
              <span className="headerSecondIcon">
                <img src="/images/header/socialsCapital.svg" alt="sell" />
              </span>
              <span className="headerSecondIcon">
                <img src="/images/header/hangoutsCapital.svg" alt="sell" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <Row className="headerThirdRow">
        <div className="some__Container">
         
          <div className="some__item1">
            <Link to="/" className="logo__wrapper logwrp">
              <img
                src="/images/woozeeeLogo.svg"
                alt=""
                className="header__logo"
              />
            </Link>
          </div>

          <div className="searchWrapper">
            <Search />
          </div>

          <div className="some__item2">
            <div className="header__nav">
              <div className="header__option">
                <Link to="/account">
                  <span className="option__lineOne">Hi, Bukky</span>
                </Link>
                <img
                  src="/images/arrowdown.svg"
                  alt=""
                  className="dropdown__icon"
                />

                <Link to="/account">
                  <Ai.AiOutlineUser className="personIcon" />
                </Link>
              </div>
              <div className="header__option .help__sec">
                <img
                  src="/images/alertCircle.svg"
                  alt=""
                  className="header__icon"
                />
                <span className="option__lineOne">Help</span>
                <img
                  src="/images/arrowdown.svg"
                  alt=""
                  className="dropdown__icon"
                />
              </div>
              <div className="header__option">
                <img src="/images/cart.svg" alt="" className="cart" />
                <span className="purchaseCount">
                  <span>4</span>
                </span>
                <span className="option__lineOneCart">Cart</span>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </header>
  );
}
