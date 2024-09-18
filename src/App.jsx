import { useState } from 'react'
import '@/App.css'

const ADULT = { vaild: true, entrance: 20000 }
const NON_ADULT = { vaild: false, entrance: 10000 }

function App() {
  const [age, setAge] = useState(0)
  const [calculate, setCaculate] = useState(NON_ADULT)

  return (
    <>
      <input
        type='number'
        value={age}
        onChange={(e) => {
          const changed = Number(e.currentTarget.value)
          // setAge(changed)
          // setValid(changed >= 19)
          // setEntrance(valid >= 19 ? FEE_ADULT : FEE_NON_ADULT)
          setAge(changed)
          setCaculate(changed >= 19 ? ADULT : NON_ADULT)
        }}
      />
      {calculate.vaild ? (
        <div> 성년입니다. </div>
      ) : (
        <div style={{ color: 'red' }}>미성년입니다.</div>
      )}
      <div>{`${calculate.entrance}원`}</div>
    </>
  )
}

export default App
