import React from "react";
import { Form, Container } from "react-bootstrap";
import "./onboardingpass.css";

class OnboardingPaSS extends React.Component {
  callPayStackApi() {}

  render() {
    return (
      <React.Fragment>
        <div className="onboarding">
          <div className="onboarding__header w-100 d-flex justify-content-between">
            <div>
              <img
                src="https://res.cloudinary.com/emekamykael45/image/upload/v1581642175/econnect/logo_ur9lew.png"
                className="onboarding__logo"
                alt="econnect logo"
              />
            </div>
            <div className="flight-details">
              <span className="flight-details__text">Flight</span>
              <span className="flight-details__id">AZ356</span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default OnboardingPaSS;

// {
/* <div className="bg-cover">
          <Container className="d-flex justify-content-center align-items-center payment-form">
            <Form className="w-100 h-100">
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Amount</Form.Label>
                <Form.Control type="number"></Form.Control>
              </Form.Group>
              <button className="btn-pay">Submit</button>
            </Form>
          </Container>
        </div> */
// }
