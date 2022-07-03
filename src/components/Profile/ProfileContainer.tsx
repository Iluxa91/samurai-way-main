import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppReduxStoreType} from "../../Redux/store-redux";
import {getUserProfile} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";


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
        return <Profile profile={this.props.profile}/>
    }
}


let mapStateToProps = (state: AppReduxStoreType) => ({
    profile: state.profilePage.profile,
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent));

