import React, { useState } from 'react'
import {useParams} from 'react-router'
import DATA from './DATA';
import {useCart} from 'react-use-cart'


function ProductDetail() {

    const {addItem} = useCart()
    const proid = useParams();
    const proDetail = DATA.filter(x => x.id == proid.id);
    const product = proDetail[0];

 

    return (

        <>
         <div className="container my-5 py-3">
         <div className="row">
          <div className="col-md-6 product">
              <img src={product.img} alt={product.title} />
          </div>
          <div className="col-md-6">
              <h1>{product.title}</h1>
              <hr/>
              <h2>${product.price}</h2>
              <p>{product.desc}</p>
              <button  onClick={() => addItem(product.item)} className="btn btn-outline-primary my-4 w-100">Add to Cart</button>
          </div>

         </div>
        </div>   
        </>
    )
}

export default ProductDetail
