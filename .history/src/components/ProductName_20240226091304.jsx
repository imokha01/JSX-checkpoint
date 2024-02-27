import { useState } from "react"
import products from "../product"

const ProductName = () => {
    const [data, setData] = useState(products);
    const [index, setIndex] = useState(0);
    console.log(products[0].name)
  return (
    <div>
        {products.map(() => )}</h1>
    </div>
  )
}

export default ProductName
