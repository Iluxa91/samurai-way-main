import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {ProfileActionsType, profileReducer} from "./profile-reducer";
import {DialogsActionsType, dialogsReducer} from "./dialogs-reducer";
import {UsersActionsType, usersReducer} from "./users-reducer";
import {AuthActionsType, authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk"


let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer,
    auth:authReducer,
    // form:formReducer
})


// export type AppDispatch = ThunkDispatch<AppReduxStoreType, unknown, AppActionsType>
// export const useAppDispatch = () => useDispatch<AppDispatch>()
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppReduxStoreType, unknown, AppActionsType>
type AppActionsType = AuthActionsType | DialogsActionsType | ProfileActionsType | UsersActionsType
export type AppReduxStoreType = ReturnType<typeof rootReducer>



export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))
// @ts-ignore
window.store = store;