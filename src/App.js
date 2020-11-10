import React from 'react';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as  Router , Route, Switch} from 'react-router-dom'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <Router >
    <div className="App">
      <header className="App-header">
      <title>Woozeee</title>
        <link rel="icon" href="/images/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Google+Sans:100,300,400,500,700,900,100i,300i,400i,500i,700i,900i"
        />
      </header>
      
      <Switch>
        <Route path={"/"} exact component={Home}/>
        <Route path={"/product"} component={ProductDetail}/> 
      
        </Switch> 
      
    </div>
    </Router>
  );
}

export default App;
