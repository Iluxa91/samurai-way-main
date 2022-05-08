import s from './Profile.module.css'
import {MyPosts} from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {
    ActionsType,
    ProfilePagePropsType,
    store,
} from "../../Redux/state";

type PropsType = {
    profilePage: ProfilePagePropsType
    // addPost: () => void
    // updateNewPostText: (newText:string)=>void
    dispatch:(action:ActionsType)=>void
}
const Profile = (props:PropsType) => {

    return (
    <div>
        <ProfileInfo/>
        <MyPosts posts={props.profilePage.posts}
                 dispatch={props.dispatch}
                 messageForNewPost={props.profilePage.messageForNewPost}
        />
    </div>)
}
export default Profile;

