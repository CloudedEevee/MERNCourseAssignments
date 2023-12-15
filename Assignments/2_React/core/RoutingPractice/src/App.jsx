import { useState } from 'react'
import { 
  BrowserRouter,
  Routes, 
  Route,
  Link
} from 'react-router-dom'
import './App.css'
import Home from './components/home'
import Root from './components/root'
import About from './components/about'
import ParamsComp from './components/ParamsComp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Root />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:word" element={<ParamsComp />} />
        <Route path="/:word/:color/:bkg" element={<ParamsComp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
