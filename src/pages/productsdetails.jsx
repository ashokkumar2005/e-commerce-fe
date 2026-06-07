<<<<<<< HEAD
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../api/api.jsx";

// FIX: function name was lowercase (productdetails) — React components must start uppercase
function ProductDetails() {
    const { id } = useParams();
    // FIX: destructuring was wrong — const {product,setProduct} should be const [product,setProduct]
    const [product, setProduct] = useState({});

    useEffect(() => {
        API.get(`/product/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div>
            <h3>{product.name}</h3>
            <h3>price: {product.price}</h3>
            {/* FIX: product.details → product.description (matches model field) */}
            <h3>{product.description}</h3>
            <button>Add to cart</button>
        </div>
    );
}

export default ProductDetails;
=======
 import {useState,useEffect} from "react";
 import {useParams} from "react-router-dom";
 import API from "../api/api.jsx";

 function productdetails (){
    const {id} = useParams();
    const {product,setProduct} = useState({});
 
    useEffect(()=>{
        API.get(`/product/${id}`)
        .then(res=>setProduct(res.data))
        .catch(err=>console.log(err))
    },[id]);

    return(
        <div>
            <h3>{product.name}</h3>
             <h3>price :{product.price}</h3>
              <h3>{product.details}</h3>

              <button>Add to card</button>
        </div>
    )
}

export default productdetails;
>>>>>>> d0dcddc928af89daa3c953c7b9ada1b5727eb434
