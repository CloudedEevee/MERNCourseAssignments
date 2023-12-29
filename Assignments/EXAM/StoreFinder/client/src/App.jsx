import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OneStore from './components/OneStore';
import Main from './components/views/Main';
import UpdateStore from './components/views/UpdateStore';
import AddStore from './components/views/AddStore';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Routes>

            <Route element={<Main/>} path="/" default />
            <Route element={ <OneStore/> } path="/stores/:id" />
            <Route element={ <UpdateStore/> } path="/stores/edit/:id" />
            <Route element={ <AddStore /> } path="/stores/add" />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
