import React from "react";
import styles from "./Music.module.css"
import {usePlayMusic} from "./usePlayMusic";

export function Music() {
    const [playing, setPlaying] = usePlayMusic()

    return (
        <div className={styles.pleer}>
            <div>
                <div className={styles.item}>Radio📻</div>
            </div>
            <button onClick={()=>setPlaying(!playing)} >
                {playing ? <h2>⏸️</h2> : <h2>▶️</h2>}
            </button>
        </div>
    )
}