import {authAPI} from "../api/api";
import {AppThunk} from "../Redux/store-redux";

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
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.payload
            }
        case 'SET_AUTH_ERROR':
            return {...state, authErrorMessage:action.authErrorMessage}

        default:
            return state
    }
}

const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'SET_USER_DATA',
    payload: {userId, email, login, isAuth}
}) as const
const setAuthError = (authErrorMessage: string) => ({
    type: 'SET_AUTH_ERROR',
    authErrorMessage
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
                dispatch(setAuthError(''))
            } else {
                let message = res.data.messages.length>0? res.data.messages[0]:'Some error'
                dispatch(setAuthError(message))
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