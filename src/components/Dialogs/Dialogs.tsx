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

type AddMessageFormikPropsType = {
    addMessage: (value:string) => void
}
type FormikErrorType = {
    newMessageBody?: string
}

export const AddMessageFormik = (props:AddMessageFormikPropsType) => {
    const formik = useFormik({
        initialValues: {
            newMessageBody: '',
        },
        validate: values => {
            const errors: FormikErrorType = {}
            if (!values.newMessageBody){errors.newMessageBody='Required'}
            else if (values.newMessageBody.length>100){errors.newMessageBody="Max length is 100 symbols"}
            return errors
        },
        onSubmit: values => {
            props.addMessage(values.newMessageBody)
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <textarea
                    className = {formik.errors.newMessageBody? d.error : ''}
                    placeholder={'New message'}
                    {...formik.getFieldProps('newMessageBody')}
                />
                {formik.touched.newMessageBody && formik.errors.newMessageBody && <div style={{color:'red'}}>{formik.errors.newMessageBody}</div>}
            </div>
            <button type="submit">Add message</button>
        </form>

    )
}