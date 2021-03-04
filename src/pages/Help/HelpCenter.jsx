import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { RiCustomerService2Fill } from "react-icons/ri";
import { HelpSearch } from "../../components/Search/Search";
import placenTrackOrder from "../../assets/images/help-with-my-orders.png";
import cancellations from "../../assets/images/cancellationss.png";
import paymentAccount from "../../assets/images/payment-account-related---otherss.png";
import returnRefunds from "../../assets/images/returns---refunds.png";
import HelpCard from "../../components/Help/HelpCard";
import wpay from "../../assets/images/help/wpay.png";
import wprime from "../../assets/images/help/wprime.png";
import wglobal from "../../assets/images/help/wglobal.png";
import official_Stores from "../../assets/images/help/official-stores.png";

export default function HelpCenter() {
  return (
    <div>
      <Header />
      <div className="body__wrapper putAtMiddle">
        <div className="text-center d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex py-3 align-items-center">
            <RiCustomerService2Fill className="customer_img_icon mr-3" />
            <div className="text-left">
              <p className="font-weight-bold">HELP</p>
              <p>CENTER</p>
            </div>
          </div>
          <div className="py-3 customer_h2_txt text-primary font-weight-bold">
            woozeee Customer Care
          </div>
          <p className=" py-3">How can we help you?</p>
          <div className="w-100 py-1">
            <HelpSearch />
            <div className="d-flex justify-content-around font-sm mt-3">
              <div>
                <img
                  src={placenTrackOrder}
                  alt=""
                  className="helpCenter__images p-2"
                />
                <p className="p-2">Place and Track Order</p>
              </div>
              <div>
                <img
                  src={cancellations}
                  alt=""
                  className="helpCenter__images p-2"
                />
                <p className="p-2">Order Cancellation</p>
              </div>
              <div>
                <img
                  src={paymentAccount}
                  alt=""
                  className="helpCenter__images p-2"
                />
                <p className="p-2">Return and Refunds</p>
              </div>
              <div>
                <img
                  src={returnRefunds}
                  alt=""
                  className="helpCenter__images p-2"
                />
                <p className="p-2">Payment and woozeee Account</p>
              </div>
            </div>
          </div>
          <div>
            <div className="row my-5 helpcard__wrapper">
            <HelpCard text="Get millions of products coming from abroad at incredible prices" imgUrl={wpay}/>
            <HelpCard text="Get millions of products coming from abroad at incredible prices" imgUrl={wprime}/>
            <HelpCard text="Get millions of products coming from abroad at incredible prices" imgUrl={wglobal}/>
            <HelpCard text="Get millions of products coming from abroad at incredible prices" imgUrl={official_Stores}/>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
