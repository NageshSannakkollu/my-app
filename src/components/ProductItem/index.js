
const ProductItem =props => {
    const {productInfo} = props 
    const {title} = productInfo
    return(
        <div>
            <h3>{title}</h3>
        </div>
    )
}

export default ProductItem 