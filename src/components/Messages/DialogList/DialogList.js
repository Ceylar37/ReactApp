import s from './DialogList.module.css';
import Dialog from "./Dialog/Dialog";



const DialogList = (props) => {

    return (
        <div className={s.dialogs}>
            {
                props.dialogsList.dialogsList.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)
            }
        </div>
    )
}

export default DialogList;