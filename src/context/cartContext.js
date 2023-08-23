import { createContext, useState } from 'react'

const addCartItem = (cartItems, productToAdd) => {
    const existCart = cartItems.find(
        (element) => element.id === productToAdd.id
    )

    if (existCart) {
        return cartItems.map((item) =>
            item.id === productToAdd.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        )
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }]
}
export const CartContext = createContext({
    isShoppingCart: false,
    setIsShoppingCart: () => {},
    cartItem: [],
    setCartItem: ()=>{},
    addCartItem: () => {},
    countItems: 0,
    checkout: false,
})

export const CartProvider = ({ children }) => {
    const [isShoppingCart, setIsShoppingCart] = useState(false)
    const [cartItem, setCartItem] = useState([])
    const [countItems, setCountItems] = useState(0)
    const addItemToCart = (product) => {
        setCartItem(addCartItem(cartItem, product))
    }

    const value = {
        isShoppingCart,
        setIsShoppingCart,
        addItemToCart,
        cartItem,
        countItems,
        setCountItems,
        // checkout,
        // setCheckout,
        setCartItem
    }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
