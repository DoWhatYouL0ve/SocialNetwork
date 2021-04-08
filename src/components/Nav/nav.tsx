import React from "react";
import { NavLink } from "react-router-dom";
import a from './nav.module.css'

export const Nav = () => {
    return (
        <nav className={a.nav}>
            <div className={a.item}>
                <NavLink to="/profile" activeClassName={a.activelink}>Profile</NavLink>
            </div>
            <div className={a.item}>
                <NavLink to="/messages" activeClassName={a.activelink}>Messages</NavLink>
            </div>
            <div className={a.item}>
                <NavLink to="/users" activeClassName={a.activelink}>Users</NavLink>
            </div>
            <div className={a.item}>
                <NavLink to="/news" activeClassName={a.activelink}>News</NavLink>
            </div>
            <div className={a.item}>
                <NavLink to="/music" activeClassName={a.activelink}>Music</NavLink>
            </div>
            <div className={a.item}>
                <NavLink to="settings" activeClassName={a.activelink}>Settings</NavLink>
            </div>
        </nav>
    )
}