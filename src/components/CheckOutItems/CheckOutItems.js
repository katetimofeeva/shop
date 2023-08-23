import React from 'react'
import { FaAngleLeft, FaAngleRight, FaTrashAlt } from 'react-icons/fa'
import { useContext } from 'react'

import { CartContext } from '../../context/cartContext'

import { totalQuantity } from '../../utils/firebase/countTotalquantity'
import './CheckOutItems.scss'

const CheckOutItems = ({item}) => {
    const { cartItem, setCartItem, setCountItems } = useContext(CartContext)
    const handleLeft = (id) => {
        const selectedItem = cartItem.map((item) => {
            return item.id === id
                ? {
                      ...item,
                      quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                  }
                : item
        })
        const updatedItemsWithoutZeroQuantity = selectedItem.filter(
            (item) => item.quantity > 0
        )

        setCartItem(updatedItemsWithoutZeroQuantity)

        totalQuantity(updatedItemsWithoutZeroQuantity, setCountItems)
    }

    const handleRight = (id) => {
        const selectedItem = cartItem.map((item) => {
            return item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        })
        setCartItem(selectedItem)

        totalQuantity(selectedItem, setCountItems)
    }

    const handleRemove = (id) => {
        const selectedItem = cartItem.filter((item) => {
            return item.id !== id
        })
        setCartItem(selectedItem)

        totalQuantity(selectedItem, setCountItems)
    }
    return (
        <div className="cartContainer mt">
            <div className="photo">
                <img src={item.imageUrl} alt={item.name} />
            </div>
            <div className="wrapperBtn">
                <span>{item.name} </span>
            </div>
            <div className="wrapperBtn">
                <FaAngleLeft className='cursor' onClick={() => handleLeft(item.id)} />
                <p>{item.quantity}</p>
                <FaAngleRight  className='cursor'onClick={() => handleRight(item.id)} />
            </div>
            {/* <div>{item.price}</div> */}
            <div>{item.quantity * item.price}</div>
            <FaTrashAlt  className='cursor' onClick={() => handleRemove(item.id)} />
            
        </div>
    )
}

export default CheckOutItems
