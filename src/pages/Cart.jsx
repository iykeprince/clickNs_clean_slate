import React from "react";
import StandaloneBtnGrp from "../components/Button/StandaloneBtnGrp";
import CartOtherRows from "../components/Cart/CartOtherRows";
import CartRowOne from "../components/Cart/CartRowOne";
import Header from "../components/Header/Header";
import { connect } from "react-redux";
import Footer from "../components/Footer/Footer";

function Cart({ products }) {
  return (
    <div>
      <Header showHamburger={true} />

      <div className="body__wrapper putAtMiddle">
        {/* {products.map(prod=>( */}
        <CartRowOne />
        {/* ))} */}
      </div>

      <StandaloneBtnGrp />

      <div className="body__wrapper putAtMiddle">
        <CartOtherRows />
      </div>

      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Cart);
