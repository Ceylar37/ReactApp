import s from './Dialog.module.css';
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    return (
            <NavLink to={'/messages/' + props.id} className={s.user} activeClassName={s.active}><strong>{props.name}</strong></NavLink>
    )
}

export default Dialog;