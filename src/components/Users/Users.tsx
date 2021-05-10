import React from "react";
import styles from '../Users/users.module.css'
import {MapDispatchToPropsType, MapStateToPropsType} from "./UsersContainer";
import axios from "axios";
import default_user from '../../assets/images/default_user.png'

type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


// class component example
export class Users extends React.Component<UsersPropsType> {
    // constructor creates object, but only once in the very beginning.
    // If we don't add in it any code, we could skip this step because it'll created automatically
    /*constructor(props: UsersPropsType) {
        super(props);
    }*/

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for(let i=1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div className={styles.hoveredPagination}>
                {pages.map( p => {
                    return <span className={this.props.currentPage === p ? styles.selectedPage : ''}
                    onClick={() => {this.onPageChanged(p)}}>{p}</span>
                    })}
            </div>
            {this.props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : default_user} alt="" className={styles.photo} />
                    </div>
                    <div>
                        {u.followed?
                            <button onClick={ () => {this.props.unfollow(u.id)} }>Unfollow</button>:
                            <button onClick={ () => {this.props.follow(u.id)} }>Follow</button>}
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
}


// function component example
/*
export const Users = (props: UsersPropsType) => {
    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
    }
    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : default_user} alt="" className={styles.photo} />
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
    )
}*/
