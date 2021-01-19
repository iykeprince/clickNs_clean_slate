import React from "react";
import { PriceSlashDataIV } from "../../../DB/Categories/PhonenTabletData";
import TableContent from "../PriceSlash/TableContent";
import * as FaIcon from "react-icons/fa";
import { PriceSlashData_SupermarketIV } from "../../../DB/Categories/SupermarketData";

export function PriceSlashIV(props) {
    return (
      <React.Fragment>
        <div className="conatine">
          <div className="bp-span">
            <span>SEE ALL</span> <FaIcon.FaAngleRight />
          </div>

          <h3 className="heading__Title">{props.headingTitle}</h3>

          <div class="griddd-container">
            {PriceSlashDataIV.map((e, i) => {
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

  export function PRICESLASH_SUPERMARKETIV(props) {
    return (
      <React.Fragment>
        <div className="conatine">
          <div className="bp-span">
            <span>SEE ALL</span> <FaIcon.FaAngleRight />
          </div>

          <h3 className="heading__Title">{props.headingTitle}</h3>

          <div class="griddd-container">
            {PriceSlashData_SupermarketIV.map((e, i) => {
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