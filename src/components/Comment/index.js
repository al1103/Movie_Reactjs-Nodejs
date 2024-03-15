import React, { useState } from "react";
import { postComment } from "../../servers/api";
import "./style.scss";

const Comment = (id) => {
  const token = localStorage.getItem("token");
  const [comments, setComments] = useState([]);

  const handleSubmitComment = async () => {
    try {
      if (!token) {
        alert("Vui lòng đăng nhập để bình luận");
        return;
      } else if (!comments.length) {
        alert("Vui lòng nhập bình luận");
        return;
      }
  
      const res = await postComment(comments, token);
      console.log(res, "Comment submitted successfully!"); 
    } catch (error) {
      console.error(error, "Error submitting comment:"); 
    }
  };
  

  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-7">
            <div className="card">
              <div className="p-3">
                <h6>Comments</h6>
              </div>
              <div className="mt-3 d-flex flex-row align-items-center p-3 form-color">
                <img
                  src="https://i.imgur.com/zQZSWrt.jpg"
                  width={50}
                  className="rounded-circle mr-2"
                />
                <input
                  onChange={(e) => setComments(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Enter your comment..."
                />
                <button onClick={handleSubmitComment} className="btn-comment">
                  <span>Submit</span>
                </button>
              </div>
              <div className="mt-2">
                <div className="d-flex flex-row p-3">
                  <img
                    src="https://i.imgur.com/zQZSWrt.jpg"
                    alt="Avatar"
                    width={50}
                    height={50}
                    className="rounded-circle mr-3"
                  />

                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex flex-row align-items-center">
                        <span className="mr-2">Brian selter</span>
                      </div>
                      <small>12h ago</small>
                    </div>
                    <p className="text-justify comment-text mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </p>
                    <div className="d-flex flex-row user-feed">
                      <span className="wish">
                        <i className="fa fa-heartbeat mr-2" />
                        24
                      </span>
                      <span className="ml-3">Reply</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
