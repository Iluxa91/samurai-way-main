import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppReduxStoreType} from "../../Redux/store-redux";
import {ProfileType, setUserProfile} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamType = {
    userId:string
}
type CommonPropsType = RouteComponentProps<PathParamType> & ProfilePropsType



type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component <CommonPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile
                    profile={this.props.profile}
                />
            </div>)
    }
}

let mapStateToProps = (state: AppReduxStoreType) => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);

