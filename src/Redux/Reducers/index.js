import { ADD_TASK } from "../Constants/action-types";
import {  CHANGE_IS_DONE, EDIT_TASK} from "../Constants/action-types";

const initialState = {todos :[

    {
        id: Math.random(),
        description:"finish GOMyCode course",
        isDone:"false",
    },

    {
        id: Math.random(),
        description: "do some yoga",
        isDone: "true",
    },

    {
        id: Math.random(),
        description: "make lunch",
        isDone: "true",
    },

    {
        id: Math.random(),
        description: "study",
        isDone: "false",
    }

]
}

function rootReducer(state = initialState, action)
{
    const {type, payload} = action;
    switch(type)
    {
        case ADD_TASK:
            return{
                todos: state.todos.concat({
                    id: Math.random(), 
                    description: payload.toAddTask,
                    isDone:false}),
            }
        case CHANGE_IS_DONE:
            return{ todos: (state.todos.map((item) =>
                item.id === payload.id? {...item, isDone: !item.isDone}: item))
            }
        case EDIT_TASK:
            return{ todos: (state.todos.map((item) =>
                item.id === payload.id? {...item, description: payload.description}: item))
            }
               
            
            default:
              return state; 
    }
}

export default rootReducer;