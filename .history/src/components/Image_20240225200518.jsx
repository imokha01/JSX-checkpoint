import product from 'src/product.jsx'

const Image = () => {
    const [image, setImage] = useState(product.imageURL);
    const [index, setIndex] = useState(0)
    console.log(product.name);
    console.log();
  return (
    <div>
      
    </div>
  )
}

export default Image
