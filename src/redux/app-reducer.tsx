import {AppThunk} from ".//store-redux";
import {getAuthUserData} from ".//auth-reducer";

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
        case 'app/INITIALIZED-SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

const setInitializedSuccess = () => ({
    type: 'app/INITIALIZED-SUCCESS'}) as const

export const initializeApp = ():AppThunk => {
    return (dispatch) => {
       let promise = dispatch(getAuthUserData())
        Promise.all([promise])
            .then(()=>{
           dispatch(setInitializedSuccess())
        })
    }
}
