import React from 'react'
import * as FaIcon from "react-icons/fa";
import { Link } from "react-router-dom";
// import BtnGroup from './BtnGroup';
import CatApp from './CatApp';

function RightCatSideNav() {
    return (
        <div className="mainer">
            <div style={{ display: "flex" }}>
              <span className='listGridTopic'>
                {`Phone & Tablets`}
              </span>

              <span className="lefter">
                <div className="dropdown">
                  <button className="dropbtn">
                    Sort by: popularity <FaIcon.FaAngleDown />
                  </button>
                  <div className="dropdown-content">
                    <Link to="#">popularity</Link>
                    <Link to="#">Newest Arrivals</Link>
                    <Link to="#">Price: Low to High</Link>
                    <Link to="#">Price: High to Low </Link>
                    <Link to="#">Product Rating </Link>
                  </div>
                </div>
              </span>
            </div>
            <div className="listGrid__header">
                <CatApp/>
            </div>
          </div>
    )
}

export default RightCatSideNav
