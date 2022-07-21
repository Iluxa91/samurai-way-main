import d from './Dialogs.module.css'
import {DialogsItems} from "./DialogItem/DialogItem";
import {Message} from './Message/Message';
import React from "react";
import {DialogsConatainerPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {useFormik} from "formik";

// type FormDataType = {
//     newMessageBody:string
// }

export const Dialogs = (props: DialogsConatainerPropsType) => {
    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    let messageElement = props.dialogsPage.messageData.map(m => <Message message={m.message}/>)
    let dialogElement = props.dialogsPage.dialogsData.map(d => <DialogsItems name={d.name} id={d.id}/>)

// const addNewMessage = (formData: FormDataType) => {
//     // console.log(formData.newMessageBody)
//     props.addMessage(formData.newMessageBody)
// }

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogElement}
            </div>
            <div className={d.messages}>
                <div>{messageElement}</div>
                {/*<div>*/}
                {/*    <div>*/}
                {/*        <textarea ref={newMessageElement}*/}
                {/*                  onChange={onMessageChange}*/}
                {/*                  value={props.dialogsPage.messageForDialog}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <button onClick={addMessage}>Add Message</button>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<AddMessageFromRedux onSubmit={addNewMessage}/>*/}
                <AddMessageFormik addMessage={props.addMessage}/>
            </div>
        </div>
    )
}
// const AddMessageForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
//
//     return <form onSubmit={props.handleSubmit}>
//         <div>
//             <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message'}/>
//         </div>
//         <div>
//             <button>Add Message</button>
//         </div>
//     </form>
// }
//
// const AddMessageFromRedux = reduxForm<FormDataType>({form:'dialogAddMessageForm'})(AddMessageForm)

type AddMessageFormikPropsType = {
    addMessage: (value:string) => void
}

export const AddMessageFormik = (props:AddMessageFormikPropsType) => {
    const formik = useFormik({
        initialValues: {
            newMessageBody: '',
        },
        onSubmit: values => {
            props.addMessage(values.newMessageBody)
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <textarea
                    name={'newMessageBody'}
                    onChange={formik.handleChange}
                    value={formik.values.newMessageBody}
                />
            </div>
            <button type="submit">Add message</button>
        </form>

    )
}