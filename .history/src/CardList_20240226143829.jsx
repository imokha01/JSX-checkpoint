import { useState } from "react"
import products from "./product"

const CardList = () => {
    const [data] = useState(products)
  return (
    <div>
      <div>
        {
        data.map(())
        }
        <img src={products.imageURL} alt="" />
      </div>
    </div>
  )
}

export default CardList
