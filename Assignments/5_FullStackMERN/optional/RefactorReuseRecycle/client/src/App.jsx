import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OneProduct from './components/OneProduct';
import Main from './components/views/Main';
import UpdateProduct from './components/views/UpdateProduct';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Routes>

            <Route element={<Main/>} path="/" default />
            <Route element={ <OneProduct/> } path="/products/:id" />
            <Route element={ <UpdateProduct/> } path="/products/edit/:id" />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
