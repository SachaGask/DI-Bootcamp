import { useState, useReducer, useRef } from 'react'
import './App.css'

const initialState = {count: 0};


const ACTION_INCREMENT = 'increment';
const ACTION_DECREMENT = 'decrement';
const ACTION_API = 'api';
const ACTION_ADD_NUMBER = 'add_number';

const counterReducer = (state, action) => {
  console.log(action);
  if(action.type === ACTION_INCREMENT) {
    return {...state, count: state.count + 1};
  }
  else if(action.type === ACTION_DECREMENT) {
    return {...state, count: state.count - 1};
  }
  else if(action.type === ACTION_API) {
    return {...state, count: state.count};
  }
  else if(action.type === ACTION_ADD_NUMBER) {
    return {...state, count: state.count + Number(action.payload)};
  }
  return state;
};

function App() {

  const [count, setCount] = useState(0)
  const [counterState, dispatch] = useReducer(counterReducer, initialState);
  const inputRef = useRef();

  return (
    <>
      <h2>useReducer Hook</h2>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </div>
      <div>
        <h2>Reducer Count: {counterState.count}</h2>
        <button onClick={() => dispatch({ type: 'decrement' })}>Dispatch -1</button>
        <button onClick={() => dispatch({ type: 'increment' })}>Dispatch +1</button>
      <div>
        <input type="number" ref={inputRef} />
        <button onClick={() => dispatch({
            type: ACTION_ADD_NUMBER,
            payload: inputRef.current.value,
          })}>
          Dispatch with input number
        </button>
      </div>

      </div>

    </>
  )
}

export default App
