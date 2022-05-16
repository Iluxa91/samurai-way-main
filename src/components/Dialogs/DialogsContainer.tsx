import React from "react";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import {AppPropsType} from "../../App";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";
import {StoreType} from "../../Redux/state";

// type PropsType = {
//     dialogsPage: DialogsPropsType
//     // addMessage: ()=>void
//     // updateMessageText: (newMessage:string)=>void
//     dispatch: (action: ActionsType) => void
// }
export type DialogsContainerType = {
    store:StoreType
}
export const DialogsContainer = (props:any) => {

    return <StoreContext.Consumer>
        {store => {
            let state = store.getState().dialogsPage
            let addMessage = () => {
                // props.addMessage()
                store.dispatch(addMessageActionCreator())
            }
            const onMessageChange = (newMessage: string) => {
                // let newMessage = newMessageElement.current!.value;
                // // props.updateMessageText(newMessage)
                store.dispatch(updateMessageTextActionCreator(newMessage))
            }
            return <Dialogs addMessage={addMessage}
                            updateMessageText={onMessageChange}
                            dialogsPage={state}/>
        }
    }
    </StoreContext.Consumer>
}