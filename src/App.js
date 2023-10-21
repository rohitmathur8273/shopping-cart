import React from 'react'
import Header from './Components/Header';
import { useState } from 'react';
import Productlist from './Components/Productlist'
import CartList  from  './Components/CartList'
function App () {

  const [product,setProduct] = useState([
    {
      url: 'https://m.media-amazon.com/images/I/61HJ+GtDyWL._UY625_.jpg',
      name: 'TRQ White Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 1599
    },
    {
      url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
      name: 'LOREM Watch Black',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 2599
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
      name: 'AMZ Laptop 8GB RAM',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 50000,
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvoDzLqrT7GwU3z7Ccp0Cl9rV0ZnU9DcmEg&usqp=CAU',
      name: 'Security Camera',
      category: 'CCTV',
      seller: 'Camron LTD',
      price: 4000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU',
      name: 'Watch Pink',
      category: 'Watches',
      seller: 'Watch Ltd',
      price: 2000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
      name: 'Cup red Color',
      category: 'Cup',
      seller: 'ABS Ltd',
      price: 100
    },
    {
      url: 'https://m.media-amazon.com/images/I/71JU-bUt-sL._SY450_.jpg',
      name: 'watch',
      category: 'smart watch',
      seller: 'ABS Ltd',
      price: 1700
    },
    {
      url: 'https://m.media-amazon.com/images/I/712z2r46EtL._SY450_PIbundle-2,TopRight,0,0_AA450SH20_.jpg',
      name: 'face wash',
      category: 'Printed Round wash',
      seller: 'littan Ltd',
      price: 700
    },
    {
      url: 'https://m.media-amazon.com/images/I/51zkyKXk+OL._SY300_SX300_.jpg',
      name: 'wallet',
      category: 'Coin Pocket',
      seller: 'Cold fasion',
      price: 750
    },
  ])

const [cart, setCart] =useState([])

const[showCart,setShowCart]= useState(false)

const addToCart =(data) => {
  setCart([...cart,{...data,quantity:1 }])
}
  
const handleShow =(value)=>{
setShowCart(value)
} 
  return (
    <div>
      <Header count={cart.length} 
      handleShow={handleShow}></Header>
{
  showCart ?
  <CartList cart={cart}></CartList> :
  <Productlist product={product} addToCart={addToCart}></Productlist> 



}
   </div>
  )
}

export default App;