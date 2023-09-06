import Post from "../Post/Post";
import "./PostsFeed.css";

const PostsFeed = ({ posts }) => {

  return (
    <div className="posts_feed__container">
      {posts ? (
        posts.map((post, idx) => <Post key={idx} postId={post?._id} caption={post?.caption} userName={post?.author?.name} />)
      ) : (
        <p>No Posts To Show</p>
      )}
    </div>
  );
};

export default PostsFeed;
