import React from "react";

function Post({image, content, user}) {
  return (
    <>
      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="cover photo"
          style={{ height: 100, width: 200, objectFit: "cover" }}
        />
      )}
      <p>{content}</p>
      <p>{user}</p>
    </>
  );
}

export default Post;
