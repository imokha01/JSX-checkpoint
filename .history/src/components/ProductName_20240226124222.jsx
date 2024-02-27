import { useState } from "react"
import products from "../product"

const ProductName = () => {
    const [data] = useState(products);
    console.log(products[0].name)
  return (
    <div>
        {products.map((index) => (
            <h1 className="text-white" key={data[index]}>{data[index].name}</h1>
            {console.log(data[index].name)}
        ) )}
    </div>
  )
}

export default ProductName
