import React from "react";
// import{Button} from 'react-bootstrap';

class TableContent extends React.Component {
  render() {
    return (
      <React.Fragment>
  <div className="gridd-container">
  <div className="bp_card">


<div className="percentDiscount"  style={{ marginRight: "-28px !important"}} >

    <span className="percentDiscount__text"> {this.props.percentage}</span>
</div>
   <img
    src={this.props.img}
    className="ps_card_img"
    style={{width:"100%"}}
   alt=""
   />
   
   <div>
    <p>{this.props.info}</p>

    <p><b>₦ 100,000</b></p>


    <p style={{textDecoration:"line-through", textDecorationColor:"red"}}>
    ₦ 8000,000
    </p>
</div>

</div>
<br/>

</div>


   
    
   
  
 

      </React.Fragment>
    );
  }
}
export default TableContent;