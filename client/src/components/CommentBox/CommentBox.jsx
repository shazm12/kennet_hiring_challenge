import { useContext, useState } from "react";
import "./CommentBox.css";
import PostContext from "../../context/Post/PostContext";
const CommentBox = ({ postId, userId }) => {
  const { createComment ,getAllComments } = useContext(PostContext);
  const handleCreateCommment = async () => {
    if(comment == "") {
      alert("Please enter some text for comment!");
      return;
    }
    await createComment(comment, postId, userId);
    await getAllComments();
    alert("Comment Added Successfully!");
    setComment("");
    await getAllComments();
    window.dispatchEvent(new CustomEvent("comment-added", { bubbles: true }));
  };
  const [comment, setComment] = useState("");
  return (
    <div className="comment_box__container">
      <input
        type="text"
        name="comment"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      />
      <button onClick={() => handleCreateCommment()}>Add</button>
    </div>
  );
};

export default CommentBox;
