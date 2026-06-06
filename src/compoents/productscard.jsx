 import { Link } from "react-router-dom";
 
 function ProductsCard ({product}){

    return(
        <div style={{ border: "1px solid", padding: "10px", margin: "10px" }}>
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>

            <Link to={`/product/${product._id}`}>
             view Details
            </Link>
        </div>
        
    );
 };

 export default ProductsCard;
