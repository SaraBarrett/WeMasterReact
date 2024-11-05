import {useState} from 'react';

export default function Discount (){

    const[price, setPrice] = useState(100);

    function applyDiscount(){
        setPrice(75);
    }

    return (
        <div>
            <p data-testid="price">{price}€</p>
            <button onClick={applyDiscount}>Apply Discount</button>
        </div>
    );
}