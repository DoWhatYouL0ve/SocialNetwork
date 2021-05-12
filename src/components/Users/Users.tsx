import React from "react";
import styles from '../Users/users.module.css'
import default_user from "../../assets/images/default_user.png";
import {UserType} from "../../Redax/users-reducer";
import { NavLink } from "react-router-dom";

type UsersPropsType = {
    onPageChanged: (p: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for(let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div className={styles.hoveredPagination}>
            {pages.map( p => {
                return <span className={props.currentPage === p ? styles.selectedPage : ''}
                             onClick={() => {props.onPageChanged(p)}}>{p}</span>
            })}
        </div>
        {props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : default_user} alt="" className={styles.photo} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed?
                            <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button>:
                            <button onClick={ () => {props.follow(u.id)} }>Follow</button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
        </div>)}
    </div>
}