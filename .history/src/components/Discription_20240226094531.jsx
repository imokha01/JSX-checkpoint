import { useState } from "react"
import products from "../product"

const Discription = () => {
    const [data, setData] = useState(products);
    console.log(products[0].name)
  return (
    <div>
        {products.map(() => (
            <h1 className="text-white" key={data.na}>{data[0].discription}</h1>
        ) )}
    </div>
  )
}

export default Discription
