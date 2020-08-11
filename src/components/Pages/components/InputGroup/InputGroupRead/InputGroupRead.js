import React from 'react';

const InputGroupRead = ({label, name, value, type, readOnly, onChange}) => {
    return (
        <div className="input-group">
            <label>{label}</label>
            <input name={name} type={type ? type : "text"} className="form-control" value={value} readOnly={readOnly ? "readOnly" : ""} placeholder="Type here" onChange={onChange} autoComplete="off" required />
        </div>
    )
}

export default InputGroupRead;