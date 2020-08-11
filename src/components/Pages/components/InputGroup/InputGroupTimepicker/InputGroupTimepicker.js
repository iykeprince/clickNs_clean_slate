/* eslint-disable no-useless-concat */
import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InputGroupTimepicker = ({from_flight_time, to_flight_time, onChangeFrom, onChangeTo}) => {
    return (
        <div className="d-flex time">
            <div className="input-group">
                <span className="input-group-text" id="basic-addon1">
                    <img className="input-img time-img" src="https://res.cloudinary.com/emekamykael45/image/upload/v1584192932/econnect/time-flight_ojj1f6.svg" alt="" />
                </span>
                <DatePicker
                    name="from_flight_time"
                    className="datepicker first"
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="From"
                    dateFormat="h:mm aa"
                    selected={from_flight_time}
                    placeholderText="From"
                    onChange={onChangeFrom}
                    autoComplete="off"
                />
                <DatePicker
                    name="to_flight_time"
                    className="datepicker"
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="To"
                    dateFormat="h:mm aa"
                    selected={to_flight_time}
                    placeholderText="To"
                    onChange={onChangeTo}
                    autoComplete="off"
                />
            </div>
        </div>
    )
}

export default InputGroupTimepicker;