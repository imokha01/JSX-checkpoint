import { useState } from "react"
import products from "../product"

const ProductName = () => {
    const [data, setData] = useState(products)
    console.log(products[].name)
  return (
    <div>
      
    </div>
  )
}

export default ProductName
