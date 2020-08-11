import React from 'react'
import { RotateSpinner } from "react-spinners-kit";
import "./Spinner.css"

const Spinner = ({show}) => {
    return (
        <div>
            { show ? <div className="spinner-back-drop"></div> : null }
            <RotateSpinner
                size={50}
                color="#093E9E"
                loading={show}
            />
        </div>
    )
}

export default Spinner;