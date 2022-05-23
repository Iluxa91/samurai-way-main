import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";


let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer
})


export type AppReduxStoreType = ReturnType<typeof rootReducer>

export let store: Store<AppReduxStoreType, any> = createStore(rootReducer)