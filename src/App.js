import React from 'react';
import './App.css';
import "./sass/main.scss";
import Home from './pages/Home';
import {BrowserRouter as  Router , Route, Switch} from 'react-router-dom'
import ProductDetail from './pages/ProductDetail'
import CategoryList from './pages/CategoryList';

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
      
        </Switch> 
      
    </div>
    </Router>
  );
}

export default App;
