import React from "react";
import { DynamicButtonTwo } from "../Button/DynamicButton";

export const VoucherInput = () => {
    return (
      <div className="header__voucher">
        <input
          type="text"
          className="header__voucherInput rounded-0"
          placeholder="Enter voucher / SureGifts code here"
        />
        <DynamicButtonTwo
            color="white"
            width="10rem"
            height="40px"
            backgroundColor="var(--woozBlue)"
            boxShadow="none"
            borderRadius="0px"
            border="none !important"
            marginBottom=""
            fontWeight="500"
            fontSize="0.875rem"
            hoverBoxShadow="0 4px 8px 0 rgb(0 0 0 / 15%)"
          >
            ADD VOUCHER
          </DynamicButtonTwo>
      </div>
    );
  };
  