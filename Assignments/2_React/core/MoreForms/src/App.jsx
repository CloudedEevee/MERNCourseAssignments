import { useState } from 'react'
import './App.css'
import UserForm from './components/UserForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <UserForm />
      </div>
    </>
  );
}

export default App
