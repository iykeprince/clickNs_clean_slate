import React from "react";
import './Error.css';

export default ({ errorMsg }) => (
    <div className="alert alert-danger alert-dismissible" role="alert">
        {errorMsg}
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
);
