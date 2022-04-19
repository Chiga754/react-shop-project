function BasketItem(props) {

    const {id, name, price, quantity, removeFromBasket} = props;

    return <li className="collection-item">
        {name} X{quantity} = {price * quantity} руб <span className="secondary-content" onClick={() => removeFromBasket(id)}><i className="material-icons basket-delete">close</i></span>
    </li>
}
export { BasketItem };