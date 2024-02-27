
const Card = ({name, price, description, design, display, audio, imageURL}) => {

  return (
    <div>
      <div className="flex">
        <img src={imageURL} className="w-[300px]" alt="product image" />
        <div>
            <table>
                <tr colspan='3'>
                    <th>{`${name} Specification`}</th>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>{`${name}`}</td>
                </tr>
            </table>
        </div>
      </div>
    </div>
  )
}

export default Card
