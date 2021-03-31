import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
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
    border: "2px solid #0000001c",
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

export default function NewAddressModal(props) {
  const classes = useStyles();

  //
  const [prefix, setPrefix] = React.useState("");
  const [city, setCity] = React.useState("");
  const [region, setRegion] = React.useState("");

  const handlePrefixChange = (event) => {
    setPrefix(event.target.value);
  };

  const handleCity = (event) => {
    setCity(event.target.value);
  };
  const handleRegion = (event) => {
    setRegion(event.target.value);
  };

  const [checked, setChecked] = React.useState(false);

  const handleCheckChange = (event) => {
    setChecked(event.target.checked);
  };

  //
  const anchorRef = React.useRef(null);

  const [openModal, setModalOpen] = React.useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <div className={`${classes.root} d-none d-sm-block`}>
      <div>
        <Button ref={anchorRef} aria-haspopup="true" onClick={handleModalOpen}>
          {props.children}
        </Button>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={classes.paperTwo}>
            <div className="py-3">
              <div className="d-flex justify-content-between px-4 pb-2 border-bottom">
                <h5>Add Address</h5>
                <CloseRoundedIcon onClick={handleModalClose} />
              </div>

              {/* Form Beninging */}

              <div className="editAddressComp_wrap">
                <form
                  className={`${classes.root} flex-column px-4`}
                  noValidate
                  autoComplete="off"
                  onSubmit="/"
                >
                  <div>
                    <Row>
                      <Col lg="6">
                        <TextField label="First Name" defaultValue="" />

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
                                  onChange={handlePrefixChange}
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
                        <TextField label="Last Name" defaultValue="" />
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
                                  onChange={handlePrefixChange}
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
                            value={region}
                            onChange={handleRegion}
                            displayEmpty
                            className=""
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
                      checked={checked}
                      color="primary"
                      onChange={handleCheckChange}
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                    <span className="checkboxAddress__txt">
                      Set as Default Address
                    </span>
                  </div>

                  <div className="accButton__wrapper2">
                    <LargeButton
                      buttonName="SAVE"
                      type="submit"
                      onClick={(e) => e.preventDefault}
                    />
                  </div>
                </form>
              </div>
              {/* Form End */}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
