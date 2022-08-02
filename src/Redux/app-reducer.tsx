import {AppThunk} from "../Redux/store-redux";
import {getAuthUserData} from "../Redux/auth-reducer";

let initialState: initialUsersStateType = {
    initialized: false
}
export type initialUsersStateType = {
    initialized: boolean
}
type SetInitializedSuccessAT = ReturnType<typeof setInitializedSuccess>
export type AppActionsType = SetInitializedSuccessAT

export const appReducer = (state: initialUsersStateType = initialState, action: AppActionsType): initialUsersStateType => {
    switch (action.type) {
        case 'INITIALIZED-SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

const setInitializedSuccess = () => ({
    type: 'INITIALIZED-SUCCESS'}) as const

export const initializeApp = ():AppThunk => {
    return (dispatch) => {
       let promise = dispatch(getAuthUserData())
        Promise.all([promise])
            .then(()=>{
           dispatch(setInitializedSuccess())
        })
    }
}
