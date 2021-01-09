import React from "react";
import { Row } from "react-bootstrap";
import IconStore from "../../store/IconStore";

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
    paddingRight: "0.8rem !important"
  },
}));

function CartMainItem(props) {
  const classes = useStyles();

  const [prefix, setPrefix] = React.useState("");

  const handleChange = (event) => {
    setPrefix(event.target.value);
  };

  return (
    <div>
      <Row className="ctop__row">
        <div className="col-6">
          <Row className="prodDescrptGrp">
            <div className="col-2 pImage__wrapper">
              <img src={props.pImage} alt="productImage" className="pImage" />
            </div>

            <div className="col-10">
              <p className="selrText">Seller: {props.sellerText}</p>
              <p className="prodDescrpt">
                Galaxy A50 6.4-Inch (4GB,128GB ROM) Android 9 Pie, (25MP+5MP+
                8MP)+ 25MP 4000mAh 4G Dual SIM Smartphone - White
              </p>
              <div>
                <span className="iconDescrpt__wrapper">
                  <span>{IconStore.loveIconSmall}</span>
                  <span className="iconDescrpt">MOVE TO SAVED ITEMS</span>
                </span>
                <span className="iconDescrpt__wrapper">
                  <span>{IconStore.deleteIconSmall}</span>
                  <span className="iconDescrpt">REMOVE</span>
                </span>
              </div>
            </div>
          </Row>
        </div>

        <div className="col-2 txt__contentgrp gr1">
          <div className="text-center">
            <FormControl 
            >
              <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={prefix}
                onChange={handleChange}
                displayEmpty
                className={classes.numberSelect}
              >
                <MenuItem value="">
                  <p>1</p>
                </MenuItem>
                <MenuItem value={235}>2</MenuItem>
                <MenuItem value={236}>3</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="col-2 txt__contentgrp gr2 text-center">
          <p className="font-weight-bold">{props.unitPrice}</p>
          <p className='previousUnitPrice'>{props.previousUnitPrice}</p>
          <div className='savdAmount'>
          <span className='savdAmountText'>{props.savedAmountText}</span>
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
