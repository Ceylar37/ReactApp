import p from "./Post.module.css";


const Post = (props) => {
    return (
        <div className={p.post}>
            <img className={p.ava}
                 src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7FBLY4LMMCVJ_aILhALJw6mEvZcrNsjhUA&usqp=CAU'}/>
            <span className={p.message}>
                {props.text}
            </span>
            <img className={p.like} src={'https://pngicon.ru/file/uploads/like.png'}/>
            <span className={p.counter}>
                {props.likes}
            </span>
        </div>
    );
}

export default Post;