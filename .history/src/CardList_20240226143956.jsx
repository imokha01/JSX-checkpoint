import { useState } from "react"
import products from "./product"

const CardList = () => {
    const [data] = useState(products)
  return (
    <div>
      <div>
        {
        data.map((item, index) => {
            <div key={index}>
                <img src={products.imageURL} alt="" />

            </div>
        })
        }
      </div>
    </div>
  )
}

export default CardList
