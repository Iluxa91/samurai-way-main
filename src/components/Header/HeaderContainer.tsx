import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppReduxStoreType} from "../../Redux/store-redux";
import {setAuthUserData} from "../../Redux/auth-reducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component<CommonPropsType> {
    componentDidMount() {
        authAPI.getLogin()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return <>
            <Header
                isAuth={this.props.isAuth}
                login={this.props.login}
            />
        </>
    }
}

const mapStateToProps = (state: AppReduxStoreType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

type MapDispatchToPropsType = {
    setAuthUserData: (userId: string, email: string, login: string) => void
}
type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type CommonPropsType = MapDispatchToPropsType & MapStateToPropsType

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)
