import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/Sample_User_Icon.png";
import {UserType} from "../../redux/users-reducer";

export type UsersPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}


let Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        {pages.map(p => {

            // @ts-ignore
            return <span className={props.currentPage === p && s.selectedPage}
                         onClick={(e) => {
                             props.onPageChanged(p)
                         }}> {p} </span>
        })}

        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                    <img
                        className={s.userPhoto}
                        src={u.photos.small != null ? u.photos.small : userPhoto}
                        alt="photo"/>
                    </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}

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
            </div>)
        }
    </div>
}

export default Users;