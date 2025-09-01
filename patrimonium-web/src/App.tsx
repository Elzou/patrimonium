import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import Workshop from './pages/Workshop';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className={"text-3xl font-bold underline"}>Patrimonium</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          App count is {count}
        </button>

          <Workshop />
      </div>
    </>
  )
}

export default App
