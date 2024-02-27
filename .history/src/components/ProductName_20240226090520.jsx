import { useState } from "react"
import products from "../products"

const ProductName = () => {
    const [data, setData] = useState(products.product)
    console.log(products.name)
  return (
    <div>
      
    </div>
  )
}

export default ProductName
