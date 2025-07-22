import './App.css';
import { useRef } from 'react';

function App() {
  const divRef = useRef();
  const h2Ref = useRef();

const handleClick = () => {
  divRef.current.style.backgroundColor = "lightblue";
  divRef.current.style.padding = "20px";
  h2Ref.current.style.color = "blue";
}

  return (
    <>
      <div ref={divRef}>
        <h2 ref= {h2Ref}>How to use useRef ?</h2>
        <button onClick={handleClick}>Change Color</button>
      </div>
    </>
  )
}

export default App

// App - Holder - useState
// Counter Holder - Header / Display / Button
// Counter Header - <h2>{header}</h2>
// CounterDisplay - <h3>Current Count: {count}</h3>
// Counter Button - <button onClick={() => setCount(count + 1)}>+</button>