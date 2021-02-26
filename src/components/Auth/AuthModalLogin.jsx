import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { DynamicButtonTwo } from "../Button/DynamicButton";
// import { IoMdMail } from "react-icons/io";
// import { isWhiteSpaceLike } from "typescript";
import { Checkbox } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login, socialLogin } from "../../redux/actions/auth";
import Loader from "react-loader-spinner";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useWindowDimensions from "../../Hooks/UseWindowDimension";

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
    // width: "33ch",
    width: (propz) => propz.width,
  },
  inputField: {
    paddingTop: "0.5rem !important",
    paddingBottom: "0.5rem !important",
    fontSize: "0.875rem",
    border: "1px solid #E1E1E1",
    backgroundColor: "#F9F9F9",
    borderWidth: "1px",
  },
}));

function AuthModalLogin(props) {
  const { width } = useWindowDimensions();
  const modalWidth =  width< 468 ? width-40 : "38ch";
  // console.log({width, modalWidth});
  const propz = { width: modalWidth };
  const classes = useStyles(propz);

  const [values, setValues] = useState({
    showPassword: false,
  });
  const [email, setEmail] = useState("");

  const [validationError, setvalidationError] = useState(false);
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
  const [timeout, settimeout] = useState();
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

    //User Mail and Password
    if (!email || !password) return;
    const { history, loginUser } = props;

    loginUser({ email, password }, history).then((res) => {
      setIsMakingRequest((prevState) => ({
        isMakingRequest: !prevState.isMakingRequest,
      }));

      if (props.token) {
        props.onLoginSuccess();
      } else {
        setvalidationError(true);
      }
    });

    //Trial for Google Login
    const { history2, socialLoginUser } = props;

    socialLoginUser({ email, password }, history2).then((res) => {
      if (props.token) {
        props.onLoginSuccess();
      } else {
        setvalidationError(true);
      }
    });
  };

  const handleLoginClick = () => {
    setSpin(true);
    settimeout(500);
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <div className="m-3 d-flex flex-column justify-content-around">
          <p className="font-sm text-dark pb-2 font-weight-500">Email</p>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            <OutlinedInput
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email or Username"
              className={`${classes.inputField} loginInputCls pl-3`}
            />
          </FormControl>

          <br />
          <p className="font-sm text-dark pb-2 font-weight-500">Password</p>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            <OutlinedInput
              type={values.showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange("password")}
              placeholder="Password"
              className={`${classes.inputField} loginInputCls pl-3`}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          {validationError ? (
            <div className="font-sm text-danger pt-3">
              * Email or password incorrect
            </div>
          ) : (
            ``
          )}

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
                ? "rgba(255,87,87,0.7)"
                : "var(--woozRed)"
            }
            boxShadow="none"
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
              {spin && (
                <span className="ml-4">
                  <Loader
                    type="TailSpin"
                    color="#fff"
                    height={14}
                    width={14}
                    timeout={timeout}
                  />
                </span>
              )}
            </div>
          </DynamicButtonTwo>

          <p className="text-center my-4 font-sm horizontal_Line">
            Or continue with
          </p>

          <DynamicButtonTwo
            color="white"
            height="2.5rem"
            width="100%"
            backgroundColor="#fff"
            boxShadow="none"
            borderRadius="5px"
            border="1px solid #1976D2"
            fontWeight="500"
            fontSize="0.875rem"
            hoverBoxShadow="0 4px 8px 0 rgb(0 0 0 / 20%)"
            type="submit"
          >
            <div className="d-flex justify-content-center align-items-center text-dark">
              <FcGoogle />
              <div className="pl-3">Google Account</div>
            </div>
          </DynamicButtonTwo>
          <div className="my-1"></div>
          <DynamicButtonTwo
            color="white"
            height="2.5rem"
            width="100%"
            backgroundColor="var(--woozBlue)"
            boxShadow="none"
            borderRadius="5px"
            border="none !important"
            fontWeight="500"
            fontSize="0.875rem"
            hoverBoxShadow="0 4px 8px 0 rgb(0 0 0 / 20%)"
            type="submit"
          >
            <div className="d-flex justify-content-center align-items-center">
              <FaFacebookF />
              <div className="pl-3">Facebook Account</div>
            </div>
          </DynamicButtonTwo>
          <div className="my-1"></div>
          <DynamicButtonTwo
            color="white"
            height="2.5rem"
            width="100%"
            backgroundColor="#55ACEE"
            boxShadow="none"
            borderRadius="5px"
            border="none !important"
            fontWeight="500"
            fontSize="0.875rem"
            hoverBoxShadow="0 4px 8px 0 rgb(0 0 0 / 20%)"
            type="submit"
          >
            <div className="d-flex justify-content-center align-items-center">
              <FaTwitter />
              <div className="pl-3">Twitter Account</div>
            </div>
          </DynamicButtonTwo>
          <div className="pb-2"></div>
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

  //Trial for Google Login
  socialLoginUser: (userObject2, history2) =>
    dispatch(socialLogin(userObject2, history2)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AuthModalLogin)
);
