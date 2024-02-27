const Card = ({name, price, description, type, design, display, audio, imageURL}) => {

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
                    <td>{type}</td>
                    <td
                </tr>
            </table>
        </div>
      </div>
    </div>
  )
}

export default Card
