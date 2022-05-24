import {ActionsType} from "./state";


let initialState: initialUsersStateType = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://www.paperlessmovement.com/wp-content/uploads/2019/09/o2dvsv2pnhe.jpg',
        //     followed: true, fullName: 'Sveta', status: 'junior', location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 1,
        //     photoUrl: 'https://www.paperlessmovement.com/wp-content/uploads/2019/09/o2dvsv2pnhe.jpg',
        //     followed: false, fullName: 'Natalia', status: 'middle', location: {city: 'Tbilisi', country: 'Georgia'}
        // },
        // {
        //     id: 1,
        //     photoUrl: 'https://www.paperlessmovement.com/wp-content/uploads/2019/09/o2dvsv2pnhe.jpg',
        //     followed: true, fullName: 'Edvard', status: 'senior', location: {city: 'Kiev', country: 'Ukraine'}
        // }
    ]
}

export type initialUsersStateType = {
    users: Array<UsersType>
}
export type UsersType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}
type LocationType = {
    city: string
    country: string
}
export const usersReducer = (state: initialUsersStateType = initialState, action: ActionsType): initialUsersStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => (u.id === action.userID) ? {...u, followed: true} : u)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => (u.id === action.userID) ? {...u, followed: false} : u)
            }
        case 'SET_USERS':
            return {...state, users: [...state.users, ...action.newUsers]}
        default:
            return state
    }
}

export const followAC = (userID: number) => ({type: 'FOLLOW', userID}) as const
export const unFollowAC = (userID: number) => ({type: 'UNFOLLOW', userID}) as const
export const setUsers = (newUsers: UsersType[]) => ({type: 'SET_USERS', newUsers}) as const

export type FollowAT = ReturnType<typeof followAC>
export type UnFollowAT = ReturnType<typeof unFollowAC>
export type SetUsersAT = ReturnType<typeof setUsers>