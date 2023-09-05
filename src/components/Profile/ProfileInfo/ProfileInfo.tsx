import React from "react";
import s from './ProfileInfo.module.scss'
import {ProfilePageType} from "../../../redux/redux-store";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


type ProfileInfoPropsType = {
    profile: ProfilePageType
    updateStatus: (status: string) => void
    status: string
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.profile}>
            {/*<div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJzMNWNPsA8KiUFY_YiEC7rub3JEDOCUXXHwJ40dp7&s"/>
            </div>*/}
            <div className={s.profileHeader}>
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