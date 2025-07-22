import { useRef, useState } from "react";

export default function CharCounter() {
  const inputRef = useRef();
  const [count, setCount] = useState(0);

  const handleInput = () => {
    setCount(inputRef.current.value.length);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <input
        type="text"
        ref={inputRef}
        onInput={handleInput}
        placeholder="Tapez votre texte ici..."
        style={{ padding: '0.5rem', fontSize: '1rem', width: '250px' }}
      />
      <span>Nombre de caractères : {count}</span>
    </div>
  );
}
