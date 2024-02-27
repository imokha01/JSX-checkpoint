import products from "../product";
import { useState } from "react";

const Image = () => {
    const [image] = useState(products);
    console.log(products[0].imageURL);

  return (
    <div>
      {products.map((index) => (
        <img src={products[index].imageURL} key={image[index]} alt="" />
      ))}
    </div>
  )
}

export default Image