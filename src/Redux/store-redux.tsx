import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'


let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer,
    auth:authReducer
})


export type AppReduxStoreType = ReturnType<typeof rootReducer>

export let store: Store<AppReduxStoreType, any> = createStore(rootReducer,applyMiddleware(thunkMiddleware))
// @ts-ignore
window.store = store;