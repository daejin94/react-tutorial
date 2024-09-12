import { useState } from 'react'
import '@/App.css'

function IncreaseButtonComponent({ count, setCount }) {
  return (
    <button
      className='increase-button'
      onClick={() => {
        setCount(count + 1)
      }}
    >
      증가
    </button>
  )
}

function DecreaseButtonComponent({ setCount }) {
  return (
    <button
      className='increase-button'
      onClick={() => {
        setCount((previousCount) => previousCount - 1)
        // setCount(previousCount - 1)
        // setCount(previousCount - 1)
        // setCount(previousCount - 1)
        // setCount(previousCount - 1)
        // setCount(previousCount - 1)
        // setCount(previousCount - 1)
        // setCount(previousCount - 1)
        // setCount(previousCount - 1)
        // // 100 -1

        // setCount((previousCount) => previousCount - 1)
        // setCount((previousCount) => previousCount - 1)
        // setCount((previousCount) => previousCount - 1)
        // setCount((previousCount) => previousCount - 1)
        // setCount((previousCount) => previousCount - 1)
        // setCount((previousCount) => previousCount - 1)
        // setCount((previousCount) => previousCount - 1)
        // setCount((previousCount) => previousCount - 1)
        // setCount((previousCount) => previousCount - 1)
        // // 100-1) -1 ) -1) -1)
      }}
    >
      감소
    </button>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>{count}</div>
      <div>
        <IncreaseButtonComponent count={count} setCount={setCount} />
        <DecreaseButtonComponent setCount={setCount} />
      </div>
    </>
  )
}

export default App
