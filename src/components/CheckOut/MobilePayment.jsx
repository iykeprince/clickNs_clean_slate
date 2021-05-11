import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
// import { Link } from "react-scroll";

const PaymentCardComponent = () => {
  <div>
    <span>MasterCard</span>
    <span>Visa</span>
    <span>Verve</span>
  </div>;
};

const CashComponent = () => {
  <div>Payment on Delivery</div>;
};

export default function MobilePayment() {
  const [value, setValue] = React.useState("door");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div>
        <div className="d-flex justify-content-between">
          <span>ADDRESS DETAILS</span>
          <span>CHANGE</span>
        </div>

        <div className="bg-white pt-3 pl-3">
          <div>Agent Tony</div>
          <div>Street Name</div>
          <div>Local Govt</div>
          <div>Mobile Number</div>
        </div>
      </div>

      <div>
        <div>SELECT A DELIVERY METHOD</div>

        <div className="bg-white pt-3 pl-3">
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="DeliveriesOptions"
              name="deliveriesOptions"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="door"
                control={<Radio />}
                label={<PaymentCardComponent />}
              />
              <FormControlLabel
                value="pickup"
                control={<Radio />}
                label={<CashComponent />}
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="mx-auto font-weight-600 bg-woozRed py-2">
          Got a woozeee voucher code? use below
        </div>
      </div>

      <div className="py-3 mx-3 bg-white">
        <span>Enter Voucher Code</span>
        <input type="text" className="col-12 border-0"/>
        <button className="col-6 mx-auto border-0 bg-woozRed font-weight-500 font-sm">Apply</button>
      </div>
    </div>
  );
}
