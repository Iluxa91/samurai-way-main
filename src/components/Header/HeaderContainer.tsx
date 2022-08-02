import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppReduxStoreType} from "../../Redux/store-redux";
import {logout} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component<CommonPropsType> {
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
    logout: () => void
}
type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type CommonPropsType = MapDispatchToPropsType & MapStateToPropsType

export default connect(mapStateToProps, {logout})(HeaderContainer)
