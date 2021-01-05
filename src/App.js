import React from 'react';
import "./sass/main.scss";
import Home from './pages/Home';
import {BrowserRouter as  Router , Route, Switch} from 'react-router-dom'
import ProductDetail from './pages/ProductDetail'
import CategoryList from './pages/CategoryList';
import Account from './pages/Account';
import RecentlyViewed from './pages/RecentlyViewed';


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
        <Route path={"/category"} component={CategoryList}/> 
        <Route path={"/account"} component={Account}/> 
        <Route path={"/recentlyViewed"} component={RecentlyViewed}/>
      
        </Switch> 
      
    </div>
    </Router>
  );
}

export default App;
