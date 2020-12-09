/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// import {  Container, Row, Col } from "react-bootstrap";
import { TableItems } from "./TableItems";
import TableContent from './TableContent';
import * as FaIcon from "react-icons/fa"


// import {  Form, Button,Container } from "react-bootstrap";

// import { NavLink } from "react-router-dom";

class AdminOrder extends React.Component {
  render() {
    return (
      <React.Fragment>


   
        
<div className="conatine">
<div className="bp-span">
<span >SEE ALL</span>    <FaIcon.FaAngleRight />
</div>
        
<h3 style={{textAlign:"left !important"}}>Mobile Game Controllers</h3>

        <div class="griddd-container">
   {TableItems.map((e, i) => {
              return (
                <TableContent key={i} img={e.img} info={e.info}    price={e.price}
                slashed={e.slashed} percentage={e.percentage}/>

                // <TableContent key={i} url={e.url}/>
              );
            })}
</div>

</div>
      </React.Fragment>
    );
  }
}

export default AdminOrder;
