import s from './InnerDialog.module.css';

const InnerDialog = (props) => {

    return (
        <div className={s.innerDialog}>
            <textarea placeholder={'Write message text...'} className={s.inp} />
            <button>Send</button>
        </div>
    )
}

export default InnerDialog;