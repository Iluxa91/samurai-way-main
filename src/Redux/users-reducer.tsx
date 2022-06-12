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
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching:true,
}

export type initialUsersStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching:boolean
}
export type UsersType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location: LocationType
}
export type PhotosType = {
    small: string
    large: string
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
            return {...state, users: action.newUsers}
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET_TOTAL_USER_COUNT':
            return {...state, totalUsersCount: action.totalUsersCount}
        case 'SET_IS_FETCHING':
            return {...state,isFetching:action.isFetching}
        default:
            return state
    }
}

export const follow = (userID: number) => ({type: 'FOLLOW', userID}) as const
export const unFollow = (userID: number) => ({type: 'UNFOLLOW', userID}) as const
export const setUsers = (newUsers: UsersType[]) => ({type: 'SET_USERS', newUsers}) as const
export const setCurrentPage = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const)
export const setTotalUserCount = (totalUsersCount: number) => ({
    type: 'SET_TOTAL_USER_COUNT',
    totalUsersCount
} as const)
export const setIsFetching = (isFetching:boolean) => ({type:'SET_IS_FETCHING', isFetching} as const)

export type FollowAT = ReturnType<typeof follow>
export type UnFollowAT = ReturnType<typeof unFollow>
export type SetUsersAT = ReturnType<typeof setUsers>
export type SetCurrentPageAT = ReturnType<typeof setCurrentPage>
export type setTotalUserCountAT = ReturnType<typeof setTotalUserCount>
export type setIsFetchingAT = ReturnType<typeof setIsFetching>