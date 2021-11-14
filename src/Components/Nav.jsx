import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/nav.module.scss";
const Nav = () => {
  return (
    <div className={style.nav}>
      <div>
        <Link to="/">
          <h1>Blog Page Home</h1>
        </Link>
      </div>
    </div>
  );
};
export default Nav;
