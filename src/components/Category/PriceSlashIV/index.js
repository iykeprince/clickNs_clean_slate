import React from "react";
import { PriceSlashDataIV } from "../DB/PhonenTabletData";
import TableContent from "../PriceSlash/TableContent";
import * as FaIcon from "react-icons/fa";

export default function PriceSlashIV(props) {
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