import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { DynamicButtonTwo } from "../Button/DynamicButton";
import { FaFacebookF } from "react-icons/fa";

export default function FaceBookSignIn(props) {
  
  // const { onClick } = props;


  // const [newDataToBackend, setnewDataToBackend] = React.useState()


  const responseFacebook = (response) => {

    // const userDataFromFacebook = response;
    // console.log("userDataFromFacebook ;", userDataFromFacebook);
 
    // setnewDataToBackend({
    //   fName: response?.name,
    //   sName: response?.name,
    //   displayName: response?.name,
    //   email: "unavailable",
    //   channel: "social-media",
    //   roles: "user",
    //   phoneNumber: "unavailable",
    //   source: "facebook",
    // });

    console.log(
      "response :",
      response,
      // newDataToBackend,
    );
  };

  return (
    <div>

      <FacebookLogin
        appId="2744707745746971"
        autoLoad={false}
        fields="name,email,picture" 
        scope="public_profile,user_friends"
        callback={responseFacebook}
        render={(renderProps) => (
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
            onClick={() => {
              renderProps.onClick();
              responseFacebook();
              // onClick(newDataToBackend);
            }}
          >
            <div className="d-flex justify-content-center align-items-center">
              <FaFacebookF />
              <div className="pl-3">Facebook Account</div>
            </div>
          </DynamicButtonTwo>
        )}
      />
    </div>
  );
}
