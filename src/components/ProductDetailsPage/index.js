import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { getProductById } from "../../lib/client"
import formatPrice from '../../lib/formatPrice'

const ProductDetailsPage = () => {
  const [ product, setProduct ] = useState(null)
  
  const { id } = useParams()

  useEffect(() => {
    const fetchProductData = async () => {
      const product = await getProductById(id)

      setProduct(product)
    }

    fetchProductData()
  }, [id])


  if (!product) {
    return (
      <main>
        Loading…
      </main>
    )
  }

  return (
    <main>
      <img alt={product.name} src={product.images?.[0]} />
      <h1>{product.name}</h1>
      <p>{formatPrice(product.price)}</p>
      <p>{product.description}</p>
      <p>{product.metadata.category}</p>
    </main>
  )
}

export default ProductDetailsPage
