import data from "../public/product.json"
import Card from "./components/Card"

const CardList = () => {
    const prod =data;
  return (
    <div>
      <div>
        {
         prod.map(item => <Card key={item.id} {...item}/>)
        }
      </div>
    </div>
  )
}

export default CardList
