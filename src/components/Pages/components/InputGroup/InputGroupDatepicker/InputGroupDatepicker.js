/* eslint-disable no-useless-concat */
import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InputGroupDatepicker = ({icon, name, selected, placeholderText, onChange}) => {
    return (
        <div className="input-group date">
            <span className="input-group-text" id="basic-addon1">
                <img className="input-img" src={icon} alt="" />
            </span>
            <DatePicker
                name={name}
                className="datepicker"
                todayButton={"Today"}
                dateFormat="dd/MM/yyyy"
                selected={selected}
                placeholderText={placeholderText}
                onChange={onChange}
                autoComplete="off"
            />
        </div>
    )
}

export default InputGroupDatepicker;