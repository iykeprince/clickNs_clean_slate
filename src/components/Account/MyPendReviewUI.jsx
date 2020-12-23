import React from "react";
import { Link } from "react-router-dom";
import IconStore from "../../store/IconStore";
import LargeButton from "../Button/LargeButton";
import NoDataUI from "./NoDataUI";

function MyPendReviewUI() {
  return (
    <div>
      <h3 className="titleHeader mbottom">Pending Reviews</h3>

      <NoDataUI
        Image={IconStore.calendarIcon}
        Topic="You have no orders waiting for feedback"
        Explanation="After getting your products delivered, 
        you will be able to rate and review them. 
        Your feedback will be published on the product 
        page to help all woozeee's users get the best shopping experience!"
      />

      <div className="button__wrap">
      <Link to='/'><LargeButton buttonName="CONTINUE SHOPPING" /></Link>
      </div>
    </div>
  );
}

export default MyPendReviewUI;
