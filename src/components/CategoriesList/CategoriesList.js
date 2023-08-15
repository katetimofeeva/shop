import React from 'react';
import CategoriesItem from '../CategoriesItem/CategoriesItem'
import './CategoriesList.scss'

const CategoriesList = ({categories}) => {
    return (
        <div className ='categories-container'>
            {categories.map(({title, id, imageUrl}) => {
                return (
                <CategoriesItem key ={id} title={title} imageUrl={imageUrl} />
                )
            })}
        </div>
    );
};

export default CategoriesList;