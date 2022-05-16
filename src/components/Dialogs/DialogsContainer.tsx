import React from "react";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import {AppPropsType} from "../../App";
import {Dialogs} from "./Dialogs";

// type PropsType = {
//     dialogsPage: DialogsPropsType
//     // addMessage: ()=>void
//     // updateMessageText: (newMessage:string)=>void
//     dispatch: (action: ActionsType) => void
// }

export const DialogsContainer = (props: AppPropsType) => {
let state = props.store.getState().dialogsPage
    let addMessage = () => {
        // props.addMessage()
        props.store.dispatch(addMessageActionCreator())
    }
    const onMessageChange = (newMessage:string) => {
        // let newMessage = newMessageElement.current!.value;
        // // props.updateMessageText(newMessage)
        props.store.dispatch(updateMessageTextActionCreator(newMessage))
    }
    return (
         <Dialogs addMessage={addMessage}
                  updateMessageText={onMessageChange}
                  dialogsPage={state}
         />
    )
}