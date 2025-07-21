import './App.css'
import Child from './components/Child'
import Parent from './components/Parent'
import Counter from './components/Counter'
import ErrorBoundary from './helpers/ErrorBoundary'

function App() {

  return (
    <>
      <h2>Children / Error Boundary / Routing </h2>
      <ErrorBoundary message="Something went wrong on Top Counter">
        <Counter />
      </ErrorBoundary>

      <Parent admin="john">
        <h2>Admin Panel</h2>
        <Child />
      </Parent>
      <ErrorBoundary message="Something went wrong on Top Counter">
        <Counter />
      </ErrorBoundary>
    </>
  )
}

export default App;
