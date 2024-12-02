import { useCallback, useState } from "react"
import "../assets/styles/counter.css"

const Home = () => {
  const [count, setCount] = useState(0)

  const reset = useCallback(() => setCount(0), [])
  const increment = useCallback(() => setCount(count => count + 1), [])
  const decrement = useCallback(() => setCount(count => count - 1), [])

  return (
    <div className="container">
      <h1 id="num">{count}</h1>
      <div className="btns">
        <button className="dec" onClick={decrement}>
          <i className="fas fa-minus"></i>
        </button>
        <button className="reset" onClick={reset}>
          <i className="fas fa-redo"></i>
        </button>
        <button className="inc" onClick={increment}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  )
}

export default Home