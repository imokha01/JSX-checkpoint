import data from "../public/product.json"
import Card from "./components/Card"

const CardList = () => {
    const prod =da
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
