import React from "react";
import style from "./watch.module.scss";


export const WatchVideo = () => {

    const src = ""
    return(
        <div className={style.watchvideoContainer}>
            <iframe width="500" height="280" src="https://www.youtube.com/embed/ZDwgifRQdQ8?si=4RZuCaNN52ZE844f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}