import { useState } from "react";
import PostContext from "./PostContext";

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState("");
  const [comments, setComments] = useState([]);

  const getAllPosts = async () => {
    try {
      const response = await fetch("http://localhost:8000/post/get", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setPosts(data.posts);
    } catch (error) {
      throw new Error(error);
    }
  };

  const searchForPostsAndComments = async(keyword) => {
    if(keyword === "" || keyword === null  ) {
      resetPosts();
      return;
    }
    const filteredPosts = posts.filter(
      (post) =>
        post?.caption?.includes(keyword) || post?.author?.name?.toLowerCase().includes(keyword.toLowerCase())
    );
    let filteredPostsContainingMatchingComments = comments
      .filter((comment) => {
        if (comment?.message?.includes(keyword)) {
          if (filteredPosts.find((post) => post._id === comment?.post._id)) return false;
          else {
            return true;
          }
        }
      })
      .map((comment) => {
       const post = posts.find((post) => post?._id === comment?.post?._id );
       if(post) return post;
       else {
        return;
       }
      });
    filteredPostsContainingMatchingComments = filteredPostsContainingMatchingComments.filter((post) => post);
    const filteredResults = filteredPosts.concat(filteredPostsContainingMatchingComments);
    setPosts(filteredResults);
  };

  const resetPosts = async() => {
    getAllPosts();
  }

  const getAllComments = async () => {
    try {
      const response = await fetch("http://localhost:8000/comment/get", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setComments(data?.comments);
    } catch (error) {
      throw new Error(error);
    }
  };

  const createComment = async (comment, post_id, user_id) => {
    const payload = {
      message: comment,
      post: post_id,
      author: user_id,
    };

    try {
      await fetch("http://localhost:8000/comment/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      throw new Error(err.message);
    }
  };

  // Function to get comments by post ID
  const getCommentsByPostId = (postId) => {
    if (comments.length === 0) getAllComments();
    const commentsByPostId = comments.filter((comment) => comment?.post?._id == postId);
    return commentsByPostId;
  };

  const createPost = async (userId) => {
    if (post === "") {
      alert("Please write some caption for the post!");
      throw new Error("No Caption Provided");
    }
    const payload = {
      author: userId,
      caption: post,
    };
    try {
      await fetch("http://localhost:8000/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        setPosts,
        post,
        setPost,
        comments,
        getAllComments,
        getAllPosts,
        createPost,
        getCommentsByPostId,
        createComment,
        searchForPostsAndComments,
        resetPosts
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
