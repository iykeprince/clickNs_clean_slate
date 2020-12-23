import React from "react";
import IconStore from "../../store/IconStore";
import LargeButton from "../Button/LargeButton";

function AddressBookUI() {
  return (
    <div className="addressbookUI_wrapper">
      <h3 className="titleHeader">Address Book</h3>

      <div className="addressBookDetail__wrapper">
        <div className="addresstext_detail">
          <h6 className='nameOf'>Bukky Owolabi</h6>
          <p className='text-black-50'>60 Landbridge </p>
          <p className='text-black-50'>Oniru-Estate, Victoria, Lagos</p>
          <p className='text-black-50'> +2349108000984</p>
          <h6 className='defaultAdress'>Default Address</h6>
        </div>
        <div className="reEdit">
          SET AS DEFAULT
          <span className="editIcon">{IconStore.editSolid}</span>
        </div>
      </div>

      <div className="button__wrap2">
        <LargeButton buttonName="ADD NEW ADDRESS" />
      </div>
    </div>
  );
}

export default AddressBookUI;
