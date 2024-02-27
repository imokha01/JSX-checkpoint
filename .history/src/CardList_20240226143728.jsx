import products from "./product"

const CardList = () => {
  return (
    <div>
      <div>
        {
            products
        }
        <img src={products.imageURL} alt="" />
      </div>
    </div>
  )
}

export default CardList
