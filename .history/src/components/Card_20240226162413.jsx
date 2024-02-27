
const Card = ({name, price, description, design, display, audio, imageURL}) => {

  return (
    <div>
      <div>
        <img src={imageURL} alt="product image" />
        <div>
            <p>{imageUR}</p>
            {/* <table>
                <tr>
                    <th>{name}</th>
                </tr>
                <tr>
                    <td>Name:</td>
                    <td>{name}</td>
                </tr>
                <tr>
                    <td>Display:</td>
                    {/* <td>
                        <td>{`${display.type}`}</td>
                        <td>{`${display.size}`}</td>
                        <td>{`${display.resolution}`}</td>
                    </td> */}
                    {/* <td>{design}</td>
                </tr>
                <tr>
                    <td>PRICE:</td>
                    <td>{price}</td>
                </tr>
                
            </table> */} */}
        </div>
      </div>
    </div>
  )
}

export default Card
