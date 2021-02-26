import React from "react";
import {addPostActionCreator, onInpChangeActionCreator} from "../../../redux/profile-reducer";
import NewPost from "./NewPost";



const NewPostContainer = (props) => {
    debugger
    let state = props.store.getState();



    let onInpChange = (text) => {
        props.store.dispatch(onInpChangeActionCreator(text));
    }

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
        props.store.dispatch(onInpChangeActionCreator(''));
    }

    return (
        <NewPost onInpChange={onInpChange} addPost={addPost} newPostText={state.profilePage.newPostText}/>
    )
}

export default NewPostContainer;
