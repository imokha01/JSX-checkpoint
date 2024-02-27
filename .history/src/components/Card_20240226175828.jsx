const Card = ({name, price, description, type, size, resolution, imageURL}) => {

  return (
    <div>
      <div className="flex justify-evenly text-[1.1rem] bg-blue-50 text-black mt-9 rounded-3xl">
        <img src={imageURL} className="w-[300px]" alt="product image" />
        <div>
            <table className="border border-red-500 my-6 p text-[] rounded-md w-[500px]">
                <tr className="border border-b-red-500 py-[20px] ">
                    <th colSpan={3}>{`${name} Specification`}</th>
                </tr>
                <tr >
                    <th colSpan={2}>Name:</th>
                    <td>{`${name}`}</td>
                    

                </tr>
                <tr >
                    <th colSpan={2} >Type:</th>
                    <td colSpan={2}>{type}</td>
                </tr>
                <tr>
                     <th colSpan={2}>Size:</th>
                     <td colSpan={2}>{size}</td> 
                </tr>
                <tr>
                     <th colSpan={2}>Resolution:</th>
                     <td colSpan={2}>{resolution}</td> 
                </tr>
                <tr>
                     <th colSpan={2}>Price:</th>
                     <td className="text-[30px] text-blue-900" colSpan={2}>{price}</td> 
                </tr>
            </table>
        </div>
      </div>
    </div>
  )
}

export default Card
