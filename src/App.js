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
