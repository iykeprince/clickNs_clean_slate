import React from "react";

const TableContent = (props) => {
  return (
    <React.Fragment>
      <div className='col-lg-2 col-md-4 col-sm-6 col-6'>
        <div className="ps_card">
          <img src={props.img} className="ps_card_img" alt="iphone 11" />
        </div>
        <br />
        <b>
          <p>{props.info}</p>
        </b>
      </div>
    </React.Fragment>
  );
};

export default TableContent;

