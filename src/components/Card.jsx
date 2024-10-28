
function Card({name, surname, job = 'programador', courseName = 'FE'}){
    return(
      <div className="card">
      <p>{name} e o apelido é {surname}</p>
      <p>A profissão é {job}</p>
      {/* <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p> */}
        <p>{courseName}</p>
    </div>
    )
  };
  

  export default Card