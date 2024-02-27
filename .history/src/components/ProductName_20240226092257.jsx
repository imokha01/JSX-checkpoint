import { useState } from "react"
import products from "../product"

const ProductName = () => {
    const [data, setData] = useState(products);
    console.log(products[0].name)
  return (
    <div>
        {products.map((index) => (
            <h1 className="text-white" key={products[index].name}>{products[3].name}</h1>
        ) )}
    </div>
  )
}

export default ProductName
