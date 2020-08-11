/* eslint-disable eqeqeq */
/* eslint-disable no-useless-concat */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Logo from "../../../../components/Logo/Logo";
import Spinner from "../../../../components/Spinner/Spinner";
import Error from "../../../../components/Error/Error";
import SuccessResponse from "../../../../components/Response/SuccessResponse";
import { Tabs, Tab } from "react-bootstrap";
import { GoBackButtonTwo } from "../../../../components/Buttons/GoBackButton";
import GoNextButton from "../../../../components/Buttons/GoNextButton";
import InputGroupDatepicker from "../../../../components/InputGroup/InputGroupDatepicker/InputGroupDatepicker";
import InputGroupText from "../../../../components/InputGroup/InputGroupText/InputGroupText";
import InputGroupRead from "../../../../components/InputGroup/InputGroupRead/InputGroupRead";
import "./Insure.css";
import { PaystackButton } from "react-paystack";
// import {
//   usePaystackPayment,
//   PaystackButton,
//   PaystackConsumer,
// } from "react-paystack";
// import { Helmet } from "react-helmet";

class Insure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 1,
      isSelected: null,
      isLoading: false,
      showError: false,
      errorMessage: "",
      successResponse: false,
    };
    this.handleTabSelect = this.handleTabSelect.bind(this);
  }

  componentDidMount = () => {
    window.scroll(0, 0);
  };

  goBack = (e) => {
    e.preventDefault();
    window.history.back();
  };

  handleTabSelect(key) {
    window.scroll(0, 0);
    this.setState({ key });
    if (key > 4) {
      this.setState({
        key: 4,
        successResponse: true,
      });
    }
    if (key < 1) {
      window.history.back();
      this.setState({ key: 1 });
    }
  }

  handleButtonText = () => {
    const { key } = this.state;
    if (key == 1) {
      return "Skip";
    }
    if (key == 2) {
      return "Get Instant Quote";
    }
    if (key == 3) {
      return "Next";
    }
    if (key == 4) {
      return "Confirm";
    }
  };

  handleFlightType = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  };

  handleUpdate = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  };

  handleSelect = (e, value) => {
    this.setState({
      [value.name]: e,
    });
  };

  handlePayment = () => {
    // let handler = PaystackPop.setup({
    //   key: "pk_test_479b2271511d9df77e6348efb0ef143d4227f9f6", // Replace with your public key
    //   email: "ibukunoluwarotimi123@gmail.com",
    //   amount: 100 * 100,
    //   onClose: function () {
    //     alert("Transaction was not completed");
    //   },
    //   callback: function (response) {
    //     let message = "Payment complete! Reference: " + response.reference;
    //     alert(message);
    //   },
    // });
    // handler.openIframe();
  };

  dateOnChange = (date) => {
    this.setState({
      departure_date: date,
    });
  };

  dateOfBirthOnChange = (date) => {
    this.setState({
      date_of_birth: date,
    });
  };

  fromTimeOnChange = (date) => {
    this.setState({
      from_flight_time: date,
    });
  };

  toTimeOnChange = (date) => {
    this.setState({
      to_flight_time: date,
    });
  };

  select = (id) => {
    this.setState({ isSelected: id });
  };

  render = () => {
    const componentProps = {
      email: "ibukunoluwarotimi123@gmail.com",
      amount: "20000",
      channels: ["card", "bank_transfer"],
      publicKey: "pk_test_479b2271511d9df77e6348efb0ef143d4227f9f6",
      text: "Pay Now",
      onSuccess: () =>
        alert("Your transaction was successful! Come back soon!!"),
      onClose: () => alert("Wait! You need to do this, don't go!!!!"),
    };

    const {
      key,
      isSelected,
      date_of_birth,
      isLoading,
      showError,
      errorMessage,
      successResponse,
    } = this.state;

    const insurances = [
      {
        id: 1,
        image:
          "https://res.cloudinary.com/emekamykael45/image/upload/v1582650299/econnect/wapic_qp1y33.png",
        insurance_name: "Aviation Accident Benefit",
        price: "4,050",
      },
      {
        id: 2,
        image:
          "https://res.cloudinary.com/emekamykael45/image/upload/v1582650299/econnect/mansard_iftui5.png",
        insurance_name: "Aviation Accident Benefit",
        price: "7,050",
      },
      {
        id: 3,
        image:
          "https://res.cloudinary.com/emekamykael45/image/upload/v1582650299/econnect/wapic_qp1y33.png",
        insurance_name: "Aviation Accident Benefit",
        price: "3,350",
      },
      {
        id: 4,
        image:
          "https://res.cloudinary.com/emekamykael45/image/upload/v1582650299/econnect/mansard_iftui5.png",
        insurance_name: "Aviation Accident Benefit",
        price: "5,650",
      },
    ];

    return (
      <>
        {/* <Helmet>
          <script src="https://js.paystack.co/v1/inline.js"></script>
        </Helmet> */}
        <Spinner show={isLoading} />
        {showError ? <Error errorMsg={errorMessage} /> : null}
        {successResponse ? <SuccessResponse /> : null}
        <div className="services flight domestic insure">
          <div className="head-div">
            <img
              className="arrow-prev"
              src="https://res.cloudinary.com/emekamykael45/image/upload/v1581892606/econnect/arrow-prev_iqwbh9.svg"
              alt=""
              onClick={this.goBack}
            />
            <Logo />
          </div>

          <div className="form-div">
            <Tabs
              activeKey={key}
              onSelect={this.handleTabSelect}
              id="uncontrolled-tab-example"
            >
              <Tab eventKey={1} title="SELECT INSURANCE">
                <form className="form select">
                  <h5 className="header">Travel Protection</h5>
                  <div className="option">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        <img
                          src="https://res.cloudinary.com/emekamykael45/image/upload/v1582613704/econnect/interswitch_wobbhh.png"
                          alt=""
                        />
                        <div className="detail">
                          <h6>Aviation Accident Benefit</h6>
                          <p>
                            USD 100,000 cash benefit will be payable in the
                            event of your death caused by an aviation accident.
                            See summary of the benefits, conditions and
                            exclusions of this product here.
                          </p>
                        </div>
                        <div className="price">
                          Starting from
                          <p>₦5,990</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="option">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck2"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck2"
                      >
                        <img
                          src="https://res.cloudinary.com/emekamykael45/image/upload/v1582613704/econnect/interswitch_wobbhh.png"
                          alt=""
                        />
                        <div className="detail">
                          <h6>Aviation Accident Benefit</h6>
                          <p>
                            USD 100,000 cash benefit will be payable in the
                            event of your death caused by an aviation accident.
                            See summary of the benefits, conditions and
                            exclusions of this product here.
                          </p>
                        </div>
                        <div className="price">
                          Starting from
                          <p>₦5,990</p>
                        </div>
                      </label>
                    </div>
                  </div>
                </form>
              </Tab>
              <Tab eventKey={2} title="GET INSTANT QUOTE">
                <div className="passenger-div quote">
                  <h6 className="same-as">Same As Above</h6>

                  <form className="form">
                    <div className="form-group d-flex">
                      <InputGroupText
                        icon="https://res.cloudinary.com/emekamykael45/image/upload/v1582078782/econnect/person_yoq2kq.svg"
                        name="first_name"
                        type="name"
                        placeholder="First name"
                        onChange={this.handleUpdate}
                      />
                      <InputGroupText
                        icon="https://res.cloudinary.com/emekamykael45/image/upload/v1582078782/econnect/person_yoq2kq.svg"
                        name="last_name"
                        type="name"
                        placeholder="Last name"
                        onChange={this.handleUpdate}
                      />
                    </div>

                    <div className="form-group d-flex">
                      <InputGroupText
                        icon="https://res.cloudinary.com/emekamykael45/image/upload/v1582078782/econnect/email_fazxbj.svg"
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={this.handleUpdate}
                      />
                      <InputGroupDatepicker
                        icon="https://res.cloudinary.com/emekamykael45/image/upload/v1581892775/econnect/date_popkg2.svg"
                        name="date_of_birth"
                        selected={date_of_birth}
                        placeholderText="Date of birth"
                        onChange={this.dateOfBirthOnChange}
                      />
                    </div>

                    <div className="form-group d-flex">
                      <InputGroupText
                        icon="https://res.cloudinary.com/emekamykael45/image/upload/v1582078782/econnect/email_fazxbj.svg"
                        name="destination"
                        type="text"
                        placeholder="Travel destination"
                        onChange={this.handleUpdate}
                      />
                      <InputGroupDatepicker
                        icon="https://res.cloudinary.com/emekamykael45/image/upload/v1581892775/econnect/date_popkg2.svg"
                        name="start_date"
                        selected={date_of_birth}
                        placeholderText="Start Date"
                        onChange={this.dateOfBirthOnChange}
                      />
                    </div>

                    <div className="form-group d-flex">
                      <InputGroupText
                        icon="https://res.cloudinary.com/emekamykael45/image/upload/v1582078782/econnect/phone_wzf8na.svg"
                        name="phone_number"
                        type="number"
                        placeholder="Phone number"
                        onChange={this.handleUpdate}
                      />
                      <InputGroupText
                        icon="https://res.cloudinary.com/emekamykael45/image/upload/v1582078782/econnect/phone_wzf8na.svg"
                        name="stay_length"
                        type="number"
                        placeholder="Length of stay (Days)"
                        onChange={this.handleUpdate}
                      />
                    </div>

                    <div className="foot d-flex">
                      <h6 className="are-you">
                        Are you travelling with a group
                      </h6>
                    </div>
                  </form>
                </div>
              </Tab>
              <Tab eventKey={3} title="MAKE SELECTION">
                <div className="selection-div">
                  {insurances.map((insurance, i) => (
                    <div
                      key={i}
                      className={
                        "insurance" +
                        (insurance.id === isSelected ? " selected" : "")
                      }
                      onClick={() => this.select(insurance.id)}
                    >
                      <img src={insurance.image} alt="" />
                      <h6 className="text">{insurance.insurance_name}</h6>
                      <h5 className="text">₦{insurance.price}</h5>
                      <button className="btn btn-view">View Details</button>
                    </div>
                  ))}
                </div>
              </Tab>
              <Tab eventKey={4} title="CONFIRMATION">
                <div className="confirmation-div">
                  <div className="selection-div">
                    <div className="insurance selected">
                      <img
                        src="https://res.cloudinary.com/emekamykael45/image/upload/v1582650299/econnect/wapic_qp1y33.png"
                        alt=""
                      />
                      <h6 className="text">Aviation Accident Benefit"</h6>
                      <h5 className="text">₦4,250</h5>
                      <button className="btn btn-view">View Details</button>
                    </div>
                  </div>

                  <form className="form confirmation">
                    <div className="header">
                      <img
                        src="https://res.cloudinary.com/emekamykael45/image/upload/v1582651854/econnect/passengers_k6ghoj.svg"
                        alt=""
                      />
                      <p>PASSENGERS DATA</p>
                    </div>
                    <div className="content">
                      <div className="form-group">
                        <div className="header">
                          <img
                            src="https://res.cloudinary.com/emekamykael45/image/upload/v1582652481/econnect/person_wmyd0y.svg"
                            alt=""
                          />
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
                            label="Travelling date"
                            name="travelling_date"
                            value="02/11/2020"
                            readOnly="readOnly"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="header">
                          <img
                            src="https://res.cloudinary.com/emekamykael45/image/upload/v1582652481/econnect/person_wmyd0y.svg"
                            alt=""
                          />
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
                            label="Travelling date"
                            name="travelling_date"
                            value="02/11/2020"
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
            <GoBackButtonTwo
              onClick={() => this.handleTabSelect(parseInt(key) - 1)}
              text="Previous"
            />
            <PaystackButton
              // onClick={()=>this.handleTabSelect(parseInt(key)+1)}
              // onClick={() => this.handlePayment()}
              // text={this.handleButtonText()}
              {...componentProps}
              className="btn btn-start"
            />
          </div>
        </div>
      </>
    );
  };
}

export default Insure;
