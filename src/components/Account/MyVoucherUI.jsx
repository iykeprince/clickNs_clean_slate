import React from "react";
import { Link } from "react-router-dom";
import IconStore from "../../store/IconStore";
import LargeButton from "../Button/LargeButton";
import NoDataUI from "./NoDataUI";

function MyVoucherUI() {
  return (
    <div>
      <h3 className="titleHeader mbottom">Voucher Credit</h3>
      <NoDataUI
        Image={IconStore.voucherTicket}
        Topic="You currently have no available Voucher Credit"
        Explanation="All your available voucher credit and coupons will be displayed here"
      />

      <div className="button__wrap">
      <Link to='/'><LargeButton buttonName="CONTINUE SHOPPING" /></Link>
      </div>
    </div>
  );
}

export default MyVoucherUI;
