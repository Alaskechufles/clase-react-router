import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

const getCocktail = async (url) => {
    const { data } = await axios.get(url)
    return data
}

export default function ProductsDetails() {
    const [cocktail, setCocktail] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const fetchCocktail = async () => {
            try {
                setLoading(true)
                setError(null)
                const res = await getCocktail(baseUrl + id)
                
                if (res.drinks && res.drinks.length > 0) {
                    setCocktail(res.drinks[0])
                } else {
                    setError('Cocktail not found')
                }
            } catch (err) {
                setError(err.message)
                console.error(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchCocktail()
    }, [id]) 

    if (loading) return <div className="flex justify-center p-8">Loading...</div>
    if (error) return <div className="flex justify-center p-8 text-red-500">Error: {error}</div>
    if (!cocktail) return <div className="flex justify-center p-8">No cocktail found</div>

    return (
        <div className="container mx-auto p-4">
            <div className='aspect-square w-72 mx-auto'> 
                <img 
                    src={cocktail.strDrinkThumb} 
                    alt={cocktail.strDrink || "Cocktail image"}  
                    className='w-full h-full object-cover rounded-lg'
                />
                <h3 className="text-2xl font-bold mt-4 text-center">{cocktail.strDrink}</h3>
            </div>
        </div>
    )
}
