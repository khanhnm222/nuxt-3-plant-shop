export default () => {
  const config = useRuntimeConfig()
  const uri = config.public.baseURL

  // Get Method
  const get = async (endpoint: string) => {
    await useFetch(`${uri}${endpoint}`)
  }

  // Get All Products
  const getProducts = async<T> (paginationStart?: number, paginationLimit?: number) => {
    let query = `/api/products?populate=*`
    if (paginationStart && paginationLimit) {
      query = `/api/products?pagination[start]=${paginationStart}&pagination[limit]=${paginationLimit}&populate=*`
    }

    return get(query)
  }

  // Get Product By Id
  const getProduct = async<T> (id: string) => {
    let query = `/api/products/${parseInt(id)}?populate=*`
    return get(query)
  }

  return {
    get,
    getProducts,
    getProduct
  }
}