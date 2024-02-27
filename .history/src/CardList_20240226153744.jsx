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
            <Card key={item.name}/>
        ))
        }
      </div>
    </div>
  )
}

export default CardList
