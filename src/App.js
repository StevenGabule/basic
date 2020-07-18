import React, { useState, useEffect, useContext, useReducer } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import postReducer from "./reducer";

export const UserContext = React.createContext();
export const PostContext = React.createContext({
  posts: []
});

function App() {
  const initialStatePost = useContext(PostContext);
  const [state, dispatch] = useReducer(postReducer, initialStatePost)

  const [user, setUser] = useState("reed");
  useEffect(() => {
    document.title = user ? `${user}'s feed` : "Please Login";
  }, [user]);


  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <PostContext.Provider value={{state, dispatch}}>
      <UserContext.Provider value={user}>
        <Header user={user} setUser={setUser} />
        <CreatePost user={user} />
        <PostList posts={state.posts} />
      </UserContext.Provider>
    </PostContext.Provider>
  );
}

export default App;
