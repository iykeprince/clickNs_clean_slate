import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Col, Row } from "react-bootstrap";
import LargeButton from "../Button/LargeButton";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import { NavLink } from "react-router-dom";
import IconStore from "../../assets/icons/IconStore";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      width: "80%",
    },
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
  },
}));

export default function EditAddressComp() {
  const classes = useStyles();

  const [prefix, setPrefix] = React.useState("");
  const [select, setSelect] = React.useState("");

  const handleChange = (event) => {
    setPrefix(event.target.value);
  };

  const handleChangeTwo = (event) => {
    setSelect(event.target.value);
  };

  const [checked, setChecked] = React.useState(false);

  const handleCheckChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <NavLink to="/addressBook" className="addressBook_btnGrp">
        <button className="addressBook__backButton">
          {IconStore.bxArrowBack}
        </button>
        <span className="titleHeader2">Add a new Address</span>
      </NavLink>

      <div className="editAddressComp_wrap">
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <Row>
              <Col lg="6">
                <TextField label="First Name" defaultValue="Bukky" />

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
                          value={prefix}
                          onChange={handleChange}
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
                      />
                    </span>
                  </Col>
                </Row>
              </Col>

              <Col lg="6">
                <TextField label="Last Name" defaultValue="Owolabi" />
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
                          value={prefix}
                          onChange={handleChange}
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
                      />
                    </span>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <TextField
                label="Address"
                defaultValue=""
                className="txtField_edit"
              />
            </Row>

            <Row>
              <TextField
                label="Additional Information"
                defaultValue=""
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
                    value={select}
                    onChange={handleChangeTwo}
                    displayEmpty
                    className=""
                  >
                    <MenuItem value="">
                      <p>Lagos</p>
                    </MenuItem>
                    <MenuItem value={234}>Ekiti</MenuItem>
                    <MenuItem value={235}>Ibadan</MenuItem>
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
                    value={select}
                    onChange={handleChangeTwo}
                    displayEmpty
                    className=""
                  >
                    <MenuItem value="">
                      <p>Victoria Island</p>
                    </MenuItem>
                    <MenuItem value={234}>Yaba</MenuItem>
                    <MenuItem value={235}>Ketu</MenuItem>
                  </Select>
                </FormControl>
              </Col>
            </Row>
          </div>

          <div className="editAddressCheckBox_wrap">
            <Checkbox
              checked={checked}
              color="primary"
              onChange={handleCheckChange}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <span className="checkboxAddress__txt">Set as Default Address</span>
          </div>

          <div className="accButton__wrapper2">
            <LargeButton buttonName="SAVE" />
          </div>
        </form>
      </div>
    </div>
  );
}
