import React from "react";
// import{Button} from 'react-bootstrap';

class TableContent extends React.Component {
  render() {
    return (
      <React.Fragment>
  
        <div className='col-lg-2 col-md-4 col-sm-6 col-6'>
          <div className="ps_card">
           <img
            src={this.props.img}
            className="ps_card_img"
           alt="iphone 11"
           />
           </div>
           <br/>
          {/* <b><p>{this.props.info}</p></b>  */}
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