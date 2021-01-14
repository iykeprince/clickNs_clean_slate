import React from "react";
import { Row } from "react-bootstrap";
import CartMainItem from "./CartMainItem";
import phone11Img from "../../assets/phone11.jpg";

function CartRowOne() {
  return (
    <div className="crt_grp">
      <div className="topcartSecOne">
        <h5>Cart (2 items)</h5>
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

      <CartMainItem
        pImage={phone11Img}
        sellerText="THE 4DX"
        unitPrice="₦135,898"
        subTotal="₦135,898"
      />

      <CartMainItem
        pImage={phone11Img}
        sellerText="THE 4DX"
        savedAmountText="Savings"
        savedAmount="₦38,310"
        previousUnitPrice="₦81,900"
        unitPrice="₦43,590"
        subTotal="₦135,898"
      />

      <div className="priceTotl">
        <div>
          <span className="totlText">Total:</span>
          <span className="amount">₦179,488</span>
          <p className="delFee">Delivery fee not included yet</p>
        </div>
      </div>
    </div>
  );
}

export default CartRowOne;