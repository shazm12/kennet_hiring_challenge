import CommentBox from "../CommentBox/CommentBox";
import CommentsList from "../CommentsList/CommentsList";
import "./Post.css";
import PostContext from "../../context/Post/PostContext";
import UserContext from "../../context/User/UserContext";
import { useContext, useEffect, useState } from "react";

const Post = ({ postId, caption, userName }) => {

  const {  getCommentsByPostId } = useContext(PostContext);
  const { userId } = useContext(UserContext);

  const [postsComments, setPostsComments ] = useState([]);
  useEffect(() => {

    setPostsComments(getCommentsByPostId(postId));
    window.addEventListener("commment-added",() => {
      console.log("comment added");
      setPostsComments(getCommentsByPostId(postId));
    })

    return () => {
      window.removeEventListener(("comment-added"),() =>{
        console.log("removed event listener");
      })
    }
    
  },[]);




  return (
    <div className="post__container">
      <p className="post__caption">{caption}</p>
      <p className="post__username">By {userName}</p>
      <div className="divider" />
      <div className="post_comment_box">
        <CommentBox userId={userId} postId={postId}  />
        <CommentsList comments={ postsComments } />
      </div>
    </div>
  );
};

export default Post;
