import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import DynamicButton from "../Button/DynamicButton";

function OrderAvailableDataRow(props) {
  return (
    <Row className='orderAvailableDataRow'>
      <Link to="/product" className=" col-md-2 col-1">
        <img
          src={props.itemImage}
          className="orderImage"
          alt="productImage"
        />
      </Link>

      <Col md="8" className='orderAvailDetail'>
        <p className='orderedProdName'>
          Notebook, intel Celeron N3060 (4GB RAM, 500GB HDD) 15.6 inch
          Display...
        </p>

        <p className='orderedProdNumber'> Order 348765433</p>
        <DynamicButton
          color="white"
          height="25px"
          width="215px"
          backgroundColor="var(--woozRed)"
          boxShadow="none"
          fontWeight="700"
          fontSize="12px"
          hoverBoxShadow="none"
        >
          STARTED - PAYMENT SUCCESSFUL
        </DynamicButton>
        <p className='orderedProdDate'>On 12-11-2020</p>
      </Col>

      <Link to='#' className='seeDetailsLink  col-md-2 text-right'>SEE DETAILS</Link>

    </Row>
  );
}

export default OrderAvailableDataRow;
