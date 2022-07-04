import s from './ProfileInfo.module.css'
import {Preloader} from "../../Common/Preloader/Preloader";
import {PropsType} from "../Profile";
import {ProfileStatus} from "./ProfileStatus";

const ProfileInfo = (props:PropsType) => {
if (!props.profile){
    return <Preloader/>
}
    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src='https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-760x400.png'/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={'Hello'}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.lookingForAJobDescriptions}</div>


            </div>
        </div>)
}
export default ProfileInfo;
