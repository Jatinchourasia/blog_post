import React from "react";
import style from "../styles/post.module.scss";
import { Link } from "react-router-dom";

const Post = ({ currentId, setCurrentId }) => {
  return (
    <div className="container">
      <div className="">
        <p onClick={() => setCurrentId(null)}>back to home</p>
      </div>
      <div className={style.postContainer}>
        <div className={style.nav}>
          <div className={style.header}>
            <h2 className={style.title}>Title</h2>
            <p className={style.category}>category</p>
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            quia porro excepturi blanditiis mollitia libero impedit adipisci
            quibusdam eveniet, nihil eligendi corporis distinctio dolorem quam
            ad tempora magni aliquid saepe! Alias esse in quaerat nobis dolores
            veritatis perferendis, impedit sapiente quasi atque eum! Quae
            laudantium ipsa excepturi repudiandae. Aliquid, sapiente! Quo autem
            non asperiores temporibus saepe sint molestias ut, vero ea
            doloremque ab dolor dolorum, facilis aspernatur odit est inventore
            illum praesentium! Illum dolores aut reprehenderit nihil doloribus
            eos. Amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
