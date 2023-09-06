import "./CommentsList.css";
import Comment from "../Comment/Comment";
import { useEffect } from "react";

const CommentsList = ({ comments }) => {
  return (
    <div className="comments_list__continer">
      {comments.length > 0 ? (
        comments.map((comment, idx) => (
          <Comment key={idx} message={comment.message} userName={comment?.author?.name}  />
        ))
      ) : (
        <p className="empty_text_msg">Be the first to commment!</p>
      )}
    </div>
  );
};

export default CommentsList;
