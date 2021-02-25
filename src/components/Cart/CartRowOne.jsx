import React from "react";
import { Row } from "react-bootstrap";
import CartMainItem from "./CartMainItem";
import phone11Img from "../../assets/images/phone11.jpg";

function CartRowOne({products}) {
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
        productName={"Galaxy A50 6.4-Inch (4GB,128GB ROM) Android 9 Pie, (25MP+5MP+8MP)+ 25MP 4000mAh 4G Dual SIM Smartphone - White"}
        sellerText="THE 4DX"
        unitPrice="₦135,898"
        subTotal="₦135,898"
        mainPrice="&#8358;24,000"
        slashedPrice="&#8358;135,898 "
      />

      <CartMainItem
        pImage={phone11Img}
        productName={"Galaxy A50 6.4-Inch (4GB,128GB ROM) Android 9 Pie, (25MP+5MP+8MP)+ 25MP 4000mAh 4G Dual SIM Smartphone - White"}
        sellerText="THE 4DX"
        savedAmountText="Savings"
        savedAmount="₦38,310"
        previousUnitPrice="₦81,900"
        unitPrice="₦43,590"
        subTotal="₦135,898"
        mainPrice="&#8358;24,000"
        slashedPrice="&#8358;135,898 "
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
