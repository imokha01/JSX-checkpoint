import products from "../product";
import { useState } from "react";

const Image = () => {
    const [data] = useState(products);
    console.log(products[0].imageURL);

  return (
    <div>
      {products.map((item, index) => (
        <img src={item.imageURL} key={inde} alt="" />
      ))}
    </div>
  )
}

export default Image
