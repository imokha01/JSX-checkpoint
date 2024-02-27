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
                    <th cols>Name:</th>
                    <td></td>
                    <td>{`${name}`}</td>
                    <td></td>

                </tr>
                <tr >
                    <th>Type:</th>
                    <td>{type}</td>
                </tr>
                <tr>
                        <th>Size</th>
                        <td>{size}</td> 
                    </tr>
            </table>
        </div>
      </div>
    </div>
  )
}

export default Card
