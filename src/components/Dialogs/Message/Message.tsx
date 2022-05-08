import d from './../Dialogs.module.css'

type MessagePropsType = {
    message: string
}


export const Message = (props: MessagePropsType) => {
    return <div className={d.message}>{props.message}</div>
}