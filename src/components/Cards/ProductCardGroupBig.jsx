import React from "react";
import { Row} from "react-bootstrap";
import ProductDetailCard from "../Cards/ProductDetailCard";
import imgPhone from "../../assets/phone791.png";
import powerBank795 from '../../assets/powerBank795.png'
import phone790 from '../../assets/phone790.png'
import phone792 from '../../assets/phone792.png'


const ProductCardGroupBig = (props) => {
  return (
    <div>
      <Row className="ProductCardGroupBig">
        <div className="col-6 col-sm-4 col-lg-2" >
          <ProductDetailCard
            productImg={imgPhone}
            productName={`Samsung Galaxy A50..`}
          />
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <ProductDetailCard
            productImg={phone792}
            productName={`Samsung Galaxy A50..`}
          />
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <ProductDetailCard
            productImg={imgPhone}
            productName={`Samsung Galaxy A50..`}
          />
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <ProductDetailCard
            productImg={phone790}
            productName={`Samsung Galaxy A50..`}
          />
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <ProductDetailCard
            productImg={phone790}
            productName={`Samsung Galaxy A50..`}
          />
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <ProductDetailCard
            productImg={powerBank795}
            productName={`Samsung Galaxy A50..`}
          />
        </div>
      </Row>
    </div>
  );
};

export default ProductCardGroupBig;
