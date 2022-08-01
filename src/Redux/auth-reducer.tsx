import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppReduxStoreType, AppThunk} from "../Redux/store-redux";

let initialState: initialUsersStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
export type initialUsersStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type SetAuthUserDataAT = ReturnType<typeof setAuthUserData>
export type AuthActionsType = SetAuthUserDataAT

export const authReducer = (state: initialUsersStateType = initialState, action: AuthActionsType): initialUsersStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}

const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'SET_USER_DATA',
    payload: {userId, email, login, isAuth}
}) as const


export const getAuthUserData = ():AppThunk => {
    return (dispatch) => {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
    }
}
export const login = (email:string, password:string, rememberMe:boolean):AppThunk => (dispatch) => {
    authAPI.login(email,password,rememberMe)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
}
export const logout = ():AppThunk => (dispatch) => {
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null,null,null,false))
            }
        })
}