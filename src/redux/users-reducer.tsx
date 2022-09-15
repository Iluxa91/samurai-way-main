import {usersAPI} from "../api/api";
import {AppThunk} from "./store-redux";
import {createSelector} from "reselect";

let initialState: initialUsersStateType = {
    users: [] as Array<UsersType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>,
    filter: ""
}

export type initialUsersStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    filter: string
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
export const usersReducer = (state: initialUsersStateType = initialState, action: UsersActionsType): initialUsersStateType => {
    switch (action.type) {
        case "users/FOLLOW":
            return {
                ...state,
                users: state.users.map(u => (u.id === action.userID) ? {
                    ...u, followed: true
                } : u)
            }
        case "users/UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => (u.id === action.userID) ? {
                    ...u, followed: false
                } : u)
            }
        case "users/SET_USERS":
            return {...state, users: action.newUsers}
        case "users/SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "users/SET_TOTAL_USER_COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        case "users/SET_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        case "users/SET-FILTER":
            return {...state, filter: action.filter}
        case "users/TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }
        default:
            return state
    }
}

const getUsersSelector = (state: initialUsersStateType) => state.users
export const getFilterSelector = (state: initialUsersStateType) => state.filter

export const getFilteredUsersReselect = createSelector(
    getUsersSelector,
     getFilterSelector,
    (users, filter) => {
        return users.filter(u => u.name.toUpperCase().indexOf(filter.toUpperCase()) > -1)
    }
)

// Actions
export const followSuccess = (userID: number) => ({type: "users/FOLLOW", userID}) as const
export const unFollowSuccess = (userID: number) => ({
    type: "users/UNFOLLOW",
    userID
}) as const
export const setUsers = (newUsers: UsersType[]) => ({
    type: "users/SET_USERS",
    newUsers
}) as const
export const setCurrentPage = (currentPage: number) => ({
    type: "users/SET_CURRENT_PAGE",
    currentPage
} as const)
export const setTotalUserCount = (totalUsersCount: number) => ({
    type: "users/SET_TOTAL_USER_COUNT",
    totalUsersCount
} as const)
export const setIsFetching = (isFetching: boolean) => ({
    type: "users/SET_IS_FETCHING",
    isFetching
} as const)
export const toggleIsFollowingProgress = (isFetching: boolean, userID: number) => ({
    type: "users/TOGGLE_IS_FOLLOWING_PROGRESS", isFetching, userID
} as const)
export const setFilter = (filter: string) => ({
    type: "users/SET-FILTER", filter
} as const)

// Thunks
export const getUsers = (page: number, pageSize: number): AppThunk => async dispatch => {
    dispatch(setIsFetching(true))
    dispatch(setCurrentPage(page))

    const data = await usersAPI.getUsers(page, pageSize)

    dispatch(setIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUserCount(data.totalCount))

}
export const follow = (userId: number): AppThunk => async dispatch => {
    dispatch(toggleIsFollowingProgress(true, userId))
    const data = await usersAPI.follow(userId)

    if (data.resultCode === 0) {
        dispatch(followSuccess(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}
export const unFollow = (userId: number): AppThunk => async dispatch => {
    dispatch(toggleIsFollowingProgress(true, userId))
    const data = await usersAPI.unFollow(userId)

    if (data.resultCode === 0) {
        dispatch(unFollowSuccess(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}

// Action Types
type FollowAT = ReturnType<typeof followSuccess>
type UnFollowAT = ReturnType<typeof unFollowSuccess>
type SetUsersAT = ReturnType<typeof setUsers>
type SetCurrentPageAT = ReturnType<typeof setCurrentPage>
type setTotalUserCountAT = ReturnType<typeof setTotalUserCount>
type setIsFetchingAT = ReturnType<typeof setIsFetching>
type ToggleIsFollowingProgressAT = ReturnType<typeof toggleIsFollowingProgress>
type setFilterAT = ReturnType<typeof setFilter>
export type UsersActionsType =
    FollowAT
    | UnFollowAT
    | SetUsersAT
    | SetCurrentPageAT
    | setTotalUserCountAT
    | setIsFetchingAT
    | ToggleIsFollowingProgressAT
    | setFilterAT