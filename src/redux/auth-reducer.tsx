import {authAPI, securityAPI} from "../api/api";
import {AppThunk} from "./store-redux";

let initialState: initialUsersStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    authErrorMessage: null,
    captchaUrl: null
}
export type initialUsersStateType = {
    userId: number | null
    email: string | null
    login: string | null
    authErrorMessage: string | null
    isAuth: boolean
    captchaUrl: string | null
}
type SetAuthUserDataAT = ReturnType<typeof setAuthUserData>
export type AuthActionsType =
    SetAuthUserDataAT
    | ReturnType<typeof setAuthError>
    | ReturnType<typeof getCaptchaUrlSuccess>

export const authReducer = (state: initialUsersStateType = initialState, action: AuthActionsType): initialUsersStateType => {
    switch (action.type) {
        case "auth/SET_USER_DATA":
        case "auth/SET_AUTH_ERROR":
        case "auth/GET_CAPTCHA_URL_SUCCESS":
            return {...state, ...action.payload}
        default:
            return state
    }
}
//______________________________actions_________________________________________
const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) =>
    ({
    type: "auth/SET_USER_DATA",
    payload: {userId, email, login, isAuth}
}) as const
export const setAuthError = (authErrorMessage: string) => ({
    type: "auth/SET_AUTH_ERROR",
    payload: {authErrorMessage}
}) as const
export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
    type: "auth/GET_CAPTCHA_URL_SUCCESS", payload: {captchaUrl}
}) as const

//______________________________thunks____________________________________________
export const getAuthUserData = (): AppThunk => async (dispatch) => {
    let response = await authAPI.me()
    if (response.resultCode === 0) {
        let {id, email, login} = response.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null): AppThunk => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        let promise = dispatch(getAuthUserData())
        await Promise.all([promise])
        dispatch(setAuthError(""))
        dispatch(getCaptchaUrlSuccess(""))
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0
            ? response.data.messages[0] : "Some error"
        dispatch(setAuthError(message))
    }
}
export const logout = (): AppThunk => async (dispatch) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = (): AppThunk => async dispatch => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}