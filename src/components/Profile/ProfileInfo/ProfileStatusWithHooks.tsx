import React, {ChangeEvent, useState} from "react";
import {Dispatch} from "redux";

type PropsType = {
    status: string
    updateStatus: (status: string) => (dispatch: Dispatch) => void
}

export const ProfileStatusWithHooks = (props: PropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    const activateMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
                <div>
                    <span
                        onDoubleClick={activateMode}>{props.status || "No Status"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input
                        onChange={onStatusChange}
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        value={status}/>
                </div>
            }
        </div>
    )
}
