import React from "react";
import LargeButton from '../Button/LargeButton'
import { Link } from "react-router-dom";

function StandaloneBtnGrp() {
  return (
    <div className="btnGrp__wrapr">
      <div className="body__wrapper putAtMiddle">
      <div className="btnwrap row justify-content-md-end justify-content-sm-center crt_grp">

        <Link to="/checkout" className='proceedbtn col-sm-auto'>
          <LargeButton buttonName="PROCEED TO CHECKOUT" />
        </Link>

        <Link to="/" className="continuebtn col-sm-auto">
          <LargeButton buttonName="CONTINUE SHOPPING" />
        </Link>
      </div>
      </div>
    </div>
  );
}

export default StandaloneBtnGrp;
