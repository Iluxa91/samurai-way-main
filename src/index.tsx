import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import {AppReduxStoreType, store} from "./Redux/store-redux";
import {Store} from "redux";
import {Provider} from "react-redux";



let rerenderEntireTree = (state: Store<AppReduxStoreType, any>) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={state}>
            <App
                // store={state}
                // dispatch={store.dispatch.bind(store)}
            />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'));
}
rerenderEntireTree(store)
store.subscribe(() => rerenderEntireTree(store))