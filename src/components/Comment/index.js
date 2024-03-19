import React, { useEffect, useState } from "react";
import { postComment, getComments } from "../../servers/api";
import { toast } from "react-toastify";

const Comment = (props) => {
  const token = localStorage.getItem("token");
  const [comments, setComments] = useState([]);
  const [commentList, setCommentList] = useState([]);
  const postId = props.id;

  const notify = (message) => toast(message);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getComments(postId, token);
        console.log(data)
        if (data.status === 200) setCommentList(data.data);
      } catch (error) {
        console.error("Đã xảy ra lỗi:", error);
      }
    };
    fetchData();
  }, [postId]);
  console.log(commentList)
  const handleSubmitComment = async () => {
    try {
      const data = await postComment(comments, postId, token);
      if (data.status === 201) {
        notify("Bình luận thành công");
      }
    } catch (error) {
      console.error("Đã xảy ra lỗi:", error);
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
              <div>
                {commentList.map((comment, index) => (
                  <div key={index} className="d-flex flex-row p-3">
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
                            {comment.content}
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
