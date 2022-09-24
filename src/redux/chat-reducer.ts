import {Dispatch} from "redux"
import {v1} from "uuid"
import {chatAPI, ChatMessageAPIType, StatusType} from "../api/chat-api"
import {AppThunk} from "./store-redux";

type ChatMessageType = ChatMessageAPIType & { id: string }

let initialState = {
    messages: [] as ChatMessageType[],
    status: "pending" as StatusType
}

const chatReducer = (state = initialState, action: ChatActionsType): InitialStateType => {
    switch (action.type) {
        case "SN/chat/MESSAGES_RECEVIED":
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages.map((m: any) => ({
                    ...m,
                    id: v1()
                }))]
                    .filter((m, index, array) => index >= array.length - 100)
            }
        case "SN/chat/STATUS_CHANGED":
            return {
                ...state,
                status: action.payload.status
            }
        default:
            return state
    }
}

const messagesReceived = (messages: ChatMessageAPIType[]) => ({
    type: "SN/chat/MESSAGES_RECEVIED", payload: {messages}
} as const)
const statusChanged = (status: StatusType) => ({
    type: "SN/chat/STATUS_CHANGED", payload: {status}
} as const)

let _newMessageHandler: ((messages: ChatMessageAPIType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(messagesReceived(messages))
        }
    }
    return _newMessageHandler
}

let _statusChangedHandler: ((status: StatusType) => void) | null = null
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(statusChanged(status))
        }
    }
    return _statusChangedHandler
}

export const startMessagesListening = (): AppThunk => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe("messages-received", newMessageHandlerCreator(dispatch))
    chatAPI.subscribe("status-changed", statusChangedHandlerCreator(dispatch))

}
export const stopMessagesListening = (): AppThunk => async (dispatch) => {
    chatAPI.unsubscribe("messages-received", newMessageHandlerCreator(dispatch))
    chatAPI.unsubscribe("status-changed", statusChangedHandlerCreator(dispatch))
    chatAPI.stop()
}

export const sendMessage = (message: string): AppThunk => async (dispatch) => {
    chatAPI.sendMessage(message)
}

export default chatReducer

export type InitialStateType = typeof initialState;
export type ChatActionsType = ReturnType<typeof messagesReceived> | ReturnType<typeof statusChanged>