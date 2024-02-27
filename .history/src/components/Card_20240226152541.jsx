
const Card = ({name, price, discription, design, display, audio, imageURL} ) => {
  return (
    <div>
      <div>
        <img src={imageURL} alt="product image" />
        <div>
            <table></table>
        </div>
      </div>
    </div>
  )
}

export default Card
