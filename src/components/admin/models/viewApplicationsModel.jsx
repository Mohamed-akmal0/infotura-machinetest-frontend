import React from "react";
import { Modal } from "react-bootstrap";
import { ToastContainer , toast } from "react-toastify";
import { Axios } from "../../../axiosInstance";

export const ViewApplicationModel = ({show,setShow,selectApplication}) => {

    const handleClose = () => setShow(false)

    const generateMessage = (msg) => toast.success(msg)

    const reject = async (id) => {
        try {
          const {data} = await Axios.patch(`/admin/rejectClient/${id}`)
          if(data.message === 'success'){
            const msg = 'Rejected'
            generateMessage(msg)
          }
          handleClose()
        } catch (error) {
            console.log(error)
        }
    }

    const approve = async (id) => {
        try {
           const {data} = await Axios.patch(`/admin/approveClient/${id}`)
           if(data.message === 'success'){
            const msg = 'Approved'
            generateMessage(msg)
           }
           handleClose()
        } catch (error) {
           console.log(error) 
        }
    }

  return (
    <>
      <Modal show={show} onHide={handleClose}  size="lg"
      backdrop="static"
      >
      <Modal.Header closeButton >
         <Modal.Title>Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="d-flex justify-content-between">
         <p className="small"> Email</p>
         <p className="small">{selectApplication.email}</p>
      </div>
      <div className="d-flex justify-content-between">
         <p className="small">Course</p>
         <p className="small">Mern Stack</p>
      </div>
      <div className="d-flex justify-content-between">
         <button className='reject' onClick={() => reject(selectApplication._id)} >Reject</button>
         <button className='approve' onClick={() => approve(selectApplication._id)} >Approve</button>
      </div>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
   </Modal>
   <ToastContainer
      position="bottom-right"
      autoClose={1800}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
   />
    </>
  );
};
