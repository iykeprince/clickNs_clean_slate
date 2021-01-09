import React from 'react'
import { Link } from 'react-router-dom'

function WoozHeaderLogo() {
    return (
        <div className="some__item1">
        <Link to="/" className="logo__wrapper">
          <img
            src="/images/woozeeeLogo.svg"
            alt=""
            className="header__logo"
          />
        </Link>
      </div>
    )
}

export default WoozHeaderLogo
