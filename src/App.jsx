import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BottomNavigationBar from './components/BottomNavigationBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="text-3x1 font-bold underline">
      Teste
     </h1>
     <BottomNavigationBar />
    </>
  )
}

export default App
