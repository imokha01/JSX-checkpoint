import { useState } from "react"
import products from "../product"

const ProductName = () => {
    const [data] = useState(products);
    console.log(products[0].name)
  return (
    <div>
        {products.map(() => (
            <h1 className="text-white" key={data.name}>{data.name}</h1>
        ) )}
    </div>
  )
}

export default ProductName
