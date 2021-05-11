import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
// import { Link } from "react-scroll";

function PaymentCardComponent() {
  return (
    <div className="font-sm">
      <span>MasterCard</span>
      <span>Visa</span>
      <span>Verve</span>
    </div>
  );
}

function CashComponent() {
  return <div className="font-sm">Payment on Delivery</div>;
}

export default function MobilePayment() {
  const [value, setValue] = React.useState("door");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div>
        <div className="d-flex justify-content-between font-xs font-weight-500 mt-3 px-3 pb-2">
          <span>ADDRESS DETAILS</span>
          <span>CHANGE</span>
        </div>

        <div className="bg-white py-3 pl-3 font-weight-500 font-sm">
          <div>Agent Tony</div>
          <div>Street Name</div>
          <div>Local Govt</div>
          <div>Mobile Number</div>
        </div>
      </div>

      <div className="mt-3">
        <div className="pl-3 pb-2 font-xs font-weight-500">
          SELECT A DELIVERY METHOD
        </div>

        <div className="bg-white py-3 pl-3">
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
                label={PaymentCardComponent()}
              />
              <FormControlLabel
                value="pickup"
                control={<Radio />}
                label={CashComponent()}
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="mx-auto font-xs py-2 pl-3 mt-2">
          Got a woozeee voucher code? use below
        </div>
      </div>

      <div className="py-3 px-3 bg-white">
        <span className="font-sm font-weight-500">Enter Voucher Code</span>
        <input type="text" className="col-12 border-0 bg-light rounded py-1 mt-2" />
        <div className="d-flex">
          <button
            className="px-4 border-0 bg-woozRed font-weight-500 font-sm text-white rounded py-2 mx-auto mt-3"
            style={{ width: "8rem" }}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
