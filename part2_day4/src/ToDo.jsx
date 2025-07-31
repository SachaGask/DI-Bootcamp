import { memo } from 'react';

const ToDo = ({ todos }) => {
    console.log("ToDo component rendered");
    return (
        <div>
            <h4>ToDo List</h4>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

const memoizeToDo = memo(ToDo);
export default memoizeToDo;
