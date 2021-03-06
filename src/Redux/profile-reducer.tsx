import {PhotosType} from "./users-reducer";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

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
    status: ''
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

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsPropsType = {
                id: 4,
                message: action.newPostText,
                likesCount: 0
            }
            return {...state, posts: [newPost, ...state.posts]}
        case 'SET_USER_PROFILE':
            return {...state, profile: action.profile}
        case 'SET_STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}

export const getUserProfile = (userId: number) => {
    return (dispatch: Dispatch<ActionsType>) => {
        profileAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export const getStatus = (userId: number) => (dispatch: Dispatch<ActionsType>) => {
    profileAPI.getUserStatus(userId)
        .then(data => {
            dispatch(setStatus(data))
        })
}
export const updateStatus = (status: string) => (dispatch: Dispatch<ActionsType>) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}

export const addPostActionCreator = (newPostText: string) => ({type: 'ADD-POST', newPostText} as const)
const setUserProfile = (profile: ProfileType) => ({type: 'SET_USER_PROFILE', profile} as const)
const setStatus = (status: string) => ({type: 'SET_STATUS', status} as const)

type AddPostActionType = ReturnType<typeof addPostActionCreator>
type setUserProfileAT = ReturnType<typeof setUserProfile>
type setUserStatusAT = ReturnType<typeof setStatus>

type ActionsType = AddPostActionType | setUserProfileAT | setUserStatusAT