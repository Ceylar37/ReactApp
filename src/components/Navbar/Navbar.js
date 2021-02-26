import n from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={n.nav}>
            <ul>
                <li className={n.li}><strong><NavLink to={'/profile'} className={n.a} activeClassName={n.active}>Profile</NavLink></strong></li>
                <li className={n.li}><strong><NavLink to={'#'} className={n.a}>News</NavLink></strong></li>
                <li className={n.li}><strong><NavLink to={'messages'} className={n.a} activeClassName={n.active}>Messages</NavLink></strong></li>
                <li className={n.li}><strong><NavLink to={'#'} className={n.a}>Music</NavLink></strong></li>
                <li className={n.li}><strong><NavLink to={'#'} className={n.a}>Settings</NavLink></strong></li>
            </ul>
        </nav>
    )
}

export default Navbar;