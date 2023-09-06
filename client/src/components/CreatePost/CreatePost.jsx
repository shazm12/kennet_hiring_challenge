import "./CreatePost.css";

const CreatePost = ({ post , setPost, createPost }) => {
  return (
    <div className="create_post__container">
      <textarea placeholder="Write Something New..." value={post} onChange={(event) => setPost(event.target.value)} cols={95} />
      <button onClick={ () => createPost() }>Post</button>
    </div>
  );
};

export default CreatePost;
