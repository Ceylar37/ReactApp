import p from './Profile.module.css';
import Info from "./Info/Info";
import NewPostContainer from "./NewPost/NewPostContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={p.profile}>
            <Info login={'ceylar'} age={'19'}/>
            <NewPostContainer store={props.store}/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;