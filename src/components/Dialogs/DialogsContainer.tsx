import React from "react";
import {addMessageActionCreator, initialStateType, updateMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppReduxStoreType} from "../../Redux/store-redux";
import {Dispatch} from "redux";

// type PropsType = {
//     state: StateType
//     dialogsPage: DialogsPropsType
//     // addMessage: ()=>void
//     // updateMessageText: (newMessage:string)=>void
//     dispatch: (action: ActionsType) => void
// }
// export type DialogsContainerType = {
//     store:StoreType
// }
// export const DialogsContainer = () => {
//
//     return <StoreContext.Consumer>
//         {store => {
//             let state = store.getState().dialogsPage
//             let addMessage = () => {
//                 // props.addMessage()
//                 store.dispatch(addMessageActionCreator())
//             }
//             const onMessageChange = (newMessage: string) => {
//                 // let newMessage = newMessageElement.current!.value;
//                 // // props.updateMessageText(newMessage)
//                 store.dispatch(updateMessageTextActionCreator(newMessage))
//             }
//             return <Dialogs addMessage={addMessage}
//                             updateMessageText={onMessageChange}
//                             dialogsPage={state}/>
//         }
//     }
//     </StoreContext.Consumer>
// }
type MapStateToPropsType = {
    dialogsPage:initialStateType
}
type MapDispatchToPropsType = {
    addMessage: ()=>void
    updateMessageText: (newMessage:string)=>void
}
export type DialogsConatainerPropsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state:AppReduxStoreType):MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return {
        addMessage: ()=>{
            dispatch(addMessageActionCreator())
        },
        updateMessageText: (newMessage:string) => {
            dispatch(updateMessageTextActionCreator(newMessage))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)