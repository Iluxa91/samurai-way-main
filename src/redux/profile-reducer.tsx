import {PhotosType} from "./users-reducer";
import {profileAPI} from "../api/api";
import {AppReduxStoreType, AppThunk} from "./store-redux";
import {ProfileFormikType} from "../components/Profile/ProfileInfo/ProfileDataForm";

export type InitialStateType = typeof initialState
const initialState = {
    posts: [
        {id: 1, message: "How are you", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 12},
        {id: 3, message: "I am glad to see you", likesCount: 12}
    ] as Array<PostsPropsType>,
    profile: null as null | ProfileType,
    status: "",
    profileErrorMessage: ""
}

export type PostsPropsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileType = {
    aboutMe?: string
    contacts?: ContactsType
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    userId?: number
    photos?: PhotosType
}
export type ContactsType = {
    [key: string]: string | undefined
    facebook?: string
    website?: string
    vk?: string
    twitter?: string
    instagram?: string
    youtube?: string
    github?: string
    mainLink?: string
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
        case "profile/SAVE_PHOTO_SUCCESS":
            return {...state, profile: {...state.profile, photos: action.photos}}
        case "profile/SET_PROFILE_ERROR":
            return {...state, profileErrorMessage: action.profileErrorMessage}
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
    try {
        const data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
    catch (err){
       dispatch(setProfileError('Some error occured'))
    }
}
export const savePhoto = (file: File): AppThunk => async dispatch => {
    const data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos))
    }
}
export const saveProfile = (profile: ProfileFormikType): AppThunk => async (dispatch, getState: () => AppReduxStoreType) => {
    const userId = getState().auth.userId
    const data = await profileAPI.saveProfile(profile)
    if (data.resultCode === 0) {
        dispatch(getUserProfile(userId!))
        dispatch(setProfileError(""))
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : "Some error"
        dispatch(setProfileError(message))
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
export const deletePost = (postId: number) => ({
    type: "profile/DELETE_POST",
    postId
} as const)
export const savePhotoSuccess = (photos: PhotosType) => ({
    type: "profile/SAVE_PHOTO_SUCCESS",
    photos
} as const)
export const setProfileError = (profileErrorMessage: string) => ({
    type: "profile/SET_PROFILE_ERROR",
    profileErrorMessage
}) as const

// Types
export type ProfileActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof savePhotoSuccess>
    | ReturnType<typeof setProfileError>
