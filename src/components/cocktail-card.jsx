import React from 'react'
import { Link } from 'react-router-dom'

export default function CocktailCard({ cocktail }) {
 
    return (
        <Link className='w-full h-70 bg-black block' to={`/product-details/${cocktail.idDrink}`}>
            <img
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
                className='h-full w-full object-cover'
                loading='lazy'
            />
        </Link>
    )
}
