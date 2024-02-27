import { useState } from "react"
import products from "./product"

const CardList = ({name, price} ) => {
    const [data] = useState(products)
  return (
    <div>
      <div>
        {
        data.map((it) => {
            <div key={index}>
                <img src={data.imageURL} alt="" />

            </div>
        })
        }
      </div>
    </div>
  )
}

export default CardList
