import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./My posts/MyPostsContainer";
import {ProfileType} from "../../Redux/profile-reducer";
import {Dispatch} from "redux";

export type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus:(status:string)=>(dispatch:Dispatch)=>void
}
const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer
                // store={props.store}
            />
        </div>)
}
export default Profile;

