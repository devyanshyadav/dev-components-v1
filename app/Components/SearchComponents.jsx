import React from 'react'
import { LuSearch } from "react-icons/lu";

const SearchComponents = () => {
  return (
    <div className='w-full flex items-center border-2 border-accent rounded-full p-1 bg-secondary/20 text-white/70'>
       <LuSearch className='text-accent text-xl' /> <input type="text" placeholder='Search' className='outline-none w-full px-1 text-sm bg-transparent rounded-full' />
    </div>
  )
}

export default SearchComponents