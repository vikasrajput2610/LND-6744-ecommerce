import React, { useState } from 'react'
import { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { cartActions } from '../store/cart'
import toast from 'react-hot-toast'
const Home = () => {
    const [data,setData]=useState('')
    const dispatch=useDispatch();
    const itemData=useSelector((state)=>state.cartReducer.items)
    useEffect(() => {
      const getData=async()=>{
        let res=await fetch('https://fakestoreapi.com/products');
        res=await res.json();
      return res;
     
    }

     (async()=>{
        
        const res=await getData()
        setData(res)
        console.log('the data is ',data)
     })()
     
    }, [])
    const addToCart=async(item)=>{
        dispatch(cartActions.addItem(item));
        toast.success("Item added")
        console.log("item data is ==>>",itemData)
    }
  return (
    <div className='flex justify-center flex-wrap'>
        {
            data?(data.map((item)=>(
                <div className='hover:shadow-md m-4 border black  flex flex-col justify-center items-center  h-96 w-96'>
                     <img className='h-2/5' src={item.image} alt="" />
                <h2 className='m-5 text-center'><strong>${item.title}</strong></h2>
                <div class='mt-2 flex justify-around  w-full font-bold'>
                    <div>${item.rating.rate} &#11088;</div>
                    <div>${item.price}$</div>
                </div>
                <button className='bg-red-500 p-3 text-white rounded-lg hover:bg-red-600' onClick={()=>addToCart(item)}>Add to Cart</button>
                </div>
            ))
          ):""
        }
    </div>
  )
}

export default Home