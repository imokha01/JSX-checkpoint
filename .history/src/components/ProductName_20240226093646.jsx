import { useState } from "react"
import products from "../product"

const ProductName = () => {
    const [data, setData] = useState(products);
    const [index] = useState(0)
    console.log(products[0].name)
  return (
    <div>
        {products[index].map(() => (
            <h1 className="text-white" key={data.name}>{data[0].name}</h1>
        ) )}
    </div>
  )
}

export default ProductName
