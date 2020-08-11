import React from 'react';
import Select from 'react-select';

const InputGroupPassengers = ({icon, adult_passengers, children_passengers, infant_passengers, options, onChange}) => {
    return (
        <div className="passengers">
            <span className="input-group-text" id="basic-addon1">
                <img className="input-img" src={icon} alt="" />
            </span>
            <div className="inputs-div">
                <div className="input">
                    <div className="filter-div">
                        <Select
                            className="filter-dropdown"
                            value={adult_passengers}
                            options={options}
                            onChange={onChange}
                            name="adult_passengers"
                            placeholder="0"
                        />
                    </div>
                    <label>Adult</label>
                </div>
                <div className="input">
                    <div className="filter-div">
                        <Select
                            className="filter-dropdown"
                            value={children_passengers}
                            options={options}
                            onChange={onChange}
                            name="children_passengers"
                            placeholder="0"
                        />
                    </div>
                    <label>Children</label>
                </div>
                <div className="input">
                    <div className="filter-div">
                        <Select
                            className="filter-dropdown"
                            value={infant_passengers}
                            options={options}
                            onChange={onChange}
                            name="infant_passengers"
                            placeholder="0"
                        />
                    </div>
                    <label>Infant</label>
                </div>
            </div>
        </div>
    )
}

export default InputGroupPassengers;