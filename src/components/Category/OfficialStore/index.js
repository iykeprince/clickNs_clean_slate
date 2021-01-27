import React from "react";
import TableContent from "./TableContent";

export function OfficialStore({ ...props }) {
  return (
    <React.Fragment>
      <div className="conatine">
        <h3 className="heading__Title text-center">{props.headingTitle}</h3>
        <br />
        <div class="gridd-container row">
          {props.OfficialStoreData.map((e, i) => {
            return <TableContent key={i} img={e.img} info={e.info} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
