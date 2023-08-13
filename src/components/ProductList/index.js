import Stripe from "stripe"

const stripe = new Stripe(process.env.REACT_APP_API_KEY)

const products = await stripe.products.list({
  limit: 10,
})

const ProductList = () => {
  const { data: productsData } = products
  console.log(productsData)
  return (
    <ol>
      {productsData.map((product) => {
        const { id, images, name, description, price, metadata } = product
        return (
          <li key={id}>{name}</li>
        )
      })}
    </ol>
  )
}

export default ProductList 
