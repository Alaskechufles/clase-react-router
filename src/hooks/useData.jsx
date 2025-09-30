import axios from "axios";
import { useEffect, useState } from "react"


export default function useData(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getCocktails = async () => {
            try {
                const res = await axios.get(url)
                setData(res.data)
            } catch (error) {
                throw error
            }
        }
        getCocktails()
    }, [url])

    return {
        data
    }
}
