import './TabButton.css'

function hello(){
    alert('olá Mundo');
}

export default function TabButton({children}){
    return (<button onClick={hello} className="my-btn">{children}</button>);
}