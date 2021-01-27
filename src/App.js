import React from "react";
import "./sass/main.scss";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import PhonenTablet from "./pages/Categry/PhonenTablet";
import Supermarket from "./pages/Categry/Supermarket";
import Account from "./pages/Account";
import RecentlyViewed from "./pages/RecentlyViewed";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Fashion from "./pages/Categry/Fashion";
import HealthnBeauty from "./pages/Categry/HealthnBeauty";
import HomenOffice from "./pages/Categry/HomenOffice";
import OtherCategories from "./pages/Categry/OtherCategories";
import Sports from "./pages/Categry/Sports";
import BabyProducts from "./pages/Categry/BabyProducts";
import Computing from "./pages/Categry/Computing";
import Electronics from "./pages/Categry/Electronics";
import Gaming from "./pages/Categry/Gaming";
import MyAccount from "./pages/Customer/MyAccount";
import MyOrders from "./pages/Customer/MyOrders";
import MyPendingReviews from "./pages/Customer/MyPendingReviews";
import MyVoucher from "./pages/Customer/MyVoucher";
import MySavedItems from "./pages/Customer/MySavedItems";
import MyDetails from "./pages/Customer/MyDetails";
import MyAddressBook from "./pages/Customer/MyAddressBook";
import MyPassword from "./pages/Customer/MyPassword";
import MyNewsletter from "./pages/Customer/MyNewsletter";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <title>Woozeee</title>
          <link rel="icon" href="/images/favicon.ico" />
        </header>

        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/product"} component={ProductDetail} />
          <Route path={"/customer/"} component={Account} />
          <Route path={"/recentlyViewed"} component={RecentlyViewed} />
          <Route path={"/cart"} component={Cart} />
          <Route path={"/checkout"} component={CheckOut} />

          {/* Mobile View */}
          <Route path={"/account"} component={MyAccount} />
          <Route path="/orders" component={MyOrders} />
          <Route path="/reviews" component={MyPendingReviews} />
          <Route path="/vouchers" component={MyVoucher} />
          <Route path="/saved" component={MySavedItems} />
          <Route path="/details" component={MyDetails} />
          <Route path="/addressBook" component={MyAddressBook} />
          <Route path="/changePassword" component={MyPassword} />
          <Route path="/newsletter" component={MyNewsletter} />
          {/* <Route path="/editAddress" component={EditAddressComp} /> */}

          {/* Categories */}
          <Route path={"/phones-tablets"} component={PhonenTablet} />
          <Route path={"/supermarket"} component={Supermarket} />
          <Route path={"/fashion"} component={Fashion} />
          <Route path={"/baby-products"} component={BabyProducts} />
          <Route path={"/computing"} component={Computing} />
          <Route path={"/electronics"} component={Electronics} />
          <Route path={"/gaming"} component={Gaming} />
          <Route path={"/health-beauty"} component={HealthnBeauty} />
          <Route path={"/home-office"} component={HomenOffice} />
          <Route path={"/sports"} component={Sports} />
          <Route path={"/others"} component={OtherCategories} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
