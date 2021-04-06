import React, { useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import AddressForm from "../Form/AddressForm";

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

export default function UpdateAddressModal({contact, ...props}) {
  const classes = useStyles();

  const [openModal, setModalOpen] = useState(false);
  const anchorRef = useRef(null);
 
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const handleModalOpen = () => {
    setModalOpen(true);
  };


  return (
    <div className={`${classes.root}`}>
      <Button ref={anchorRef} aria-haspopup="true" onClick={handleModalOpen}>
        {props.children}
      </Button>
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
                <h5>{props.title}</h5>
                <CloseRoundedIcon onClick={handleModalClose} />
              </div>
              <AddressForm handleModalClose={handleModalClose} contactProp={contact}/>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
