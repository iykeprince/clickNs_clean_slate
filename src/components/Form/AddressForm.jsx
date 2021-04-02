import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { Col, Row } from "react-bootstrap";
import LargeButton from "../Button/LargeButton";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& .MuiTextField-root": {
      width: "80%",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paperTwo: {
    backgroundColor: "#fff",
    outline: "none",
    borderRadius: 4,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    minWidth: "850px",
    minHeight: "335px",
  },
  formControlLabel: {
    "& span": {
      fontSize: "0.875rem",
      fontWeight: "500",
    },
  },
  fieldset: {
    width: "100%",
  },

  formControlr: {
    minWidth: 120,
    width: "100%",
    marginTop: "0.6rem !important",
    marginLeft: "0.6rem !important",
  },
  formContrl2: {
    minWidth: 120,
    width: "80%",
    marginTop: "0.6rem !important",
    marginLeft: "0.6rem !important",
  },
  phoneSelectr: {
    width: "7ch",
  },
  phoneNumberFieldr: {
    width: "110% !important",
    minWidth: 120,
    whiteSpace: "nowrap",
  },
}));

export default function AddressForm(props) {
  const classes = useStyles();
 
  //Initial States
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [phonePrefix, setPhonePrefix] = useState("");
  const [secondPhonePrefix, setsecondPhonePrefix] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [additionalPhoneNumber, setadditionalPhoneNumber] = useState("");
  const [address, setaddress] = useState("");
  const [additionalInformation, setadditionalInformation] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [defaultAddress, setDefaultAddress] = useState(false);

  //Handlers
  const handleFirstName = (event) => {
    setfirstName(event.target.value);
  };
  const handleLastName = (event) => {
    setlastName(event.target.value);
  };
  const handlePhoneNumber = (event) => {
    setphoneNumber(event.target.value.replace(/[^0-9]/g, ""));
  };
  const handleAdditionalPhoneNumber = (event) => {
    setadditionalPhoneNumber(event.target.value.replace(/[^0-9]/g, ""));
  };
  const handlePhonePrefixChange = (event) => {
    setPhonePrefix(event.target.value);
  };
  const handleSecondPhonePrefixChange = (event) => {
    setsecondPhonePrefix(event.target.value);
  };
  const handleCity = (event) => {
    setCity(event.target.value);
  };
  const handleRegion = (event) => {
    setRegion(event.target.value);
  };
  const handleAddress = (event) => {
    setaddress(event.target.value);
  };
  const handleDefaultAddress = (event) => {
    setDefaultAddress(event.target.checked);
  };
  const handleAdditionalInformation = (event) => {
    setadditionalInformation(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    // postUserContact({
    //   firstName,
    //   lastName,
    //   phonePrefix,
    //   secondPhonePrefix,
    //   phoneNumber,
    //   additionalPhoneNumber,
    //   address,
    //   additionalInformation,
    //   city,
    //   region,
    //   defaultAddress,
    // });
  };

    return (
        <div className="editAddressComp_wrap">
        <form
          className={`${classes.root} flex-column px-4`}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div>
            <Row>
              <Col lg="6">
                <TextField
                  label="First Name"
                  defaultValue={props.firstName}
                  value={firstName}
                  onChange={handleFirstName}
                />

                <Row className="editAddressComp_rowOneInner">
                  <Col>
                    <span>
                      <FormControl
                        className={`prefixAdditionalStyle ${classes.formControlr}`}
                      >
                        <InputLabel
                          shrink
                          id="demo-simple-select-placeholder-label-label"
                        >
                          Prefix
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-placeholder-label-label"
                          id="demo-simple-select-placeholder-label"
                          value={phonePrefix}
                          onChange={handlePhonePrefixChange}
                          displayEmpty
                          className={classes.phoneSelectr}
                        >
                          <MenuItem value="">
                            <p>+234</p>
                          </MenuItem>
                          <MenuItem value={235}>+235</MenuItem>
                          <MenuItem value={236}>+236</MenuItem>
                        </Select>
                      </FormControl>
                    </span>
                  </Col>

                  <Col>
                    <span className="phoneField__wrapper">
                      <TextField
                        label="Phone Number"
                        className={classes.phoneNumberFieldr}
                        value={phoneNumber}
                        onChange={handlePhoneNumber}
                        inputProps={{ maxLength: 10 }}
                        defaultValue={props.phoneNumber}
                      />
                    </span>
                  </Col>
                </Row>
              </Col>

              <Col lg="6">
                <TextField
                  label="Last Name"
                  value={lastName}
                  onChange={handleLastName}
                  defaultValue={props.lastName}
                />
                <Row>
                  <Col>
                    <span>
                      <FormControl
                        className={`prefixAdditionalStyle ${classes.formControlr}`}
                      >
                        <InputLabel
                          shrink
                          id="demo-simple-select-placeholder-label-label"
                        >
                          Prefix
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-placeholder-label-label"
                          id="demo-simple-select-placeholder-label"
                          value={secondPhonePrefix}
                          onChange={handleSecondPhonePrefixChange}
                          displayEmpty
                          className={classes.phoneSelectr}
                        >
                          <MenuItem value="">
                            <p>+234</p>
                          </MenuItem>
                          <MenuItem value={235}>+235</MenuItem>
                          <MenuItem value={236}>+236</MenuItem>
                        </Select>
                      </FormControl>
                    </span>
                  </Col>

                  <Col>
                    <span className="phoneField__wrapper">
                      <TextField
                        label="Additional Phone Number"
                        className={classes.phoneNumberFieldr}
                        value={additionalPhoneNumber}
                        onChange={handleAdditionalPhoneNumber}
                        inputProps={{ maxLength: 10 }}
                        defaultValue={props.additionalPhoneNumber}
                      />
                    </span>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <TextField
                label="Address"
                value={address}
                onChange={handleAddress}
                defaultValue={props.address}
                className="txtField_edit"
              />
            </Row>

            <Row>
              <TextField
                label="Additional Information"
                value={additionalInformation}
                onChange={handleAdditionalInformation}
                defaultValue={props.additionalInformation}
                className="txtField_edit"
              />
            </Row>

            <Row>
              <Col lg="6">
                <FormControl className={classes.formContrl2}>
                  <InputLabel
                    shrink
                    id="demo-simple-select-placeholder-label-label"
                  >
                    Region
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value={region}
                    onChange={handleRegion}
                    displayEmpty
                    className=""
                    defaultValue={props.region}
                  >
                    <MenuItem value="Lagos">Lagos</MenuItem>
                    <MenuItem value="Ekiti">Ekiti</MenuItem>
                    <MenuItem value="Ibadan">Ibadan</MenuItem>
                  </Select>
                </FormControl>
              </Col>

              <Col lg="6">
                <FormControl className={classes.formContrl2}>
                  <InputLabel
                    shrink
                    id="demo-simple-select-placeholder-label-label"
                  >
                    City
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value={city}
                    onChange={handleCity}
                    displayEmpty
                    defaultValue={props.city}
                    className=""
                  >
                    <MenuItem value="Victoria Island">
                      Victoria Island
                    </MenuItem>
                    <MenuItem value="Yaba">Yaba</MenuItem>
                    <MenuItem value="Ketu">Ketu</MenuItem>
                  </Select>
                </FormControl>
              </Col>
            </Row>
          </div>

          <div className="editAddressCheckBox_wrap">
            <Checkbox
              checked={defaultAddress}
              color="primary"
              onChange={handleDefaultAddress}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <span className="font-weight-500 font-sm">
              Set as Default Address
            </span>
          </div>

          <div className="accButton__wrapper2">
            <LargeButton
              buttonName="SAVE"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                // history.push("/");
                props.handleModalClose();
              }}
            />
          </div>
        </form>
      </div>
    )
}
