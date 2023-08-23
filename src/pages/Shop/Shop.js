import React, { useContext } from 'react'

import { ProductContext } from '../../context/productContext'

import ProductCard from '../../components/ProductCard/ProductCard'

import './Shop.scss'

const Shop = () => {
    const { products } = useContext(ProductContext)
    return (
        <div className="wrapper">
            {products.map((product) => {
                return <ProductCard key={product.id} product={product} />
            })}
        </div>
    )
}

export default Shop
