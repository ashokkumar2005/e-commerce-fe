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