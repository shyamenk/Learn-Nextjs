import {useRouter} from 'next/router'
const ProductDetails = () => {
  const router = useRouter()
  const productID = router.query.productId

  console.log(productID)

  return (
    <>
      <h1>ProductDetails of {productID}</h1>
    </>
  )
}

export default ProductDetails
