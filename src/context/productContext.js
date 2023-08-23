import { createContext, useState } from 'react'

import productsData from '../data.json'

export const ProductContext = createContext({
    products: [],
})

export const ProductProvider = ({ children }) => {
    const [products] = useState(productsData)
    const value = { products }
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}
