import s from './Messages.module.css';
import DialogList from "./DialogList/DialogList";
import InnerDialog from "./InnerDialog/InnerDialog";


const Messages = (props) => {

    return (
        <div className={s.messages}>
            <div className={s.dl}>
                <DialogList dialogsList={props.dialogsData}/>
            </div>
            <InnerDialog/>
        </div>
    )
}

export default Messages;