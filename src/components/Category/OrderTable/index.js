import React from "react";
import { OrderTableData } from "../DB/PhonenTabletData";
import TableContent from "./TableContent";

export default function OrderTable(props){
    return (
      <React.Fragment>
        <div className="conatine">
        <h3 className="heading__Title text-center">{props.headingTitle}</h3>

          <div className="gridd-container row">
            {OrderTableData.map((e, i) => {
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

export const OrderTable_BabyProduct = () => {
  return (
    <div>
      
    </div>
  )
}


export const OrderTable_Computing = () => {
  return (
    <div>
      
    </div>
  )
}



export const OrderTable_Electronics = () => {
  return (
    <div>
      
    </div>
  )
}




export const OrderTable_Fashion = () => {
  return (
    <div>
      
    </div>
  )
}



export const OrderTable_Gaming = () => {
  return (
    <div>
      
    </div>
  )
}


export const OrderTable_HealthBeauty = () => {
  return (
    <div>
      
    </div>
  )
}

export const OrderTable_HomeOffice = () => {
  return (
    <div>
      
    </div>
  )
}


export const OrderTable_Others = () => {
  return (
    <div>
      
    </div>
  )
}

export const OrderTable_Sports = () => {
  return (
    <div>
      
    </div>
  )
}


export const OrderTable_Supermarket = () => {
  return (
    <div>
      
    </div>
  )
}
