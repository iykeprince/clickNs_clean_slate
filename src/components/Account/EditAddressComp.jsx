import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import IconStore from "../../assets/icons/IconStore";
import AddressForm from "../Form/AddressForm";

export default function EditAddressComp() {
  const history = useHistory();

  return (
    <div>
      <NavLink to="/addressBook" className="addressBook_btnGrp">
        <button className="addressBook__backButton">
          {IconStore.bxArrowBack}
        </button>
        <span className="titleHeader2">Add a new Address</span>
      </NavLink>

      <AddressForm  handleModalClose={history.goBack}/>
    </div>
  );
}
