
const Card = ({name, price, description, {type, }, design, display, audio, imageURL} ) => {
  return (
    <div>
      <div>
        <img src={imageURL} alt="product image" />
        <div>
            <table>
                <tr>
                    <th>{`${name} Specification`}</th>
                </tr>
                <tr>
                    <td>Name:</td>
                    <td>{`${name}`}</td>
                </tr>
                <tr>
                    <td>Display:</td>
                    <td>
                        <td>{`${display.type}`}</td>
                        <td>{`${display.size}`}</td>
                        <td></td>
                    </td>
                </tr>
                <tr>
                    <td>:</td>
                    <td>{`${display}`}</td>
                </tr>
                
            </table>
        </div>
      </div>
    </div>
  )
}

export default Card
