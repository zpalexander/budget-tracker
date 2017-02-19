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
import Test from './containers/Test/index.js';

const logger = createLogger();
const store = createStore(
    rootReducer,
    applyMiddleware(thunk, promise, logger)
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="test" component={Test} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
