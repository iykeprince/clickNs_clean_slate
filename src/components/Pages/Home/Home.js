import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo/Logo";
import Spinner from "../components/Spinner/Spinner";
import Error from "../components/Error/Error";
import "./Home.css";


class Home extends Component {
    state = {
        isLoading: false,
        showError: false,
        errorMessage: ""
    };

    componentDidMount = () => {
        window.scroll(0, 0);
    };

    render = () => {

        const { isLoading, showError, errorMessage } = this.state;

        return (
            <>
                <Spinner show={isLoading} />
                {showError ? <Error errorMsg={errorMessage} /> : null}
                <div className="home">
                    
                    <Logo />

                    <h2>WELCOME TO THE</h2>
                    <h1>FUTURE</h1>

                    <p className="explore">...explore and do so many more on our self service platform here</p>

                    <div className="btn-actions">
                        <Link className="btn btn-primary learn" to="/">
                            <img className="arrow-back" src="https://res.cloudinary.com/emekamykael45/image/upload/v1584095860/econnect/question_sicget.svg" alt="" />
                            <p>Learn More</p>
                        </Link>
                        <Link className="btn btn-start" to="/services">
                            <p>Get Started</p>
                            <img className="arrow-front" src="https://res.cloudinary.com/emekamykael45/image/upload/v1581642178/econnect/arrownext_iiplap.svg" alt="" />
                        </Link>
                    </div>

                </div>
            </>
        );
    }
}

export default Home;
