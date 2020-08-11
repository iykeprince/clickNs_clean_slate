/* eslint-disable no-useless-concat */
import React from 'react';
import Select from 'react-select';

const InputGroupReadSelect = ({label, name, value, options, onChange}) => {
    return (
        <div className="input-group">
            <label>{label}</label>
            <Select
                className="filter-dropdown"
                value={value}
                options={options}
                onChange={onChange}
                name={name}
                placeholder="Select"
            />
        </div>
    )
}

export default InputGroupReadSelect;