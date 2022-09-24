import React, {useEffect, useRef, useState} from "react"
import {ChatMessageAPIType} from "../../api/chat-api"
import {useSelector} from "react-redux"
import {
    sendMessage,
    startMessagesListening,
    stopMessagesListening
} from "../../redux/chat-reducer"
import AlternativeMessage from "./AlternativeMessage"
import {AppReduxStoreType, useAppDispatch} from "../../redux/store-redux";
import {MessageComponent} from "../Dialogs/Message/MessageComponent";


export const ChatPage: React.FC = () => {
    return <div>
        <Chat/>
    </div>
}

const Chat: React.FC = () => {
    const dispatch = useAppDispatch()
    const status = useSelector((state: AppReduxStoreType) => state.chat.status)

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])

    return <div>
        {status === "error" && <div>Some error occured. Please refresh the page</div>}
        <>
            <Messages/>
            <AddMessageForm/>
        </>
    </div>
}

const Messages: React.FC = () => {
    const messages = useSelector((state: AppReduxStoreType) => state.chat.messages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null);
    const [isAutoScroll, setIsAutoScroll] = useState(true)

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget;
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
            !isAutoScroll && setIsAutoScroll(true)
        } else {
            isAutoScroll && setIsAutoScroll(false)
        }
    }

    useEffect(() => {
        if (isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({behavior: "smooth"})
        }
    }, [messages])

    return <div style={{height: "500px", overflowY: "auto"}} onScroll={scrollHandler}>
        {messages.map((m) => <Message key={m.id} message={m}/>)}
        <div ref={messagesAnchorRef}/>
    </div>
}

const Message: React.FC<{ message: ChatMessageAPIType }> = React.memo(({message}) => {
    console.log(">>>>>>Message")
    console.log(message)
    return <MessageComponent
        id={message.userId}
        message={message.message}
        avatar={message.photo}
        name={message.userName}
    />
})


const AddMessageForm: React.FC<{}> = () => {
    const [message, setMessage] = useState("")
    const dispatch = useAppDispatch()

    const status = useSelector((state: AppReduxStoreType) => state.chat.status)

    const sendMessageHandler = () => {
        if (!message) {
            return
        }
        dispatch(sendMessage(message))
        setMessage("")
    }

    return <AlternativeMessage
        title={message}
        setTitle={setMessage}
        onClickHandler={sendMessageHandler}
        disabled={status !== "ready"}
    />
}
