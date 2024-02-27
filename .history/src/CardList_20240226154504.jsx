import { useState } from "react"
import products from "../"
import Card from "./components/Card"

const CardList = () => {
    const data = products
  return (
    <div>
      <div>
        {
        data.map((item) => (
            <Card key={item.name} {...item}/>
        ))
        }
      </div>
    </div>
  )
}

export default CardList
