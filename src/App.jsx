import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const goals = ['O meu objectivo é aprender React e construir Apps incríveis!', 'O meu objectivo é aprender SQL e construir Apps incríveis!', 'O meu objectivo é aprender JS e construir Apps incríveis!'];

const userData = {
  firstName: 'Sara',
  lastName: 'Monteiro',
  title: 'Web Developer'
};


function getRandomInt(max){
  return Math.floor(Math.random() * (max+1));
}

function MainGoal(){
  let myText =goals[getRandomInt(2)] ;

  return(
    <div>
      <p>{myText}</p>
    </div>
  );
}

function Header(){
  return (
    <header>
      <img src={reactLogo} alt="" />
      <h4>Aprendendo React!</h4>
    </header>
  );
}

function Card(data){
  return(
    <div className="card">
    <p>{userData.firstName} e o apelido é {userData.lastName}</p>
    <p>A profissão é {userData.title}</p>
    {/* <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
    <p>
      Edit <code>src/App.jsx</code> and save to test HMR
    </p> */}
  </div>
  )
};


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
        <MainGoal/>
        
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Front End Developer: React</h1>

      <Card />
      <Card/>
      <Card/>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
