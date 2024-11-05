import './TabButton.css'


export default function TabButton({children, onSelectBtn, isActive}){
    return (<button onClick={onSelectBtn} className={isActive? 'active': 'my-btn' }>{children}</button>);
}