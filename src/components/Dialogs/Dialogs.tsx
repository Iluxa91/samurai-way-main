import React from "react"
import s from "./Dialogs.module.css"
import {DialogsType, MessageType} from "../../redux/dialogs-reducer";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageComponent} from "./Message/MessageComponent";
import {
    AlternativeMessage
} from "./ALternativeMessage/AlternativeMessage";

type PropsType = {
    dialogs: Array<DialogsType>
    message: Array<MessageType>
    addMessage: () => void
}

export const Dialogs: React.FC<PropsType> = ({addMessage, dialogs, message}) => {

    const dialogsElements = dialogs.map(d =>
        <DialogItem name={d.name} key={d.id} id={d.id} src={d.src}/>
    )

    const messageElements = message.map(m =>
        <MessageComponent
            key={m.id}
            id={m.id}
            avatar={m.avatar}
            name={m.name}
            message={m.message}
            time={m.time}
        />
    )

    const scroll = React.useRef(null)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.dialogF} style={{
                overflow: "auto",
                height: "500px",
                WebkitOverflowScrolling: "touch"
            }}>
                {messageElements}
                <div ref={scroll}/>
            </div>
            <div/>
            <div style={{margin: "15px", marginLeft: "340px"}}>
                <AlternativeMessage addMessage={addMessage} scroll={scroll}/>
            </div>
        </div>
    )
}