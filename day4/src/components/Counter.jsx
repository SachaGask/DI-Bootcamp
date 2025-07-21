import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    if(count > 5) {
        throw new Error("Count exceeded 5!");
    }

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        </div>
    );
};

export default Counter;
