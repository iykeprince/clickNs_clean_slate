import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { DynamicButtonTwo } from "../Button/DynamicButton";
import { FaFacebookF } from "react-icons/fa";

export default function FaceBookSignIn(props) {
  // const [login, setLogin] = useState(false);
  // const [data, setData] = useState({});
  // const [picture, setPicture] = useState("");
  
  const { onClick } = props;


  const [newDataToBackend, setnewDataToBackend] = React.useState()


  const responseFacebook = (response) => {
    // setData(response);
    // setPicture(response.picture.data.url);
    // if (response.accessToken) {
    //   setLogin(true);
    // } else {
    //   setLogin(false);
    // }


    const userDataFromFacebook = response;
    console.log("userDataFromFacebook ;", userDataFromFacebook);
 
    setnewDataToBackend({
      fName: userDataFromFacebook?.name,
      sName: userDataFromFacebook?.name,
      displayName: userDataFromFacebook?.name,
      email: userDataFromFacebook?.email,
      channel: "social-media",
      roles: "user",
      phoneNumber: userDataFromFacebook?.phoneNumber,
      source: "facebook",
    });

    console.log(
      "response :",
      response,
      newDataToBackend,
    );
  };

  // Current blocker => firstly, http doesn't work, but https, secondly localhost 3001 not whitelisted
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
              renderProps.onClick(newDataToBackend);
              responseFacebook();
              onClick(newDataToBackend);
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
