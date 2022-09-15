import React from "react";
import loader from '../../../assets/image/loader.gif'
import s from './Preloader.module.css'

export let Preloader = () => {
    return <div className={s.preloaderContainer}>
        <img className={s.img} src={loader}/>
    </div>
}