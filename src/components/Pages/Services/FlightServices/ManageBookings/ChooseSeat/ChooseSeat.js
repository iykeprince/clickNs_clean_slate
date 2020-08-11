import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../components/Logo/Logo";
import Spinner from "../../../components/Spinner/Spinner";
import Error from "../../../components/Error/Error";
import GoBackButton from "../../../components/Buttons/GoBackButton";


class ChangeBooking extends Component {
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
        window.history.back();
    }

    render = () => {

        const { isLoading, showError, errorMessage } = this.state;
        const { match } = this.props;

        return (
            <>
                <Spinner show={isLoading} />
                {showError ? <Error errorMsg={errorMessage} /> : null}
                <div className="services check-in">
                    
                    <Logo />

                    <h6 className="head-text">We need to retrieve your Booking Details. Please Select Any Option Below</h6>

                    <div className="boxes">
                        <div></div>
                        <Link to={`${match.url}/enter-booking-details`} className="box">
                            <img className="box-icon" src="https://res.cloudinary.com/emekamykael45/image/upload/v1584094507/econnect/enter-booking_hznwn2.svg" alt="" />
                            <p>ENTER BOOKING DETAILS</p>
                        </Link>
                        <div></div>
                        <Link to={`${match.url}/scan-qr-code`} className="box">
                            <img className="box-icon" src="https://res.cloudinary.com/emekamykael45/image/upload/v1584094506/econnect/qr-code_lzmdwk.svg" alt="" />
                            <p>SCAN QR CODE</p>
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

export default ChangeBooking;
