import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import * as serviceWorker from "./serviceWorker";
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
// import ReduxToastr from 'react-redux-toastr'
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store.js';
// import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      {/* <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        getState={(state) => state.toastr} // This is the default
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      /> */}
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </PersistGate>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// serviceWorker.unregister();
