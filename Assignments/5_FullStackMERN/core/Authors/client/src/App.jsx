import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OneAuthor from './components/OneAuthor';
import Main from './components/views/Main';
import UpdateAuthor from './components/views/UpdateAuthor';
import AddAuthor from './components/views/AddAuthor';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Routes>

            <Route element={<Main/>} path="/" default />
            <Route element={ <OneAuthor/> } path="/authors/:id" />
            <Route element={ <UpdateAuthor/> } path="/authors/edit/:id" />
            <Route element={ <AddAuthor /> } path="/authors/add" />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
