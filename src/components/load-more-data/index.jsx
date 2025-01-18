import { useEffect, useState } from "react";
import "./style.css";

function LoadMoreData() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [count, setCount] = useState(0);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    async function fetchProducts(){
        try{
            setLoading(true);
            const response = await fetch( `https://dummyjson.com/products?limit=10&skip=${count === 0 ? 0 : count * 10}`);
            const data = await response.json();
            
            if(data && data.products){
                setProducts((pre) => [...pre, ...data.products]);
                setLoading(false)
            }
            console.log(data)
        }catch(error){
            setError(error);
            setLoading(false);
        }
    }

    useEffect(() =>{
        fetchProducts()
    },[count]);

    useEffect(() =>{
        if(products.length === 60) setIsButtonDisabled(true);
    },[products])

    if(loading) return (
        <div>Loading the data! Please wait</div>
    );
    
    if(error) return (
        <div>{error}</div>
    )
  return (
    <div className="load-more-container">
        <div className="product-container">
        {
           products && products.length ? 
           products.map((productsItems, index) => (
            <div className="product" key={productsItems.id}>
                <img
                key={productsItems.id}
                src={productsItems.thumbnail}
                 />
                 <p>{productsItems.title}</p>
            </div>
           ))
           : null
        }
        </div>
        <div className="button-container">
            <button disabled={isButtonDisabled} onClick={() => setCount(count + 1)}>
                Load more
            </button>
            {
                isButtonDisabled && (
                    <p>You have reach the maximum request</p>
                )
            }
        </div>
    </div>
  );
}

export default LoadMoreData;
