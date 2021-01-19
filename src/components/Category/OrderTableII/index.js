import React from "react";
import { OrderTableDataII } from "../DB/PhonenTabletData";
import TableContent from "../OrderTable/TableContent";

export default function OrderTableII(props) {
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