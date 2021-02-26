import s from './NewPost.module.css';
import React from "react";



const NewPost = (props) => {

    let newPostElem = React.createRef();

    let onInpChange = () => {
        let text = newPostElem.current.value;
        props.onInpChange(text);
    }

    let addPost = () => {
        props.addPost();
    }

    return (
        <div className={s.newPost}>
            <span>Новая запись:</span>
            <textarea onChange={onInpChange} placeholder={'Make new post!'} ref={newPostElem} value={props.newPostText}/>
            <button onClick={addPost}>Опубликовать</button>
        </div>
    )
}

export default NewPost;
