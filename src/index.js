import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, browserHistory/*, Link*/} from 'react-router'
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import rootReducer from './reducers/rootReducer';
import App from './containers/App';
import Dashboard from './containers/Dashboard';
import './index.css';

const logger = createLogger();
const store = createStore(
    rootReducer,
    applyMiddleware(thunk, promise, logger)
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="dashboard" component={Dashboard} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
