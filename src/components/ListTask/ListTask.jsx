
import Task from '../Task/Task'
import "./ListTask.css"
import {useSelector} from 'react-redux'


function ListTask() {
    const todos = useSelector(state => state.todos)
    
    return (
        <div className="ListTask">
            
            
            {
            todos.map((item, index) => 
               <Task item = {item} key = {index} index={index +1} /> 
            
                   
                
                )
            } 
               
        
        </div>
    )
    
}

export default ListTask
