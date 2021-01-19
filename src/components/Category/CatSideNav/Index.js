import React from "react";
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
