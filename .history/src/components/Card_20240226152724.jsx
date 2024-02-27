
const Card = ({name, price, discription, design, display, audio, imageURL} ) => {
  return (
    <div>
      <div>
        <img src={imageURL} alt="product image" />
        <div>
            <table>
                <tr>
                    <th>{`${name} Specification`}</th>
                </tr>
                
            </table>
        </div>
      </div>
    </div>
  )
}

export default Card
