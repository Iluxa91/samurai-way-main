import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore as createStore
} from "redux";
import {ProfileActionsType, profileReducer} from "./profile-reducer";
import {DialogsActionsType, dialogsReducer} from "./dialogs-reducer";
import {UsersActionsType, usersReducer} from "./users-reducer";
import {AuthActionsType, authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk"
import {AppActionsType, appReducer} from "./app-reducer";
import chatReducer, {ChatActionsType} from "./chat-reducer";
import {useDispatch} from "react-redux";


let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer,
    auth:authReducer,
    app:appReducer,
    chat: chatReducer
    // form:formReducer
})

export type AppDispatch = ThunkDispatch<AppReduxStoreType, unknown, AppRootActionsType>
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppReduxStoreType, unknown, AppRootActionsType>
type AppRootActionsType = AuthActionsType | DialogsActionsType | ProfileActionsType | UsersActionsType | AppActionsType | ChatActionsType
export type AppReduxStoreType = ReturnType<typeof rootReducer>

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunkMiddleware)))

// @ts-ignore
window.store = store;