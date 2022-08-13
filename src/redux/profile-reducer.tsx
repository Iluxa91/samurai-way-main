import {PhotosType} from "./users-reducer";
import {profileAPI} from "../api/api";
import {AppThunk} from "./store-redux";

export type InitialStateType = {
    posts: Array<PostsPropsType>
    profile: null | ProfileType
    status: string
}
let initialState = {
    posts: [
        {id: 1, message: "How are you", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 12},
        {id: 3, message: "I am glad to see you", likesCount: 12}
    ] as Array<PostsPropsType>,
    profile: null,
    status: ""
}

export type PostsPropsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescriptions: string
    fullName: string
    userId: number
    photos: PhotosType
}
type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {
    switch (action.type) {
        case "profile/ADD-POST":
            const newPost: PostsPropsType = {
                id: 4,
                message: action.newPostText,
                likesCount: 0
            }
            return {...state, posts: [newPost, ...state.posts]}
        case "profile/SET_USER_PROFILE":
            return {...state, profile: action.profile}
        case "profile/SET_STATUS":
            return {...state, status: action.status}
        case "profile/DELETE_POST":
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        default:
            return state
    }
}

// Thunks
export const getUserProfile = (userId: number): AppThunk => async dispatch => {
    const data = await profileAPI.getUserProfile(userId)

    dispatch(setUserProfile(data))
}
export const getStatus = (userId: number): AppThunk => async dispatch => {
    const data = await profileAPI.getUserStatus(userId)
    dispatch(setStatus(data))

}
export const updateStatus = (status: string): AppThunk => async dispatch => {
    const data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

// Actions
export const addPostActionCreator = (newPostText: string) => ({
    type: "profile/ADD-POST",
    newPostText
} as const)
const setUserProfile = (profile: ProfileType) => ({
    type: "profile/SET_USER_PROFILE",
    profile
} as const)
const setStatus = (status: string) => ({type: "profile/SET_STATUS", status} as const)
export const deletePost = (postId: number) => ({type: "profile/DELETE_POST", postId} as const)

// Types
type AddPostActionType = ReturnType<typeof addPostActionCreator>
type SetUserProfileAT = ReturnType<typeof setUserProfile>
type SetUserStatusAT = ReturnType<typeof setStatus>
type DeletePostAT = ReturnType<typeof deletePost>

export type ProfileActionsType =
    AddPostActionType
    | SetUserProfileAT
    | SetUserStatusAT
    | DeletePostAT