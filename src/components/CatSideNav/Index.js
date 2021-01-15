import React from "react";
import * as FaIcon from "react-icons/fa";
import { Link } from "react-router-dom";
import LeftCatSideNav from "./LeftCatSideNav";
import RightCatSideNav from "./RightCatSideNav";

function CatSideNav() {
    return (
      <div className='catSideNav__group'>
          <LeftCatSideNav/>
          <RightCatSideNav/>
      </div>
    );
  }
export default CatSideNav;
