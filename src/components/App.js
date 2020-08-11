import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import FlightServices from "./Pages/Services/FlightServices/FlightServices";
import BookFlight from "./Pages/Services/FlightServices/BookFlight/BookFlight";
import Domestic from "./Pages/Services/FlightServices/BookFlight/Domestic/Domestic";
import Insure from "./Pages/Services/FlightServices/BookFlight/Insure/Insure";
import CheckIn from "./Pages/Services/FlightServices/CheckIn/CheckIn";
import CheckInBookingDetails from "./Pages/Services/FlightServices/CheckIn/BookingDetails/BookingDetails";
import CheckInQRCode from "./Pages/Services/FlightServices/CheckIn/QRCode/QRCode";
import PrintBoardingPass from "./Pages/Services/FlightServices/PrintBoardingPass/PrintBoardingPass";
import PrintBoardingPassBookingDetails from "./Pages/Services/FlightServices/PrintBoardingPass/BookingDetails/BookingDetails";
import PrintBoardingPassQRCode from "./Pages/Services/FlightServices/PrintBoardingPass/QRCode/QRCode";
import ManageBookings from "./Pages/Services/FlightServices/ManageBookings/ManageBookings";
import ChangeBooking from "./Pages/Services/FlightServices/ManageBookings/ChangeBooking/ChangeBooking";
import ChangeBookingBookingDetails from "./Pages/Services/FlightServices/ManageBookings/ChangeBooking/BookingDetails";
import ChangeBookingQRCode from "./Pages/Services/FlightServices/ManageBookings/ChangeBooking/QRCode";
import Payment from "./Pages/Services/Payment/Payment";
import OnboardingPass from "./Pages/Services/Payment/OnboardingPass";

const NotFound = () => <h1>page not found</h1>;

export default class App extends Component {
  render = () => {
    const props = this.props;

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/home" />} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/services" component={Services} {...props} />
          <Route
            exact
            path="/services/flight-services"
            component={FlightServices}
            {...props}
          />
          <Route
            exact
            path="/services/flight-services/book-flight"
            component={BookFlight}
            {...props}
          />
          <Route
            exact
            path="/services/flight-services/book-flight/domestic"
            component={Domestic}
            {...props}
          />
          <Route
            exact
            path="/services/flight-services/book-flight/domestic/insure"
            component={Insure}
            {...props}
          />
          <Route
            exact
            path="/services/flight-services/check-in"
            component={CheckIn}
            {...props}
          />
          <Route
            exact
            path="/services/flight-services/check-in/enter-booking-details"
            component={CheckInBookingDetails}
            {...props}
          />
          <Route
            exact
            path="/services/flight-services/check-in/scan-qr-code"
            component={CheckInQRCode}
            {...props}
          />
          <Route
            exact
            path="/services/flight-services/print-boarding-pass"
            component={PrintBoardingPass}
            {...props}
          />
          <Route
            exact
            path="/services/flight-services/print-boarding-pass/enter-booking-details"
            component={PrintBoardingPassBookingDetails}
            {...props}
          />
          <Route
            exact
            path="/services/flight-services/print-boarding-pass/scan-qr-code"
            component={PrintBoardingPassQRCode}
            {...props}
          />
          <Route
            exact
            path="/services/flight-services/manage-bookings"
            component={ManageBookings}
            {...props}
          />
          <Route
            exact
            path="/services/flight-services/manage-bookings/change-booking"
            component={ChangeBooking}
            {...props}
          />
          <Route
            exact
            path="/services/flight-services/manage-bookings/change-booking/enter-booking-details"
            component={ChangeBookingBookingDetails}
            {...props}
          />
          <Route
            exact
            path="/services/flight-services/manage-bookings/change-booking/enter-booking-details/edit"
            component={Domestic}
            {...props}
          />
          <Route
            exact
            path="/services/flight-services/manage-bookings/change-booking/scan-qr-code"
            component={ChangeBookingQRCode}
            {...props}
          />
          <Route
            exact
            path="/services/flight-services/manage-bookings/change-booking/scan-qr-code/edit"
            component={Domestic}
            {...props}
          />
          <Route
            exact
            path="/services/payment"
            component={Payment}
            {...props}
          />
          <Route
            exact
            path="/services/onboardingpass"
            component={OnboardingPass}
            {...props}
          />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  };
}
