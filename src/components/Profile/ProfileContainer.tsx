import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppReduxStoreType} from "../../Redux/store-redux";
import {ProfileType, setUserProfile} from "../../Redux/profile-reducer";

type mapDispatchToPropsType = {
    setUserProfile:(profile:ProfileType)=>void
}
type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component <ProfilePropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

let mapStateToProps = (state:AppReduxStoreType) => ({
    profile:state.profilePage.profile
})

export default connect(mapStateToProps,{setUserProfile})(ProfileContainer);

