import m from "./MyPosts.module.css"
import Post from "./Post/Post";


const MyPosts = (props) => {
    return (
        <div>
            {
                props.postsData.map(post => <Post text={post.text} likes={post.likes}/>)
            }
        </div>
    )
}

export default MyPosts;