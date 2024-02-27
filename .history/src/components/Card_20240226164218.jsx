
const Card = ({name, price, description, design,{type}, display, audio, imageURL}) => {

  return (
    <div>
      <div className="flex justify-evenly mt-9">
        <img src={imageURL} className="w-[300px]" alt="product image" />
        <div>
            <table>
                <tr>
                    <th>{`${name} Specification`}</th>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>{`${name}`}</td>
                </tr>
                <tr>
                    <th>Display</th>
                    <td>{display.type}</td>
                </tr>
            </table>
        </div>
      </div>
    </div>
  )
}

export default Card
