import React from "react";
import s from "./Paginator.module.css"

type PropsType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
}
export let Paginator = (props: PropsType) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : s.page}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
    )
}
