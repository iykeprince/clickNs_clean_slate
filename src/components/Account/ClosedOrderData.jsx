import React from 'react'
import OrderAvailableDataRow from './OrderAvailableDataRow'
import femaleShirt from "../../assets/Products/femaleShirt.png";
import lenovoComputer from "../../assets/Products/lenovoComputer.png";
import sandal from  "../../assets/Products/sandal.png";

function ClosedOrderData() {
    return (
        <div>
            <OrderAvailableDataRow itemImage={lenovoComputer} bgColor='#696969'/>
            <OrderAvailableDataRow itemImage={femaleShirt} bgColor='#696969'/>
            <OrderAvailableDataRow itemImage={sandal} bgColor='#696969'/>
        </div>
    )
}

export default ClosedOrderData
