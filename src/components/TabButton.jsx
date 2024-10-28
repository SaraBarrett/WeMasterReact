import './TabButton.css'


export default function TabButton({children, onSelectBtn}){
    return (<button onClick={onSelectBtn} className="my-btn">{children}</button>);
}