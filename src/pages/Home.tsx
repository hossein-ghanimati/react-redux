import { useCallback } from "react"
import "../assets/styles/counter.css"
import counterStore from "@/assets/redux/counter/counterStore"
import { decrementCreator, incrementCreator, resetCreator } from "@/assets/redux/counter/counterActionsCreator"

const Home = () => {

  const reset = useCallback(() => 
    counterStore.dispatch(resetCreator())
  , [])
  const increment = useCallback(() => 
    counterStore.dispatch(incrementCreator())
  , [])
  const decrement = useCallback(() => 
    counterStore.dispatch(decrementCreator())
  , [])

  return (
    <div className="container">
      <h1 id="num">{counterStore.getState()}</h1>
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