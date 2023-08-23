import React from 'react'

import './CartItem.scss'

const CartItem = ({ item }) => {
    return (
        <div className="cart-item-container">
            <img src={item.imageUrl} alt={item.name} />
            <div className="item-details">
                <h2 className="name">{item.name}</h2>
                <span className="price">
                    {item.quantity} x ${item.price}
                </span>
            </div>
        </div>
    )
}

export default CartItem
