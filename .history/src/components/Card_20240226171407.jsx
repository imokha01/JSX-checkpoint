const Card = ({name, price, description, type, design, size, audio, imageURL}) => {

  return (
    <div>
      <div className="flex justify-evenly mt-9">
        <img src={imageURL} className="w-[300px]" alt="product image" />
        <div>
            <table>
                <tr>
                    <th colspan="2">{`${name} Specification`}</th>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>{`${name}`}</td>
                </tr>
                <tr >
                    <th>Ty:</th>
                    <td>{type}</td>
                    <tr>
                        <
                        <td>{size}</td> 
                    </tr>
                </tr>
            </table>
        </div>
      </div>
    </div>
  )
}

export default Card
