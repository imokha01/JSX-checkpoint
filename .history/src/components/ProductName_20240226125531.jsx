import { useState } from "react"
import products from "../product"

const ProductName = () => {
    const [data] = useState(products);
    console.log(products);
    
  return (
    <div>
        {products.map((item, index) => (
            <h1 className="text-white" key={index}>{.name}</h1>
        ))}
    </div>
  )
}

export default ProductName
