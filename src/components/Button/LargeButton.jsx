import React from "react";


//TO UPDATE VERSION - From Fixed style, dynamic button text to dynamic style and button using props.className

const LargeButton = (props) => {
  return (
    <React.Fragment>
      <button type="button" className="largeButton" onClick={props.onButtonClick}>
        {props.buttonName}
      </button>
    </React.Fragment>
  );
};

export default LargeButton;