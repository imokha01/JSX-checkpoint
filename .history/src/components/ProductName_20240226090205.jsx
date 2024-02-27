import { useState } from "react"
import product from "../product"

const ProductName = () => {
    const [data, setData] = useState(product.product)
    console.log(product.name)
  return (
    <div>
      
    </div>
  )
}

export default ProductName
