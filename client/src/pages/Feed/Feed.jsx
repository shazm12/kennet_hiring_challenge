import "./Feed.css";
import { SearchBox, CreatePost, PostsFeed } from "../../components";
import UserContext from "../../context/User/UserContext";
import PostContext from "../../context/Post/PostContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Feed = () => {
  const { userName, userId } = useContext(UserContext);
  const { posts, getAllPosts, getAllComments, post ,setPost, createPost, searchForPostsAndComments } = useContext(PostContext);
  const navigate = useNavigate();

  const checkIfUserNameIsPresent = () => {
    if (!userName) navigate("/");
  };

  // Run Following Modules on Intial Component Mount Only
  useEffect(() => {
    checkIfUserNameIsPresent();
    if(userId !== "") {
      getAllPosts();
      getAllComments();
    }

  }, []);

  const handleCreatePost = () => {
    try {
      createPost(userId);
      alert("Post created Successfully!");
      setPost("");
      getAllPosts();
    }
    catch(err) {
      console.error(err);
      alert("There was some problem while posting!");
    }
  }

  return (
    <>
      {/* Welcome User Message with Search Box */}
      <div className="welcome_msg__container">
        <SearchBox handleSearch={searchForPostsAndComments} />
        <div className="welcome_msg_text">
          <p> Welcome ,{userName && userName }</p>
        </div>
      </div>
      <div className="posts_feed__container">
        {/* Create Feed */}
        <CreatePost post={post} setPost={setPost} createPost={() => handleCreatePost()} />
        {/* All Posts Page */}
        <PostsFeed posts={posts} />
      </div>
    </>
  );
};

export default Feed;
