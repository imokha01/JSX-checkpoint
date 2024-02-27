import products from "../product";
import { useState } from "react";

const Image = () => {
    const [image, setImage] = useState(products);
    console.log(products.image);

  return (
    <div>
      
    </div>
  )
}

export default Image
