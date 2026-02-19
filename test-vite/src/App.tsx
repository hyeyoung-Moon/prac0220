import { useState} from 'react'
import reactLogo from './assets/discord.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 타입 한 줄: "title은 문자열로 넘겨주세요"
type AppProps = { title?: string }

function App({ title = 'Vite + React' }: AppProps) {
  const [count, setCount] = useState(0)
  // 연습: useState 하나 더 — "좋아요" 개수
  const [likes, setLikes] = useState(10)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="discord logo" />
        </a>
      </div>
      <h1>{title}</h1>
      <div className="card">
        <p className="count-text">방문자 숫자: {count}</p>
        <div className="button-row">
          <span className="button-label">count</span>
          <button onClick={() => {
            console.log('+ 버튼 클릭됨!')
            setCount((count) => count + 1)}}>+</button>
          <button onClick={() => {
            console.log('- 버튼 클릭됨!')
            setCount((count) => Math.max(0, count - 1))}}>-</button>
        </div>
        <div className="button-row">
          <button onClick={() => setCount(0)}>reset</button>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      {/* useState 연습: 좋아요 개수 */}
      <div className="card">
        <h2 className="card-title">연습 — 좋아요</h2>
        <p className="card-text">좋아요 수: {likes}</p>
        <button
          onClick={() => {
            setLikes((likes) => likes + 1)
            console.log('👍 좋아요 클릭!')
          }}
        >
          👍 누르기
        </button>
      </div>

      <div className="card">
        <h2 className="card-title">오늘의 요약</h2>
        <p className="card-text">
          방문자 수는 카운터로 관리되고 있으며, 버튼을 눌러 값을 변경할 수 있습니다.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
