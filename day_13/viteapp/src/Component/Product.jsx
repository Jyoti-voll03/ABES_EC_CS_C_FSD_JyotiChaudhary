const Product = ({ product }) => {
    return (
        <div className="product">
            <h1><img src={product.image}  /></h1>
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
        </div>
    )
}

export default Product