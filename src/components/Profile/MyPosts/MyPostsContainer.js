import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    debugger
    let state = props.store.getState();
    return <MyPosts postsData={state.postsData}/>
}

export default MyPostsContainer;