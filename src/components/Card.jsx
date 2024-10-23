
function Card(props){
    return(
      <div className="card">
      <p>{props.name} e o apelido é {props.surname}</p>
      <p>A profissão é {props.job}</p>
      {/* <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p> */}
        <p>{props.courseName}</p>
    </div>
    )
  };
  

  export default Card