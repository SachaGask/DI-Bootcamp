import { useState} from "react";

const Counter = ( { header } ) => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h2>{header}</h2>
            <h3>Current Count: {count}</h3>
        </>
    );
}

export default Counter;
