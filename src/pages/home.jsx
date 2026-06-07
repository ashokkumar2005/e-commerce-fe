 import { useState,useEffect } from "react";
 import Products from "../compoents/productscard.jsx";
 import API from "../api/api.jsx";

 function Home (){
    const [products,setProducts] = useState([]);

    useEffect(()=>{
<<<<<<< HEAD
        API.get("/product")
=======
        API.get("/products")
>>>>>>> d0dcddc928af89daa3c953c7b9ada1b5727eb434
        .then(res=>setProducts(res.data))
        .catch(err=>console.log(err));
    },[]);

    return(
        <div>
            <h1>products</h1>
            {products.map(p=>(
                <Products key={p._id} product={p}></Products>
            ))}
        </div>
    )
    

 }

 export default Home;
