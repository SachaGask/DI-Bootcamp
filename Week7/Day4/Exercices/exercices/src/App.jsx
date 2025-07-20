import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};
const myelement = <h2>I Love JSX !</h2>;
const sum = 5 + 5;

function App() {
  return (
    <>
    <h1>Hello World !</h1>
    {myelement}
    <h2>React is {sum} times better with JSX</h2>
    <h3>My name is {user.firstName}</h3>
    <h3>My last name is {user.lastName}.</h3>    </>
  )
}

export default App
