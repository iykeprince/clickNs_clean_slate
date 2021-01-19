import React from "react";
import { OrderTableDataII } from "../../../DB/Categories/PhonenTabletData";
import { OrderTableData_SupermarketII } from "../../../DB/Categories/SupermarketData";
import TableContent from "../OrderTable/TableContent";

export function OrderTableII(props) {
    return (
      <React.Fragment>
        <div className="conatine">
        <h3 className="heading__Title text-center">{props.headingTitle}</h3>
          <br />

          <div className="gridd-container row">
            {OrderTableDataII.map((e, i) => {
              return <TableContent key={i} img={e.img} info={e.info} />;
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }

  export function ORDERTABLE_SUPERMARKETII(props) {
    return (
      <React.Fragment>
        <div className="conatine">
        <h3 className="heading__Title text-center">{props.headingTitle}</h3>
          <br />

          <div className="gridd-container row">
            {OrderTableData_SupermarketII.map((e, i) => {
              return <TableContent key={i} img={e.img} info={e.info} />;
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }