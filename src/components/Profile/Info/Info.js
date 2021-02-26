import s from './Info.module.css';

const Info = (props) => {
    return (
        <div className={s.info}>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7FBLY4LMMCVJ_aILhALJw6mEvZcrNsjhUA&usqp=CAU'}/>
            <span className={s.login}>Login : {props.login}</span>
            <span className={s.age}>Age : {props.age}</span>
        </div>
    )
}

export default Info;