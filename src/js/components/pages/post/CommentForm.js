import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createComment } from '../../../redux/actions/postActions';

const initialState = {title: '', description: '', image_url: ''};

const CommentForm = ({ postId }) => {
  const dispatch = useDispatch();
  const [formCommentData, setFormCommentData] = useState(initialState);
  // const [image_url, setImage] = useState(false);
  // onchange attribute is passed a string - the value attr input
  // ensure name and value attr of input and textareas are the same!!!
  const { title, description, image_url } = formCommentData;
  const fileInputText = useRef();
  const onChange = e => setFormCommentData({ ...formCommentData, [e.target.name]: e.target.value });
  const handleImageChange = (e) => {
    // setImage(e.target.files[0]);
    setFormCommentData({
      ...formCommentData,
      [e.target.name]: e.target.files[0]
    });
  };
  const onSubmit = e => {
    e.preventDefault();
    dispatch(createComment(postId, formCommentData));
    // clear form after submitting
    fileInputText.current.value = "";
    setFormCommentData({title: '', description: '', image_url: ''});
    // setImage(false);
  }

  return (
    <div className="post comments__comment-form">
      <div className="post__form-section">
        <form className="form post__form" onSubmit={onSubmit} >
          <h3>Leave a Comment</h3>
          <div className="post__group">
            <input
              type="text"
              placeholder="Comment Title (Optional)"
              className="post__form-title"
              name="title"
              onChange={e => onChange(e)}
              value={title}
            />
          </div>
          <div className="post__group">
            <input
              type="file"
              accept=".jpeg, .jpg, .gif, .png"
              placeholder=".jpeg, .jpg, .gif, .png formats only"
              className="post__form-title file-btn-input"
              name="image_url"
              onChange={handleImageChange}
              // value={image_url}
              ref={fileInputText}
            />
            <label htmlFor="image_url" className="post__form file-btn-label">
              Image
            </label>
          </div>
          <div className="">
            <textarea
              name="description"
              cols="30"
              rows="5"
              placeholder="Create a comment"
              onChange={e => onChange(e)}
              value={description}
              required
            ></textarea>
          </div>
          <input type="submit" className="btn btn-primary post__form-btn" value="Create Comment" />
        </form>
      </div>
    </div>
  );
}
export default CommentForm;