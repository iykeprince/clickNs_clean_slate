// import { IconButton } from '@material-ui/core'
import React from "react";
import IconStore from "../../store/IconStore";
import LargeButton from "../Button/LargeButton";

function MyOrdersUI() {
  return (
    <div>
      <h3 className="titleHeader">Orders</h3>

      <div  className='orderToggle__wrapper'>
        <span className='orderToggle'>OPEN ORDERS (0)</span>
        <span className='orderToggle'>CLOSED ORDERS (0)</span>
      </div>
      <hr className="newSeperator"/>
      <div className="titleHeader">

        <div className='orderContent__group'>
          {IconStore.orderShopBag}
          <p className='orderTxt'>You have placed no orders yet!</p>
          <p className='orderExplanation'>All your orders will be saved here for you to access their state
            anytime
          </p>
        </div>

        <div className="button__wrap">
          <LargeButton buttonName="CONTINUE SHOPPING" />
        </div>
      </div>
    </div>
  );
}

export default MyOrdersUI;
