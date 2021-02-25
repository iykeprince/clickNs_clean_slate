import React from "react";
import { Row} from "react-bootstrap";
import CardGroupTitle from "../Cards/CardGroupTitle";
import ProductCardGroupSmall from "../Cards/ProductCardGroupSmall";


function ProductDetailRowFour() {
  return (
    <Row>
      <div className="prodDetailWrapper col-lg-9 col-12">
        <div className="prodSmallWrapper">
          <CardGroupTitle titleText={`Customers who viewed this also viewed`} />
          <ProductCardGroupSmall />
        </div>
        <br />
        <div  className="prodSmallWrapper">
          <CardGroupTitle titleText={`Customers Also Bought`} />
          <ProductCardGroupSmall />
        </div>
        <br />
      </div>
    </Row>
  );
}

export default ProductDetailRowFour;
