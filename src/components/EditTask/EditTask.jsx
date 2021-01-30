import React from 'react'
import {Button , Modal, Form} from 'react-bootstrap'
import  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editTask } from '../../Redux/Actions'
function EditTask({id}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const TaskItem = useSelector(state => state.todos.find(item => item.id === id))
  const [newDescription, setNewDescription] = useState(TaskItem.description)

  const dispatch = useDispatch()

  const handleSubmit = () => {
        dispatch(editTask({id: TaskItem.id, description: newDescription}))
        handleClose()
  }
  const handleChange = (e)=> { setNewDescription(e.target.value) }
  return (
    <>
      <Button variant="outline-secondary" size="sm" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Control type="text" defaultValue={TaskItem.description} onChange={handleChange}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

  }

export default EditTask
