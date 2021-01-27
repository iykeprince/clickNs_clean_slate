import React from "react";
import LEFTCATSIDENAV_SUPERMARKET from "./Categories/PhonesnTablets/LeftCatSideNav";
import RIGHTCATSIDENAV_SUPERMARKET from "./Categories/PhonesnTablets/RightCatSideNav";

export default function CATSIDENAV_SUPERMARKET({ products }) {
  return (
    <div className="catSideNav__group">
      <LEFTCATSIDENAV_SUPERMARKET />
      <RIGHTCATSIDENAV_SUPERMARKET products={products} />
    </div>
  );
}
