import React from "react";
import { NavLink } from "react-router-dom";
import styles from './header.module.css'

type PropsType = {
    login: string | null
    isAuth: boolean
}

export const Header = (props: PropsType) => {
    return (
        <header className={styles.header}>
            <img src="https://media.keyshot.com/uploads/2018/10/keyshot-icon-256.png" alt="logo"/>
            <div className={styles.loginBlock}>
                {props.isAuth ? props.login :
                <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}