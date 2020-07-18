import React, { useState, useRef, useContext } from "react";
import { PostContext } from "../App";

function CreatePost({ user }) {
  const { dispatch } = useContext(PostContext);
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const post = { content, image, user, id: Date.now() };
    dispatch({ type: "ADD_POST", payload: { post } });
    setContent("");
    imageRef.current.value = "";
  }

  return (
    <div>
      <h1>Create new post</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setContent(e.target.value)}
          type="text"
          value={content}
          placeholder="Add post content"
        />
        <input
          ref={imageRef}
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Submit post</button>
      </form>
    </div>
  );
}

export default CreatePost;
