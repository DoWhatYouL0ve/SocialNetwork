import c from "./post.module.css";
import React from "react";

type MessageType = {
    postMessage: string
    like?: number
}

export const Post = (props: MessageType) => {
    return (

        <div className={c.item}>
            <img src="https://static.intercomassets.com/avatars/147128/square_128/photo-1485404213.png?1485404213"
                 alt="Profile Foto"/>
            {props.postMessage}
            <div>
                <span>Like {props.like}</span>
            </div>

        </div>

    )
}

