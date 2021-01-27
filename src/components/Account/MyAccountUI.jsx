import React from "react";
import { Col, Row } from "react-bootstrap";
import IconStore from "../../store/IconStore";

function MyAccountUI() {
  return (
    <div>
      <h3 className="titleHeader d-none d-md-block">My Account</h3>
      <Row>
        <Col md="6" className="aColContainer">
          <div className="accBox__wrapper h-100">
            <div className="accBox__head">
              <span className="accBox__title">ACCOUNT DETAILS </span>
              <span className="editIcon">{IconStore.editSolid}</span>
            </div>
            <div className="accBox__content">
              <p  className="text1">Bukky Owolabi</p>
              <p  className="text2 text-black-50">bukkytohgbesky@example.com</p>
              <p  className="detailText">ACCOUNT DETAILS</p>
            </div>
          </div>
        </Col>
        <Col md="6" className="aColContainer">
          <div className="accBox__wrapper h-100">
            <div className="accBox__head">
              <span className="accBox__title">ADDRESS </span>
              <span className="editIcon">{IconStore.editSolid}</span>
            </div>
            <div className="accBox__content">
            <p className="text1">Your default shipping address:</p>
            <p className='text-black-50'>Bukky Owolabi </p>
            <p className='text-black-50'>60 Landbridge</p>
            <p className='text-black-50'>Oniru-Estate, Victoria, Lagos</p>
            <p className='text-black-50'> +2349108000984</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md="6" className="aColContainer">
          <div className="accBox__wrapper h-100">
          <div className="accBox__head">
          <h6 className="accBox__title">NEWSLETTER PREFERENCES</h6>
            </div>
            
            <div className="accBox__content">
              <p className="subscribText">You are currently not subscribed to any of our newsletters.</p>
              <p className="detailText">EDIT NEWSLETTER PREFERENCES</p>
            </div>
          </div>
        </Col>

        <Col md="6" className="aColContainer">
          <div className="accBox__wrapper h-100">
          <div className="accBox__head">
          <h6 className="accBox__title">WOOZEEE BALANCE</h6>
            </div>
            
            <div className="accBox__content">
              <span>{IconStore.accWallet}</span>
              <span className='woozBalance'>₦ 19,650</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MyAccountUI;
