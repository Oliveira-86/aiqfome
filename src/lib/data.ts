import productsData from "./data.json"
import { Restaurant } from "./types"

interface ProductsData {
  restaurants: Restaurant[]
}

const typedProductsData = productsData as ProductsData

export function getRestaurants(): Restaurant[] {
  return typedProductsData.restaurants
}
