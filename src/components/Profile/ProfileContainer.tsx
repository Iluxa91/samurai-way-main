import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppReduxStoreType} from "../../Redux/store-redux";
import {getStatus, getUserProfile, updateStatus} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose, Dispatch} from "redux";

type PathParamType = {
    userId: string
}
type MapDispatchToPropsType = {
    getUserProfile: (userId:string) => void
    getStatus: (userId:string) => void
    updateStatus:(status:string)=>(dispatch:Dispatch)=>void
}
type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type CommonPropsType = RouteComponentProps<PathParamType> & ProfilePropsType

class ProfileContainer extends React.Component <CommonPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '24175'
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Profile profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}/>
    }
}
let mapStateToProps = (state: AppReduxStoreType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile,getStatus,updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)




