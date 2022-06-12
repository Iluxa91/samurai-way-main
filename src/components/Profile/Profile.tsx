import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./My posts/MyPostsContainer";
import {ProfileType} from "../../Redux/profile-reducer";

// type PropsType = {
//     profilePage: ProfilePagePropsType
//     // addPost: () => void
//     // updateNewPostText: (newText:string)=>void
//     dispatch: (action: ActionsType) => void
// }
export type PropsType = {
    profile: ProfileType | null
}
const Profile = (props: PropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer
                // store={props.store}
            />
        </div>)
}
export default Profile;

