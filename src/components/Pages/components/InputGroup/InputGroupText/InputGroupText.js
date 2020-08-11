/* eslint-disable no-useless-concat */
import React from 'react';

const InputGroupText = ({icon, name, type, placeholder, onChange}) => {
    return (
        <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
                <img className="input-img" src={icon} alt="" />
            </span>
            <input name={name} type={type ? type : "text"} className="form-control" placeholder={placeholder} onChange={onChange} autoComplete="off" required />
        </div>
    )
}

export default InputGroupText;