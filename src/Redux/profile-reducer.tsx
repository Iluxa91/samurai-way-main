import {ActionsType, PostsPropsType, ProfilePagePropsType} from "./state";

export const profileReducer = (state: ProfilePagePropsType, action: ActionsType) => {
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
