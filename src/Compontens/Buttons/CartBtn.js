import React from 'react'
import { useCart } from 'react-use-cart';
import {NavLink} from 'react-router-dom'
const CartBtn = () => {
  const {
    
    totalUniqueItems,
   
} = useCart();

    return (
        <>
         <NavLink to='/cart' className='btn  btn-outline-primary ms-2'>
           <span className="fa fa-shopping-cart ms-2"></span>Cart({totalUniqueItems})
         </NavLink>   
        </>
    )
}

export default CartBtn
