import React from "react";
import LargeButton from "../Button/LargeButton";
import PasswordUI from "./PasswordUI";

function ChangePasswordUI() {
  return (
    <div className="changePassword__wrapper">
      <h3 className="titleHeader">Change Password</h3>

      <form action="">
        <PasswordUI labelName="Current Password" />

        <br />
        <br />
        <br />

        <PasswordUI labelName="New Password" />

        <br />
        <br />
        <br />

        <PasswordUI labelName="Retype New Password" />
      </form>

      <div className="passButton__wrapper">
        <LargeButton buttonName="SUBMIT" />
      </div>
    </div>
  );
}

export default ChangePasswordUI;
