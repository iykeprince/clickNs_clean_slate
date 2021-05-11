import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const DoorDeliveryComponent = () => {
  <>
    <div>Door Delivery</div>
    <div>Delivery between Tuesday 24 Dec and Tuesday 31 Dec for N600</div>
  </>;
};

const PickupComponent = () => {
    <>
      <div>Pickup Station</div>
      <div>Ready for Pickup between Tuesday 24 Dec and Tuesday 31 Dec for N600</div>
    </>;
  };

export default function MobileDelivery() {
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
              <FormControlLabel value="door" control={<Radio />} label={<DoorDeliveryComponent/>} />
              <FormControlLabel value="pickup" control={<Radio />} label={<PickupComponent/>} />
            </RadioGroup>
          </FormControl>
        </div>
     
        <div className="mx-auto font-weight-600 bg-woozRed py-2">Select Station Nearest to you</div>
      </div>
   </div>
  );
}
