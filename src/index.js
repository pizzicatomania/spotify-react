import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import AppRouter from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import reactDom from 'react-dom';

reactDom.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.getElementById('root')
);