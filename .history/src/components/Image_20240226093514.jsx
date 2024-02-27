import products from "../product";
import { useState } from "react";

const Image = () => {
    const [image, setImage] = useState(products);
    console.log(products[0].imageURL);

  return (
    <div>
      <img src="" alt="" />
    </div>
  )
}

export default Image
