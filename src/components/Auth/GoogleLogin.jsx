import React from "react";
import { FcGoogle } from "react-icons/fc";
import { DynamicButtonTwo } from "../Button/DynamicButton";
// refresh token
import { refreshTokenSetup } from "../../utils/refreshToken";
import { useGoogleLogin } from "react-google-login";

// For "app.woozeee.com"
const clientId =
  "979696525592-gjddn7tafhje4d5hn8o762d6s29f6ogg.apps.googleusercontent.com";

function GoogleLogin(props) {
  // const [fName, setFName] = React.useState("");
  // const [sName, setSName] = React.useState("");
  // const [displayName, setDisplayName] = React.useState("");
  // const [email, setEmail] = React.useState("");
  // const [channel, setChannel] = React.useState("");
  // const [roles, setRoles] = React.useState("");
  // const [phoneNumber, setPhoneNumber] = React.useState("");
  // const [source, setSource] = React.useState("");

  //What google initially returns => email, familyName, givenName,googleId,imageUrl,name

  const updateUserData = props.updateUserData;

  const onSuccess = (res) => {
    const userDataFromGoogle = res.profileObj;
    updateUserData(userDataFromGoogle);

    //Trying to pass data from here 'userDataFromGoogle' to the backend

    // setFName(userDataFromGoogle?.givenName)
    // setSName(userDataFromGoogle?.familyName)
    // setDisplayName(userDataFromGoogle?.givenName)
    // setEmail(userDataFromGoogle?.email)
    // setChannel("social-media")
    // setRoles("user")
    // setEmail(userDataFromGoogle?.phoneNumber)
    // setSource("google")

    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
  };

  const { onClick } = props;

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <React.Fragment>
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
        // type="submit"
        onClick={() => {
          signIn();
          onClick();
        }}
      >
        <div className="d-flex justify-content-center align-items-center text-dark">
          <FcGoogle />
          <div className="pl-3">Google Account</div>
        </div>
      </DynamicButtonTwo>
    </React.Fragment>
  );
}

export default GoogleLogin;
