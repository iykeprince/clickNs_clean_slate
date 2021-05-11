import React from "react";

export default function MobileSummary() {
  return (
    <div>
      <div className="mt-2">
        <div>YOUR ORDER</div>
        <div className="px-3">
          <div className="d-flex align-items-center justify-content-between font-sm">
            <div>Subtotal</div>
            <div> &#8358; {Number(220000).toLocaleString()}</div>
          </div>
          <div className="d-flex align-items-center justify-content-between font-sm pb-3">
            <div>Shipping Fee</div>
            <div>&#8358; {Number(700).toLocaleString()}</div>
          </div>
          <div className="font-weight-600 d-flex align-items-center justify-content-between pt-3 border-top">
            <div>Total</div>
            <div className="text-woozRed">
              &#8358; {Number(700).toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <div className="d-flex justify-content-between">
          <span>ADDRESS DETAILS</span>
          <span>CHANGE</span>
        </div>

        <div>
          <div> Agent Tony</div>
          <div>Street Name</div>
          <div>Local Govt</div>
          <div>Mobile Number</div>
        </div>
      </div>

      <div className="mt-2">
        <div className="d-flex justify-content-between">
          <span>ADDRESS DETAILS</span>
          <span>CHANGE</span>
        </div>

        <div className="py-3">
          <div>Door Delivery</div>
          <div>Delivery between Tuesday 24 Dec and Tuesday 31 Dec for N600</div>
        </div>
      </div>

      <div className="mt-2">
        <div className="d-flex justify-content-between">
          <span>PAYMENT METHOD</span>
          <span>CHANGE</span>
        </div>

        <div className="bg-white py-3">Payment on Delivery</div>
      </div>
    </div>
  );
}
