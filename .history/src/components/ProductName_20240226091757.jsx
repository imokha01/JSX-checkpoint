import { useState } from "react"
import products from "../product"

const ProductName = () => {
    const [data, setData] = useState(products);
    const 
    console.log(products[0].name)
  return (
    <div>
        {products.map((index) => (
            <h1 key={products[index].name}>{}</h1>
        ) )}
    </div>
  )
}

export default ProductName
