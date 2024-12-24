import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
const Navbar = () => {
    const totalItem=useSelector((state)=>state.cartReducer.totalQuantity)
  return (
    <div>
         <header className="flex justify-around mt-0 border bg-blue-500 p-8">
        <ul class="flex text-2xl text-white font-bold navigation-menu">
            <li class="px-6"><a href="/" class="hover:text-gray-300">Home</a></li>
            <li class="px-6"><a href="#" class="hover:text-gray-300">About</a></li>
            <li class="px-6"><a href="#" class="hover:text-gray-300">Product</a></li>
            <li class="px-6"><a href="#" class="hover:text-gray-300">Contact Us</a></li>
        </ul>
        <input type="text" className='rounded-xl px-2 search-input' placeholder='Search Here'/>
        <Link className='h-14 w-14   text-center text-xl text-white font-bold rounded-lg' to={'/cart'}> <p className='bg-my-img text-4xl bg-cover bg-no-repeat h-full text-white'>{totalItem}</p></Link>
      
    </header>
    </div>
  )
}

export default Navbar