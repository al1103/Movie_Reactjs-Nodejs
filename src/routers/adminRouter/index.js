import React from 'react'
import Admin from '../../pages/admin/AdminMovie/ManagerMovie'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AdminRouter = () => {
  return (
    <div>
      <Admin></Admin>
      <ToastContainer />
    </div>
  )
}

export default AdminRouter