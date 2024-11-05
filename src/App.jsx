import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import MainGoal from './components/MainGoal'
import CourseGoal from './components/CourseGoal'
import Card from './components/Card'
import users from './data/users'
import goals from './data/goals'
import TabButton from './components/TabButton'
import LoginUser from './components/LoginUser'
import Discount from './components/Discount'
import { EXAMPLES } from './data/coreConcepts'
import Delete from './components/Delete'

let myName = 'Sara';
// let loginName = null;

// if(myName){
//   loginName = myName;
// }else{
//   loginName = 'este user não tem nome';
// }

//operador ternário
let loginName = myName ? myName : 'este user não tem nome';
console.log(loginName)

function getRandomInt(max){
  return Math.floor(Math.random() * (max+1));
}
function App() {
  let login = false;
  const[content, setContent] = useState();

  function handleSelected(selectedButton){
    //o codigo que eu quiser

    setContent(selectedButton);

  }

  return (
    <>
      <div>
        <Header/>
        
        <MainGoal 
          myText={goals.objectives.first}
        />
        
        <MainGoal myText={goals.objectives.second}/>
        
        <MainGoal myText={goals.objectives.third}/>

        <MainGoal myText='não odiar css'/>


        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React .logo" />
        </a>
      </div>
      <CourseGoal title='JS'/>
      <Card 
      name='Justino' 
      surname= 'Oliveira'
      job='segurança'
      />
      <br />
      <Card
      name={users.managerData.firstName}
      surname={users.managerData.lastName}
      job={users.managerData.title}
      />
            <br />
      <Card
       name={users.userDatafirstName}
       surname={users.userData.lastName}
       job={users.userData.title}
       />
       <br/>
      
     <TabButton isActive={content == 'jsx'} onSelectBtn={()=> handleSelected('jsx')}>Matéria JSX</TabButton>
     <TabButton isActive={content == 'props'} onSelectBtn={()=> handleSelected('props')}>Matéria Props</TabButton>
     <TabButton  isActive={content == 'state'} onSelectBtn={()=> handleSelected('state')}>Matéria State</TabButton>
    {/* div de conteúdo dinâmico */}
    {/*!content ? (<p>Pf Clica num Tema</p>) :
    <div id='tab-content'>
      <h3>{EXAMPLES[content].title}</h3>
      <p>{EXAMPLES[content].description}</p>
      <pre>
        <code>{EXAMPLES[content].code}</code>
      </pre>
    </div>*/}

    {content && (<div id='tab-content'>
      <h3>{EXAMPLES[content].title}</h3>
      <p>{EXAMPLES[content].description}</p>
      <pre>
        <code>{EXAMPLES[content].code}</code>
      </pre>
    </div>)}
    {/* .div de conteúdo dinâmico */}
    <LoginUser/>
    
    <Discount/>
    
    <hr />

<Delete/>
    </>
  )
}

export default App
