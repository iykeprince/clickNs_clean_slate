import React from 'react';
import "./sass/main.scss";
import Home from './pages/Home';
import {BrowserRouter as  Router , Route, Switch} from 'react-router-dom'
import ProductDetail from './pages/ProductDetail'
import PhoneCategory from './pages/Categories/PhonenTablet';
import Account from './pages/Account';
import RecentlyViewed from './pages/RecentlyViewed';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
// import EditAddressComp from './components/Account/EditAddressComp';

function App() {
  return (
    <Router >
    <div className="App">
      <header className="App-header">
      <title>Woozeee</title>
        <link rel="icon" href="/images/favicon.ico" />
      </header>
      
      <Switch>
        <Route path={"/"} exact component={Home}/>
        <Route path={"/product"} component={ProductDetail}/> 
        <Route path={"/phones-tablets"} component={PhoneCategory}/> 
        <Route path={"/customer/"} component={Account}/> 
        <Route path={"/recentlyViewed"} component={RecentlyViewed}/>
        <Route path={"/cart"} component={Cart}/>
        <Route path={"/checkout"} component={CheckOut}/>
      
        </Switch> 
      
    </div>
    </Router>
  );
}

export default App;
