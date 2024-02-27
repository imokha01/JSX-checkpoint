import data from "../../public/product.json"
import Card from "./Card"

const CardList = () => {
    const prod = data.products;

  return (
    <div>
      <div>
        {
         prod.map(item => <Card key={item.name} {...item}/>)
        }
      </div>
      <div>
        <Card
      </div>
    </div>
  )
}

export default CardList
