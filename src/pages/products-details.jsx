import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
const getCocktail = async (url) => {
    try {
        const { data } = await axios.get(url)
        return data
    } catch (error) {
        throw error
    }
}
export default function ProductsDetails() {
    const [cocktail, setCocktail] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getCocktail(baseUrl + id)
            .then(res => setCocktail(res.drinks[0]))
            .catch(err => console.error(err.message))
    }, [id]) 

    return (
        <div>
            <div className='aspect-square w-70'> 
                <img src={cocktail.strDrinkThumb} alt=""  className='w-full h-full object-cover'/>
                <h3>{cocktail.strDrink}</h3>
            </div>
        </div>
    )
}
