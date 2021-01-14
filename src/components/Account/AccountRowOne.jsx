import React from "react";
import AddressBookUI from "./AddressBookUI";
import ChangePasswordUI from "./ChangePasswordUI";
import DetailsUI from "./DetailsUI";
import LogInOutUI from "./LogInOutUI";
import MyAccountUI from './MyAccountUI'
import MyOrdersUI from "./MyOrdersUI";
import MyPendReviewUI from "./MyPendReviewUI";
import MySavedItemsUI from "./MySavedItemsUI";
import MyVoucherUI from "./MyVoucherUI";
import NewsletterUI from "./NewsletterUI";
import RecentlyViewedUI from "./RecentlyViewedUI";
import IconStore from '../../store/IconStore';
import AccountOtherRows from "./AccountOtherRows";
import { Link } from "react-router-dom";
// import { IconButton } from "@material-ui/core";

function AccountRowOne() {
  return (
    <div>
      <div className="row accRowOne__wrapper">
        <div className="col-md-3 accLeftRow__wrapper fixedHeight">
          <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical"
          >
            {/* <IconButton> */}
            <a
              className="nav-link active"
              id="v-pills-acc-tab"
              data-toggle="pill"
              href="#v-pills-acc"
              role="tab"
              aria-controls="v-pills-acc"
              aria-selected="true"
            >
              <span>
                {IconStore.bxUser}
              </span>
              <span className="adjacentIcon__text">My Account</span>
            </a>
            {/* </IconButton> */}

            <a
              className="nav-link"
              id="v-pills-ordr-tab"
              data-toggle="pill"
              href="#v-pills-ordr"
              role="tab"
              aria-controls="v-pills-ordr"
              aria-selected="false"
            >
              <span>
                {IconStore.bxBox}
              </span>
             <span className="adjacentIcon__text">Orders</span> 
            </a>
            <a
              className="nav-link"
              id="v-pills-reviews-tab"
              data-toggle="pill"
              href="#v-pills-reviews"
              role="tab"
              aria-controls="v-pills-reviews"
              aria-selected="false"
            >
              {IconStore.bxCommentEdit}
             <span className="adjacentIcon__text">Pending Reviews</span> 
            </a>
            <a
              className="nav-link"
              id="v-pills-vouchr-tab"
              data-toggle="pill"
              href="#v-pills-vouchr"
              role="tab"
              aria-controls="v-pills-vouchr"
              aria-selected="false"
            >
              {IconStore.ulTicket}
             <span className="adjacentIcon__text">Voucher Credit</span> 
            </a>
            <a
              className="nav-link"
              id="v-pills-saved-tab"
              data-toggle="pill"
              href="#v-pills-saved"
              role="tab"
              aria-controls="v-pills-saved"
              aria-selected="false"
            >
              {IconStore.heart}
             <span className="adjacentIcon__text">Saved Items</span> 
            </a>
            <Link to='/recentlyViewed'
              className="nav-link"
              id="v-pills-viewed-tab"
              data-toggle="pill"
              href="#v-pills-viewed"
              role="tab"
              aria-controls="v-pills-viewed"
              aria-selected="false"
            >
              {IconStore.baselineHistory}
             <span className="adjacentIcon__text">Recently Viewed</span> 
            </Link>
            <hr className="hrSeparator"/>
            <a
              className="nav-link"
              id="v-pills-details-tab"
              data-toggle="pill"
              href="#v-pills-details"
              role="tab"
              aria-controls="v-pills-details"
              aria-selected="false"
            >
              Details
            </a>
            <a
              className="nav-link"
              id="v-pills-book-tab"
              data-toggle="pill"
              href="#v-pills-book"
              role="tab"
              aria-controls="v-pills-book"
              aria-selected="false"
            >
              Address Book
            </a>
            <a
              className="nav-link"
              id="v-pills-pass-tab"
              data-toggle="pill"
              href="#v-pills-pass"
              role="tab"
              aria-controls="v-pills-pass"
              aria-selected="false"
            >
              Change password
            </a>
            <a
              className="nav-link"
              id="v-pills-pref-tab"
              data-toggle="pill"
              href="#v-pills-pref"
              role="tab"
              aria-controls="v-pills-pref"
              aria-selected="false"
            >
              Newsletter Preferences
            </a>
            <hr className="hrSeparator"/>
            <a
              className="nav-link text-center logoutTxt"
              id="v-pills-sign-tab"
              data-toggle="pill"
              href="#v-pills-sign"
              role="tab"
              aria-controls="v-pills-sign"
              aria-selected="false"
            >
              LOG OUT
            </a>
          </div>
        </div>
        <div className="col-md-9 rightr ">
          <div className="tab-content right__wrapper  h-100" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-acc"
              role="tabpanel"
              aria-labelledby="v-pills-acc-tab"
            >
              <MyAccountUI/>
              
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-ordr"
              role="tabpanel"
              aria-labelledby="v-pills-ordr-tab"
            >
              <MyOrdersUI openOrderNumber='3'closedOrderNumber='0'/>
              
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-reviews"
              role="tabpanel"
              aria-labelledby="v-pills-reviews-tab"
            >
              <MyPendReviewUI/>
              
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-vouchr"
              role="tabpanel"
              aria-labelledby="v-pills-vouchr-tab"
            >
              <MyVoucherUI/>
              
            </div>

            <div
              className="tab-pane fade"
              id="v-pills-saved"
              role="tabpanel"
              aria-labelledby="v-pills-saved-tab"
            >
              <MySavedItemsUI/>
            </div>

            <div
              className="tab-pane fade"
              id="v-pills-viewed"
              role="tabpanel"
              aria-labelledby="v-pills-viewed-tab"
            >
              <RecentlyViewedUI/>
              
            </div>

            <div
              className="tab-pane fade"
              id="v-pills-details"
              role="tabpanel"
              aria-labelledby="v-pills-details-tab"
            >
              <DetailsUI/>
            </div>


            <div
              className="tab-pane fade"
              id="v-pills-book"
              role="tabpanel"
              aria-labelledby="v-pills-book-tab"
            >
              <AddressBookUI/>
            </div>

            <div
              className="tab-pane fade"
              id="v-pills-pass"
              role="tabpanel"
              aria-labelledby="v-pills-pass-tab"
            >
              <ChangePasswordUI/>
            </div>


            <div
              className="tab-pane fade"
              id="v-pills-pref"
              role="tabpanel"
              aria-labelledby="v-pills-pref-tab"
            >
              <NewsletterUI/>
            </div>

            <div
              className="tab-pane fade"
              id="v-pills-sign"
              role="tabpanel"
              aria-labelledby="v-pills-sign-tab"
            >
              
              <LogInOutUI/>
            </div>
          </div>
        </div>
      </div>
    
      <AccountOtherRows/>
    </div>
  );
}

export default AccountRowOne;
