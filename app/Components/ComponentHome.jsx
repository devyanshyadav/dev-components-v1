'use client'
import React from 'react'
import useDevStore from '../libs/zuststore'
import ComponentCards from './ComponentCards'

const ComponentsHome = () => {
  const {ComponentData}=useDevStore((state)=>state)
  return (
        ComponentData.map((item, index) => (
          <ComponentCards key={index} {...item} />
        ))
  )
}

export default ComponentsHome