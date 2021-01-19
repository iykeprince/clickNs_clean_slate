import React from "react";
import { OfficialStoreData } from "../DB/PhonenTabletData";
import TableContent from "./TableContent";


export default function OfficialStore(props) {
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

export const OfficialStore_BabyProduct = () => {
  return (
    <div>
      
    </div>
  )
}


export const OfficialStore_Computing = () => {
  return (
    <div>
      
    </div>
  )
}



export const OfficialStore_Electronics = () => {
  return (
    <div>
      
    </div>
  )
}




export const OfficialStore_Fashion = () => {
  return (
    <div>
      
    </div>
  )
}



export const OfficialStore_Gaming = () => {
  return (
    <div>
      
    </div>
  )
}


export const OfficialStore_HealthBeauty = () => {
  return (
    <div>
      
    </div>
  )
}

export const OfficialStore_HomeOffice = () => {
  return (
    <div>
      
    </div>
  )
}


export const OfficialStore_Others = () => {
  return (
    <div>
      
    </div>
  )
}

export const OfficialStore_Sports = () => {
  return (
    <div>
      
    </div>
  )
}


export const OfficialStore_Supermarket = () => {
  return (
    <div>
      
    </div>
  )
}
