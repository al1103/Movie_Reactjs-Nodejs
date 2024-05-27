import React from "react";
import { Spin } from "antd";
import "./loading.scss";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Spin />
    </div>
  );
};

export default Loading;
