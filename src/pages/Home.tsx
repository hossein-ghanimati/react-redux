import "../assets/styles/counter.css"

const Home = () => {
  return (
    <div className="container">
      <h1 id="num">{0}</h1>
      <div className="btns">
        <button className="dec" onClick={() => {}}>
          <i className="fas fa-minus"></i>
        </button>
        <button className="reset" onClick={() => {}}>
          <i className="fas fa-redo"></i>
        </button>
        <button className="inc" onClick={() => {}}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  )
}

export default Home