import "./Comment.css";
const Comment = ({ message, userName }) => {
  return (
    <div className="comment__container">
      <p className="comment__username">{userName}</p>
      <p className="comment__message">{message}</p>
    </div>
  );
};

export default Comment;
