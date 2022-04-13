function Cart(props) {
    const {quantity = 0} = props;

    return <div className="cart #607d8b blue-grey">
        <i className="material-icons">shopping_cart</i>
        {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
}

export { Cart }