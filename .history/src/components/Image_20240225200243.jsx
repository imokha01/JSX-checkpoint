import product from 'src/product.jsx'

const Image = () => {
    const [image, setImage] = useState(product.imageURL);
    const [index, setIndex] = useState(0)
    console.log(product.imageURL);
  return (
    <div>
      
    </div>
  )
}

export default Image
