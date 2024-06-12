import React from 'react'
import ComponentCards from './ComponentCards'
import ComponentData from '../libs/utils/ComponentDataArray'

const ComponentsHome = () => {

  return (
    ComponentData.map((item, index) => (
      <ComponentCards key={index} {...item} />
    ))
  )
}

export default ComponentsHome