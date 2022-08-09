import React, {useState} from "react";
import s from "./Paginator.module.css"
import cn from 'classnames'


type PropsType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalItemsCount: number
    pageSize: number
    portionSize: number
}
export let Paginator = (props: PropsType) => {

    let pageCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pageCount / props.portionSize)
    let [portionNumber, setPortionNumber] = useState<number>(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    let rightPortionPageNumber = portionNumber * props.portionSize

    return (
        <div className={s.paginator}>
            {portionNumber>1 &&
                <button onClick={()=>{setPortionNumber(portionNumber-1)}}>PREV</button>}
            {pages.filter(p=>p>=leftPortionPageNumber && p<=rightPortionPageNumber)
                .map(p => {
                return <span className={cn({[s.selectedPage]: props.currentPage ===p}, s.pageNumber)}
                             key={p}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
            {portionNumber<portionCount &&
                <button onClick={()=>{setPortionNumber(portionNumber+1)}}>NEXT</button>}
        </div>
    )
}
