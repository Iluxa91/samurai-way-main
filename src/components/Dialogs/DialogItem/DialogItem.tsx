import {NavLink} from 'react-router-dom'
import d from './../Dialogs.module.css'

type DialogsItemsPropsType = {
    id: number
    name: string
}

export const DialogsItems = (props: DialogsItemsPropsType) => {
    return <div className={d.dialog}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}
