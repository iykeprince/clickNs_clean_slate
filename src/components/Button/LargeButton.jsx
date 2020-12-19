import React from "react";
import "./LargeButton.scss";

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
