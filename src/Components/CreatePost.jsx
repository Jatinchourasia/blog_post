import React from "react";
import "../styles/style.scss";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Create New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="field-wrapper">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="What is this blog about?"
              required
            />
          </div>
          <div className="field-wrapper">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              placeholder="Which category does this belong to?"
              required
            />
          </div>
          <div className="field-wrapper">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              placeholder="More about the title..."
              required
            />
          </div>
          <div className="fieldset">
            <button className="submit-btn">Submit</button>
            <button className="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
