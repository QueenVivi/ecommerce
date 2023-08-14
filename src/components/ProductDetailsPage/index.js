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
      <article>
        Loading…
      </article>
    )
  }

  return (
    <article className="grid md:grid-flow-col gap-8">
      <img alt={product.name} src={product.images?.[0]} />
      <section>
        <h1>
          <span className="text-2xl font-bold mb-2">{product.name}</span>
          <span className="ml-2 px-2 py-1 rounded bg-gray-200 text-xs text-gray-800 capitalize">
            {product.metadata.category}
          </span>
        </h1>
        <p className="text-xl my-2">{formatPrice(product.price)}</p>
        <button className="my-4 bg-purple-700 rounded px-4 py-2 font-medium text-white">Add to cart</button>
        <hr className="my-8" />
        <p className="my-4">{product.description}</p>
      </section>
    </article>
  )
}

export default ProductDetailsPage
