import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { DynamicButtonTwo } from "../Button/DynamicButton";
import { FaFacebookF } from "react-icons/fa";


export default function FaceBookSignIn() {
  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <div>
      <FacebookLogin
        appId="2744707745746971"
        autoLoad
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
            type="submit"
            onClick={renderProps.onClick}
          >
            <div className="d-flex justify-content-center align-items-center text-dark">
              <FaFacebookF />
              <div className="pl-3">Facebook Account</div>
            </div>
          </DynamicButtonTwo>
        )}
      />
    </div>
  );
}
