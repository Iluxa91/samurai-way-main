import s from "./ProfileInfo.module.css"
import {Preloader} from "../../Common/Preloader/Preloader";
import {ProfilePropsType} from "../Profile";
import {ProfileStatus} from "./ProfileStatus";
import {ChangeEvent, useRef} from "react";
import userPhoto from "../../../assets/image/146031.png"

export const ProfileInfo = (props: ProfilePropsType) => {

    const inputRef = useRef<HTMLInputElement>(null)

    const selectFileHandler = () => {
        inputRef && inputRef.current?.click();
    };

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto}
                     className={s.mainPhoto}/>
                {props.isOwner &&
                    <div>
                        <button onClick={selectFileHandler}>upload file</button>
                        <input
                            style={{display: "none"}}
                            ref={inputRef}
                            type="file"
                            onChange={onMainPhotoSelected}
                        />
                    </div>
                }
                <ProfileStatus
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
                <div>{props.profile.fullName}</div>
                {/*<div>{props.profile.aboutMe}</div>*/}
                {/*<div>{props.profile.lookingForAJobDescriptions}</div>*/}
            </div>
        </div>)
}

