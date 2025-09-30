import CocktailCard from '../components/cocktail-card'
import useData from '../hooks/useData'

const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
 
export default function Products() {
     const {data} = useData(url) 
    return (
        < >
            <h1 className='text-center'>Mis Productos</h1>

            <div className='grid cocktail-grid w-full gap-4 justify-center py-8' >
                {
                    data &&
                    data.drinks.map((cocktail) => {
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
