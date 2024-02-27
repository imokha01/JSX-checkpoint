import { useState } from "react"
import products from "./product"

const CardList = () => {
    const [data] = useState(products)
  return (
    <div>
      <div>
        {
        data.map((item) => (
            
        ))
        }
      </div>
    </div>
  )
}

export default CardList
