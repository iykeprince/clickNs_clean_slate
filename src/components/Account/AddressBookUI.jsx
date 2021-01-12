import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import LargeButton from "../Button/LargeButton";
import EditAddressComp from "./EditAddressComp";
import DisplayAddress from "./DisplayAddress"

function AddressBookUI() {
  return (
    <div className="addressbookUI_wrapper">
      <HashRouter>
        <div>
          <NavLink to="/editAddress"  className="button__wrap2 ">
            <LargeButton buttonName="ADD NEW ADDRESS" />
          </NavLink>

          <NavLink to="/">
          <button>back button</button>
          </NavLink>

          <div className="content">
            <Route exact path="/" component={DisplayAddress} />
            <Route path="/editAddress" component={EditAddressComp} />
          </div>
        </div>
      </HashRouter>
    </div>
  );
}

export default AddressBookUI;
