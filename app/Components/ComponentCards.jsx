import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ComponentCards = ({name, image, description,components_no,  url}) => {
  return (
    <Link href={url} className='w-full flex gap-5 divide-x divide-secondary  p-2 max-h-24 h-24 rounded-xl items-center hover:border-secondary border-2  border-transparent bg-secondary/50'>
     <Image src={image} alt="logo" width={60} height={60} className='justify-self-center'/>
     <span className='pl-2'>
        <h2 className='text-white font-semibold text-xl'>{name}</h2>
        <p className='text-sm text-secondary'>{components_no} components</p>
     </span>
    </Link>
  )
}

export default ComponentCards