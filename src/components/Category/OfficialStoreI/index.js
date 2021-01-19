import React from "react";
import { OfficialStoreDataI } from "../DB/PhonenTabletData";
import TableContent from "../OfficialStore/TableContent";

export default function OfficialStoreI(props) {
    return (
      <React.Fragment>
        <div className="conatine">
        <h3 className="heading__Title text-center">{props.headingTitle}</h3>
          <br />

          <div class="gridd-container row">
            {OfficialStoreDataI.map((e, i) => {
              return (
                <TableContent key={i} img={e.img} info={e.info} />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }

