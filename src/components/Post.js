import React, { useContext } from "react";
import { UserContext, PostContext } from "../App";

function Post({ image, content, user, id }) {
  const currentUser = useContext(UserContext);
  const {dispatch} = useContext(PostContext);
  const isCurrentUser = user === currentUser;

  function handleDeletePost() {
    dispatch({type: "DELETE_POST", payload: { id }})
  }

  return (
    <div>
      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="cover photo"
          style={{ height: 100, width: 200, objectFit: "cover" }}
        />
      )}
      <p>{content}</p>
      <p style={{ color: isCurrentUser && "green" }}>{user}</p>
      {isCurrentUser && <button onClick={handleDeletePost}>Delete Post</button>}
    </div>
  );
}

export default Post;
