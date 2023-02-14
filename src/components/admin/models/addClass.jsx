import React, { useState } from "react";
import { Axios } from "../../../axiosInstance";
import { Modal, Button } from "react-bootstrap";

export const AddClass = ({ Show, SetShow, id }) => {
  console.log(id)
  const [addClass, setAddClass] = useState({
    className: "",
    date: "",
    course: id
  });
  console.log(id,'id------------')
  const handleClose = () => {
    SetShow(false);
  };
  const handleSubmit =async () => {
    console.log(addClass)
    handleClose()
    try {
        const {data} = await Axios.patch(`/admin/addClass`,addClass)
    } catch (error) {
        console.log(error)
    }
  };
  return (
    <>
      <Modal
        show={Show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Class</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            name="className"
            placeholder="Enter  class"
            onChange={(e) => {
              setAddClass({ ...addClass,[e.target.name]: e.target.value });
            }}
          />
          <br /><br />
          <input
            type="date"
            name="date"
            placeholder="Enter  class"
            onChange={(e) => {
              setAddClass({ ...addClass, [e.target.name]: e.target.value });
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button className="help_btn" type="submit" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
