
const Card = ({name, price, description, design, display, audio, imageURL}) => {

  return (
    <div>
      <div>
        <img src={imageURL} alt="product image" />
        <div>
            <img src={imageURL} alt="" />
                    </div>
      </div>
    </div>
  )
}

export default Card
