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
    getUserProfile: (userId:number | null) => void
    getStatus: (userId:number | null) => void
    updateStatus:(status:string)=>(dispatch:Dispatch)=>void
}
type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type CommonPropsType = RouteComponentProps<PathParamType> & ProfilePropsType

class ProfileContainer extends React.Component <CommonPropsType> {
    componentDidMount() {
        let userId: number | null = Number(this.props.match.params.userId)
        if (!userId) {
            userId = this.props.authorizedUserId
            if(!userId){
                this.props.history.push('/login')
            }
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
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile,getStatus,updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)




