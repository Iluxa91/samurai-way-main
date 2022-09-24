import { connect } from 'react-redux';
import { compose } from 'redux';
import { ComponentType } from 'react';
import {AppReduxStoreType} from "../../redux/store-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {addMessage, DialogsType, MessageType} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

type MapStateToPropsType = {
    dialogs: Array<DialogsType>
    message: Array<MessageType>
}

let mapStateToProps = (state: AppReduxStoreType): MapStateToPropsType => ({
    dialogs: state.dialogsPage.dialogs,
    message: state.dialogsPage.message,
})

export default compose<ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, { addMessage }),
)(Dialogs)