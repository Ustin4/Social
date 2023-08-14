import React from "react";
import s from './ProfileInfo.module.css'
import {ProfilePageType} from "../../../redux/redux-store";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


type ProfileInfoPropsType = {
    profile: ProfilePageType
    updateStatus:(status:string)=>void
    status:string
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJzMNWNPsA8KiUFY_YiEC7rub3JEDOCUXXHwJ40dp7&s"/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large ?? ''} alt="photo"/>
             <ProfileStatus status={props.status}
                            updateStatus={props.updateStatus}
             />

                <div>
                    {Object.keys(props.profile.contacts).map(key => {
                        return (
                            <div key={key}>
                                <strong>{key}: </strong>
                                {props.profile.contacts[key] ? (
                                    <a href={props.profile.contacts[key]}>
                                        {props.profile.contacts[key]}
                                    </a>) : ('not specified')}
                            </div>
                        );
                    })}
                </div>
                ava+description
            </div>

        </div>
    )
}

export default ProfileInfo;