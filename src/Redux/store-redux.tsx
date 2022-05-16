import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {StoreType} from "./state";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer
})
export type AppReduxStoreType = ReturnType<typeof reducers>

export let store: Store<AppReduxStoreType, any> = createStore(reducers)