import reactLogo from '../assets/react.svg';
import '../components/ComponentsCard.css'

export default function ComponentsCard(props){

    return(
        <div className="c-card">
            <h3>{props.title}</h3>
            <h5>{props.description}</h5>
            <img src={reactLogo} alt="" />
        </div>
        

    )

}