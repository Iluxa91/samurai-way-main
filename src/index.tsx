import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import {store} from "./Redux/store-redux";
import {Provider} from "react-redux";




    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App
                // store={state}
                // dispatch={store.dispatch.bind(store)}
            />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'));

