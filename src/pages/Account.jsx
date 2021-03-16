import React from "react";
import AccountOtherRows from "../components/Account/AccountOtherRows";
import AccountRowOne from "../components/Account/AccountRowOne";
// import Footer from "../components/Footer/Footer";
import NewFooter from "../components/Footer/NewFooter";
import Header from "../components/Header/Header";

function Account() {
  return (
    <div>
      <Header showHamburger={true} />
      <div className="body__wrapper putAtMiddle">
        <AccountRowOne />
        <div className="d-none d-md-block">
          <AccountOtherRows />
        </div>
      </div>
      <NewFooter />
    </div>
  );
}

export default Account;
