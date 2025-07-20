import './App.css'
import User from '/components/User.jsx'
import users from './users.json'

// let users = [
//   { name: "John", email: "jj@gmail.com", username: "john_doe" },
//   { name: "Jane", email: "jjane@gmail.com", username: "jane_doe" },
//   { name: "Jim", email: "jjim@gmail.com", username: "jim_doe" }
// ]

function App() {
  return (
    <>
      <h2>React Components</h2>
      {users.map((item, i) => {
        return (
        <div key={i}>
          <User userinfo={item} />
        </div>
        );
      })}
    </>
  )
}

export default App;

// Create folder "components"
// Create User component in the component folder
// User will have a name, email, username
// Random User on App