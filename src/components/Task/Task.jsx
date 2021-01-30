import React from 'react'
import "./Task.css"
import {Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {changeIsDone} from '../../Redux/Actions'
import EditTask from '../EditTask/EditTask'

function Task(props) {

    const dispatch = useDispatch()
    return (
        <div className="task">
            <h4 style={{ textDecoration:!props.item.isDone?"none": "line-through"}}><span className="Task_Number">Task {props.index}</span> {props.item.description} </h4>
            <div className="taskBtns">
              <Button variant={!props.item.isDone?"success": "danger"} className="done-btn" onClick={() =>dispatch(changeIsDone( {id: props.item.id}))}>{props.item.isDone? "Undo": "Done"}</Button>
              <EditTask id={props.item.id}/>
            </div>
        </div>
    )
}
// id={toDo_task.id}
export default Task
 