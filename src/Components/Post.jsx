import React from "react";
import style from "../styles/post.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Post = ({ currentId, setCurrentId }) => {
  const post = useSelector((state) =>
    currentId ? state.posts.find((post) => post.id === currentId) : null
  );
  return (
    <div className="container">
      <div className="">
        <p onClick={() => setCurrentId(null)}>back to home</p>
      </div>
      <div className={style.postContainer}>
        <div className={style.nav}>
          <div className={style.header}>
            <h2 className={style.title}>{post.title}</h2>
            <p className={style.category}>{post.category}</p>
          </div>
          <div className={style.control}>
            <button className={style.like}>Like</button>
            <Link to="/post/update/${id}">
              <button className={style.edit}>edit</button>
            </Link>
            <button className={style.delete}>delete</button>
          </div>
        </div>
        <div className={style.content}>
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
