import { useState } from 'react'
import '@/App.css'

function App() {
  const [age, setAge] = useState(0)
  const [vaild, setValid] = useState(false) /* 성년 여부 */

  function handleInput(event) {
    const changed = event.currentTarget.value
    setAge(changed)
    setValid(changed >= 19)
  }

  return (
    <>
      <input type='number' value={age} onChange={handleInput} />
      {vaild ? <div>성년입니다.</div> : <div style={{ color: 'red' }}>미성년입니다.</div>}
    </>
  )
}

export default App
