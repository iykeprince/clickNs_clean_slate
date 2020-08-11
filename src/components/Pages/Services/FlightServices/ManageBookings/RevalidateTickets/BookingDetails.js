/* eslint-disable eqeqeq */
/* eslint-disable no-useless-concat */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Logo from "../../../../components/Logo/Logo";
import Spinner from "../../../../components/Spinner/Spinner";
import Error from "../../../../components/Error/Error";
import { Tabs, Tab } from 'react-bootstrap';
// import { GoBackButtonTwo } from "../../../../components/Buttons/GoBackButton";
import SuccessResponse from "../../../../components/Response/SuccessResponse";
import FailedResponse from "../../../../components/Response/FailedResponse";
import GoBackButton from "../../../../components/Buttons/GoBackButton";
import GoNextButton from "../../../../components/Buttons/GoNextButton";
import InputGroupText from "../../../../components/InputGroup/InputGroupText/InputGroupText";
import InputGroupRead from "../../../../components/InputGroup/InputGroupRead/InputGroupRead";
import './BookingDetails.css';


class BookingDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 1,
            reference_number: "",
            last_name: "",
            isSelected: null,
            isLoading: false,
            showError: false,
            errorMessage: "",
            successResponse: false,
            failedResponse: false
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

    submitForm = e => {
        e.preventDefault()
        this.setState({key: 2});
    }
    submitFormTwo = e => {
        e.preventDefault()
        this.setState({key: 3});
    }

    handleTabSelect = (key) => {
        this.setState({key});
        if (key > 3) {
            this.setState({
                key: 3,
                successResponse: true
            });
        }
        if (key < 1) {
            window.history.back();
            this.setState({key: 1});
        }
    }

    handleButtonText = () => {
        const { key } = this.state;
        if (key == 1) {
            return "Search";
        }
        if (key == 2) {
            return "Next";
        }
        if (key == 3) {
            return "Print";
        }
    }

    handleFlightType = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state)
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

    successToggle = () => {
        this.setState({successResponse: true});
    };

    failedToggle = () => {
        this.setState({failedResponse: true});
    };

    render = () => {

        const { key, isLoading, showError, errorMessage, successResponse, failedResponse } = this.state;

        const passengers = [
            { id: "1", name: "MR. IFEOMA AYODEJI" },
            { id: "2", name: "JOHN COVENANT" },
            { id: "3", name: "MICHEAL TOSIN" }
        ];

        return (
            <>
                <Spinner show={isLoading} />
                {showError ? <Error errorMsg={errorMessage} /> : null}
                {successResponse ? <SuccessResponse /> : null}
                {failedResponse ? <FailedResponse /> : null}
                <div className="services check-in booking-details">
                    
                    <div className="head-div">
                        <img className="arrow-prev" src="https://res.cloudinary.com/emekamykael45/image/upload/v1581892606/econnect/arrow-prev_iqwbh9.svg" alt="" onClick={this.goBack} />
                        <Logo />
                    </div>

                    <div className="form-div">

                        <Tabs activeKey={key} onSelect={this.handleTabSelect} id="uncontrolled-tab-example">
                            <Tab eventKey={1} title="BOOKING DETAILS">
                                <form className="form booking" onSubmit={this.submitForm}>
                                    <div className="form-group">
                                        <InputGroupText
                                            icon="https://res.cloudinary.com/emekamykael45/image/upload/v1584065665/econnect/reference_etm1d9.png"
                                            name="reference_number"
                                            type="text"
                                            placeholder="Enter Reference Number"
                                            onChange={this.handleUpdate}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <InputGroupText
                                            icon="https://res.cloudinary.com/emekamykael45/image/upload/v1582078782/econnect/person_yoq2kq.svg"
                                            name="last_name"
                                            type="name"
                                            placeholder="Enter Last Name"
                                            onChange={this.handleUpdate}
                                        />
                                    </div>
                                </form>
                            </Tab>
                            <Tab eventKey={2} title="MAKE SELECTION">
                                <div className="selection-div">
                                    <h6>SELECT GUEST(S) YOU WOULD LIKE TO CHECK-IN</h6>

                                    <form className="form" onSubmit={this.submitFormTwo}>
                                        <div className="flex-div">
                                            <div className="left">
                                                {passengers.map((passenger, i) => (
                                                    <div key={i} className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id={'option' + `${passenger.id}`} />
                                                        <label className="custom-control-label" htmlFor={'option' + `${passenger.id}`}>{passenger.name}</label>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="right">
                                                <button className="btn btn-select">SELECT ALL</button>
                                                <button className="btn btn-select">CLEAR ALL</button>
                                            </div>
                                        </div>
                                        
                                        <hr />
                                        <p className="note"><span>IMPORTANT:</span> Please make sure each selected guest is aware you are checking him/her in.</p>
                                    </form>

                                </div>
                            </Tab>
                            <Tab eventKey={3} title="CONFIRMATION">
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
                                                <hr />
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
                        <GoBackButton onClick={()=>this.handleTabSelect(parseInt(key)-1)} />
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

export default BookingDetails;
