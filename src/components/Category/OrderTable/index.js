import React from "react";
import { OrderTableData_BabyProducts } from "../../../DB/Categories/BabyProductsData";
import { OrderTableData_Computing } from "../../../DB/Categories/ComputingData";
import { OrderTableData_Electronics } from "../../../DB/Categories/ElectronicsData";
import { OrderTableData_Fashion } from "../../../DB/Categories/FashionData";
import { OrderTableData_Gaming } from "../../../DB/Categories/GamingData";
import { OrderTableData_HealthnBeauty } from "../../../DB/Categories/HealthnBeautyData";
import { OrderTableData_HomenOffice } from "../../../DB/Categories/HomenOfficeData";
import { OrderTableData_OtherCategories } from "../../../DB/Categories/OtherCategories";
import { OrderTableData } from "../../../DB/Categories/PhonenTabletData";
import { OrderTableData_Sports } from "../../../DB/Categories/SportsData";
import { OrderTableData_Supermarket } from "../../../DB/Categories/SupermarketData";
import TableContent from "./TableContent";

export function OrderTable(props) {
  return (
    <React.Fragment>
      <div className="conatine">
        <h3 className="heading__Title text-center">{props.headingTitle}</h3>

        <div className="gridd-container row">
          {OrderTableData.map((e, i) => {
            return <TableContent key={i} img={e.img} info={e.info} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export const OrderTable_BabyProduct = (props) => {
  return (
    <div className="conatine">
      <h3 className="heading__Title text-center">{props.headingTitle}</h3>

      <div className="gridd-container row">
        {OrderTableData_BabyProducts.map((e, i) => {
          return <TableContent key={i} img={e.img} info={e.info} />;
        })}
      </div>
    </div>
  );
};

export const OrderTable_Computing = (props) => {
  return (
    <div className="conatine">
      <h3 className="heading__Title text-center">{props.headingTitle}</h3>

      <div className="gridd-container row">
        {OrderTableData_Computing.map((e, i) => {
          return <TableContent key={i} img={e.img} info={e.info} />;
        })}
      </div>
    </div>
  );
};

export const OrderTable_Electronics = (props) => {
  return (
    <div className="conatine">
      <h3 className="heading__Title text-center">{props.headingTitle}</h3>

      <div className="gridd-container row">
        {OrderTableData_Electronics.map((e, i) => {
          return <TableContent key={i} img={e.img} info={e.info} />;
        })}
      </div>
    </div>
  );
};

export const OrderTable_Fashion = (props) => {
  return (
    <div className="conatine">
      <h3 className="heading__Title text-center">{props.headingTitle}</h3>

      <div className="gridd-container row">
        {OrderTableData_Fashion.map((e, i) => {
          return <TableContent key={i} img={e.img} info={e.info} />;
        })}
      </div>
    </div>
  );
};

export const OrderTable_Gaming = (props) => {
  return (
    <div className="conatine">
      <h3 className="heading__Title text-center">{props.headingTitle}</h3>

      <div className="gridd-container row">
        {OrderTableData_Gaming.map((e, i) => {
          return <TableContent key={i} img={e.img} info={e.info} />;
        })}
      </div>
    </div>
  );
};

export const OrderTable_HealthBeauty = (props) => {
  return (
    <div className="conatine">
      <h3 className="heading__Title text-center">{props.headingTitle}</h3>

      <div className="gridd-container row">
        {OrderTableData_HealthnBeauty.map((e, i) => {
          return <TableContent key={i} img={e.img} info={e.info} />;
        })}
      </div>
    </div>
  );
};

export const OrderTable_HomeOffice = (props) => {
  return (
    <div className="conatine">
      <h3 className="heading__Title text-center">{props.headingTitle}</h3>

      <div className="gridd-container row">
        {OrderTableData_HomenOffice.map((e, i) => {
          return <TableContent key={i} img={e.img} info={e.info} />;
        })}
      </div>
    </div>
  );
};

export const OrderTable_Others = (props) => {
  return (
    <div className="conatine">
      <h3 className="heading__Title text-center">{props.headingTitle}</h3>

      <div className="gridd-container row">
        {OrderTableData_OtherCategories.map((e, i) => {
          return <TableContent key={i} img={e.img} info={e.info} />;
        })}
      </div>
    </div>
  );
};

export const OrderTable_Sports = (props) => {
  return (
    <div className="conatine">
      <h3 className="heading__Title text-center">{props.headingTitle}</h3>

      <div className="gridd-container row">
        {OrderTableData_Sports.map((e, i) => {
          return <TableContent key={i} img={e.img} info={e.info} />;
        })}
      </div>
    </div>
  );
};

export const ORDERTABLE_SUPERMARKET = (props) => {
  return (
    <div className="conatine">
      <h3 className="heading__Title text-center">{props.headingTitle}</h3>

      <div className="gridd-container row">
        {OrderTableData_Supermarket.map((e, i) => {
          return <TableContent key={i} img={e.img} info={e.info} />;
        })}
      </div>
    </div>
  );
};
