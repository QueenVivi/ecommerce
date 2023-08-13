import Stripe from 'stripe'

const stripe = new Stripe(process.env.REACT_APP_API_KEY)

const { data: productsData } = await stripe.products.list({
  limit: 10,
})

const { data: pricesData } = await stripe.prices.list({
  limit: 10,
})

export const getAllProducts = () => productsData.map((productData) => {
  const {
    id,
    name,
    description,
    default_price,
    images,
    metadata,
  } = productData

  const { unit_amount } = pricesData.find((priceData) => priceData.id === default_price)

  const price = unit_amount / 100

  return {
    id,
    name,
    price,
    description,
    images,
    metadata,
  }
})

export const getProductById = async (productId) => {
  const { 
    id,
    name,
    description,
    default_price,
    images,
    metadata
  } = await stripe.products.retrieve(productId)

  const { unit_amount } = pricesData.find((priceData) => priceData.id === default_price)

  const price = unit_amount / 100

  return {
    id,
    name,
    description,
    price,
    images,
    metadata
  }
}
