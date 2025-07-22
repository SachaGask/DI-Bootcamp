import ErrorBoundary from './ErrorBoundary';
import BuggyCounter from './BuggyCounter'
import './App.css'

function App() {

  return (
    <>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
  <br/><br/>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
    </>
  )
}

export default App

