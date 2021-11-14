import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

const PostList = ({ setCurrentId }) => {
  const posts = useSelector(state => state.posts);

  return (
    <div className="container">
      <div className="sub-container posts-container">
        <h2>Posts List</h2>
        {
          posts.map((post) => (
            <div className="post" onClick={() => setCurrentId(post.id)}>
              <h3>{post.title}</h3>
              <p>{post.category}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default PostList;
