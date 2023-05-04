import {useEffect, useRef, useState} from "react";

export const usePlayMusic = () => {
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

    return [playing, setPlaying] as const
}

