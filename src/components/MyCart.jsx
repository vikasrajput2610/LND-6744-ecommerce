import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import toast from 'react-hot-toast'
import { cartActions } from '../store/cart'
const MyCart = () => {
    const cartItem=useSelector((state)=>state.cartReducer.items)
    const dispatch =useDispatch()
    const addMore=(item)=>{
        dispatch(cartActions.addItem(item));
        toast.success("Quantity Increased")
        console.log("quentity increased")
    }
    const remove=(item)=>{
        dispatch(cartActions.deleteItem(item));
        toast.success("Quantity Decreased")
        console.log("quentity increased")
    }
  return (
    <div className='flex justify-center flex-wrap'>
        {
            cartItem?(cartItem.map((item)=>(
                <div className='hover:shadow-md m-4 border black  flex flex-col justify-center items-center  h-96 w-96'>
                     <img className='h-2/5' src={item.image} alt="" />
                <h2 className='m-5 text-center'><strong>${item.title}</strong></h2>
                <div class='mt-2 flex justify-around  w-full font-bold'>
                    <div><strong>Quantity</strong> : {item.quantity}</div>
                    <div>${item.price}$</div>
                
                </div>
                <div className='flex w-full justify-around items-center mt-4'>
                     <button  onClick={()=>{addMore(item)}}  className='bg-yellow-500 hover:bg-yellow-600 font-bold text-l text-white p-2 rounded-lg'  >Increase Quantity</button>
                <button onClick={()=>{remove(item)}} className='bg-red-500 hover:bg-red-600 font-bold text-white text-lg p-2 rounded-lg'>Remove</button></div>
                </div>
            ))
          ):""
        }
    </div>
  )
}

export default MyCart