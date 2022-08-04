import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/store-redux";
import {Provider} from "react-redux";
import App from "./app/App";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById("root"));

