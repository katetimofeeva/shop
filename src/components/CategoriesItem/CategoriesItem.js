import React from 'react';
import './CategoriesItem.scss'

const CategoriesItem = ({title, imageUrl}) => {
    return (
        <div  className='category-container'>
            
            <div className='background-image' style={{'backgroundImage':`url(${imageUrl})`}}/>
            <div className = 'category-body-container'>
            <h2>{title}</h2>
            <p>Shop now</p>
            </div>
        </div>

    );
};

export default CategoriesItem;