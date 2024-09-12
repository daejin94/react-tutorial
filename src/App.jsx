import { useState } from 'react'
import '@/App.css'

function App() {
  const [level, setLevel] = useState(1)
  const [title, setTitle] = useState('Novice')

  const levelup_not_working = () => {
    console.log('이전 상태: ', level)
    setLevel((previous) => {
      return previous + 1
    })

    setLevel(level + 1)

    if (level >= 30) {
      setTitle('2차 전직')
    } else if (level >= 15) {
      setTitle('1차 전직')
    }
  }

  return (
    <>
      <div>{level}</div>
      <div>{title}</div>
      <div>
        <button onClick={levelup_not_working}></button>
      </div>
    </>
  )
}

export default App
