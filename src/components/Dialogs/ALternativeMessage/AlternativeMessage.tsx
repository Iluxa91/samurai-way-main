import React, {ChangeEvent, KeyboardEvent, useState} from "react"
import s from "./AlternativeMessage.module.css"
import {MdSend} from "react-icons/md";

type PropsType = {
    addMessage: (title: string) => void
    scroll?: any
}

export const AlternativeMessage: React.FC<PropsType> = ({ addMessage, scroll }) => {

    const [title, setTitle] = useState('')

    const onClickHandler = () => {
        if (title.trim() !== '') {
            addMessage(title)
            setTitle('')
            setTimeout(() => {
                scroll.current.scrollIntoView({ behavior: 'smooth' })
            }, 0)
        }
    }

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
            <input type='text'
                   placeholder=' New message...'
                   value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <button style={{ cursor: 'pointer', marginBottom: '-6px' }}
                    onClick={onClickHandler}
            ><MdSend/></button>
        </div>
    )
}