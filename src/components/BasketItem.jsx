function BasketItem(props) {

    const {id, name, price, quantity, removeFromBasket, incQuontity , decQuontity} = props;

    return <li className="collection-item">
        {name} <i className="material-icons basket-quantity" onClick={() => decQuontity(id)}>remove</i> X{quantity} <i className="material-icons basket-quantity" onClick={() => incQuontity(id)}>add</i> = {price * quantity} руб <span className="secondary-content" onClick={() => removeFromBasket(id)}><i className="material-icons basket-delete">close</i></span>
    </li>
}
export { BasketItem };