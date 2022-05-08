import d from './Dialogs.module.css'
import {DialogsItems} from "./DialogItem/DialogItem";
import {Message} from './Message/Message';
import React from "react";
import {
    ActionsType,
    DialogsPropsType,
    store,
} from "../../Redux/state";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../Redux/dialogs-reducer";

type PropsType = {
    dialogsPage: DialogsPropsType
    // addMessage: ()=>void
    // updateMessageText: (newMessage:string)=>void
    dispatch: (action: ActionsType) => void
}

export const Dialogs = (props: PropsType) => {

    let messageElement = props.dialogsPage.messageData.map(m => <Message message={m.message}/>)
    let dialogElement = props.dialogsPage.dialogsData.map(d => <DialogsItems name={d.name} id={d.id}/>)
    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    let addMessage = () => {
        // props.addMessage()
        props.dispatch(addMessageActionCreator())
    }
    const onMessageChange = () => {
        let newMessage = newMessageElement.current!.value;
        // props.updateMessageText(newMessage)
        props.dispatch(updateMessageTextActionCreator(newMessage))
    }
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogElement}
            </div>
            <div className={d.messages}>
                <div>{messageElement}</div>
                <div>
                    <div><textarea ref={newMessageElement}
                                   onChange={onMessageChange}
                                   value={props.dialogsPage.messageForDialog}
                    />
                    </div>
                    <div>
                        <button onClick={addMessage}>Add Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}