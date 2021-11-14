import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Post from "./Post";
import { getPosts } from "../store/actions/action";
import PostList from "./postlist/PostList";

export const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);

  return (
    <>
      {currentId ? (
        <Post currentId={currentId} setCurrentId={setCurrentId} />
      ) : (
        <PostList setCurrentId={setCurrentId} />
      )}
    </>
  );
};
