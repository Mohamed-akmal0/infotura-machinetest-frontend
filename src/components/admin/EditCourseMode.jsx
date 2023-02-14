import React , {useState} from 'react'
import {Button, Modal} from 'react-bootstrap'
import { ToastContainer,toast } from 'react-toastify'
import { Axios } from '../../axiosInstance'

export const EditCourseModel = ({isSecondModelOpen,setIsSecondModelOpen,id}) => {
    const [editCourse,setEditCourse] = useState({
        courseName:''
    })
    const handleClose = () => {
        setIsSecondModelOpen(false)
    }
    const generateMsg = (msg) => toast.success(msg)
    const handleSubmit = async () => {
        try{
            handleClose()
            const {data} = await Axios.patch(`/admin/editCourse/${id}`,editCourse)
            if(data.message === 'success'){
                const msg = 'Edited'
                generateMsg(msg)
            }
        }catch(error){
            console.log(error)
        }
    }
    return(
        <>
        <Modal
        show={isSecondModelOpen}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            name="courseName"
            placeholder="Edit Course Name"
            onChange={(e) => {
              setEditCourse({ [e.target.name]: e.target.value });
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button className="help_btn" type="submit" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-right"
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
    )
}