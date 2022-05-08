import {ActionsType, DialogsPropsType, NewMessageType, PostsPropsType} from "./state";

export const dialogsReducer = (state:DialogsPropsType,action:ActionsType) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage: NewMessageType = {
                id: 4,
                message: state.messageForDialog,
    }
            state.messageData.push(newMessage)
            state.messageForDialog=''
            return state
        case 'UPDATE-MESSAGE-TEXT':
            state.messageForDialog = action.newMessage
            return state
        default:
            return state
}}
export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'}) as const
export const updateMessageTextActionCreator = (newMessage:string) => ({
    type: 'UPDATE-MESSAGE-TEXT', newMessage: newMessage
}) as const

export type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
export type UpdateMessageTextActionType = ReturnType<typeof updateMessageTextActionCreator>

