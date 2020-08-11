import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";
import SuccessResponse from "../../components/Response/SuccessResponse";
import FailedResponse from "../../components/Response/FailedResponse";
import GoBackButton from "../../components/Buttons/GoBackButton";


class Payment extends Component {
    state = {
        isLoading: false,
        showError: false,
        errorMessage: "",
        successResponse: false,
        failedResponse: false
    };

    componentDidMount = () => {
        window.scroll(0, 0);
    };

    goBack = e => {
        e.preventDefault()
        window.history.back();
    }

    successToggle = () => {
        this.setState({successResponse: true});
    };

    failedToggle = () => {
        this.setState({failedResponse: true});
    };

    render = () => {

        const { isLoading, showError, errorMessage, successResponse, failedResponse } = this.state;
        // const { match } = this.props;

        return (
            <>
                <Spinner show={isLoading} />
                {showError ? <Error errorMsg={errorMessage} /> : null}
                {successResponse ? <SuccessResponse /> : null}
                {failedResponse ? <FailedResponse /> : null}
                <div className="services flight">
                    
                    <Logo />

                    <h6 className="head-text">Mode of Payment</h6>

                    <div className="boxes">
                        {/* <Link to={`${match.url}/card`} className="box"> */}
                        <Link to="#" className="box" onClick={this.successToggle}>
                            <img className="box-icon" src="https://res.cloudinary.com/emekamykael45/image/upload/v1581642175/econnect/flight_eoci8j.svg" alt="" />
                            <p>CARD</p>
                        </Link>
                        <Link to="#" className="box" onClick={this.failedToggle}>
                            <img className="box-icon" src="https://res.cloudinary.com/emekamykael45/image/upload/v1581642175/econnect/flight_eoci8j.svg" alt="" />
                            <p>CARDLESS</p>
                        </Link>
                        <Link to="#" className="box" onClick={this.successToggle}>
                            <img className="box-icon" src="https://res.cloudinary.com/emekamykael45/image/upload/v1581642175/econnect/flight_eoci8j.svg" alt="" />
                            <p>WALLET</p>
                        </Link>
                    </div>

                    <div className="btn-actions">
                        <GoBackButton onClick={this.goBack} />
                        <Link className="btn btn-start" to="/">Cancel</Link>
                    </div>

                </div>
            </>
        );
    }
}

export default Payment;
