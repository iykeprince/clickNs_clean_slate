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
// import { isWhiteSpaceLike } from "typescript";
import { Checkbox } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../redux/actions/auth";

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
    width: "33ch",
  },
  inputField: {
    paddingTop: "0.5rem !important",
    paddingBottom: "0.5rem !important",
    fontSize: "0.875rem",
    boxShadow: "2.5px 2.5px 5px 1px #00000012",
    backgroundColor: "white",
  },
}));

function AuthModalLogin(props) {
  const classes = useStyles();
  const [values, setValues] = useState({
    showPassword: false,
  });
  const [email, setEmail] = useState("");

  const password = values.password;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const [spin, setSpin] = useState(false);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [checked, setChecked] = React.useState(false);

  const handleCheckChange = (event) => {
    setChecked(event.target.checked);
  };

  const [isMakingRequest, setIsMakingRequest] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsMakingRequest((prevState) => ({
      isMakingRequest: !prevState.isMakingRequest,
    }));
    // const { email, password } = this.state;
    if (!email || !password) return;
    const { history, loginUser } = props;

    loginUser({ email, password }, history).then((res) => {
      setIsMakingRequest((prevState) => ({
        isMakingRequest: !prevState.isMakingRequest,
      }));

      console.log("====================================");
      console.log(!res.error);
      console.log("====================================");

      if (!res.error && props.onLoginSuccess) {
        props.onLoginSuccess();
      }
    });
  };

  const handleLoginClick = () => {
    setSpin(true);
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <div className="m-3 d-flex flex-column justify-content-around">
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            <OutlinedInput
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email or Username"
              className={`${classes.inputField} loginInputCls`}
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
              value={password}
              onChange={handlePasswordChange("password")}
              placeholder="Password"
              className={`${classes.inputField} loginInputCls`}
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

          <div className="mb-2 mt-3 text-black-50 d-flex align-items-center">
            <Checkbox
              checked={checked}
              color="primary"
              onChange={handleCheckChange}
              inputProps={{ "aria-label": "secondary checkbox" }}
              className="text-black-50"
            />
            <span className="checkboxAddress__txt font-sm text-nowrap">
              Remember Me
            </span>
            <div className="font-sm d-flex text-primary w-100">
              <Link to="/" className="ml-auto font-sm">
                Forgot Password?
              </Link>
            </div>
          </div>

          <DynamicButtonTwo
            color="white"
            height="2.5rem"
            width="100%"
            backgroundColor={
              (!isMakingRequest, !email, !password)
                ? "#5b81a9"
                : "var(--woozBlue)"
            }
            boxShadow="0 4px 8px 0 rgb(0 0 0 / 20%)"
            borderRadius="5px"
            border="none !important"
            fontWeight="700"
            fontSize="0.875rem"
            hoverBoxShadow="0 4px 8px 0 rgb(0 0 0 / 20%)"
            type="submit"
            onClick={handleLoginClick}
            disabled={!isMakingRequest && !email && !password}
          >
            <div className="d-flex justify-content-center align-items-center">
              <div>LOGIN</div>
              {isMakingRequest && (
                <div
                  className="spinner-border font-xs text-light ml-4"
                  role="status"
                >
                  <span className="sr-only font-xs"></span>
                </div>
              )}
            </div>
          </DynamicButtonTwo>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = ({ auth: { token } }) => ({
  token,
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (userObject, history) => dispatch(login(userObject, history)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AuthModalLogin)
);
