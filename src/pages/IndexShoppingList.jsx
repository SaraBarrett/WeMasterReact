import ShoppingList from "../components/ShoppingList"
import { SHOPING_LIST } from "../data/shoppingList"

export default function IndexShoppingList(){
    return(
    <div>
        <h5>Lista de Compras</h5>
        {SHOPING_LIST.map((product) =>
        <ShoppingList
        key = {product.item}
        {...product}
        />
        )}
    </div>)
}