import { useState } from "react"
import products from "../product"

const D = () => {
    const [data, setData] = useState(products);
    console.log(products[0].name)
  return (
    <div>
        {products.map(() => (
            <h1 className="text-white" key={data.discription}>{data[0].name}</h1>
        ) )}
    </div>
  )
}

export default D
