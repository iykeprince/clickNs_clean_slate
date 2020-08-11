import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo/Logo";
import Spinner from "../components/Spinner/Spinner";
import Error from "../components/Error/Error";
import GoBackButton from "../components/Buttons/GoBackButton";
import "./Services.css";


class Services extends Component {
    state = {
        isLoading: false,
        showError: false,
        errorMessage: ""
    };

    componentDidMount = () => {
        window.scroll(0, 0);
    };

    goBack = e => {
        e.preventDefault()
        window.location.assign("/");
    }

    render = () => {

        const { isLoading, showError, errorMessage } = this.state;
        const { match } = this.props;

        return (
            <>
                <Spinner show={isLoading} />
                {showError ? <Error errorMsg={errorMessage} /> : null}
                <div className="services">
                    
                    <Logo />

                    <h6 className="head-text">Our Services</h6>

                    <div className="boxes">
                        <Link to={`${match.url}/flight-services`} className="box">
                            <img className="box-icon" src="https://res.cloudinary.com/emekamykael45/image/upload/v1581642175/econnect/flight_eoci8j.svg" alt="" />
                            <p>FLIGHT SERVICES</p>
                        </Link>
                        <Link to={`${match.url}/access-bank-services`} className="box">
                            <img className="box-icon" src="https://res.cloudinary.com/emekamykael45/image/upload/v1581642175/econnect/accessbank_fq5lga.svg" alt="" />
                            <p>ACCESS BANK SERVICES</p>
                        </Link>
                        <Link to={`${match.url}/financial-services`} className="box">
                            <img className="box-icon" src="https://res.cloudinary.com/emekamykael45/image/upload/v1581642175/econnect/financial_rod6wn.svg" alt="" />
                            <p>FINANCIAL SERVICES</p>
                        </Link>
                        <Link to={`${match.url}/other-services`} className="box">
                            <img className="box-icon" src="https://res.cloudinary.com/emekamykael45/image/upload/v1581642176/econnect/other_rlqioy.svg" alt="" />
                            <p>OTHER SERVICES</p>
                        </Link>
                    </div>

                    <div className="btn-actions">
                        <GoBackButton onClick={this.goBack} />
                        <Link className="btn btn-start" to="/">
                            <p>Cancel</p>
                            <img className="arrow-front" src="https://res.cloudinary.com/emekamykael45/image/upload/v1583493073/econnect/cancel_qp8x5c.svg" alt="" />
                        </Link>
                    </div>

                </div>
            </>
        );
    }
}

export default Services;
