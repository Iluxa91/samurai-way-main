import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppReduxStoreType} from "../../Redux/store-redux";
import {getAuthUserData, logout} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component<CommonPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <>
            <Header
                isAuth={this.props.isAuth}
                login={this.props.login}
                logout={this.props.logout}
            />
        </>
    }
}

const mapStateToProps = (state: AppReduxStoreType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
type MapDispatchToPropsType = {
    getAuthUserData: () => void
    logout: () => void
}
type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type CommonPropsType = MapDispatchToPropsType & MapStateToPropsType

export default connect(mapStateToProps, {getAuthUserData,logout})(HeaderContainer)
