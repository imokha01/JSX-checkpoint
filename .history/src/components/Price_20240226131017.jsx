import { useState } from "react"
import products from "../product"

const Price = () => {
    const [data] = useState(products);
    console.log(products);
    
  return (
    <div>
        {products.map((item, index) => (
            <h1 className="text-white" key={index}>{item.price}</h1>
        ))}
    </div>
  )
}

export default Price
