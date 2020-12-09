import React from 'react';


class PhoneTabletContent extends React.Component {

    render(){


        return (
            <React.Fragment>

<div className="bpp_card">

<div className="percentDiscount"  style={{ marginRight: "-28px !important"}} >

    <span className="percentDiscount__text"> {this.props.percentage}</span>
</div>
   <img
    src={this.props.img}
    className="ps_card_img"
    style={{width:"100%"}}
   alt="iphone 11"
   />
</div>
<br/>
<div style={{float:"left !important"}}>
<div className="productName">
    <p>{this.props.productname} </p>
</div>  
<div className="currentProductPrice">
        <p>{this.props.currentprice}</p>
</div>

<div className="previousProductPrice">
        <p>{this.props.previousprice}</p>
</div>
</div>

            </React.Fragment>

        )
    }
}


export default PhoneTabletContent