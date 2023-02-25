import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
  const {cartItems , subTotal ,shipping , tax , total} = useSelector((state) => state.cart)
const dispatch = useDispatch()
  const increment =(id) =>{
    dispatch({
      type:"addToCart",
      payload:{id}
    })
    dispatch({type:"calculatePrice"})
  }
  const decrement =(id) =>{
    dispatch({
      type:"decrement",
      payload:id
    })
    dispatch({type:"calculatePrice"})
  }
  const deleteHandler =(id) =>{
    dispatch({
      type:"deleteFromCart",
      payload:id
    })
    dispatch({type:"calculatePrice"})
  }
  return (
    <div className='cart'>
      <main>
        {
          cartItems.length > 0 ?(
            cartItems.map(i =>(
              <CartItem imgSrc={i.imgsrc} name={i.name} price={i.price}  quantity={i.quantity} id={i.id} key={i.id} decrement={decrement} increment={increment} deleteHandler={deleteHandler}/>
            ))
          ):<h1>No Item in cart</h1>
        }
      </main>
      <aside>
        <h2>Subtotal:${subTotal}</h2>
        <h2>Shipping:${shipping}</h2>
        <h2>Tax:${tax}</h2>
        <h2>Total:${total}</h2>
      </aside>
    </div>
  )
}

const CartItem = ({id , imgSrc , name , price , quantity , decrement , increment , deleteHandler}) =>(
<div className="cartItem">
  <img src={imgSrc} alt={name}/>
  <article>
    <h3>{name}</h3>
    <p>${price}</p>
  </article>
  <div>
    <button onClick={() => decrement(id)}>-</button>
    <p>{quantity}</p>
    <button onClick={() => increment(id)}>+</button>
  </div>
  <AiFillDelete onClick={() => deleteHandler(id)}/>
</div>
)

export default Cart
