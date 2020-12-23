import React from "react";
import IconStore from "../../store/IconStore";
import LargeButton from "../Button/LargeButton";


// var x = document.getElementsByClassName("addressbookUI_wrapper")
// function removeDisplay(){
//     x.style.display = "none";
// }

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

{/* BEGINNING OF NEW WORK - Show Add new address page on Button Click*/}

      <ul className="nav mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
            <a className="nav-link button__wrap2" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false"><LargeButton buttonName="ADD NEW ADDRESS" onButtonClick=""/></a>
        </li>
    </ul>
    <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">{/* ADD DATA HERE */}</div>
    </div>

{/* END OF NEW WORK */}


    </div>
  );
}

export default AddressBookUI;
