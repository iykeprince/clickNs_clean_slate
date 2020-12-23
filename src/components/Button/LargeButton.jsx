import React from "react";
import "./LargeButton.scss";


//VERSION 1 - Fixed style, but dynamic button text

const LargeButton = (props) => {
  return (
    <React.Fragment>
      <button type="button" className="largeButton">
        {props.buttonName}
      </button>
    </React.Fragment>
  );
};

export default LargeButton;