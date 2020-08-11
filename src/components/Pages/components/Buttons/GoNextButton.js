import React from 'react'

const GoNextButton = ({onClick, text}) => {
    return (
        <button className="btn btn-secondary" onClick={onClick}>
            <p>{text ? text : "Next"}</p>
            <img className="arrow-front" src="https://res.cloudinary.com/emekamykael45/image/upload/v1581642178/econnect/arrownext_iiplap.svg" alt="" />
        </button>
    )
}

export default GoNextButton;