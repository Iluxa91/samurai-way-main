import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import {store} from "./Redux/store-redux";
import {StateType} from "./Redux/state";


let rerenderEntireTree = (props:StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}
                 // dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root'));
}
rerenderEntireTree(store.getState())
store.subscribe(()=> {
    let state = store.getState()
    rerenderEntireTree(state)
})