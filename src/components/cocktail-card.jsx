import React from 'react'

export default function CocktailCard({ cocktail }) {
    return (
        <div className='w-full h-70 bg-black'>
            <img
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
                className='h-full w-full object-cover'
                loading='lazy'
            />
        </div>
    )
}
