import { useState } from 'react'
import './App.css'
import PersonCard from './components/PersonCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <PersonCard 
          firstName = { "Doe" }
          lastName = { "Jane" }
          age = {45} 
          hairColor = { "Black" }
        />

        <PersonCard 
          firstName = { "Smith" }
          lastName = { "John" }
          age = {88} 
          hairColor = { "Brown" }
        />

        <PersonCard 
          firstName = { "Fillmore" }
          lastName = { "Millard" }
          age = {50} 
          hairColor = { "Brown" }
        />

        <PersonCard 
          firstName = { "Smith" }
          lastName = { "Maria" }
          age = {62} 
          hairColor = { "Blonde" }
        />
      </div>
    </>
  )
}

export default App
