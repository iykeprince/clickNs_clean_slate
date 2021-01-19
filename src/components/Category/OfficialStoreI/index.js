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


//ALL YOU NEED TO DO IS TO JUST DUPLICATE THIS EXPORT FUNCTION FOR OTHER CATEGORIES, AND REPLACE
// THE DATA, I.E OFFICIALSTOREDATA WITH THE ONE IN ITS CORRESPONDING DB FILE!

export const OfficialStoreI_BabyProduct = () => {
  return (
    <div>
      
    </div>
  )
}


export const OfficialStoreI_Computing = () => {
  return (
    <div>
      
    </div>
  )
}



export const OfficialStoreI_Electronics = () => {
  return (
    <div>
      
    </div>
  )
}




export const OfficialStoreI_Fashion = () => {
  return (
    <div>
      
    </div>
  )
}



export const OfficialStoreI_Gaming = () => {
  return (
    <div>
      
    </div>
  )
}


export const OfficialStoreI_HealthBeauty = () => {
  return (
    <div>
      
    </div>
  )
}

export const OfficialStoreI_HomeOffice = () => {
  return (
    <div>
      
    </div>
  )
}


export const OfficialStoreI_Others = () => {
  return (
    <div>
      
    </div>
  )
}

export const OfficialStoreI_Sports = () => {
  return (
    <div>
      
    </div>
  )
}


export const OfficialStoreI_Supermarket = () => {
  return (
    <div>
      
    </div>
  )
}
