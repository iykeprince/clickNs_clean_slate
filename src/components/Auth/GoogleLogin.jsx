import React from "react";
import { useGoogleLogin } from "react-google-login";
import { FcGoogle } from "react-icons/fc";
import { DynamicButtonTwo } from "../Button/DynamicButton";
// refresh token
import { refreshTokenSetup } from "../../utils/refreshToken";

// For "app.woozeee.com"
const clientId =
  "979696525592-gjddn7tafhje4d5hn8o762d6s29f6ogg.apps.googleusercontent.com";

function GoogleLogin(props) {
  // const updateUserData = props.updateUserData

  const updateUserData = props.updateUserData;

  const onSuccess = (res) => {
    const userDataFromGoogle = res.profileObj;
    updateUserData(userDataFromGoogle);
    // console.log("Login Success: currentUser:", {userData});
    // console.log("====================================");
    // console.log(res);
    // console.log("====================================");
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
  };

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
      onClick={signIn}
    >
      <div className="d-flex justify-content-center align-items-center text-dark">
        <FcGoogle />
        <div className="pl-3">Google Account</div>
      </div>
    </DynamicButtonTwo>
  );
}

export default GoogleLogin;
