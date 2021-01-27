import React from "react";
// import AddressBookUI from "./AddressBookUI";
// import ChangePasswordUI from "./ChangePasswordUI";
// import DetailsUI from "./DetailsUI";
// import MyAccountUI from "./MyAccountUI";
// import MyOrdersUI from "./MyOrdersUI";
// import MyPendReviewUI from "./MyPendReviewUI";
// import MySavedItemsUI from "./MySavedItemsUI";
// import MyVoucherUI from "./MyVoucherUI";
// import NewsletterUI from "./NewsletterUI";
// import IconStore from "../../store/IconStore";
// import { Route, NavLink, HashRouter } from "react-router-dom";
// import EditAddressComp from "./EditAddressComp";
// import * as FaIcon from "react-icons/fa";
import useWindowDimensions from "../../Hooks/UseWindowDimension";
import AccountRowOneNavLink from "./AccountRowOneNavLink";
import AccountRowOneLink from "./AccountRowOneLink";

function AccountRowOne() {
  const { width } = useWindowDimensions();

  return (
    <div>
      {width >= 768 ? <AccountRowOneNavLink/> : <AccountRowOneLink/>}
    
    </div>
  );
}

export default AccountRowOne;
