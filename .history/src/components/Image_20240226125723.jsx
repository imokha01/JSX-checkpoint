import products from "../product";
import { useState } from "react";

const Image = () => {
    const [data] = useState(products);
    console.log(products[0].imageURL);

  return (
    <div>
      {products.map((item, index) => (
        <img src={data[index].imageURL} key={data[index]} alt="" />
      ))}
    </div>
  )
}

export default Image
