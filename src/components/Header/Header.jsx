import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderSearch } from "../Search/Search";
import SideNav from "./SideNav";
import { Row, Col } from "react-bootstrap";
import * as Ai from "react-icons/ai";
import IconStore from "../../assets/icons/IconStore";
import WoozHeaderLogo from "./WoozHeaderLogo";
import MenuListComp from "./MenuListComp";
import HelpListComp from "./HelpListComp";
import useWindowDimensions from "../../Hooks/UseWindowDimension";
import { connect } from "react-redux";


function Header({ showHamburger,cart }) {

  const [cartCount, setCartCount] = useState(0);


  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  // EXTENDED USAGE
  // const { height, width } = useWindowDimensions();

  

  const { width } = useWindowDimensions();
  return (
    <header className="header__container">
      <Row>
        <Col md="12">
          <div className="image__wrapper">
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
          </div>
        </Col>
      </Row>

      <div className="bgSR">
        <div className="headerSecondRow body__wrapper row">
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
                {IconStore.payCapitalIcon}
              </span>
              <span className="headerSecondIcon">
                {IconStore.dispatchCapitalIcon}
              </span>
              <span className="headerSecondIcon">
                {IconStore.socialCapitalIcon}
              </span>
              <span className="headerSecondIcon">
                {IconStore.hangoutCapitalIcon}
              </span>
            </div>
          </div>
        </div>
      </div>

      <Row className="headerThirdRow body__wrapper">
        <div className="some__Container">

          {(showHamburger && <SideNav />) ||
            (width <= 992 ? <SideNav /> : null)}

          <WoozHeaderLogo />

          <div className="searchWrapper">
            <HeaderSearch />
          </div>

          <div className="some__item2">
            <div className="header__nav">
              <div className="header__option">
                <MenuListComp />

                <Link to="/customer">
                  <Ai.AiOutlineUser className="personIcon" />
                </Link>
              </div>
              <div className="header__option helpSection">
                <HelpListComp />
              </div>

              <Link to="/cart">
                <div className="header__option cartHeader__Section">
                  <img src="/images/cart.svg" alt="" className="cart" />
                 {( cartCount ? <span className="purchaseCount">
                    <span>{cartCount}</span>
                  </span> : ""
                  )}
                  <span className="option__lineOneCart">Cart</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Row>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Header);
