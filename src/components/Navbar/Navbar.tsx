import {NavLink} from "react-router-dom";
import {
    FaCogs,
    FaFacebookMessenger,
    FaMusic, FaRegCalendarAlt,
    FaRegUserCircle,
    FaUsers
} from "react-icons/fa"
import s from "./Navbar.module.css"

let styleIcon: React.CSSProperties = {
    color: "rgb(56, 0, 0)"
}
export const Navbar = () => (
    <nav className={s.nav}>
        <div className={s.item}>
            <FaRegUserCircle style={styleIcon}/>
            <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <FaFacebookMessenger style={styleIcon}/>
            <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <FaFacebookMessenger style={styleIcon}/>
            <NavLink to="/chat" activeClassName={s.activeLink}>Chat</NavLink>
        </div>
        <div className={s.item}>
            <FaMusic style={styleIcon}/>
            <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
        </div>
        <div className={s.item}>
            <FaCogs style={styleIcon}/>
            <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
        </div>
        <div className={s.item}>
            <FaUsers style={styleIcon}/>
            <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
        </div>
        <div className={s.item}>
            <FaRegCalendarAlt style={styleIcon}/>
            <NavLink to="/calendar" activeClassName={s.activeLink}>Calendar</NavLink>
        </div>
    </nav>)
