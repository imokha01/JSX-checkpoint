import data from "../public/product.json"
import Card from "./components/Card"

const CardList = () => {
    const 
  return (
    <div>
      <div>
        {
         data.map(item => <Card key={item.name} {...item}/>)
        }
      </div>
    </div>
  )
}

export default CardList
