/* eslint-disable no-useless-concat */
import React from 'react';
import Select from 'react-select';

const InputGroupSelect = ({className, icon, value, options, onChange, name, placeholder}) => {
    return (
        <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
                <img className={'input-img' + ` ${className}`} src={icon} alt="" />
            </span>
            <div className="filter-div">
                <Select
                    className="filter-dropdown"
                    value={value}
                    options={options}
                    onChange={onChange}
                    name={name}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}

export default InputGroupSelect;