import React from "react";
import { PriceSlashData } from "../../../DB/Categories/PhonenTabletData";
import TableContent from "./TableContent";
import * as FaIcon from "react-icons/fa";
import { PriceSlashData_Supermarket } from "../../../DB/Categories/SupermarketData";

export function PriceSlash(props) {
  return (
    <React.Fragment>
      <div className="conatine">
        <div className="bp-span">
          <span>SEE ALL</span> <FaIcon.FaAngleRight />
        </div>

        <h3 className="heading__Title">{props.headingTitle}</h3>

        <div class="griddd-container row">
          {PriceSlashData.map((e, i) => {
            return (
              <TableContent
                key={i}
                img={e.img}
                info={e.info}
                price={e.price}
                slashed={e.slashed}
                percentage={e.percentage}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}


export function PRICESLASH_SUPERMARKET(props) {
  return (
    <React.Fragment>
      <div className="conatine">
        <div className="bp-span">
          <span>SEE ALL</span> <FaIcon.FaAngleRight />
        </div>

        <h3 className="heading__Title">{props.headingTitle}</h3>

        <div class="griddd-container row">
          {PriceSlashData_Supermarket.map((e, i) => {
            return (
              <TableContent
                key={i}
                img={e.img}
                info={e.info}
                price={e.price}
                slashed={e.slashed}
                percentage={e.percentage}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}