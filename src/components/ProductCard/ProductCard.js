import React, { useContext } from 'react'

import Button from '../Button/Button'

import { CartContext } from '../../context/cartContext'

import './ProductCard.scss'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product
    const { addItemToCart, setCountItems, cartItem } = useContext(CartContext)

    const totalQuantity = cartItem.reduce(
        (total, item) => total + item.quantity,
        0
    )
    setCountItems(totalQuantity)

    const handleClick = () => {
        addItemToCart(product)
    }

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType="inverted" onClick={handleClick}>
                Add to card
            </Button>
        </div>
    )
}

export default ProductCard
