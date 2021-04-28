import React from "react";
import { Link } from "react-router-dom";
import useWindowDimensions from "../../Hooks/UseWindowDimension";

function WoozHeaderLogo() {
  const { width } = useWindowDimensions();
  return (
    <div className="some__item1">
      <Link to="/" className="logo__wrapper">
        {width > 480 ? (
          <img src="/images/woozeeeLogo.svg" alt="" className="header__logo" />
        ) : (
          <img src="/images/logoNoBasket.svg" alt="" className="header__logo" />
        )}
      </Link>
    </div>
  );
}

export default WoozHeaderLogo;
