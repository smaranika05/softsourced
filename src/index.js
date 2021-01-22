import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import './i18n';
import ReactGA from "react-ga";
import * as serviceWorker from './serviceWorker';
ReactGA.initialize('G-Z5D0V02059');
ReactGA.pageview(window.location.pathname + window.location.search);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
