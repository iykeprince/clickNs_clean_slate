import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CartMainItem from "./CartMainItem";
import { connect } from "react-redux";

function CartRowOne({totalPrice, cart }) {

  // console.log("cart", cart);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className="crt_grp">
      <div className="topcartSecOne">
        <h5>Cart ({cartCount} items)</h5>
        {/* <div>
            <img src="" alt="woozeeLogo" />
            <img src="" alt="dispatchImg" />
            <span>Dispatch</span>
            <span>items on your Cart are eligible for Free Shipping.</span>
          </div> */}

        <p className="eligiblTxt">
          Items on your Cart are eligible for Free Shipping.
        </p>
      </div>

      <Row className="tableHead">
        <div className="col-6">
          <p className="th_td">ITEM</p>
        </div>

        <div className="col-2">
          <p className="text-center th_td">QUANTITY</p>
        </div>

        <div className="col-2">
          <p className="text-center th_td">UNIT PRICE</p>
        </div>

        <div className="col-2">
          <p className="text-center th_td">SUBTOTAL</p>
        </div>
      </Row>

      {cart.map((item) => (
        <CartMainItem key={item.id} itemData={item} />
      ))}

      <div className="priceTotl">
        <div>
          <span className="totlText">Total:</span>
          <span className="amount">
            &#8358; {totalPrice?.toLocaleString()}
          </span>
          <p className="delFee">Delivery fee not included yet</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    totalPrice: state.shop.totalPrice,
  };
};

export default connect(mapStateToProps)(CartRowOne);
