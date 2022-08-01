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
    ]
}
type NewMessageType = {
    id: number
    message: string
}
export type initialStateType = typeof initialState

export const dialogsReducer = (state: initialStateType = initialState, action: DialogsActionsType): initialStateType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage: NewMessageType = {id: 4, message: action.newMessageBody, }
            return {...state, messageData: [...state.messageData, newMessage]}

        default:
            return state
    }
}
export const addMessageActionCreator = (newMessageBody:string) => ({type: 'ADD-MESSAGE',newMessageBody}) as const
export type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
export type DialogsActionsType = AddMessageActionType