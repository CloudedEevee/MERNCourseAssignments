import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OneModel from './components/OneModel';
import Main from './components/views/Main';
import UpdateModel from './components/views/UpdateModel';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Routes>

            <Route element={<Main/>} path="/" default />
            <Route element={ <OneModel/> } path="/models/:id" />
            <Route element={ <UpdateModel/> } path="/models/edit/:id" />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
