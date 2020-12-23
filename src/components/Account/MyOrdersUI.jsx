// import { IconButton } from '@material-ui/core'
import React from "react";
import IconStore from "../../store/IconStore";
import NoDataUI from "./NoDataUI";
import OrderAvailableData from "./OrderAvailableData";

function MyOrdersUI(prop) {
  return (
    <div>
      <h3 className="titleHeader">Orders</h3>

      <div className="titleHeader">
      <div className="orderToggle__wrapper">
        <div className="OpenClosedNav">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active orderToggle"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                OPEN ORDERS ({prop.openOrderNumber})
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link orderToggle"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                CLOSED ORDERS ({prop.closedOrderNumber})
              </a>
            </li>
          </ul>
        </div>
        <hr className="newSeperator" />
        </div>

        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
  
            {/* IF NO DATA */}
           {/* <NoDataUI Image={IconStore.orderShopBag} Topic='You have placed no orders yet!' Explanation=' All your orders will be saved here for you to access their state
            anytime'/> */}


              {/* IF DATA */}
          <OrderAvailableData/>


          </div>
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <NoDataUI Image={IconStore.orderShopBag} Topic='You have placed no orders yet!' Explanation=' All your orders will be saved here for you to access their state
            anytime'/>
          </div>
        </div>

        
        
      </div>
    </div>
  );
}

export default MyOrdersUI;
