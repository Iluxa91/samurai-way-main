import * as React from "react";
import {StoreType} from "./Redux/state";
import {Store} from "redux";
import {AppReduxStoreType} from "./Redux/store-redux";

export const StoreContext = React.createContext({} as Store<AppReduxStoreType, any>);
export type ProviderType = {
    store: Store<AppReduxStoreType, any>
    children: React.ReactNode
}
export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}
