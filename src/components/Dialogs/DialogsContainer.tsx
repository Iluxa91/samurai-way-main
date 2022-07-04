import React from "react";
import {addMessageActionCreator, initialStateType} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppReduxStoreType} from "../../Redux/store-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

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
    addMessage: (newMessageBody:string) => void
}
export type DialogsConatainerPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state:AppReduxStoreType):MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return {
        addMessage: (newMessageBody:string) => {
            dispatch(addMessageActionCreator(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)