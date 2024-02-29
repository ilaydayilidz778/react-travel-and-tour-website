import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      {/* <Main />
      <Footer /> */}
    </>
  )
}

export default App
