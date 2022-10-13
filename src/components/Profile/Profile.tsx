import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./My posts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";
import {Dispatch} from "redux";
import {ProfileFormikType} from "./ProfileInfo/ProfileData/ProfileDataForm";
import s from './Profile.module.css'

export type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => (dispatch: Dispatch) => void
    isOwner: boolean
    savePhoto: (file:File) => (dispatch: Dispatch) => void
    saveProfile: (profile:ProfileFormikType) => (dispatch: Dispatch) => void
    errorMessage: string
}
export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}
                         errorMessage={props.errorMessage}
            />
            <MyPostsContainer/>
        </div>)
}

