
const Card = ({name, price, description, design, display, audio, imageURL}) => {

  return (
    <div>
      <div>
        <img src={imageURL} alt="product image" />
        
      </div>
    </div>
  )
}

export default Card
