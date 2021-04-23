import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import DynamicButton, { DynamicButtonTwo } from "../../Button/DynamicButton";
import { ReadOnlyRating } from "../../Rating/Rating";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { loadCurrentItem, addToCart } from "../../../redux/actions/shopping";
// import ScrollToTop from "../../../Hooks/ScrollToTop";

const ProductRow = ({ addToCart, current, loadCurrentItem, ...props }) => {
  let btnClass = classNames("", {
    thumbnail: props.listView,
    " col-6 col-md-4 col-lg-3 thumbnail-grid": props.gridView,
  });
  let [
    listClass,
    withOne,
    withTwo,
    rowList,
    colFullList,
    col9List,
    col3List,
    listGridbtn,
    ratings_wrapOne,
    ratings_wrapTwo,
    addToCart_button,
    captionLG,
  ] = [
    classNames("", {
      sthToDo: props.listView,
    }),
    classNames("", {
      withOne: props.listView,
      withOneGrid: props.gridView,
    }),
    classNames("", {
      withTwo: props.listView,
      withTwoGrid: props.gridView,
    }),
    classNames("", {
      row: props.listView,
      rowGrid: props.gridView,
    }),
    classNames("", {
      "col-12": props.listView,
    }),
    classNames("", {
      "col-md-9 col-12": props.listView,
    }),
    classNames("", {
      "col-md-3 col-12 priceDisc": props.listView,
    }),
    classNames("", {
      "13rem": props.listView,
      "100%": props.gridView,
    }),
    classNames("", {
      "d-flex": props.listView,
      "d-none": props.gridView,
    }),
    classNames("", {
      "d-none": props.listView,
      "d-flex": props.gridView,
    }),
    classNames("", {
      addToCart_buttonList: props.listView,
      addToCart_buttonGrid: props.gridView,
    }),
    classNames("", {
      captionLG_List: props.listView,
      captionLG_Grid: props.gridView,
    }),
  ];
  const history = useHistory();

  return (
    <div className={btnClass}>
      <div className={`caption ${listClass} ${captionLG}`}>
        <Link
          to={`/product/phones/#${(props.data || []).id}`}
          onClick={() => loadCurrentItem(props.data)}
          className={`list_productImg ${withOne}  d-block`}
        >
          <img src={props.data.productImg} alt="productImage" />
        </Link>

        <div className={`${listClass} ${withTwo} ${rowList}`}>
          <div className={`${colFullList}`}>
            <div className={rowList}>
              <div className={`${col9List} prod__Desciption`}>
                <p className="productName">{props.data.productName}</p>
                <div className={ratings_wrapOne}>
                  <span>
                    <ReadOnlyRating
                      size="small"
                      ratingCount={props.data.ratingsCount}
                    />
                  </span>

                  <span className="ratNum">
                    ({`${props.data.ratingsNumber}`})
                  </span>
                </div>
              </div>

              <div className={`${col3List}`}>
                <p className="font-weight-bold">
                  &#8358; {props.data.mainPrice?.toLocaleString()}
                </p>
                <span className="list_slashedPrice">
                  &#8358; {props.data.slashedPrice?.toLocaleString()}
                </span>
                <span className="percentDiscount2">
                  <span className="percentDiscount__text2">
                    {props.data.percentDiscount}
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className={`${colFullList} list__button`}>
            <div className={ratings_wrapTwo}>
              <span>
                <ReadOnlyRating
                  size="small"
                  ratingCount={props.data.ratingsCount}
                />
              </span>
              <span className="ratNum">({`${props.data.ratingsNumber}`})</span>
            </div>
            <DynamicButton
              color="white"
              height="25px"
              width="8rem"
              backgroundColor="var(--woozRed)"
              boxShadow="none"
              fontWeight="700"
              fontSize="0.75rem"
              hoverBoxShadow="none"
            >
              COMPARE PRICES
            </DynamicButton>

            <span className={addToCart_button} onClick={() => {
              console.log('props.data from genericProductRow',props.data)
                  loadCurrentItem(props.data);
                  addToCart(props.data.id);
                  history.push("/cart");
                }}>
              <DynamicButtonTwo
                color="white"
                height="2.5rem"
                width={listGridbtn}
                backgroundColor="var(--woozBlue)"
                boxShadow="none"
                borderRadius="5px"
                border="none !important"
                fontWeight="700"
                fontSize="0.875rem"
                hoverBoxShadow="none"
              >
                ADD TO CART
              </DynamicButtonTwo>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductRow.propTypes = {
  listView: PropTypes.bool,
  gridView: PropTypes.bool,
};

// const mapStateToProps = (state) => {
//   return {
//     current: state.shop.currentItem,
//   };
// };
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductRow);
