import React from 'react'
import OrderAvailableDataRow from './OrderAvailableDataRow'
import femaleShirt from "../../assets/Products/femaleShirt.png";
import lenovoComputer from "../../assets/Products/lenovoComputer.png";
import sandal from  "../../assets/Products/sandal.png";

function OrderAvailableData() {
    return (
        <div>
            <OrderAvailableDataRow itemImage={lenovoComputer}/>
            <OrderAvailableDataRow itemImage={femaleShirt}/>
            <OrderAvailableDataRow itemImage={sandal}/>
        </div>
    )
}

export default OrderAvailableData
