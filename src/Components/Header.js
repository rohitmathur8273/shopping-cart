import React from 'react'
import '../App.css';
function Header (props) {
  return (
    <div className='flex shopping-cart '>
    <div style={{cursor:'pointer'}} onClick={()=> props.handleShow(false)}
    >Shopping Card  Home</div>
    <div style={{cursor:'pointer'}} onClick={()=> props.handleShow(true)}>
        Cart <sup>{props.count}</sup>
    </div> 

    </div> 
  )
} 

export default Header;