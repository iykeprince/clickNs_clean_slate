import React from 'react'

function NoDataUI(props) {
    return (
        <div className="orderContent__group">{props.Image}
          <p className="orderTxt">{props.Topic}</p>
          <p className="orderExplanation">{props.Explanation}</p>
        </div>
    )
}

export default NoDataUI
