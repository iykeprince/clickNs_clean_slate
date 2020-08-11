/* eslint-disable no-useless-concat */
import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InputGroupReadDatepicker = ({label, name, selected, onChange}) => {
    return (
        <div className="input-group">
            <label>{label}</label>
            <DatePicker
                name={name}
                className="datepicker"
                todayButton={"Today"}
                dateFormat="dd/MM/yyyy"
                selected={selected}
                placeholderText="Select date"
                onChange={onChange}
                autoComplete="off"
            />
        </div>
    )
}

export default InputGroupReadDatepicker;