import React from 'react'
import  DATA  from '../DATA'
import {useCart} from 'react-use-cart'
const Product = () => {
    const {addItem} = useCart()

    const cardItem = (item) => {
        return (
            <div class="card my-5 py-4 " key={item.id} style={{width: "18rem"}}>
                <img src={item.img} class="card-img-top" alt={item.title} />
                <div class="card-body text-center">
                    <h5 class="card-title">{item.title}</h5>
                    <p className="lead">${item.price}</p>
                    <button onClick={() => addItem(item)} class="btn btn-outline-primary">Add to Cart</button>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Product</h1>
                        <hr/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {
                        DATA.map(cardItem)
                    }
                </div>
            </div>
        </div>
    )
}

export default Product
