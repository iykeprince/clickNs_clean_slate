import React from "react";
import ProductDetailCard from "../Cards/ProductDetailCard";
import { Row} from "react-bootstrap";
import imgSamsung from "../../assets/images/samsungFrontBack809.png";
import { Link } from "react-router-dom";


const ProductCardGroupSmall = (props) => {
  return (
    <div>
      <Row className="prodSmallRow">
        <Link to="/product" className="prodSmallCol col-6 col-sm-4 col-lg-2">
          <ProductDetailCard
            productImg={imgSamsung}
            productName={`Samsung Galaxy..`}
          />
        </Link>
        <Link to="/product" className="prodSmallCol col-6 col-sm-4 col-lg-2">
          <ProductDetailCard
            productImg={imgSamsung}
            productName={`Samsung Galaxy..`}
          />
        </Link>
        <Link to="/product" className="prodSmallCol col-6 col-sm-4 col-lg-2">
          <ProductDetailCard
            productImg={imgSamsung}
            productName={`Samsung Galaxy..`}
          />
        </Link>
        <Link to="/product" className="prodSmallCol col-6 col-sm-4 col-lg-2">
          <ProductDetailCard
            productImg={imgSamsung}
            productName={`Samsung Galaxy..`}
          />
        </Link>
        <Link to="/product" className="prodSmallCol col-6 col-sm-4 col-lg-2">
          <ProductDetailCard
            productImg={imgSamsung}
            productName={`Samsung Galaxy..`}
          />
        </Link>
        <Link to="/product" className="prodSmallCol col-6 col-sm-4 col-lg-2">
          <ProductDetailCard
            productImg={imgSamsung}
            productName={`Samsung Galaxy..`}
          />
        </Link>
      </Row>
    </div>
  );
};

export default ProductCardGroupSmall;
