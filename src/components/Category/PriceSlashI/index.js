import React from "react";
import { PriceSlashDataI } from "../../../DB/Categories/PhonenTabletData";
import TableContent from "../PriceSlash/TableContent";
import * as FaIcon from "react-icons/fa";
import { PriceSlashData_SupermarketI } from "../../../DB/Categories/SupermarketData";

export function PriceSlashI(props) {
    return (
      <React.Fragment>
        <div className="conatine">
          <div className="bp-span">
            <span>SEE ALL</span> <FaIcon.FaAngleRight />
          </div>

          <h3 className="heading__Title">{props.headingTitle}</h3>

          <div class="griddd-container row">
            {PriceSlashDataI.map((e, i) => {
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

  export function PRICESLASH_SUPERMARKETI(props) {
    return (
      <React.Fragment>
        <div className="conatine">
          <div className="bp-span">
            <span>SEE ALL</span> <FaIcon.FaAngleRight />
          </div>

          <h3 className="heading__Title">{props.headingTitle}</h3>

          <div class="griddd-container row">
            {PriceSlashData_SupermarketI.map((e, i) => {
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