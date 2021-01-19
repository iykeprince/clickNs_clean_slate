import React from "react";
import { OfficialStoreData_BabyProductsI } from "../../../DB/Categories/BabyProductsData";
import {OfficialStoreData_ComputingI } from "../../../DB/Categories/ComputingData";
import { OfficialStoreData_ElectronicsI } from "../../../DB/Categories/ElectronicsData";
import { OfficialStoreData_FashionI } from "../../../DB/Categories/FashionData";
import { OfficialStoreData_GamingI } from "../../../DB/Categories/GamingData";
import { OfficialStoreData_HealthnBeautyI } from "../../../DB/Categories/HealthnBeautyData";
import { OfficialStoreData_HomenOfficeI } from "../../../DB/Categories/HomenOfficeData";
import { OfficialStoreData_OtherCategoriesI } from "../../../DB/Categories/OtherCategories";
import { OfficialStoreDataI } from "../../../DB/Categories/PhonenTabletData";
import { OfficialStoreData_SportsI } from "../../../DB/Categories/SportsData";
import { OfficialStoreData_SupermarketI } from "../../../DB/Categories/SupermarketData";
import TableContent from "../OfficialStore/TableContent";

export function OfficialStoreI(props) {
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


//ALL YOU NEED TO DO IS TO JUST DUPLICATE THIS EXPORT FUNCTION FOR OTHER CATEGORIES, AND REPLACE
// THE DATA, I.E OFFICIALSTOREDATA WITH THE ONE IN ITS CORRESPONDING DB FILE!

export const OfficialStoreI_BabyProduct = (props) => {
  return (
    <div className="conatine">
    <h3 className="heading__Title text-center">{props.headingTitle}</h3>
      <br />

      <div class="gridd-container row">
        {OfficialStoreData_BabyProductsI.map((e, i) => {
          return (
            <TableContent key={i} img={e.img} info={e.info} />
          );
        })}
      </div>
    </div>
  )
}


export const OfficialStoreI_Computing = (props) => {
  return (
    <div className="conatine">
    <h3 className="heading__Title text-center">{props.headingTitle}</h3>
      <br />

      <div class="gridd-container row">
        {OfficialStoreData_ComputingI.map((e, i) => {
          return (
            <TableContent key={i} img={e.img} info={e.info} />
          );
        })}
      </div>
    </div>
  )
}



export const OfficialStoreI_Electronics = (props) => {
  return (
    <div className="conatine">
    <h3 className="heading__Title text-center">{props.headingTitle}</h3>
      <br />

      <div class="gridd-container row">
        {OfficialStoreData_ElectronicsI.map((e, i) => {
          return (
            <TableContent key={i} img={e.img} info={e.info} />
          );
        })}
      </div>
    </div>
  )
}




export const OfficialStoreI_Fashion = (props) => {
  return (
    <div className="conatine">
    <h3 className="heading__Title text-center">{props.headingTitle}</h3>
      <br />

      <div class="gridd-container row">
        {OfficialStoreData_FashionI.map((e, i) => {
          return (
            <TableContent key={i} img={e.img} info={e.info} />
          );
        })}
      </div>
    </div>
  )
}



export const OfficialStoreI_Gaming = (props) => {
  return (
    <div className="conatine">
    <h3 className="heading__Title text-center">{props.headingTitle}</h3>
      <br />

      <div class="gridd-container row">
        {OfficialStoreData_GamingI.map((e, i) => {
          return (
            <TableContent key={i} img={e.img} info={e.info} />
          );
        })}
      </div>
    </div>
  )
}


export const OfficialStoreI_HealthBeauty = (props) => {
  return (
    <div className="conatine">
    <h3 className="heading__Title text-center">{props.headingTitle}</h3>
      <br />

      <div class="gridd-container row">
        {OfficialStoreData_HealthnBeautyI.map((e, i) => {
          return (
            <TableContent key={i} img={e.img} info={e.info} />
          );
        })}
      </div>
    </div>
  )
}

export const OfficialStoreI_HomeOffice = (props) => {
  return (
    <div className="conatine">
    <h3 className="heading__Title text-center">{props.headingTitle}</h3>
      <br />

      <div class="gridd-container row">
        {OfficialStoreData_HomenOfficeI.map((e, i) => {
          return (
            <TableContent key={i} img={e.img} info={e.info} />
          );
        })}
      </div>
    </div>
  )
}


export const OfficialStoreI_Others = (props) => {
  return (
    <div className="conatine">
    <h3 className="heading__Title text-center">{props.headingTitle}</h3>
      <br />

      <div class="gridd-container row">
        {OfficialStoreData_OtherCategoriesI.map((e, i) => {
          return (
            <TableContent key={i} img={e.img} info={e.info} />
          );
        })}
      </div>
    </div>
  )
}

export const OfficialStoreI_Sports = (props) => {
  return (
    <div className="conatine">
    <h3 className="heading__Title text-center">{props.headingTitle}</h3>
      <br />

      <div class="gridd-container row">
        {OfficialStoreData_SportsI.map((e, i) => {
          return (
            <TableContent key={i} img={e.img} info={e.info} />
          );
        })}
      </div>
    </div>
  )
}


export const OFFICIALSTORE_SUPERMARKETI = (props) => {
  return (
    <div className="conatine">
    <h3 className="heading__Title text-center">{props.headingTitle}</h3>
      <br />

      <div class="gridd-container row">
        {OfficialStoreData_SupermarketI.map((e, i) => {
          return (
            <TableContent key={i} img={e.img} info={e.info} />
          );
        })}
      </div>
    </div>
  )
}
