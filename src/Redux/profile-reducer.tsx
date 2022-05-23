import {ActionsType} from "./state";


export type InitialStateType = typeof initialState
let initialState = {
        posts: [
            {id: 1, message: "How are you", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 12},
            {id: 3, message: "I am glad to see you", likesCount: 12}
        ] as Array<PostsPropsType>,
        messageForNewPost: '',
    }

export type PostsPropsType = {
    id: number
    message: string
    likesCount: number
}

export const profileReducer = (state:InitialStateType=initialState, action: ActionsType):InitialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsPropsType = {
                id: 4,
                message: state.messageForNewPost,
                likesCount: 0
            }
            return {...state,posts:[...state.posts,newPost],messageForNewPost:''}
        case 'UPDATE-NEW-POST-TEXT':
            return {...state,messageForNewPost:action.newText}
        default:
            return state
    }
}
export const addPostActionCreator = () => ({type: 'ADD-POST'}) as const
export const updateNewPostTextActionCreator = (newText:string) => ({
    type: 'UPDATE-NEW-POST-TEXT', newText: newText
}) as const

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
