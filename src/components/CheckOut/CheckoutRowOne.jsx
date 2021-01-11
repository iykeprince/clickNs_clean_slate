import React from "react";
import IconStore from "../../store/IconStore";

import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import CheckListItem from "./CheckListItem";
import { Link } from "react-router-dom";

function CheckoutRowOne() {
  const [value, setValue] = React.useState("firstChoice");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="checkout_row">
      <div className="row checkout__body">
        <div className="col-md-9">
          <div className="check_top_wrapper">
            <p className="checkoutTxt">CHECKOUT</p>
            <div className="addressCheckout_leftTop">
              <div className="check__addressTitle">
                <div className='listInfoSection__infoIconGrp'>
                  <span  className='listInfoSection__infoIcon'>{IconStore.coloredCheckMark}</span>
                  <span className="checktitle__numbr">1. </span>
                  <span className="checktitle__name">ADDRESS DETAILS</span>
                </div>
                <div>
                  <Link>
                    <p className="checktitle__fn">CHANGE</p>
                  </Link>
                </div>
              </div>
              <div className="check__addressDetail">
                <p className='prsnName'>Bukky Owolabi </p>
                <p> 60 Landbridge</p>
                <p>Oniru-Estate Victoria, Lagos </p>
                <p> +2348100892368</p>
              </div>
            </div>

            <div className="addressCheckout_leftBottom">
              <div className="check__deliveryTitle">
                <span className='listInfoSection__infoIcon'>{IconStore.greyedCheckMark}</span>
                <span className="checktitle__numbr">2. </span>
                <span className="checktitle__name">DELIVERY METHOD</span>
              </div>
              <div className="deliveryMethod__details">
                <p className="deliveryMethod__descrip">How do you want your order delivered? </p>

                <div className="check_formcontrol">
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="choice"
                      name="choice1"
                      value={value}
                      onChange={handleChange}
                    >
                      <CheckListItem
                        choiceNumber="firstChoice"
                        labelName="Nigerian Postal Service"
                        txt1="Delivered between "
                        deliveryDate1="Thursday 17 Dec "
                        txt2="and "
                        deliveryDate2="Monday 1 Feb "
                        txt3="for zero delivery fee"
                        data1="You cannot return this item for Change of mind reason"
                        data2a="This item will be delivered by the local postal provider, not by woozeee. Hence no tracking will be available"
                        data3="You should expect delivery within 30 to 50 days from when it
                        is shipped. We will send you a communication once the item is
                        shipped from overseas and also when it reaches Nigeria. You
                        should expect delivery within 7 days of item reaching Nigeria."
                        data4="The Nigeria postal service provider will try to deliver the
                        package to your address but in exceptional circumstances may
                        ask you to collect the item from their nearest office."
                        data5="You may have to make an additional payment for customs fees
                        and taxes as required by the postal office at delivery."
                        data6a="See "
                        data6b="https://www.woozeee.com"
                        data6c=" for more details."
                      />
                      <hr className="listItem_seperator" />
                      <CheckListItem
                        choiceNumber="secondChoice"
                        labelName="Door Delivery"
                        txt1="Delivered between "
                        deliveryDate1="Tuesday 22 Dec "
                        txt2="and "
                        deliveryDate2="Tuesday 5 Jan "
                        txt3="for N450"
                        data1="Large items (e.g. Freezers) may arrive 2 business days later than other products."
                        data2a="Living in Lagos, Abuja or Ibadan, woozeee Prime Members enjoy Free Delivery on "
                        data2b="woozeee Prime "
                        data2c="Members enjoy Free Delivery on woozeee Express Items (excluding bulky items)."
                        data3=" Kindly confirm your delivery address is accessible before placing your order"
                        data4="Receive free delivery on your woozeee express orders above N12,000 in Lagos"
                        data5="You may have to make an additional payment for customs fees
                        and taxes as required by the postal office at delivery."
                        data7="The International Shipping and custom Fee is NON-REFUNDABLE in case of a return"
                      />
                      <hr className="listItem_seperator" />
                      <CheckListItem
                        choiceNumber="thirdChoice"
                        labelName="Pickup Station (Cheaper Shipping Fees)"
                        txt1="Ready for pickup between "
                        deliveryDate1="Tuesday 22 Dec "
                        txt2="and "
                        deliveryDate2="Tuesday 5 Jan "
                        txt3="with cheaper shipping fees"
                        data1="Large items (e.g. Freezers) may arrive 2 business days later than other products."
                        data2a="Living in Lagos, Abuja or Ibadan, woozeee Prime Members enjoy Free Delivery on "
                        data2b="woozeee Prime "
                        data2c="Members enjoy Free Delivery on woozeee Express Items (excluding bulky items)."
                        data3=" Kindly confirm your delivery address is accessible before placing your order"
                        data4="Receive free delivery on your woozeee express orders above N12,000 in Lagos"
                        data5="You may have to make an additional payment for customs fees
                        and taxes as required by the postal office at delivery."
                        data7="The International Shipping and custom Fee is NON-REFUNDABLE in case of a return"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <p className="checkoutTxt">ORDER SUMMARY</p>
          <div className="addressCheckout_rightTop h-25">
            <div className="check__orderTitle">
              <span className="ordertitle__numbr">YOUR ORDER (1 Item)</span>
            </div>
            <div className="check__orderDetail">
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutRowOne;
