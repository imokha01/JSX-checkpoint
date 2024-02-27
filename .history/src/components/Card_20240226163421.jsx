
const Card = ({name, price, description, design, display, audio, imageURL}) => {

  return (
    <div>
      <div>
        <img src={imageURL} className="w-[300px]" alt="product image" />
        <div>
            <table>
                <tr>
                    <th>{`${name} Specification`}</th>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>{``}</td>
                </tr>
            </table>
        </div>
      </div>
    </div>
  )
}

export default Card
