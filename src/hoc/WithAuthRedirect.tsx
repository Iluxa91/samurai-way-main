import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {AppReduxStoreType} from "../redux/store-redux";
import {connect} from "react-redux";

type MapStateToPropsForRedirectType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppReduxStoreType):MapStateToPropsForRedirectType => ({
    isAuth:state.auth.isAuth})

export function withAuthRedirect <T>(Component:ComponentType<T>) {
    function RedirectComponent(props:MapStateToPropsForRedirectType) {
        let {isAuth,...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T} />
    }

    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return ConnectedRedirectComponent
}