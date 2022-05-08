import {AddPostActionType, profileReducer, UpdateNewPostTextActionType} from "./profile-reducer";
import {AddMessageActionType, dialogsReducer, UpdateMessageTextActionType} from "./dialogs-reducer";

export type StoreType = {
    _state: StateType
    _callSubscriber: ()=>void
    getState: ()=>StateType
    subscribe: (callback: ()=> void)=>void
    dispatch:(action:ActionsType)=>void
}
export type ActionsType = AddPostActionType|UpdateNewPostTextActionType|AddMessageActionType|UpdateMessageTextActionType

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "How are you", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 12},
                {id: 3, message: "I am glad to see you", likesCount: 12}
            ],
            messageForNewPost: '',
        },
        dialogsPage: {
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

    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {return this._state},
    subscribe(callback) {
        this._callSubscriber = callback
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber()
    }
}

export type StateType = {
    profilePage: ProfilePagePropsType,
    dialogsPage: DialogsPropsType
}
export type ProfilePagePropsType = {
    posts: PostsPropsType[],
    messageForNewPost: string
}
export type DialogsPropsType = {
    dialogsData: Array<DialogDataType>
    messageData: Array<MessageDataPropsType>
    messageForDialog: string
}
export type PostsPropsType = {
    id: number
    message: string
    likesCount: number
}
type DialogDataType = {
    id: number
    name: string
}
type MessageDataPropsType = {
    id: number
    message: string
}
export type NewMessageType = {
    id: number
    message: string
}

// window.store = store
// store - OOP
