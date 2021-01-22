import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import IconStore from "../../store/IconStore";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function MenuListComp() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

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
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <span className="option__lineOne">Hi,Bukky</span>
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
                      <MenuItem onClick={handleClose}>
                        <span>{IconStore.bxUser}</span>
                        <span className="adjacentIcon__text2">Account</span>
                      </MenuItem>
                    </Link>
                    <Link to="/customer#/orders">
                      <MenuItem onClick={handleClose}>
                        <span>{IconStore.bxBox}</span>
                        <span className="adjacentIcon__text2">Orders</span>
                      </MenuItem>
                    </Link>
                    <Link to="/customer#/saved">
                      <MenuItem onClick={handleClose}>
                        {IconStore.heart}
                        <span className="adjacentIcon__text2">Saved Items</span>
                      </MenuItem>
                    </Link>
                    <Link to="/">
                      <MenuItem onClick={handleClose} className="logOutTxt">
                        LOGOUT
                        {/* <DynamicButtonTwo
                color="white"
                height="2.5rem"
                width={listGridbtn}
                backgroundColor="var(--woozBlue)"
                boxShadow="none"
                borderRadius="5px"
                border="none !important"
                fontWeight="700"
                fontSize="0.875rem"
                hoverBoxShadow="none"
              >
                ADD TO CART
              </DynamicButtonTwo> */}
                      </MenuItem>
                    </Link>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
