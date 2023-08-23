import { useContext, useEffect } from 'react'

import { CartContext } from '../../context/cartContext'
import CheckOutItems from '../CheckOutItems/CheckOutItems'

import './CheckOut.scss'

const CheckOut = () => {
    const { cartItem, setIsShoppingCart} =
        useContext(CartContext)

    useEffect(() => {
        setIsShoppingCart(false)
    }, [setIsShoppingCart])

   

    const countTotalAmount = () => {
        return cartItem
            .map((el) => {
                return el.quantity * el.price
            })
            .reduce((ac, cur) => {
                return ac + cur
            }, 0)
    }
    return (
        <div>
            <div className="checkout-header ">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItem.map((item) => {
                return (
                    <CheckOutItems key ={item.id} item={item}/>
                )
            })}
            <span className="total">Total: ${countTotalAmount()}</span>
        </div>
    )
}

export default CheckOut
