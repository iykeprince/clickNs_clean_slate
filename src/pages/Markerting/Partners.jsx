import React from "react";
import Header from "../../components/Header/Header";
import NewFooter from "../../components/Footer/NewFooter";
// import DynamicButton from "../../components/Button/DynamicButton";
// import { Link } from "react-router-dom";
import AddressForm from "../../components/Form/AddressForm";

export default function Partners() {
  return (
    <div>
      <Header />

      <div className="body__wrapper putAtMiddle">
        {/* <div className="mt-4 bg-white"> */}
        <div className="prodWrapper mb-5">
          <div className="prodBigWrapper">
            <div className="text-center pt-3">
              <h3 className="text-primary">
                Want to Become a woozeee Partner?
              </h3>
              <p className="py-4">
                Jumia has multifold opportunities in field of express logistics
                in last mile delivery and line haul. If you are willing to
                partner with us, please fill the following form to register your
                interest.
              </p>
            </div>
            <AddressForm />
          </div>
        </div>
      </div>
      <NewFooter />
    </div>
  );
}
