import React from "react";
import LEFTCATSIDENAV_PHONENTABLET from "./Categories/PhonesnTablets/LeftCatSideNav";
import RIGHTCATSIDENAV_PHONENTABLET from "./Categories/PhonesnTablets/RightCatSideNav";
import LEFTCATSIDENAV_SUPERMARKET from "./Categories/Supermarket/LeftCatSideNav";
import RIGHTCATSIDENAV_SUPERMARKET from "./Categories/Supermarket/RightCatSideNav";

export function CATSIDENAV_PHONESNTABLET() {
    return (
      <div className='catSideNav__group'>
          <LEFTCATSIDENAV_PHONENTABLET/>
          <RIGHTCATSIDENAV_PHONENTABLET/>
      </div>
    );
  }


  export function CATSIDENAV_SUPERMARKET() {
    return (
      <div className='catSideNav__group'>
          <LEFTCATSIDENAV_SUPERMARKET/>
          <RIGHTCATSIDENAV_SUPERMARKET/>
      </div>
    );
  }
