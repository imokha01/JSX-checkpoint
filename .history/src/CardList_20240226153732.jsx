import { useState } from "react"
import products from "./product"
import Card from "./components/Card"

const CardList = () => {
    const [data] = useState(products)
  return (
    <div>
      <div>
        {
        data.map((item) => (
            <Card />
        ))
        }
      </div>
    </div>
  )
}

export default CardList
