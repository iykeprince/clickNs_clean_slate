import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../components/Logo/Logo";
import Spinner from "../../../components/Spinner/Spinner";
import Error from "../../../components/Error/Error";
import GoBackButton from "../../../components/Buttons/GoBackButton";


class BookFlight extends Component {
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
                <div className="services flight">
                    
                    <Logo />

                    <h6 className="head-text">Book Flight</h6>

                    <div className="boxes">
                        <Link to={`${match.url}/domestic`} className="box">
                            <img className="box-icon" src="https://res.cloudinary.com/emekamykael45/image/upload/v1581642175/econnect/flight_eoci8j.svg" alt="" />
                            <p>DOMESTIC</p>
                        </Link>
                        <Link to={`${match.url}/international`} className="box">
                            <img className="box-icon" src="https://res.cloudinary.com/emekamykael45/image/upload/v1581642175/econnect/flight_eoci8j.svg" alt="" />
                            <p>INTERNATIONAL</p>
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

export default BookFlight;
