import { TaskContext } from "./App";
import TaskRemove from "./TaskRemove";
import { useContext, useRef } from "react";

const TaskList = () => {
    const { state } = useContext(TaskContext);
return (
    <>
    <h2>Task List</h2>
        {state.task.map((item) => {
            return (
                <div key={item.id}>
                    {item.name}
                    <TaskRemove id={item.id} />
                </div>
            );
        })}
    </>
);
};

export default TaskList