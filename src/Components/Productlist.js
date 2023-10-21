import React from "react";

function ProductList({product,addToCart}){
    return(
        <div className="flex">
        {
            product.map((productItem, productIndex) =>{
                  return(
                <div style={{width:'33%'}}>
                    <div className="product-item">
                        <img src={productItem.url} width="100%"/>
                        <p>{productItem.name} | {productItem.category}</p>
                        <p>{productItem.sellar}</p>
                        <p>Rs. {productItem.price}/-</p>
                        <button onClick={()=>addToCart(productItem)} 
                        >Add To Cart</button>
                        
                        
                    </div>
                        
                 </div>
                  )
            })
        }
        </div>

    )
}
 export default ProductList  