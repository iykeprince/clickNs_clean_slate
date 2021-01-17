import React from "react";
import AddressBookUI from "./AddressBookUI";
import ChangePasswordUI from "./ChangePasswordUI";
import DetailsUI from "./DetailsUI";
import MyAccountUI from "./MyAccountUI";
import MyOrdersUI from "./MyOrdersUI";
import MyPendReviewUI from "./MyPendReviewUI";
import MySavedItemsUI from "./MySavedItemsUI";
import MyVoucherUI from "./MyVoucherUI";
import NewsletterUI from "./NewsletterUI";
import IconStore from "../../store/IconStore";
import AccountOtherRows from "./AccountOtherRows";
import { Route, NavLink, HashRouter } from "react-router-dom";
import EditAddressComp from "./EditAddressComp";

function AccountRowOne() {
  return (
    <div>
      <HashRouter>
        <div className="row accRowOne__wrapper">
          <div className="col-md-3 accLeftRow__wrapper fixedHeight">
            <div className="nav flex-column nav-p">
              <NavLink to="/" className="nav-link">
                <span>{IconStore.bxUser}</span>
                <span className="adjacentIcon__text">My Account</span>
              </NavLink>

              <NavLink to="/orders" className="nav-link">
                <span>{IconStore.bxBox}</span>
                <span className="adjacentIcon__text">Orders</span>
              </NavLink>

              <NavLink to="/reviews" className="nav-link">
                {IconStore.bxCommentEdit}
                <span className="adjacentIcon__text">Pending Reviews</span>
              </NavLink>

              <NavLink to="/vouchers" className="nav-link">
                {IconStore.ulTicket}
                <span className="adjacentIcon__text">Voucher Credit</span>
              </NavLink>

              <NavLink to="/saved" className="nav-link">
                {IconStore.heart}
                <span className="adjacentIcon__text">Saved Items</span>
              </NavLink>

              <a href="/recentlyViewed" className="nav-link">
                {IconStore.baselineHistory}
                <span className="adjacentIcon__text">Recently Viewed</span>
              </a>

              <hr className="hrSeparator" />
              <NavLink to="/details" className="nav-link">
                <span>Details</span>
              </NavLink>

              <NavLink to="/addressBook" className="nav-link">
                <span>Address Book</span>
              </NavLink>

              <NavLink to="/changePassword" className="nav-link">
                <span>Change Password</span>
              </NavLink>

              <NavLink to="/newsletter" className="nav-link">
                <span>
                  Newsletter Preferences
                </span>
              </NavLink>

              <hr className="hrSeparator" />

              <a href="/" className="nav-link text-center logoutTxt">
                <span className="adjacentIcon__text">LOG OUT</span>
              </a>
            </div>
          </div>
          <div className="col-md-9 rightr ">
            <div className="right__wrapper  h-100">
              <Route exact path="/" component={MyAccountUI} />
              <Route path="/orders" component={MyOrdersUI} />
              <Route path="/reviews" component={MyPendReviewUI} />
              <Route path="/vouchers" component={MyVoucherUI} />
              <Route path="/saved" component={MySavedItemsUI} />
              <Route path="/details" component={DetailsUI} />
              <Route path="/addressBook" component={AddressBookUI} />
              <Route path="/changePassword" component={ChangePasswordUI} />
              <Route path="/newsletter" component={NewsletterUI} />
              <Route path="/editAddress" component={EditAddressComp} />
            </div>
          </div>
        </div>
      </HashRouter>
      <AccountOtherRows />
    </div>
  );
}

export default AccountRowOne;
