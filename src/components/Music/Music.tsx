import React, {useEffect, useRef, useState} from "react";
import styles from './Music.module.css'


export function Music() {
    const [playing, setPlaying] = useState(false);
    let url = "http://streaming.tdiradio.com:8000/house.mp3";
    const audioRef = useRef(new Audio(url));

    useEffect(() => {
        const handler = () => setPlaying(false);
        let audioRefCurrent = audioRef.current
        audioRefCurrent.addEventListener("ended", handler);
        return () =>
            audioRefCurrent.removeEventListener("ended", handler)
            ;
    }, []);

    useEffect(() => {
        audioRef.current[playing ? "play" : "pause"]();
    }, [playing]);

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