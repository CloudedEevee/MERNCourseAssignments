import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm';
import TaskItems from './components/TaskItems';

function App() {
  const [count, setCount] = useState(0);
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <div>
        <h1>To Do:</h1>
        <TaskForm 
          taskList = { taskList } 
          setTaskList = { setTaskList }
        />

        <TaskItems 
          taskList = { taskList }
          setTaskList = { setTaskList }
        />

      </div>
    </>
  )
}

export default App


// [] = list (array) / detructuring
// {} = Object / detructuring