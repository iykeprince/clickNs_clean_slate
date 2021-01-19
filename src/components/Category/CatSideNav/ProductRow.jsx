import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import DynamicButton, {DynamicButtonTwo} from "../../Button/DynamicButton";
import { ReadOnlyRating } from "../../Rating/Rating";

const ProductRow = (props) => {
  let btnClass = classNames("", {
    thumbnail: props.listView,
    " col-xs-12 col-sm-6 col-md-4 col-lg-3 thumbnail-grid": props.gridView,
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
      "col-9": props.listView,
    }),
    classNames("", {
      "col-3 text-right": props.listView,
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

  return (
    <div className={btnClass}>
      <div className={`caption ${listClass} ${captionLG}`}>
        <div className={`list_productImg ${withOne}`}>
          <img src={props.data.productImg} alt="productImage" />
        </div>

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

                  <span className='ratNum'>({`${props.data.ratingsNumber}`})</span>
                </div>
              </div>

              <div className={`${col3List}`}>
                <p className="font-weight-bold">{props.data.productPrice}</p>
                <span className="list_slashedPrice">
                  {props.data.slashedPrice}
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
              <span className='ratNum'>({`${props.data.ratingsNumber}`})</span>
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

            <span className={addToCart_button}>
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

export default ProductRow;
