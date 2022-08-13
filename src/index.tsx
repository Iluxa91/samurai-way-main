import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import {store} from "./redux/store-redux";
import {Provider} from "react-redux";
import App from "./app/App";

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
    document.getElementById("root"));

