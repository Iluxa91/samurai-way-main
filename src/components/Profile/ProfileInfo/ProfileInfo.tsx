import s from "./ProfileInfo.module.css"
import {Preloader} from "../../Common/Preloader/Preloader";
import {ProfilePropsType} from "../Profile";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {ProfileStatus} from "./ProfileStatus";
import {Component} from "react";

class ProfileInfo extends Component<ProfilePropsType> {
    render() {
        if (!this.props.profile) {
            return <Preloader/>
        }
        return (
            <div>
                <div className={s.descriptionBlock}>
                    <img src={this.props.profile.photos.large}/>
                    <ProfileStatus
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
                    />
                    <div>{this.props.profile.fullName}</div>
                    {/*<div>{props.profile.aboutMe}</div>*/}
                    {/*<div>{props.profile.lookingForAJobDescriptions}</div>*/}
                </div>
            </div>)
    }
}

export default ProfileInfo;
