import React from "react";
import { NavLink } from "react-router-dom";
// import useWindowDimensions from "../../Hooks/UseWindowDimension";
import IconStore from "../../store/IconStore";
import LargeButton from "../Button/LargeButton";

function DisplayAddress() {
  // const { width } = useWindowDimensions();

  return (
    <div>
     <NavLink to="/editAddress" className="button__wrap2 d-none d-md-flex">
       <LargeButton buttonName="ADD NEW ADDRESS" />
     </NavLink>
       
      <div className="addressbookUI_wrapper">
        <h3 className="titleHeader address_newHeadr  d-none d-md-block">Address Book</h3>
        <div className="addressBookDetail__wrapper">
          <div className="addresstext_detail">
            <h6 className="nameOf">Bukky Owolabi</h6>
            <p className="text-black-50">60 Landbridge </p>
            <p className="text-black-50">Oniru-Estate, Victoria, Lagos</p>
            <p className="text-black-50"> +2349108000984</p>
            <h6 className="defaultAdress">Default Address</h6>
          </div>
          <div className="reEdit">
            SET AS DEFAULT
            <span className="editIcon">{IconStore.editSolid}</span>
          </div>
        </div>
      </div>

      <NavLink to="/editAddress_m" className="button__wrap2 mx-auto mt-4 mb-1 d-flex d-md-none">
       <LargeButton buttonName="ADD NEW ADDRESS" />
     </NavLink>
    </div>
  );
}

export default DisplayAddress;
