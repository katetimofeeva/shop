import { createContext, useState, useEffect } from 'react'

import SHOP_DATA from '../data'
import {
    addCollectionAndDocuments,
    getCategoriesAndDocuments,
} from '../utils/firebase/Firebase'
export const ProductContext = createContext({
    products: [],
})

export const ProductProvider = ({ children }) => {
    const [products] = useState([])
    const value = { products }
    // закоментировала так как добавила категории в базу
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // })

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments('categories')
            console.log(categoryMap, 'categoryMap');
        }
        getCategoriesMap()
    }, [])
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}
