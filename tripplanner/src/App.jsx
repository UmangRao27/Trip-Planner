import { useState } from 'react'
import './App.css'
import data from './data'
import Tours from './Components/Tours'

function App() {
  const [Tours, setTours] = useState(data)

  return (
    <div>
      <Tours Tours={Tours}></Tours>
    </div>
  )
}

export default App
