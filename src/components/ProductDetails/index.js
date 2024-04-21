import { useEffect,useState} from "react"
import { useParams } from "react-router-dom"

import Header from "../Header"
import "./index.css"

const ProductDetails = () => {
    const[productDetails,setProductData] = useState([])

    const params = useParams()
    console.log(params.id)

    console.log(productDetails)
    useEffect(() => {
        const url = `http://fakestoreapi.com/products/${params.id}`
        const productDetailsResponse = async() => {
            const productResponse = await fetch(url);
            const productsData = await productResponse.json()
            setProductData(productsData)
        }
        productDetailsResponse();

    },[params.id])

    return (
      <div>
      <Header/>
      <hr />
      <div className="product-details-container">
        <img src={productDetails.image} alt={productDetails.title} className="product-image" />
        <div className="product-info-container">
        <p>{`category: ${productDetails.category}`}</p>
        <h2>{productDetails.title}</h2>
        <p>{`Product Description: ${productDetails.description}`}</p>
        <p>{`Price: $ ${productDetails.price}`}</p>
        <div className="increase-decrease-items-container">
           <button type="button">
           <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1713705698/1280px-Minus.svg_qkamgn.png" alt="minus" className="increase-decrease-image"/> 
            </button>
            <button type="button" className="count-button">1</button>
            <button type="button">
            <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1713705719/1200px-Plus_symbol.svg_bcimh9.png" alt="minus" className="increase-decrease-image"/>
            </button>
        </div>
        </div>
        </div>
      </div>
    )
}

export default ProductDetails
 