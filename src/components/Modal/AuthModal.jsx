import React from "react";
import { HashRouter} from "react-router-dom";
import AuthModalSignUp from "./AuthModalSignUp";
import AuthModalLogin from "./AuthModalLogin";

export default function AuthModal(props) {
  return (
    <HashRouter>
      {/* Careful with the Classes here, coz they're used in  MyOrdersUI  */}
      <div className="authModal">
        <div className="OpenClosedNav my-3  d-flex justify-content-center">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                to="/"
                className="nav-link active orderToggle"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Login
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                to="/signup"
                className="nav-link orderToggle closedOrdr"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Signup
              </a>
            </li>
          </ul>
        </div>

        <div className="d-flex justify-content-center">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <AuthModalLogin />
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <AuthModalSignUp />
            </div>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}
