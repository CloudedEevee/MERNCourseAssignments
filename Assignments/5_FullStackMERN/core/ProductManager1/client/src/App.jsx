import { useState } from 'react'
import './App.css'
import ProductForm from './components/ProductForm'
import AllProducts from './components/AllProducts';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <AllProducts/>
        <ProductForm/>
      </div>
    </>
  );
}

export default App
