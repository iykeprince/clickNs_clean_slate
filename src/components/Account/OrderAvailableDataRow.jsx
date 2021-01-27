import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import DynamicButton from "../Button/DynamicButton";

function OrderAvailableDataRow(props) {
  return (
    <Row className='orderAvailableDataRow'>
      <Link to="/product" className="col-lg-2 col-3">
        <img
          src={props.itemImage}
          className="orderImage"
          alt="productImage"
        />
      </Link>

      <div className='orderAvailDetail col-lg-8 col-7 pl-lg-3'>
        <p className='orderedProdName'>
          Notebook, intel Celeron N3060 (4GB RAM, 500GB HDD) 15.6 inch
          Display...
        </p>

        <p className='orderedProdNumber'> Order 348765433</p>
        <DynamicButton
          color="white"
          height="25px"
          width="215px"
          backgroundColor={props.bgColor}
          boxShadow="none"
          fontWeight="700"
          fontSize="12px"
          hoverBoxShadow="none"
        >
          STARTED - PAYMENT SUCCESSFUL
        </DynamicButton>
        <p className='orderedProdDate'>On 12-11-2020</p>
      </div>

      <Link to='#' className='seeDetailsLink col-lg-2 col-2 text-right'>SEE DETAILS</Link>

    </Row>
  );
}

export default OrderAvailableDataRow;
