import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./My posts/MyPostsContainer";
import {AppPropsType} from "../../App";

// type PropsType = {
//     profilePage: ProfilePagePropsType
//     // addPost: () => void
//     // updateNewPostText: (newText:string)=>void
//     dispatch: (action: ActionsType) => void
// }
const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                // store={props.store}
            />
        </div>)
}
export default Profile;

