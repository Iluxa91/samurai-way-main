let initialState: initialUsersStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false

}

export type initialUsersStateType = {
    userId: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export const authReducer = (state: initialUsersStateType = initialState, action: ActionType): initialUsersStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state
    }
}

export const setAuthUserData = (userId: string, email: string, login: string) => ({
    type: 'SET_USER_DATA',
    data: {userId, email, login}
}) as const


export type setAuthUserDataAT = ReturnType<typeof setAuthUserData>
type ActionType = setAuthUserDataAT