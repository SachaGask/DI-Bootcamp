
export default function Button({ count, setCount }) {
    return (
        <>
            <button style={{ marginRight: "10px" }} onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
        </>
    );
}