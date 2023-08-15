import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/Sample_User_Icon.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {Avatar} from "@mui/material";
import CustomPagination from "../../Utils/Pagination";

export type UsersPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: number[]
}


let Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        props.onPageChanged(page);
    }

    return <div>
        <CustomPagination
            currentPage={props.currentPage}
            onPageChanged={props.onPageChanged}
            pageSize={props.pageSize}
            totalUsersCount={props.totalUsersCount}
        />
        {/*{pages.map(p => {*/}
        {/*    // @ts-ignore*/}
        {/*    return <span className={props.currentPage === p && s.selectedPage}*/}
        {/*                 onClick={(e) => {*/}
        {/*                     props.onPageChanged(p)*/}
        {/*                 }}> {p} </span>*/}
        {/*})}*/}
        {
            props.users.map(u => <div key={u.id}>
                <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>

                   <Avatar className={s.userPhoto}
                           alt="photo"
                           src={u.photos.small != null ? u.photos.small : userPhoto}
                           sizes={'large'}
                           sx={{width: 56, height: 56}}
                   />
                                {/*<img*/}
                                {/*    className={s.userPhoto}*/}
                                {/*    src={u.photos.small != null ? u.photos.small : userPhoto}*/}
                                {/*    alt="photo"/>*/}
                                </NavLink>
                    </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.unfollow(u.id)
                                }}>
                                    Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              props.follow(u.id)
                                          }}>
                                    Follow</button>}

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



