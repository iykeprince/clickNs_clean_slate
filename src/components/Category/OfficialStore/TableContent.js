import React from "react";

class TableContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
          <div className="pse_card">
            <img src={this.props.img} className="ps_card_img" alt="iphone 11" />
          </div>
          <br />
        </div>
      </React.Fragment>
    );
  }
}
export default TableContent;
