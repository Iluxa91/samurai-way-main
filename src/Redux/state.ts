export type StoreType = {
    _state: StateType
    _callSubscriber: ()=>void
    getState: ()=>StateType
    subscribe: (callback: ()=> void)=>void
    dispatch:(action:ActionsType)=>void
}
export type ActionsType = AddPostActionType|UpdateNewPostTextActionType|AddMessageActionType|UpdateMessageTextActionType
type AddPostActionType = ReturnType<typeof addPostActionCreator>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
type UpdateMessageTextActionType = ReturnType<typeof updateMessageTextActionCreator>

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
        if (action.type==='ADD-POST'){
            const newPost: PostsPropsType = {
                id: 4,
                message: this._state.profilePage.messageForNewPost,
                likesCount: 0
            }
            this._state.profilePage.posts.unshift(newPost)
            this._state.profilePage.messageForNewPost=''
            this._callSubscriber()
        } else if (action.type==='UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.messageForNewPost = action.newText
            this._callSubscriber()
        } else if (action.type ==='ADD-MESSAGE'){
            const newMessage: NewMessageType = {
                id: 4,
                message: this._state.dialogsPage.messageForDialog,
            }
            this._state.dialogsPage.messageData.push(newMessage)
            this._state.dialogsPage.messageForDialog=''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-MESSAGE-TEXT') {
            this._state.dialogsPage.messageForDialog = action.newMessage
            this._callSubscriber()
        }
    }
}
export const addPostActionCreator = () => ({type: 'ADD-POST'}) as const

export const updateNewPostTextActionCreator = (newText:string) => ({
        type: 'UPDATE-NEW-POST-TEXT', newText: newText
}) as const
export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'}) as const
export const updateMessageTextActionCreator = (newMessage:string) => ({
        type: 'UPDATE-MESSAGE-TEXT', newMessage: newMessage
    }) as const

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
type NewMessageType = {
    id: number
    message: string
}

// window.store = store
// store - OOP
