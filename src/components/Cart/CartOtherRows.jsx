import React from 'react'
import CardGroupTitle from '../Cards/CardGroupTitle'
import ProductCardGroupBig from '../Cards/ProductCardGroupBig'

function CartOtherRows() {
    return (
        <div className="prodWrapper">
        <div className="prodBigWrapper">
          <CardGroupTitle titleText="Recommended For You" />
          <ProductCardGroupBig />
        </div>
        <br />
        <div className="prodBigWrapper">
          <CardGroupTitle titleText="Recommended For You" />
          <ProductCardGroupBig />
        </div>
        <br />
      </div>
    )
}

export default CartOtherRows