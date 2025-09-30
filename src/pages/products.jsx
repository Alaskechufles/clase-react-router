import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CocktailCard from '../components/cocktail-card'

const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
const getCocktails = async () => {
    try {
        const { data } = await axios.get(url)
        return data
    } catch (error) {
        throw error
    }
}
export default function Products() {
    const [cocktails, setCocktails] = useState([])
    useEffect(() => {
        getCocktails()
            .then(res => setCocktails(res.drinks))
            .catch(err => console.error(err.message))
    }, [])
    
    return (
        < >
            <h1 className='text-center'>Mis Productos</h1>

            <div className='grid cocktail-grid w-full gap-4 justify-center py-8' >
                {
                    cocktails &&
                    cocktails.map((cocktail) => {
                       return <CocktailCard 
                                cocktail={cocktail}
                                key={cocktail.idDrink}
                       />
                    })
                }
            </div>

        </>
    )
}
