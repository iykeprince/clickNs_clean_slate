import React from "react";
import StandaloneBtnGrp from "../components/Button/StandaloneBtnGrp";
import CartOtherRows from "../components/Cart/CartOtherRows";
import CartRowOne from "../components/Cart/CartRowOne";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function Cart() {
  return (
    <div>
      <Header showHamburger={true}/>

      <div className="body__wrapper putAtMiddle">
        <CartRowOne />
      </div>

      <StandaloneBtnGrp />

      <div className="body__wrapper putAtMiddle">
        <CartOtherRows />
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
