/* React */
import React from 'react';
import ReactDOM from "react-dom";
import { Router, Route, Redirect, browserHistory } from 'react-router'
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
import Profile from './containers/Profile';
import NotFound from './containers/NotFound';
/* Routes */
import * as viewRoutes from '../constants/routes/view';
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
          <Route path='/404' component={ NotFound } />
          <Route component={ Dashboard }>
            <Route path={ viewRoutes.TODAY.path } component={ Today } />
            <Route path={ viewRoutes.PROFILE.path } component={ Profile } />
          </Route>
        </Route>
        <Redirect from='*' to='/404' />
      </Router>
  </Provider>,
  document.getElementById('root')
);

