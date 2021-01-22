import React from "react";
// import{Button} from 'react-bootstrap';

class TableContent extends React.Component {
  render() {
    return (
      <React.Fragment>
  <div className="gridd-container col-lg-2 col-md-4 col-sm-6 col-6">
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
   <br/>
   <br/>
   <div >
    <p style={{paddingLeft:"9px !important" }}>{this.props.info}</p>

    <p style={{paddingLeft:"9px !important" }}><b>₦ 100,000</b></p>


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
//   <tr ></tr> <td>{this.props.i + 1}</td>  <td>{this.props.order} </td>
// <td>{this.props.date} <br/> <br/> <img alt="proper" className="order_img" src="./img/Rectangle 28.png"/></td>
// <td>{this.props.amount}</td>
// <td>{this.props.payment}</td>
// <td > <Button className="order_but"> {this.props.delivery}</Button></td>
// </tr> 