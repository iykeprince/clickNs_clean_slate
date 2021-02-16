import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import IconStore from "../../assets/icons/IconStore";
import { DynamicButtonTwo } from "../Button/DynamicButton";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import AuthModal from "../Modal/AuthModal";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paperTwo: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    minWidth: "400px",
    minHeight: "320px",
  },
}));

export default function MenuListComp() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);
  const [login, setLogin] = useState(false);
  const username = "Hi,Bukky";

  const [openModal, setModalOpen] = React.useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
    // setLogin((prevLog) => !prevLog);
  };
  const handleLoginToggle=()=>{
    setLogin((prevLog) => !prevLog);
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={`${classes.root} d-none d-sm-block`}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <span className="option__lineOne">{login ? username : "Login"}</span>
          <img src="/images/arrowdown.svg" alt="" className="dropdown__icon" />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <Link to="/customer">
                      <MenuItem>
                        <span>{IconStore.bxUser}</span>
                        <span className="adjacentIcon__text2">Account</span>
                      </MenuItem>
                    </Link>
                    <Link to="/customer#/orders">
                      <MenuItem>
                        <span>{IconStore.bxBox}</span>
                        <span className="adjacentIcon__text2">Orders</span>
                      </MenuItem>
                    </Link>
                    <Link to="/customer#/saved">
                      <MenuItem>
                        {IconStore.heart}
                        <span className="adjacentIcon__text2">Saved Items</span>
                      </MenuItem>
                    </Link>
                    {login ? (
                      <MenuItem onClick={handleLoginToggle} className="logOutTxt">LOGOUT</MenuItem>
                    ) : (
                      <MenuItem onClick={handleModalOpen} className="logOutTxt">
                        <DynamicButtonTwo
                          color="white"
                          height="2.5rem"
                          width="100%"
                          backgroundColor="var(--woozRed)"
                          boxShadow="0 4px 8px 0 rgb(0 0 0 / 20%)"
                          borderRadius="5px"
                          border="none !important"
                          fontWeight="700"
                          fontSize="0.875rem"
                          hoverBoxShadow="0 4px 8px 0 rgb(0 0 0 / 20%)"
                        >
                          LOGIN
                        </DynamicButtonTwo>
                      </MenuItem>
                    )}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
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
            <AuthModal/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
