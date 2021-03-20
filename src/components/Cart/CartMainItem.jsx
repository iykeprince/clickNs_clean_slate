import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import IconStore from "../../assets/icons/IconStore";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { adjustItemQty, removeFromCart } from "../../redux/actions/shopping";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      width: "80%",
    },
  },
  numberSelect: {
    width: "8ch",
    paddingRight: "0.8rem !important",
  },
  menuPaper: {
    maxHeight: 100,
  },
}));

function CartMainItem({ cart, itemData, adjustQty, removeFromCart, ...props }) {
  const classes = useStyles();

  const [itemNumber, setitemNumber] = useState(itemData.qty);

  console.log("totalItem|cart", cart);

  //CALCULATION
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.mainPrice;
    });
    console.log("totalItem|items", items, "\ntotalItem|price", price);

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  const singleItemTotal = itemNumber * itemData.mainPrice;
  const savedAmount = (itemData.mainPrice)-(itemData.slashedPrice);

  //END OF CALCULATION

  const handleChange = (event) => {
    setitemNumber(event.target.value);
    adjustQty(itemData.id, event.target.value);
  };
  console.log("itemData", itemData);

  return (
    <div>
      <Row className="ctop__row">
        <div className="col-12 col-md-6">
          <Row className="prodDescrptGrp">
            <div className="col-2 pImage__wrapper">
              <img
                src={itemData?.productImg}
                alt="productImage"
                className="pImage"
              />
            </div>

            <div className="col-10 pText__wrapper">
              <p className="selrText">Seller: {itemData?.sellerName}</p>
              <p className="prodDescrpt"> {itemData?.productName}</p>
              <div className="productPrice__Wrap">
                <span className="iconDescrpt__wrapper mainPrice">
                  {/* &#8358; {itemData?.mainPrice} */}
                </span>
                <span className="slashedPrice">
                  {/* &#8358; {itemData?.slashedPrice} */}
                </span>
              </div>
              <div className="iconWithText__wrap">
                <span>
                  <button className="iconDescrpt__wrapper bg-white border-0">
                    <span>{IconStore.loveIconSmall}</span>
                    <span className="iconDescrpt">MOVE TO SAVED ITEMS</span>
                  </button>
                  <button
                    className="iconDescrpt__wrapper bg-white border-0"
                    onClick={() => removeFromCart(itemData.id)}
                  >
                    <span>{IconStore.deleteIconSmall}</span>
                    <span className="iconDescrpt">REMOVE</span>
                  </button>
                </span>
                <span className="mobilePlusMinusGrp">
                  <span className="plusCircleIcon">
                    {IconStore.plusCircleIcon}
                  </span>
                  <span>1</span>
                  <span className="minusCircleIcon">
                    {IconStore.minusCircleIcon}
                  </span>
                </span>
              </div>
            </div>
          </Row>
        </div>

        <div className="col-2 txt__contentgrp gr1">
          <div className="text-center">
            <FormControl>
              <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={itemNumber}
                onChange={handleChange}
                displayEmpty
                className={classes.numberSelect}
                MenuProps={{ classes: { paper: classes.menuPaper } }}
              >
                {/* THIS ONE-LINER JUST REPEATS FROM 1-10 */}
                {[...Array(11)]
                  .map((e, i) => (
                    <MenuItem value={i} key={i}>
                      {i}
                    </MenuItem>
                  ))
                  .slice(1)}
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="col-2 txt__contentgrp gr2 text-center">
          <p className="font-weight-bold">
            &#8358; {itemData?.mainPrice?.toLocaleString()}
          </p>
          <p className="previousUnitPrice">
            &#8358; {itemData?.slashedPrice?.toLocaleString()}
          </p>
          <div className="savdAmount">
            <span className="savdAmountText"> {props.savedAmountText}</span>
            <span>&#8358; {savedAmount?.toLocaleString()}</span>
          </div>
        </div>

        <div className="col-2 txt__contentgrp gr3 text-center ">
          <p className="font-weight-bold">&#8358; {singleItemTotal?.toLocaleString()}</p>
        </div>
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartMainItem);
