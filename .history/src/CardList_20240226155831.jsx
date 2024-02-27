import products from "../public/product.json"
import Card from "./components/Card"

const CardList = () => {
  return (
    <div>
      <div>
        {
         products.map((item) => <Card key={item.name} {...item}/>))
        }
      </div>
    </div>
  )
}

export default CardList
