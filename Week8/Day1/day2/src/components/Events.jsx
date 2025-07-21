import { useState } from "react";

function Events() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert('I was clicked');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      alert(e.target.value);
    }
  };

  const toggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      <h2>Events Exercise</h2>
      <button onClick={clickMe}>Click me</button>
      <br /><br />
      <input 
        onKeyDown={handleKeyDown} 
        placeholder="Type and press Enter" 
      />
      <br /><br />
      <button onClick={toggle}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default Events;
