import React from "react";
import s from './ProfileInfo.module.scss'
import {ProfilePageType} from "../../../redux/redux-store";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


type ProfileInfoPropsType = {
    profile: ProfilePageType
    updateStatus: (status: string) => void
    status: string
    darkMode:boolean
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.profile}>

            <div className={`${s.profileHeader} ${props.darkMode ? s.darkMode : ''}`}>
                <img src={props.profile.photos.large ?? ''} alt="no photo"/>
                <ProfileStatusWithHooks status={props.status}
                                        updateStatus={props.updateStatus}
                />

                <div className={s.info}>
                    <b>Contacts:</b>
                    {Object.keys(props.profile.contacts).map(key => {
                        const link = props.profile.contacts[key];
                        return (
                            <React.Fragment key={key}>
                                {link && (
                                    <div className={s.about}>
                                        <a href={link}>{link}</a>
                                    </div>
                                )}
                            </React.Fragment>
                        );
                    })}
                    {Object.values(props.profile.contacts).every(link => link === null) && (
                        <div>No information</div>
                    )}
                </div>
            </div>

        </div>
    )
}


export default ProfileInfo;