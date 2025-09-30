import { useParams } from 'react-router-dom'
import useData from '../hooks/useData'
const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

export default function ProductsDetails() {
    const { id } = useParams()
    const {data} = useData(baseUrl + id) 

    return (
        <div>
            <div className='aspect-square w-70'> 
                <img src={data?.drinks?.[0]?.strDrinkThumb} alt=""  className='w-full h-full object-cover'/>
                <h3>{data?.drinks?.[0]?.strDrink}</h3>
            </div>
        </div>
    )
}
