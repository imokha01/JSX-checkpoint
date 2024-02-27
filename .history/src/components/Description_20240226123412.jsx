import { useState } from "react"
import products from "../product"

const Description = () => {
    const [data, setData] = useState(products);
    console.log(products[0].description)
  return (
    <div>
        {products.map((product, index) => (
            <h1 className="text-white" key={data[index]}>{}...product}</h1>
        ) )}
    </div>
  )
}

export default Description
