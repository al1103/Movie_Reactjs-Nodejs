import React, { useEffect, useState } from "react";
import { postComment, getComments,deleteComment } from "../../servers/api";
import {ToastContainer, toast } from "react-toastify";

import "./style.scss";
import moment from "moment";
const Comment = (props) => {
  const token = localStorage.getItem("token");
  const [comments, setComments] = useState("");
  const [commentList, setCommentList] = useState([]);
  const postId = props.id;
  const [postIdReady, setPostIdReady] = useState(false);

  const fetchData = async () => {
    try {
      const data = await getComments(postId, token);
      if (data.status === 200) setCommentList(data.data.comments);
    } catch (error) {
      console.error("Đã xảy ra lỗi:", error);
    }
  };

  useEffect(() => {
    if (postId) {
      setPostIdReady(true);
    }
  }, [postId]);

  useEffect(() => {
    if (postIdReady) {
      fetchData();
    }
  }, [postIdReady]);



 
  const handleSubmitComment = async () => {
    try {
      if (!comments) {
          setComments("");

        return toast.error("Please enter your comment");
      }
      if(!token) {
        setComments("");
        return toast.error("Please login to comment")
      };


      const data = await postComment(comments, postId, token);
      if (data.status === 201){
        setComments("");
        toast.success("Comment success");
        fetchData();

      }else{  
        toast.error(data);
      } 
    } catch (error) {
      console.error("Đã xảy ra lỗi:", error);
    }
  };

  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row  height d-flex justify-content-center align-items-center">
          <div className="col-md-7">
            <div className="card">
              <div className="p-3">
                <h6>Comments</h6>
              </div>
              <div className="mt-3 gap-2 d-flex flex-row align-items-center p-3 form-color">
                <img
                  src="https://i.imgur.com/zQZSWrt.jpg"
                  width={50}
                  className="rounded-circle mr-2"
                />
                <input
                value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Enter your comment..."
                />
                <button onClick={handleSubmitComment} className="btn-comment">
                  <span >Submit</span>
                </button>
              </div>
              <div>
                {commentList.map((comment, index) => (
                  <div key={index} className="d-flex flex-row p-3">
                    <div className=" w-100">
                      <div className="d-flex flex-row p-3 ">
                        <img
                          src="https://i.imgur.com/zQZSWrt.jpg"
                          alt="Avatar"
                          width={50}
                          height={50}
                          className="rounded-circle mr-3 avatar-img"
                        />

                        <div className="box-comment">
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-row align-items-center w-100">
                              <span className="mr-2 w-100">
                                {comment.User.username}
                              </span>
                            </div>
                            <small className="timeCreateComment">
                              {moment(comment.createdAt).startOf().fromNow()}
                            </small>
                          </div>
                          <div >
                            <p className="text-justify comment-text mb-0 comment-text" >

                            {comment.content}
                            </p>
                          </div>
                          <div className="d-flex flex-row user-feed justify-content-between w-100 pr-5">
                            <span className="wish">
                              <span
                                style={{
                                  cursor: "pointer",
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  version="1.1"
                                  width={24}
                                  height={24}
                                  x={0}
                                  y={0}
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    <path
                                      d="M10.667 234.667H160v256H10.667z"
                                      fill="#0277bd"
                                      data-original="#0277bd"
                                    />
                                    <path
                                      d="M160 501.333H10.667C4.776 501.333 0 496.558 0 490.667v-256C0 228.776 4.776 224 10.667 224H160c5.891 0 10.667 4.776 10.667 10.667v256c0 5.891-4.776 10.666-10.667 10.666zM21.333 480h128V245.333h-128V480z"
                                      fill="#01579b"
                                      data-original="#01579b"
                                    />
                                    <path
                                      d="M160 448a110.547 110.547 0 0 0 64 21.333h197.333c20.571.072 37.306-16.546 37.378-37.118a37.247 37.247 0 0 0-11.778-27.309c20.37-2.201 35.1-20.499 32.899-40.869a37.103 37.103 0 0 0-11.565-23.131c20.373-2.177 35.124-20.458 32.946-40.831a37.1 37.1 0 0 0-20.146-29.164c20.018-12.432 26.167-38.738 13.735-58.756a42.666 42.666 0 0 0-36.135-20.156H309.333a340.49 340.49 0 0 0 21.333-96c0-40-34.667-74.667-53.333-74.667a55.778 55.778 0 0 0-32 10.667v74.667l-64 138.667L160 256v192z"
                                      fill="#eceff1"
                                      data-original="#eceff1"
                                    />
                                    <path
                                      d="M421.333 480H224a119.722 119.722 0 0 1-71.552-24.448 10.668 10.668 0 0 1-3.115-7.552V256c0-4.037 2.279-7.728 5.888-9.536l17.984-9.003 61.461-133.12V32a10.666 10.666 0 0 1 3.989-8.341 66.943 66.943 0 0 1 38.677-12.992c24.683 0 64 39.061 64 85.333a307.295 307.295 0 0 1-17.067 85.333h134.4c29.455 0 53.333 23.878 53.333 53.333a52.673 52.673 0 0 1-13.867 35.755c18.566 18.691 18.464 48.894-.227 67.46a47.716 47.716 0 0 1-12.253 8.807 47.247 47.247 0 0 1 5.013 21.333 47.809 47.809 0 0 1-26.347 42.667 47.247 47.247 0 0 1 5.013 21.333c-.044 26.487-21.51 47.944-47.997 47.979zm-250.666-36.885A109.901 109.901 0 0 0 224 458.667h197.333c14.723-.012 26.655-11.944 26.667-26.667a26.324 26.324 0 0 0-8.427-19.307c-4.291-4.036-4.498-10.787-.462-15.078a10.661 10.661 0 0 1 6.563-3.29c14.517-1.534 25.042-14.547 23.507-29.064a26.432 26.432 0 0 0-8.275-16.568c-4.291-4.036-4.498-10.787-.462-15.078a10.661 10.661 0 0 1 6.563-3.29c14.518-1.53 25.046-14.539 23.516-29.056a26.431 26.431 0 0 0-14.492-20.885c-5.235-2.702-7.289-9.135-4.587-14.371a10.657 10.657 0 0 1 3.883-4.189c14.999-9.347 19.581-29.083 10.234-44.082a32 32 0 0 0-26.896-15.075H309.333c-5.891-.003-10.664-4.781-10.661-10.672a10.66 10.66 0 0 1 .699-3.792A331.681 331.681 0 0 0 320 96c0-34.944-30.976-64-42.667-64A44.934 44.934 0 0 0 256 37.781v68.885a10.777 10.777 0 0 1-.981 4.48l-64 138.667a10.67 10.67 0 0 1-4.907 5.056l-15.445 7.723v180.523z"
                                      fill="#01579b"
                                      data-original="#01579b"
                                    />
                                  </g>
                                </svg>
                              </span>

                              <span> 24</span>
                            </span>
                            <span className="ml-3">Reply</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Comment;
