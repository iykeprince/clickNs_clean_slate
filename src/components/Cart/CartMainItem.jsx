import React from "react";
import { Row } from "react-bootstrap";
import IconStore from "../../assets/icons/IconStore";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

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

function CartMainItem(props) {
  const classes = useStyles();

  const [prefix, setPrefix] = React.useState(1);

  const handleChange = (event) => {
    setPrefix(event.target.value);
  };

  return (
    <div>
      <Row className="ctop__row">
        <div className="col-12 col-md-6">
          <Row className="prodDescrptGrp">
            <div className="col-2 pImage__wrapper">
              <img src={props.pImage} alt="productImage" className="pImage" />
            </div>

            <div className="col-10 pText__wrapper">
              <p className="selrText">Seller: {props.sellerText}</p>
              <p className="prodDescrpt"> {props.productName}</p>
              <div className="productPrice__Wrap">
                <span className="iconDescrpt__wrapper mainPrice">
                  {props.mainPrice}
                </span>
                <span className="slashedPrice">{props.slashedPrice}</span>
              </div>
              <div className="iconWithText__wrap">
                <span>
                  <span className="iconDescrpt__wrapper">
                    <span>{IconStore.loveIconSmall}</span>
                    <span className="iconDescrpt">MOVE TO SAVED ITEMS</span>
                  </span>
                  <span className="iconDescrpt__wrapper">
                    <span>{IconStore.deleteIconSmall}</span>
                    <span className="iconDescrpt">REMOVE</span>
                  </span>
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
                value={prefix}
                onChange={handleChange}
                displayEmpty
                className={classes.numberSelect}
                MenuProps={{ classes: { paper: classes.menuPaper } }}
              >
                {/* 
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem> 
                <MenuItem value={10}>10</MenuItem>
                */}

                {/* THIS ONE-LINER DOES THE COMMENTED CODE ABOVE */}
                {[...Array(11)].map((e, i) => (<MenuItem value={i} key={i}>{i}</MenuItem>)).slice(1)}
                
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="col-2 txt__contentgrp gr2 text-center">
          <p className="font-weight-bold">{props.unitPrice}</p>
          <p className="previousUnitPrice">{props.previousUnitPrice}</p>
          <div className="savdAmount">
            <span className="savdAmountText">{props.savedAmountText}</span>
            <span>{props.savedAmount}</span>
          </div>
        </div>

        <div className="col-2 txt__contentgrp gr3 text-center ">
          <p className="font-weight-bold">{props.subTotal}</p>
        </div>
      </Row>
    </div>
  );
}

export default CartMainItem;
