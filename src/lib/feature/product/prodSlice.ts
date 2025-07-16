import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface ProductDrink {
  id: string
  price: number
  title: string
}

export interface Product {
  id: string
  price: number
  name: string
  description: string
  image: string
  forks?: boolean
  size: string
  drinks?: ProductDrink[]
  accompaniments?: string[]
  extra?: string[]
}

interface ProductState {
  availableProducts: Product[]
}

const initialState: ProductState = {
  availableProducts: [],
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(
      state,
      action: PayloadAction<{ products: Product[] }>
    ) {
      state.availableProducts = action.payload.products
    },

    createProduct(state, action: PayloadAction<Product>) {
      const newProduct = action.payload
      state.availableProducts.push(newProduct)
    },

    updateProduct(
      state,
      action: PayloadAction<{
        pid: string
        data: {
          name: string
          image: string
          description: string
          forks?: boolean
          size: string
          drinks?: ProductDrink[]
          accompaniments?: string[]
          extra?: string[]
        }
      }>
    ) {
      const { pid, data } = action.payload

      const updateProductInList = (products: Product[]) => {
        const index = products.findIndex((prod) => prod.id === pid)
        if (index !== -1) {
          const existing = products[index]
          products[index] = {
            ...existing,
            name: data.name,
            image: data.image,
            description: data.description,
            forks: data.forks,
            size: data.size,
            drinks: data.drinks,
            accompaniments: data.accompaniments,
            extra: data.extra,
          }
        }
      }

      updateProductInList(state.availableProducts)
    },

    deleteProduct(state, action: PayloadAction<string>) {
      const pid = action.payload
      state.availableProducts = state.availableProducts.filter((p) => p.id !== pid)
    },
  },
})

export const {
  setProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = productsSlice.actions
export default productsSlice.reducer
