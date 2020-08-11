import React from "react";
import { Link } from "react-router-dom";
import './SuccessResponse.css';

export default () => (
    <div className="response_status_div">
        <div className="content">
            <img src="https://res.cloudinary.com/emekamykael45/image/upload/v1583492685/econnect/checkmark_ft8o1r.png" alt="" className="status-img" />
            <h1>Awesome!</h1>
            <h6>Your Operation was successful. Do you want to perform another transaction?</h6>

            <div className="btn-actions">
                <Link className="btn btn-yes" to="/services">
                    <p>YES</p>
                    <img className="arrow-front" src="https://res.cloudinary.com/emekamykael45/image/upload/v1581642178/econnect/arrownext_iiplap.svg" alt="" />
                </Link>

                <Link className="btn btn-no" to="/">
                    <p>NO</p>
                    <img className="arrow-front" src="https://res.cloudinary.com/emekamykael45/image/upload/v1583493073/econnect/cancel_qp8x5c.svg" alt="" />
                </Link>
            </div>
        </div>
    </div>
);
