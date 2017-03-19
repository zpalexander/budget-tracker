/* React */
import React from 'react';
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from 'react-router'
/* Redux */
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
/* Containers */
import App from './containers/App';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import Today from './containers/Today';
/* Config */
import * as routes from './constants/routes';
/* Styles */
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const logger = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, promise, logger)
);

ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory}>
        <Route component={App}>
          <Route path="/" component={ Login } />
          <Route component={ Dashboard }>
            <Route path="/dashboard" component={ Today } />
          </Route>
        </Route>
      </Router>
  </Provider>,
  document.getElementById('root')
);
