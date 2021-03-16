import React from 'react'
import AccountOtherRows from "../../components/Account/AccountOtherRows";
// import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import useWindowDimensions from "../../Hooks/UseWindowDimension";
import { Redirect } from "react-router-dom";
import EditAddressComp from '../../components/Account/EditAddressComp';
import NewFooter from '../../components/Footer/NewFooter';

export default function MobileEditAddress() {
    const { width } = useWindowDimensions();

    if (width < 768) {
        return (
          <div className="d-block d-md-none">
            <Header showHamburger={true} />
            <div className="body__wrapper putAtMiddle ">
              <div className="rightr">
                <div className="right__wrapper">
                  <EditAddressComp />
                </div>
              </div>
              <AccountOtherRows />
            </div>
            <NewFooter />
          </div>
        );
      }
      return <Redirect to="/customer#/changePassword" />
}
