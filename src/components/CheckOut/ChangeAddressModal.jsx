import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
}));

export default function ChangeAddressModal(props) {
  const classes = useStyles();

  const anchorRef = React.useRef(null);

  const [openModal, setModalOpen] = React.useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const [value, setValue] = React.useState("firstChoice");

  const handleChange = (event) => {
    setValue(event.target.value);
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
                <h5>Address Book</h5>
                <CloseRoundedIcon onClick={handleModalClose} />
              </div>
              <div className="d-flex p-3 pl-4 align-items-center border-bottom">
                <AddCircleRoundedIcon color="primary" />
                <p className="font-weight-500 text-primary pl-2 font-sm">
                  ADD A NEW ADDRESS
                </p>
              </div>
              <div className="p-3">
                <FormControl component="fieldset" className={classes.fieldset}>
                  <RadioGroup
                    aria-label="choice"
                    name="choice1"
                    value={value}
                    onChange={handleChange}
                  >
                    <div className="">
                      <p className="font-xs pl-2 font-weight-600 text-secondary">
                        DEFAULT ADDRESS
                      </p>
                      <div className="d-flex justify-content-between w-100">
                        <div>
                          <FormControlLabel
                            value="firstChoice"
                            control={<Radio />}
                            label="Bukky Owolabi"
                            className={classes.formControlLabel}
                          />
                          <div className="pl-5 font-xs mt-n1">
                            <p className="">
                              8 Kehinde Odusote Street, Anthony Village, Lagos.,
                              Ikeja (GRA) , Lagos
                            </p>
                            <p className="">+2348094140232</p>
                          </div>
                        </div>
                        <div className="font-xs font-weight-600 text-primary">
                          <div>EDIT</div>
                          <div className="pt-2">REMOVE</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3">
                      <p className="font-xs pl-2 font-weight-600 text-secondary">
                        SAVED ADDRESSES
                      </p>
                      <div className="d-flex justify-content-between w-100">
                        <div>
                          <FormControlLabel
                            value="secondChoice"
                            control={<Radio />}
                            label="Light Balla"
                            className={classes.formControlLabel}
                          />
                          <div className="pl-5 font-xs mt-n1">
                            <p className="">
                              8 Kehinde Odusote Street, Anthony Village, Lagos.,
                              Ikeja (GRA) , Lagos
                            </p>
                            <p className="">+2348094140232</p>
                          </div>
                        </div>
                        <div className="font-xs font-weight-600 text-primary">
                          <div>EDIT</div>
                          <div className="pt-2">REMOVE</div>
                        </div>
                      </div>
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
