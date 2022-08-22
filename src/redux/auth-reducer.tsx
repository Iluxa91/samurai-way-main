import {authAPI} from "../api/api";
import {AppThunk} from "./store-redux";

let initialState: initialUsersStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    authErrorMessage: null
}
export type initialUsersStateType = {
    userId: number | null
    email: string | null
    login: string | null
    authErrorMessage: string | null
    isAuth: boolean
}
type SetAuthUserDataAT = ReturnType<typeof setAuthUserData>
export type AuthActionsType = SetAuthUserDataAT | ReturnType<typeof setAuthError>

export const authReducer = (state: initialUsersStateType = initialState, action: AuthActionsType): initialUsersStateType => {
    switch (action.type) {
        case "auth/SET_USER_DATA":
            return {...state, ...action.payload}
        case "auth/SET_AUTH_ERROR":
            return {...state, authErrorMessage: action.authErrorMessage}

        default:
            return state
    }
}

const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: "auth/SET_USER_DATA",
    payload: {userId, email, login, isAuth}
}) as const
export const setAuthError = (authErrorMessage: string) => ({
    type: "auth/SET_AUTH_ERROR",
    authErrorMessage
}) as const


export const getAuthUserData = (): AppThunk => async (dispatch) => {
    let response = await authAPI.me()

    if (response.resultCode === 0) {
        let {id, email, login} = response.data
        dispatch(setAuthUserData(id, email, login, true))
    }

}
export const login = (email: string, password: string, rememberMe: boolean): AppThunk => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        let promise = dispatch(getAuthUserData())
        await Promise.all([promise])
        dispatch(setAuthError(""))
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(setAuthError(message))
    }
}
export const logout = (): AppThunk => async (dispatch) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}