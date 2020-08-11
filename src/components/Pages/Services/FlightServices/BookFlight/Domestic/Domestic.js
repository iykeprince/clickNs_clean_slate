/* eslint-disable eqeqeq */
/* eslint-disable no-useless-concat */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Logo from "../../../../components/Logo/Logo";
import Spinner from "../../../../components/Spinner/Spinner";
import Error from "../../../../components/Error/Error";
import SuccessResponse from "../../../../components/Response/SuccessResponse";
import { Tabs, Tab } from 'react-bootstrap';
import { GoBackButtonTwo } from "../../../../components/Buttons/GoBackButton";
import GoNextButton from "../../../../components/Buttons/GoNextButton";
import InputGroupSelect from "../../../../components/InputGroup/InputGroupSelect/InputGroupSelect";
import InputGroupDatepicker from "../../../../components/InputGroup/InputGroupDatepicker/InputGroupDatepicker";
import InputGroupPassengers from "../../../../components/InputGroup/InputGroupPassengers/InputGroupPassengers";
import InputGroupTimepicker from "../../../../components/InputGroup/InputGroupTimepicker/InputGroupTimepicker";
import InputGroupRead from "../../../../components/InputGroup/InputGroupRead/InputGroupRead";
import InputGroupText from "../../../../components/InputGroup/InputGroupText/InputGroupText";
import './Domestic.css';


class Domestic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 1,
            isSelected: null,
            isLoading: false,
            showError: false,
            errorMessage: "",
            successResponse: false
        };
        this.handleTabSelect = this.handleTabSelect.bind(this)
    }

    componentDidMount = () => {
        window.scroll(0, 0);
    };

    goBack = e => {
        e.preventDefault()
        window.history.back();
    }

    handleTabSelect(key) {
        window.scroll(0, 0);
        this.setState({key});
        if (key > 4) {
            if (window.location.href.indexOf("/edit") > -1) {
                this.setState({
                    key: 4,
                    successResponse: true
                });
            } else {
                const { match } = this.props;
                window.location.assign(`${match.url}/insure`);
                this.setState({key: 4});
            }
        }
        if (key < 1) {
            window.history.back();
            this.setState({key: 1});
        }
    }

    handleButtonText = () => {
        const { key } = this.state;
        if (key == 4) {
            return "Book Now";
        } else {
            return "Next";
        }
    }

    handleFlightType = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    };

    titleType = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleUpdate = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    };

    handleSelect = (e, value) => {
        this.setState({
            [value.name]: e
        });
    };

    dateOnChange = date => {
        this.setState({
            departure_date: date
        });
    };

    dateOfBirthOnChange = date => {
        this.setState({
            date_of_birth: date
        });
    };

    fromTimeOnChange = date => {
        this.setState({
            from_flight_time: date
        });
    };

    toTimeOnChange = date => {
        this.setState({
            to_flight_time: date
        });
    };

    select = id => {
        this.setState({isSelected: id});
    }

    render = () => {

        const { key, location_from, location_to, adult_passengers, children_passengers, infant_passengers, travel_class, departure_date, from_flight_time, to_flight_time, isSelected, isLoading, showError, errorMessage, successResponse } = this.state;

        const location_options = [
            { value: "MURTALA MOHAMMED AIRPORT", label: "MURTALA MOHAMMED AIRPORT" },
            { value: "DUBAI AIRPORT", label: "DUBAI AIRPORT" },
            { value: "ABIAM AIRPORT", label: "ABIAM AIRPORT" },
            { value: "CALABAR AIRPORT", label: "CALABAR AIRPORT" },
            { value: "IMO AIRPORT", label: "IMO AIRPORT" },
            { value: "QATAR AIRPORT", label: "QATAR AIRPORT" }
        ];

        const class_options = [
            { value: "ECONOMY", label: "ECONOMY" },
            { value: "BUSINESS", label: "BUSINESS" },
            { value: "FIRST CLASS", label: "FIRST CLASS" },
            { value: "PREMIUM", label: "PREMIUM" }
        ];

        const numbers = [
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
            { value: "4", label: "4" },
            { value: "5", label: "5" },
            { value: "6", label: "6" },
            { value: "7", label: "7" },
            { value: "10", label: "10" }
        ];

        // const genders = [
        //     { value: "MALE", label: "MALE" },
        //     { value: "FEMALE", label: "FEMALE" }
        // ];

        const flights = [
            { id: 1, image: "https://res.cloudinary.com/emekamykael45/image/upload/v1582073320/econnect/air-peace_j5jhij.png", name: "Air Peace", dep_date: "13 Feb, 2020", dep_time: "03:00 PM", dep_airport: "LOS", travel_time: "02H 30M", arr_time: "05:00 PM", arr_date: "13 Feb, 2020", arr_airport: "DUB", stop: "Non-Stop", class: "Business Class", price: "35,000" },
            { id: 2, image: "https://res.cloudinary.com/emekamykael45/image/upload/v1582073320/econnect/arik_fqpreb.png", name: "Arik Air", dep_date: "13 Feb, 2020", dep_time: "03:00 PM", dep_airport: "LOS", travel_time: "02H 30M", arr_time: "05:00 PM", arr_date: "13 Feb, 2020", arr_airport: "DUB", stop: "Non-Stop", class: "Economy Class", price: "50,000" },
            { id: 3, image: "https://res.cloudinary.com/emekamykael45/image/upload/v1582073320/econnect/medview_x4jyl6.png", name: "Med-View", dep_date: "13 Feb, 2020", dep_time: "03:00 PM", dep_airport: "LOS", travel_time: "02H 30M", arr_time: "05:00 PM", arr_date: "13 Feb, 2020", arr_airport: "DUB", stop: "1 Stop", class: "First Class", price: "20,000" },
            { id: 4, image: "https://res.cloudinary.com/emekamykael45/image/upload/v1582073320/econnect/aero_pbdo5o.png", name: "Aero Contractors", dep_date: "13 Feb, 2020", dep_time: "03:00 PM", dep_airport: "LOS", travel_time: "02H 30M", arr_time: "05:00 PM", arr_date: "13 Feb, 2020", arr_airport: "DUB", stop: "2 Stop", class: "Economy Class", price: "35,000" },
            { id: 5, image: "https://res.cloudinary.com/emekamykael45/image/upload/v1582073320/econnect/dana-air_f8zkrz.png", name: "Dana Air", dep_date: "13 Feb, 2020", dep_time: "03:00 PM", dep_airport: "LOS", travel_time: "02H 30M", arr_time: "05:00 PM", arr_date: "13 Feb, 2020", arr_airport: "DUB", stop: "Non-Stop", class: "Business Class", price: "65,000" }
        ]

        return (
            <>
                <Spinner show={isLoading} />
                {showError ? <Error errorMsg={errorMessage} /> : null}
                {successResponse ? <SuccessResponse /> : null}
                <div className="services flight domestic">
                    
                    <div className="head-div">
                        <img className="arrow-prev" src="https://res.cloudinary.com/emekamykael45/image/upload/v1581892606/econnect/arrow-prev_iqwbh9.svg" alt="" onClick={this.goBack} />
                        <Logo />
                    </div>

                    <div className="form-div">

                        <Tabs activeKey={key} onSelect={this.handleTabSelect} id="uncontrolled-tab-example">
                            <Tab eventKey={1} title="Search Flight">
                                <form className="form">
                                    <div className="radios">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input className="custom-control-input" type="radio" name="flightType" id="optionOne" value="oneway" onChange={this.handleFlightType} />
                                            <label className="custom-control-label" htmlFor="optionOne">ONE WAY</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input className="custom-control-input" type="radio" name="flightType" id="optionTwo" value="return" onChange={this.handleFlightType} />
                                            <label className="custom-control-label" htmlFor="optionTwo">RETURN</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input className="custom-control-input" type="radio" name="flightType" id="optionThree" value="multicity" onChange={this.handleFlightType} />
                                            <label className="custom-control-label" htmlFor="optionThree">MULTI CITY</label>
                                        </div>
                                    </div>

                                    <div className="form-group d-flex">
                                        <InputGroupSelect
                                            icon="https://res.cloudinary.com/emekamykael45/image/upload/v1581892775/econnect/flying-from_jmhr8k.svg"
                                            value={location_from}
                                            options={location_options}
                                            onChange={this.handleSelect}
                                            name="location_from"
                                            placeholder="Flying from"
                                        />
                                        <InputGroupSelect
                                            className="input-img-to"
                                            icon="https://res.cloudinary.com/emekamykael45/image/upload/v1581892775/econnect/flying-from_jmhr8k.svg"
                                            value={location_to}
                                            options={location_options}
                                            onChange={this.handleSelect}
                                            name="location_to"
                                            placeholder="Flying to"
                                        />
                                    </div>

                                    <div className="form-group d-flex">
                                        <InputGroupPassengers
                                            icon="https://res.cloudinary.com/emekamykael45/image/upload/v1581892775/econnect/passengers_sn6dzl.svg"
                                            adult_passengers={adult_passengers}
                                            children_passengers={children_passengers}
                                            infant_passengers={infant_passengers}
                                            options={numbers}
                                            onChange={this.handleSelect}
                                        />
                                        <InputGroupDatepicker
                                            icon="https://res.cloudinary.com/emekamykael45/image/upload/v1581892775/econnect/date_popkg2.svg"
                                            name="departure_date"
                                            selected={departure_date}
                                            placeholderText="Departure date"
                                            onChange={this.dateOnChange}
                                        />
                                    </div>

                                    <div className="form-group d-flex">
                                        <InputGroupSelect
                                            icon="https://res.cloudinary.com/emekamykael45/image/upload/v1581892775/econnect/class_prhndx.svg"
                                            value={travel_class}
                                            options={class_options}
                                            onChange={this.handleSelect}
                                            name="travel_class"
                                            placeholder="Travel class"
                                        />
                                        <InputGroupTimepicker
                                            from_flight_time={from_flight_time}
                                            to_flight_time={to_flight_time}
                                            onChangeFrom={this.fromTimeOnChange}
                                            onChangeTo={this.toTimeOnChange}
                                        />
                                    </div>
                                </form>
                            </Tab>
                            <Tab eventKey={2} title="Choose Flight">
                                <div className="flights-div">
                                    {flights.map((flight, i) => (
                                        <div key={i} className={'flight' + (flight.id === isSelected ? " selected" : "")} onClick={() => this.select(flight.id)}>
                                            <div className="d-flex">
                                                <img src={flight.image} alt="" />
                                                <h5>{flight.name}</h5>
                                            </div>
                                            <div className="time">
                                                <div className="left">
                                                    <h6>{flight.dep_date}</h6>
                                                    <h4>{flight.dep_time}</h4>
                                                    <p>{flight.dep_airport}</p>
                                                </div>
                                                <div className="mid">
                                                    <img src="https://res.cloudinary.com/emekamykael45/image/upload/v1584194364/econnect/arrow_alsay9.svg" alt="" />
                                                    <p>{flight.travel_time}</p>
                                                </div>
                                                <div className="right">
                                                    <h6>{flight.arr_date}</h6>
                                                    <h4>{flight.arr_time}</h4>
                                                    <p>{flight.arr_airport}</p>
                                                </div>
                                            </div>
                                            <h5>{flight.stop}</h5>
                                            <h5 className="last">{flight.class}</h5>
                                            <h2>N{flight.price}</h2>
                                        </div>
                                    ))}
                                </div>
                            </Tab>
                            <Tab eventKey={3} title="Passenger Information">
                                <form className="form passenger-div confirmation">
                                    <h6 className="head-text">FIRST ADULT (PRIMARY CONTACT)</h6>
                                    <div className="radios">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input className="custom-control-input" type="radio" name="title" id="optionOne" value="oneway" onChange={this.titleType} />
                                            <label className="custom-control-label" htmlFor="optionOne">MR</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input className="custom-control-input" type="radio" name="title" id="optionTwo" value="return" onChange={this.titleType} />
                                            <label className="custom-control-label" htmlFor="optionTwo">MRS</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input className="custom-control-input" type="radio" name="title" id="optionThree" value="multicity" onChange={this.titleType} />
                                            <label className="custom-control-label" htmlFor="optionThree">MISS</label>
                                        </div>
                                    </div>

                                    <div className="form-group d-flex">
                                        <InputGroupText
                                            icon="https://res.cloudinary.com/emekamykael45/image/upload/v1582078782/econnect/person_yoq2kq.svg"
                                            name="first_name"
                                            tyoe="name"
                                            placeholder="First name"
                                            onChange={this.handleUpdate}
                                        />
                                        <InputGroupText
                                            icon="https://res.cloudinary.com/emekamykael45/image/upload/v1582078782/econnect/person_yoq2kq.svg"
                                            name="last_name"
                                            tyoe="name"
                                            placeholder="Last name"
                                            onChange={this.handleUpdate}
                                        />
                                    </div>

                                    <div className="form-group d-flex">
                                        <InputGroupText
                                            icon="https://res.cloudinary.com/emekamykael45/image/upload/v1582078782/econnect/email_fazxbj.svg"
                                            name="email"
                                            tyoe="email"
                                            placeholder="Email"
                                            onChange={this.handleUpdate}
                                        />
                                        <InputGroupDatepicker
                                            icon="https://res.cloudinary.com/emekamykael45/image/upload/v1581892775/econnect/date_popkg2.svg"
                                            name="departure_date"
                                            selected={departure_date}
                                            placeholderText="Departure date"
                                            onChange={this.dateOnChange}
                                        />
                                    </div>

                                    <div className="form-group d-flex">
                                        <InputGroupText
                                            icon="https://res.cloudinary.com/emekamykael45/image/upload/v1582078782/econnect/phone_wzf8na.svg"
                                            name="phone_number"
                                            tyoe="number"
                                            placeholder="Phone Number"
                                            onChange={this.handleUpdate}
                                        />
                                        <InputGroupText
                                            icon="https://res.cloudinary.com/emekamykael45/image/upload/v1582078782/econnect/voucher_fplso5.svg"
                                            name="voucher_code"
                                            tyoe="text"
                                            placeholder="Enter Voucher Code (Optional)"
                                            onChange={this.handleUpdate}
                                        />
                                    </div>
                                    
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" htmlFor="customCheck1">By Continuing, you agree to our <a href="#">Terms and Conditions</a></label>
                                    </div>
                                </form>
                            </Tab>
                            <Tab eventKey={4} title="Confirmation">
                                <div className="confirmation-div">
                                    <div className="flight selected">
                                        <div className="d-flex">
                                            <img src="https://res.cloudinary.com/emekamykael45/image/upload/v1582073320/econnect/air-peace_j5jhij.png" alt="" />
                                            <h5>Air Peace</h5>
                                        </div>
                                        <div className="time">
                                            <div className="left">
                                                <h6>13 Feb, 2020</h6>
                                                <h4>03:00 PM</h4>
                                                <p>LOS</p>
                                            </div>
                                            <div className="mid">
                                                <img src="https://res.cloudinary.com/emekamykael45/image/upload/v1584194897/econnect/arrow-w_cmxpai.svg" alt="" />
                                                <p>03H 50M</p>
                                            </div>
                                            <div className="right">
                                                <h6>13 Feb, 2020</h6>
                                                <h4>07:00 PM</h4>
                                                <p>DUB</p>
                                            </div>
                                        </div>
                                        <h5>1 stop</h5>
                                        <h5 className="last">Premium</h5>
                                        <h2>N50,000</h2>
                                    </div>

                                    <form className="form confirmation">
                                        <div className="header">
                                            <img src="https://res.cloudinary.com/emekamykael45/image/upload/v1582651854/econnect/passengers_k6ghoj.svg" alt="" />
                                            <p>PASSENGERS DATA</p>
                                        </div>
                                        <div className="content">
                                            <div className="form-group">
                                                <div className="header">
                                                    <img src="https://res.cloudinary.com/emekamykael45/image/upload/v1582652481/econnect/person_wmyd0y.svg" alt="" />
                                                    <p>Passenger #1 (Adult)</p>
                                                </div>
                                                <div className="fields">
                                                    <InputGroupRead
                                                        label="First name"
                                                        name="first_name"
                                                        value="Michael"
                                                        readOnly="readOnly"
                                                    />
                                                    <InputGroupRead
                                                        label="Last name"
                                                        name="last_name"
                                                        value="Tosin"
                                                        readOnly="readOnly"
                                                    />
                                                    <InputGroupRead
                                                        label="Email"
                                                        name="email"
                                                        value="miketos@gm.com"
                                                        readOnly="readOnly"
                                                    />
                                                    <InputGroupRead
                                                        label="Gender"
                                                        name="gender"
                                                        value="Male"
                                                        readOnly="readOnly"
                                                    />
                                                    <InputGroupRead
                                                        label="Phone number"
                                                        name="phone_number"
                                                        value="09065582156"
                                                        readOnly="readOnly"
                                                    />
                                                    <InputGroupRead
                                                        label="Date of birth"
                                                        name="date_of_birth"
                                                        value="12/02/1998"
                                                        readOnly="readOnly"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="header">
                                                    <img src="https://res.cloudinary.com/emekamykael45/image/upload/v1582652481/econnect/person_wmyd0y.svg" alt="" />
                                                    <p>Passenger #2 (Children)</p>
                                                </div>
                                                <div className="fields">
                                                    <InputGroupRead
                                                        label="First name"
                                                        name="first_name"
                                                        value="Michael"
                                                        readOnly="readOnly"
                                                    />
                                                    <InputGroupRead
                                                        label="Last name"
                                                        name="last_name"
                                                        value="Tosin"
                                                        readOnly="readOnly"
                                                    />
                                                    <InputGroupRead
                                                        label="Email"
                                                        name="email"
                                                        value="miketos@gm.com"
                                                        readOnly="readOnly"
                                                    />
                                                    <InputGroupRead
                                                        label="Gender"
                                                        name="gender"
                                                        value="Male"
                                                        readOnly="readOnly"
                                                    />
                                                    <InputGroupRead
                                                        label="Phone number"
                                                        name="phone_number"
                                                        value="09065582156"
                                                        readOnly="readOnly"
                                                    />
                                                    <InputGroupRead
                                                        label="Date of birth"
                                                        name="date_of_birth"
                                                        value="12/02/1998"
                                                        readOnly="readOnly"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </Tab>
                        </Tabs>

                    </div>
                    
                    <div className="btn-actions">
                        <GoBackButtonTwo onClick={()=>this.handleTabSelect(parseInt(key)-1)} />
                        <GoNextButton
                            onClick={()=>this.handleTabSelect(parseInt(key)+1)}
                            text={this.handleButtonText()}
                        />
                    </div>

                </div>
            </>
        );
    }
}

export default Domestic;
