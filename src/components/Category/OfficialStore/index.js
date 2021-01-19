import React from "react";
import { OfficialStoreData_BabyProducts } from "../../../DB/Categories/BabyProductsData";
import { OfficialStoreData_Computing } from "../../../DB/Categories/ComputingData";
import { OfficialStoreData_Electronics } from "../../../DB/Categories/ElectronicsData";
import { OfficialStoreData_Fashion } from "../../../DB/Categories/FashionData";
import { OfficialStoreData_Gaming } from "../../../DB/Categories/GamingData";
import { OfficialStoreData_HealthnBeauty } from "../../../DB/Categories/HealthnBeautyData";
import { OfficialStoreData_HomenOffice } from "../../../DB/Categories/HomenOfficeData";
import { OfficialStoreData_OtherCategories } from "../../../DB/Categories/OtherCategories";
import { OfficialStoreData } from "../../../DB/Categories/PhonenTabletData";
import { OfficialStoreData_Sports } from "../../../DB/Categories/SportsData";
import { OfficialStoreData_Supermarket } from "../../../DB/Categories/SupermarketData";
import TableContent from "./TableContent";


export function OfficialStore(props) {
    return (
      <React.Fragment>
        <div className="conatine">
        <h3 className="heading__Title text-center">{props.headingTitle}</h3>
          <br />

          <div class="gridd-container row">
            {OfficialStoreData.map((e, i) => {
              return (
                <TableContent key={i} img={e.img} info={e.info} />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }

//ALL YOU NEED TO DO IS TO JUST DUPLICATE THIS EXPORT FUNCTION FOR OTHER CATEGORIES, AND REPLACE
// THE DATA, I.E OFFICIALSTOREDATA WITH THE ONE IN ITS CORRESPONDING DB FILE!

export const OfficialStore_BabyProduct = (props) => {
  return (
    <div className="conatine">
        <h3 className="heading__Title text-center">{props.headingTitle}</h3>
          <br />

          <div class="gridd-container row">
            {OfficialStoreData_BabyProducts.map((e, i) => {
              return (
                <TableContent key={i} img={e.img} info={e.info} />
              );
            })}
          </div>
        </div>
  )
}


export const OfficialStore_Computing = (props) => {
  return (
    <div className="conatine">
        <h3 className="heading__Title text-center">{props.headingTitle}</h3>
          <br />

          <div class="gridd-container row">
            {OfficialStoreData_Computing.map((e, i) => {
              return (
                <TableContent key={i} img={e.img} info={e.info} />
              );
            })}
          </div>
        </div>
  )
}



export const OfficialStore_Electronics = (props) => {
  return (
    <div className="conatine">
        <h3 className="heading__Title text-center">{props.headingTitle}</h3>
          <br />

          <div class="gridd-container row">
            {OfficialStoreData_Electronics.map((e, i) => {
              return (
                <TableContent key={i} img={e.img} info={e.info} />
              );
            })}
          </div>
        </div>
  )
}




export const OfficialStore_Fashion = (props) => {
  return (
    <div className="conatine">
        <h3 className="heading__Title text-center">{props.headingTitle}</h3>
          <br />

          <div class="gridd-container row">
            {OfficialStoreData_Fashion.map((e, i) => {
              return (
                <TableContent key={i} img={e.img} info={e.info} />
              );
            })}
          </div>
        </div>
  )
}



export const OfficialStore_Gaming = (props) => {
  return (
    <div className="conatine">
        <h3 className="heading__Title text-center">{props.headingTitle}</h3>
          <br />

          <div class="gridd-container row">
            {OfficialStoreData_Gaming.map((e, i) => {
              return (
                <TableContent key={i} img={e.img} info={e.info} />
              );
            })}
          </div>
        </div>
  )
}


export const OfficialStore_HealthBeauty = (props) => {
  return (
    <div className="conatine">
        <h3 className="heading__Title text-center">{props.headingTitle}</h3>
          <br />

          <div class="gridd-container row">
            {OfficialStoreData_HealthnBeauty.map((e, i) => {
              return (
                <TableContent key={i} img={e.img} info={e.info} />
              );
            })}
          </div>
        </div>
  )
}

export const OfficialStore_HomeOffice = (props) => {
  return (
    <div className="conatine">
        <h3 className="heading__Title text-center">{props.headingTitle}</h3>
          <br />

          <div class="gridd-container row">
            {OfficialStoreData_HomenOffice.map((e, i) => {
              return (
                <TableContent key={i} img={e.img} info={e.info} />
              );
            })}
          </div>
        </div>
  )
}


export const OfficialStore_Others = (props) => {
  return (
    <div className="conatine">
        <h3 className="heading__Title text-center">{props.headingTitle}</h3>
          <br />

          <div class="gridd-container row">
            {OfficialStoreData_OtherCategories.map((e, i) => {
              return (
                <TableContent key={i} img={e.img} info={e.info} />
              );
            })}
          </div>
        </div>
  )
}

export const OfficialStore_Sports = (props) => {
  return (
    <div className="conatine">
        <h3 className="heading__Title text-center">{props.headingTitle}</h3>
          <br />

          <div class="gridd-container row">
            {OfficialStoreData_Sports.map((e, i) => {
              return (
                <TableContent key={i} img={e.img} info={e.info} />
              );
            })}
          </div>
        </div>
  )
}


export const OFFICIALSTORE_SUPERMARKET = (props) => {
  return (
    <div className="conatine">
        <h3 className="heading__Title text-center">{props.headingTitle}</h3>
          <br />

          <div class="gridd-container row">
            {OfficialStoreData_Supermarket.map((e, i) => {
              return (
                <TableContent key={i} img={e.img} info={e.info} />
              );
            })}
          </div>
        </div>
  )
}
