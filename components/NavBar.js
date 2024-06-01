import React from 'react'
import Link from 'next/link'
const NavBar = () => {
  return (
    <div className=' '>
         <div className="container mx-auto py-2 flex flex-col lg:flex-row lg:justify-between items-center">
            <div className="flex items-center gap-10">
            <img src="assets/logo.svg" alt="" />
            <div className="flex items-center gap-7">
            <Link href='/' className='text-primary font-semibold text-lg'>
                Home
            </Link>
            <Link href='/' className='text-gray-800 font-medium text-lg'>
                About
            </Link>
            <Link href='/' className='text-gray-800 font-medium text-lg'>
                Pricing
            </Link>
            <Link href='/' className='text-gray-800 font-medium text-lg'>
                Features
            </Link>
            </div>
         
            </div>
       <button className='btn btn-active rounded-none hover:bg-primary border-none'>Download Now</button>

            </div>   
    </div>
  )
}

export default NavBar