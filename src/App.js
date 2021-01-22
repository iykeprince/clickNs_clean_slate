import React from "react";
import "./sass/main.scss";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import PhonenTablet from "./pages/Categories/PhonenTablet";
import Supermarket from "./pages/Categories/Supermarket";
import Account from "./pages/Account";
import RecentlyViewed from "./pages/RecentlyViewed";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Fashion from "./pages/Categories/Fashion";
import HealthnBeauty from "./pages/Categories/HealthnBeauty";
import HomenOffice from "./pages/Categories/HomenOffice";
import OtherCategories from "./pages/Categories/OtherCategories";
import Sports from "./pages/Categories/Sports";
import BabyProducts from "./pages/Categories/BabyProducts";
import Computing from "./pages/Categories/Computing";
import Electronics from "./pages/Categories/Electronics";
import Gaming from "./pages/Categories/Gaming";

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
