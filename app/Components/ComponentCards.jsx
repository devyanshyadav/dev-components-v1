import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ComponentCards = ({name, image, description,components_no,  url}) => {
  return (
    <Link href={url} className='w-full flex gap-5 pl-4 p-2 max-h-24 h-24 rounded-xl items-center hover:border-secondary border-2  border-transparent bg-secondary/30'>
     <Image src={image} alt="logo" width={60} height={60}/>
     <span className='pl-3'>
        <h2 className='text-white font-semibold text-xl'>{name}</h2>
        <p className='text-sm text-accent/50'>{components_no} components</p>
     </span>
    </Link>
  )
}

export default ComponentCards