import React from 'react'
import OrderAvailableDataRow from './OrderAvailableDataRow'
import femaleShirt from "../../assets/Products/femaleShirt.png";
import lenovoComputer from "../../assets/Products/lenovoComputer.png";
import sandal from  "../../assets/Products/sandal.png";

function OpenOrderData() {
    return (
        <div>
            <OrderAvailableDataRow itemImage={lenovoComputer} bgColor='var(--woozRed)'/>
            <OrderAvailableDataRow itemImage={femaleShirt} bgColor='var(--woozRed)'/>
            <OrderAvailableDataRow itemImage={sandal} bgColor='var(--woozRed)'/>
        </div>
    )
}

export default OpenOrderData
