import { useState } from 'react'
import '@/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>{count}</div>
      <div>
        <button
          onClick={(e) => {
            setCount(count + 1)
          }}
        ></button>
      </div>
    </>
  )
}

export default App
