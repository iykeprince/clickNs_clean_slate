import React from "react";
import CheckoutRowOne from "../../components/CheckOut/CheckoutRowOne";
import Footer from "../../components/Footer/Footer";
import HeaderThree from "../../components/Header/HeaderThree";
import useWindowDimensions from "../../Hooks/UseWindowDimension";
import MobileStepper from "./MobileStepper";

function CheckOut() {
  const { width } = useWindowDimensions();
  return (
    <div>
      <HeaderThree />
      {width > 576 ? (
        <div className="body__wrapper putAtMiddle">
          <CheckoutRowOne />
        </div>
      ) : (
        <MobileStepper />
      )}
      <Footer />
    </div>
  );
}

export default CheckOut;
