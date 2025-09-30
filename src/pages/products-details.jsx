import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductsDetails() {
    const { category } = useParams()
    return (
        <div>
            Este es un producto que pertenece a la categoría: {category}
        </div>
    )
}
