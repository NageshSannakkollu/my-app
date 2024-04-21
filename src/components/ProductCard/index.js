import { Link } from "react-router-dom"
import "./index.css"

const ProductCard = props => {
    const {productDetails} = props
    const {id,image,description,title} = productDetails 
    const descriptionLength = description.slice(0,30)
    const priceLength = title.slice(0,25);

    const addToFavoriteList = () => {
        console.log("Click On Favorite")
    }

    return (
        <Link to={`/products/${id}`}>
        <div className="products-container">
            <img src={image} alt={`Product of ${title}`} className="product-image" />
            <div className="title-favorite-container">
            <div className="product-name-description-container">
            <h4 className="product-name">{`${priceLength}...`}</h4>
            <p className="description">{`${descriptionLength}...`}</p>
            </div>
            <button type="button" className="favorite-button" onClick={addToFavoriteList}>
            <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1713586984/heart_rfhdk7.png" alt="favorite" className="favorite-image"/>
            </button>
            </div>
        </div>
        </Link>
       
    )
}

export default ProductCard