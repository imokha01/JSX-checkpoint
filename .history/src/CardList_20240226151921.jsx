import { useState } from "react"
import products from "./product"

const CardList = ({name, price, discription, design, display, audio} ) => {
    const [data] = useState(products)
  return (
    <div>
      <div>
        {
        data.map((item, ) => {
    
        })
        }
      </div>
    </div>
  )
}

export default CardList
