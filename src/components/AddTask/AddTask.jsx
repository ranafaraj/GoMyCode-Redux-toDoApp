import React, { useState } from 'react'
import {Form , Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTask } from '../../Redux/Actions'
import "./AddTask.css"
function AddTask() {
    const [toAddTask, setToAddTask] = useState("")
    const handleChange = (e)=> { setToAddTask(e.target.value) }

    const handleSubmit =() =>{
        if (toAddTask)
         {
             dispatch(addTask({toAddTask}))
             setToAddTask("")
         }
         else 
         {
             alert("please write a task to add")
         }

        }


    const dispatch = useDispatch()
    return (
        <div className ="AddTask">
            <h1>Todo app</h1>
            <div className="addField">
                <Form.Control id="addTaskInput" size="lg" type="text"
                placeholder="ADD TODO" onChange= {handleChange} value={toAddTask}/>
                <Button variant ="info" style={{border: "2px white soild", color: "white" }}
                 onClick={handleSubmit}> ADD</Button>

                


            </div>
            
        </div>
    )
}

export default AddTask;
