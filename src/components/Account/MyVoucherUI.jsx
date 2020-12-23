import React from "react";
import IconStore from "../../store/IconStore";
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

    </div>
  );
}

export default MyVoucherUI;
