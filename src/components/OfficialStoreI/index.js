/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// import {  Container, Row, Col } from "react-bootstrap";
import { TableItems } from "./TableItems";
import TableContent from "./TableContent";

// import {  Form, Button,Container } from "react-bootstrap";

// import { NavLink } from "react-router-dom";

class AdminOrder extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="conatine">
          <h3 style={{ textAlign: "center" }}>Tablets Acessories</h3>
          <br />

          <div class="gridd-container">
            {TableItems.map((e, i) => {
              return (
                <TableContent key={i} img={e.img} info={e.info} />

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
