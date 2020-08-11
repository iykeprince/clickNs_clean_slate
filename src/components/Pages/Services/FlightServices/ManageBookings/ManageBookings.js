import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../components/Logo/Logo";
import Spinner from "../../../components/Spinner/Spinner";
import Error from "../../../components/Error/Error";
import GoBackButton from "../../../components/Buttons/GoBackButton";


class PrintBoardingPass extends Component {
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

                    <h6 className="head-text">Manage Bookings</h6>

                    <div className="boxes">
                        <Link to={`${match.url}/change-booking`} className="box">
                            <img className="box-icon" src="https://res.cloudinary.com/emekamykael45/image/upload/v1584094507/econnect/booking-details_n7wxgc.svg" alt="" />
                            <p>CHANGE BOOKING DETAILS</p>
                        </Link>
                        <Link to={`${match.url}/revalidate-tickets`} className="box">
                            <img className="box-icon" src="https://res.cloudinary.com/emekamykael45/image/upload/v1584094507/econnect/revalidate_lipp55.svg" alt="" />
                            <p>REVALIDATE TICKETS</p>
                        </Link>
                        <Link to={`${match.url}/choose-seat`} className="box">
                            <img className="box-icon" src="https://res.cloudinary.com/emekamykael45/image/upload/v1584094313/econnect/choose-seat_s6oxhz.svg" alt="" />
                            <p>CHOOSE SEAT</p>
                        </Link>
                        <Link to={`${match.url}/upgrade-flight`} className="box">
                            <img className="box-icon" src="https://res.cloudinary.com/emekamykael45/image/upload/v1584094507/econnect/upgrade-flight_d7gyqj.svg" alt="" />
                            <p>UPGRADE FLIGHT</p>
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

export default PrintBoardingPass;
