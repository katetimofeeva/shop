import { useContext } from 'react'

import { ReactComponent as ShoppingIcon } from '../../logo/shopping-bag.svg'
import { CartContext } from '../../context/cartContext'
import './CartIcon.scss'

const CardIcon = () => {
    const {isShoppingCart, setIsShoppingCart, countItems} = useContext(CartContext)
    const handleToggle = () => {
        setIsShoppingCart(()=>!isShoppingCart)
    }
    return (
        <div className='cart-icon-container' onClick={handleToggle}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count '>{countItems}</span>
        </div>
    )
}

export default CardIcon
