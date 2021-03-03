import React from "react";
import b from './header.module.css'

export const Header = () => {
    return (
        <header className={b.header}>
            <img src="https://media.keyshot.com/uploads/2018/10/keyshot-icon-256.png" alt="logo"/>
        </header>
    )
}