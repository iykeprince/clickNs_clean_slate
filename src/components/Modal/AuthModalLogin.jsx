import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { IoMdMail } from "react-icons/io";
import { DynamicButtonTwo } from "../Button/DynamicButton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "35ch",
  },
  inputField: {
    paddingTop: "0.5rem !important",
    paddingBottom: "0.5rem !important",
    fontSize:"0.875rem",
  },
}));

export default function AuthModalLogin() {
  const classes = useStyles();
  const [values, setValues] = useState({
    showPassword: false,
  });
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <div className="m-3 mt-4 d-flex flex-column justify-content-around">
        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <OutlinedInput
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email or Username"
            className={classes.inputField}
            startAdornment={
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="start"
                >
                  <IoMdMail />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <br />
        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <OutlinedInput
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handlePasswordChange("password")}
            placeholder="Password"
            className={classes.inputField}
            startAdornment={
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="start"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <br />
        <DynamicButtonTwo
          color="white"
          height="2.5rem"
          width="100%"
          backgroundColor="var(--woozBlue)"
          boxShadow="0 4px 8px 0 rgb(0 0 0 / 20%)"
          borderRadius="5px"
          border="none !important"
          fontWeight="700"
          fontSize="0.875rem"
          hoverBoxShadow="0 4px 8px 0 rgb(0 0 0 / 20%)"
        >
          LOGIN
        </DynamicButtonTwo>
      </div>
    </div>
  );
}
