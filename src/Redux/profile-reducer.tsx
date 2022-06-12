import {ActionsType} from "./state";
import {PhotosType} from "./users-reducer";


export type InitialStateType = {
    posts:Array<PostsPropsType>
    messageForNewPost:string
    profile:null|ProfileType
}
let initialState = {
    posts: [
        {id: 1, message: "How are you", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 12},
        {id: 3, message: "I am glad to see you", likesCount: 12}
    ] as Array<PostsPropsType>,
    messageForNewPost: '',
    profile: null,
}

export type PostsPropsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileType = {
    aboutMe:string
    contacts:ContactsType
    lookingForAJob:boolean
    lookingForAJobDescriptions:string
    fullName:string
    userId:number
    photos:PhotosType
}
type ContactsType = {
    facebook:string
    website:string
    vk:string
    twitter:string
    instagram:string
    youtube:string
    github:string
    mainLink:string
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsPropsType = {
                id: 4,
                message: state.messageForNewPost,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost], messageForNewPost: ''}
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, messageForNewPost: action.newText}
        case 'SET_USER_PROFILE':
            return {...state, profile: action.profile}
        default:
            return state
    }
}
export const addPostActionCreator = () => ({type: 'ADD-POST'} as const)
export const updateNewPostTextActionCreator = (newText: string) => ({
    type: 'UPDATE-NEW-POST-TEXT', newText
} as const)
export const setUserProfile = (profile:ProfileType) => ({type: 'SET_USER_PROFILE', profile} as const)

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
export type setUserProfileAT = ReturnType<typeof setUserProfile>
