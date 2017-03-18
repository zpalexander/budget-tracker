/* React */
import React from 'react';
import ReactDOM from "react-dom";
import {Router, Route, browserHistory/*, Link*/} from 'react-router'
/* Redux */
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import rootReducer from './reducers/rootReducer';
/* Containers */
import App from './containers/App';
import Dashboard from './containers/Dashboard';
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
            <Route path={routes.HOME.path} component={App}>
                <Route path={routes.DASHBOARD.path} component={Dashboard} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
