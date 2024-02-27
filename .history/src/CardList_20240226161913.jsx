import data from "../public/product.json"
import Card from "./components/Card"
import products from "./product";

const CardList = () => {
    const prod =data;
    console.log(prod.products)
  return (
    <div>
      <div>
        {
         prod.map(item => <Card key={item.name} {...item}/>)
        }
      </div>
    </div>
  )
}

export default CardList
