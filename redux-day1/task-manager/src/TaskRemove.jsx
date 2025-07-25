import {TaskContext} from "./App";
import { useContext } from "react";
import { ACTION_REMOVE_TASK } from "./App";

function TaskRemove({id}) {
    const { dispatch } = useContext(TaskContext);
    return (
        <button style={{ marginLeft: 10, paddingRight: 10, paddingLeft: 10, background: 'red', color: 'white' }} onClick={() => dispatch({ type: ACTION_REMOVE_TASK, payload: id })} >X</button>
    )
}   

export default TaskRemove