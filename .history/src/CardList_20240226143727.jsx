import products from "./product"

const CardList = () => {
  return (
    <div>
      <div>
        {
            product
        }
        <img src={products.imageURL} alt="" />
      </div>
    </div>
  )
}

export default CardList
