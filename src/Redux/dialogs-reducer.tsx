import {ActionsType} from "./state";

let initialState = {
    dialogsData: [
        {id: 1, name: 'Ilua'},
        {id: 2, name: 'Natalia'},
        {id: 3, name: 'Pablo'},
        {id: 4, name: 'Varvara'},
        {id: 5, name: 'Mikola'},
    ],
    messageData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "What are you doing"},
    ],
    messageForDialog: "",
}
type NewMessageType = {
    id: number
    message: string
}
export type initialStateType = typeof initialState

export const dialogsReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            const newMessage: NewMessageType = {
                id: 4,
                message: state.messageForDialog,
            }
            const stateCopy = {...state, messageData: [...state.messageData, newMessage]}
            // state.messageData.push(newMessage)
            stateCopy.messageForDialog = ''
            return {...stateCopy}
        }
        case 'UPDATE-MESSAGE-TEXT': {
            let stateCopy = {...state}
            stateCopy.messageForDialog = action.newMessage
            return stateCopy
        }
        default:
            return state
    }
}
export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'}) as const
export const updateMessageTextActionCreator = (newMessage: string) => ({
    type: 'UPDATE-MESSAGE-TEXT', newMessage: newMessage
}) as const

export type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
export type UpdateMessageTextActionType = ReturnType<typeof updateMessageTextActionCreator>
