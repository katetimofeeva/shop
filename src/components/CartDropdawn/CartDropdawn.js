import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'

import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem'

import './CartDropdawn.scss'

const CartDropdawn = () => {
    const { cartItem } = useContext(CartContext)
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/checkout')
    }
    return (
        <>
            <div className="cart-dropdown-container">
                {cartItem.length ? (
                    <div className="cart-items ">
                        {cartItem.map((item) => {
                            return <CartItem item={item} />
                        })}
                    </div>
                ) : (
                    <span className="empty-message ">You cart empty</span>
                )}

                <Button onClick={handleClick}>go to checkout</Button>
            </div>
        </>
    )
}

export default CartDropdawn
