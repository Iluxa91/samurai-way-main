import {ActionsType, PostsPropsType, ProfilePagePropsType} from "./state";

type InitialStateType = typeof initialState
let initialState = {
        posts: [
            {id: 1, message: "How are you", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 12},
            {id: 3, message: "I am glad to see you", likesCount: 12}
        ],
        messageForNewPost: '',
    }

export const profileReducer = (state:InitialStateType=initialState, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsPropsType = {
                id: 4,
                message: state.messageForNewPost,
                likesCount: 0
            }
            state.posts.unshift(newPost)
            state.messageForNewPost = ''
            return state;

        case 'UPDATE-NEW-POST-TEXT':
            state.messageForNewPost = action.newText
            return state
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
