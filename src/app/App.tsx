import React from "react";
import {Navbar} from "../components/Navbar/Navbar";
import {Redirect, Route, Switch} from "react-router-dom";
import {ChatPage} from "../components/Chat/Chat";
import {Music} from "../components/Music/Music";
import {Settings} from "../components/Settings/Settings";
import HeaderContainer from "../components/Header/HeaderContainer";
import UsersConteiner from "../components/Users/usersContainer";
import Login from "../components/Login/LoginFormik";
import {connect} from "react-redux";
import {initializeApp} from "../redux/app-reducer";
import {AppReduxStoreType} from "../redux/store-redux";
import {Preloader} from "../components/Common/Preloader/Preloader";
import "./App.css"
import {WithSuspense} from "../hoc/WithSuspense";
import {CalendarComponent} from "../components/Calendar/Calendar";

// import ProfileContainer from "../components/Profile/ProfileContainer";
const ProfileContainer = React.lazy(() => import("../components/Profile/ProfileContainer"))
// import Dialogs from "../components/Dialogs/DialogsContainer";
const Dialogs = React.lazy(() => import("../components/Dialogs/DialogsContainer"))

class App extends React.Component<MapDispatchToPropsType & MapStateToPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route path="/login"
                               render={() => <WithSuspense children={<Login/>}/>}/>
                        <Route exact path="/" render={() => <Redirect to="/profile"/>}/>
                        <Route path="/dialogs"
                               render={() => <WithSuspense children={<Dialogs/>}/>}/>
                        <Route path="/profile/:userId?"
                               render={() => <WithSuspense
                                   children={<ProfileContainer/>}/>}/>
                        <Route path="/chat" render={() => <ChatPage/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path="/users" render={() => <UsersConteiner/>}/>
                        <Route path="/calendar" render={()=><CalendarComponent/>} />
                        <Route path="/404" render={()=><h1 style={{ textAlign: 'center' }} >404: PAGE NOT FOUND</h1>} />
                        <Route path="*"
                               render={() => <div>404 PAGE NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}
type MapStateToPropsType = ReturnType<typeof mapStateToProps>
const mapStateToProps = (state: AppReduxStoreType) => ({
    initialized: state.app.initialized
})
export default connect(mapStateToProps, {initializeApp})(App)
