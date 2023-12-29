import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/views/Home';
import OneProduct from './components/OneProduct';
import Update from './components/Update';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Routes>

            <Route element={<Home/>} path="/" default />
            <Route element={ <OneProduct/> } path="/products/:id" />
            <Route element={ <Update/> } path="/products/edit/:id" />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
