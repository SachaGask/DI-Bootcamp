import { useState , useCallback, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ToDo from './ToDo.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

 const heavyTask = (num = 0) => {
  for (let i = 0; i < 1000000; i++) {
    num++;
  }
  return num;
 }

// const result = heavyTask();
// console.log("Result of heavy task:", result);
const result = useMemo(() => heavyTask(count));
console.log("Result of heavy task:", result); 

  const addTask = useCallback(() => {
    setTodos((todos) => [...todos, "Nouvelle tache " + (todos.length + 1) + " !"]);
  }, []);

  return (
    <>
      <h3>memo + useBack + useCallback</h3>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className='card'>
        <button onClick={addTask}>Add Task</button>
        <ToDo todos={todos} />
      </div>
    </>
  )
}

export default App
