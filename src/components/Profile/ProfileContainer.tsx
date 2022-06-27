import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppReduxStoreType} from "../../Redux/store-redux";
import {getUserProfile} from "../../Redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


type PathParamType = {
    userId: string
}
type CommonPropsType = RouteComponentProps<PathParamType> & ProfilePropsType


type mapDispatchToPropsType = {
    getUserProfile: (userId:string) => void
}
type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component <CommonPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
        // profileAPI.getUserProfile(userId)
        //     .then(data => {this.props.setUserProfile(data)})
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <div>
                <Profile
                    profile={this.props.profile}
                />
            </div>)
    }
}

let mapStateToProps = (state: AppReduxStoreType) => ({
    profile: state.profilePage.profile,
    isAuth:state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);

