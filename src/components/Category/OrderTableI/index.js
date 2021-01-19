import React from "react";
import { OrderTableDataI } from "../../../DB/Categories/PhonenTabletData";
import { OrderTableData_SupermarketI } from "../../../DB/Categories/SupermarketData";
import TableContent from "../OrderTable/TableContent";

export function OrderTableI(props) {
    return (
      <React.Fragment>
        <div className="conatine">
        <h3 className="heading__Title text-center">{props.headingTitle}</h3>
          <br />

          <div className="ogridd-container row">
            {OrderTableDataI.map((e, i) => {
              return <TableContent key={i} img={e.img} info={e.info} />;
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }

  export function ORDERTABLE_SUPERMARKETI(props) {
    return (
      <React.Fragment>
        <div className="conatine">
        <h3 className="heading__Title text-center">{props.headingTitle}</h3>
          <br />

          <div className="ogridd-container row">
            {OrderTableData_SupermarketI.map((e, i) => {
              return <TableContent key={i} img={e.img} info={e.info} />;
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
