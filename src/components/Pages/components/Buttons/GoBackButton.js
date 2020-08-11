import React from 'react'
import { Link } from "react-router-dom";

const GoBackButton = ({onClick}) => {
    return (
        <Link className="btn btn-primary" onClick={onClick} to="#">
            <img className="arrow-back" src="https://res.cloudinary.com/emekamykael45/image/upload/v1581642177/econnect/arrowback_gmuuwj.svg" alt="" />
            <p>Back</p>
        </Link>
    )
}

export const GoBackButtonTwo = ({onClick, text}) => {
    return (
        <button className="btn btn-primary" onClick={onClick} >
            <img className="arrow-back" src="https://res.cloudinary.com/emekamykael45/image/upload/v1581642177/econnect/arrowback_gmuuwj.svg" alt="" />
            <p>{text ? text : "Back"}</p>
        </button>
    )
}

export default GoBackButton;