import React from "react";
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { loadCurrentItem, addToCart } from "../../redux/actions/shopping";

const DealsSectionContent = ({ productData, addToCart, loadCurrentItem }) => {
  return (productData || []).map((data, index) => {
    return (
      <Link
        to={`/product/${(data || []).id}`}
        onClick={() => loadCurrentItem(data)}
        className="dealsProduct col-lg-2 col-sm-4 col-6"
      >
        <div className="percentDiscount">
          <span className="percentDiscount__text">{data?.percentDiscount}</span>
        </div>
        <div className="productImage">
          <img src={data?.productImg} alt="product" />
        </div>
        <div className="productName">
          <p className="">{data?.productName}</p>
        </div>
        <div className="currentProductPrice">
          <p>&#8358; {data?.mainPrice?.toLocaleString()}</p>
        </div>
        <div className="previousProductPrice">
          <p>&#8358; {data?.slashedPrice?.toLocaleString()}</p>
        </div>
      </Link>
    );
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(DealsSectionContent);
