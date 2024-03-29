import React, {ChangeEvent, KeyboardEvent} from "react"
import s from "./AlternativeMessage.module.css"
import {MdSend} from "react-icons/md";

type PropsType = {
    title: string
    setTitle: (title: string) => void
    onClickHandler: () => void
    disabled: boolean
}

const AlternativeMessage: React.FC<PropsType> = ({ title, setTitle, onClickHandler, disabled }) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            onClickHandler()
        }
    }

    return (
        <div className={s.items} >
            <div>
                <input type='text'
                       placeholder=' New message...'
                       value={title}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                />
            </div>
            <div>
                <button disabled={disabled}
                        style={{ cursor: 'pointer', marginBottom: '-6px' }}
                        onClick={onClickHandler}
                ><MdSend/></button>
            </div>
        </div>
    )
}
export default AlternativeMessage