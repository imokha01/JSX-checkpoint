import { useState } from "react"
import products from "../product"

const Dscription = () => {
    const [data, setData] = useState(products);
    
  return (
    <div>
        {products.map((index) => (
            <h1 className="text-white" key={data[index]}>{data[index].description}</h1>
        ) )}
    </div>
  )
}

export default Description
