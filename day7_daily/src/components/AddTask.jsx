
export default function AddTask({ day }) {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) {
      setError('Le champ ne peut pas être vide.');
      return;
    }
    if (!day) {
      setError('Veuillez sélectionner un jour.');
      return;
    }
    dispatch(addTask({ day, text }));
    setText('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Nouvelle tâche" />
      <button type="submit">Ajouter</button>
      {error && <div style={{ color: 'red', marginTop: 4 }}>{error}</div>}
    </form>
  );
}
