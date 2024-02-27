import { useState } from "react"
import products from "../product"

const Discription = () => {
    const [data, setData] = useState(products);
    console.log(products[0].description)
  return (
    <div>
        {products.map((index) => (
            <h1 className="text-white" key={data[index]}>{data[0].description}</h1>
        ) )}
    </div>
  )
}

export default Discription
