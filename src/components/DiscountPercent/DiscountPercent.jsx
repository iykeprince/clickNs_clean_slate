import React from 'react'
import './DiscountPercent.css'

const DiscountPercent=props=> {
    return (
        <span  className="discountWrapper">
            <span className="percentDiscount2">
                <span className="percentDiscount__text2">{props.DiscountText}</span>
        </span>
        </span>
        
    )
}

export default DiscountPercent
