import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore'; 
import routeConfig from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

const store=configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routeConfig}/>
    </Provider>,
    document.getElementById('myApp')
)