import { useState } from 'react'
import '@/App.css'

function ButtonComponent({ className, onCLick, children }) {
  return (
    <>
      <button className={className} onClick={onCLick}>
        {children}
      </button>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>{count}</div>
      <div>
        <ButtonComponent
          className='increase-button'
          onCLick={() => setCount((previousCount) => previousCount + 1)}
        >
          증가
        </ButtonComponent>

        <ButtonComponent
          className={'deacrese-button'}
          onCLick={() => setCount((previousCount) => previousCount - 1)}
        >
          감소
        </ButtonComponent>
      </div>
    </>
  )
}

export default App
