import React,{useState}  from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import LargeButton from "../Button/LargeButton";
import EditAddressComp from "./EditAddressComp";
import DisplayAddress from "./DisplayAddress";
import IconStore from "../../store/IconStore";


function AddressBookUI() {
  const [showForm, setShowForm] = useState(false);
  const onButtonClick = () => setShowForm(true);

  // const useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])
  const onBackArrowClick = () => setShowForm(false);
  
  //IMPORTANT NOTE!: first fix how to keep the current page on page reload since you've used bootstrap,
  // before solving the bug associated with backarrow dissapearing 
  return (
    <div className="addressbookUI_wrapper">
      <HashRouter>

        {showForm ? (
          <NavLink
            to="/"
            className="addressBook_btnGrp"
            onClick={onBackArrowClick}
          >
            <button className="addressBook__backButton">
              {IconStore.bxArrowBack}
            </button>
            <span className="titleHeader2">Add a new Address</span>
          </NavLink>
        ) : (
          <NavLink
            to="/editAddress"
            className="button__wrap2"
            onClick={onButtonClick}
          >
            <LargeButton buttonName="ADD NEW ADDRESS" />
          </NavLink>
        )}

        <div className="content">
          <Route exact path="/" component={DisplayAddress} />
          <Route path="/editAddress" component={EditAddressComp} />
        </div>
      </HashRouter>
    </div>
  );
}
export default AddressBookUI;
