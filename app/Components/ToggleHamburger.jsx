'use client'
import Hamburger from 'hamburger-react'
import React, { useEffect, useState } from 'react'
import useDevStore from '../libs/zuststore'

const ToggleHamburger = () => {
  const [isOpen, setOpen] = useState(true)
  const { SideBarToggle} = useDevStore((state) => state);
  useEffect(()=>{
    SideBarToggle(isOpen)

  },[isOpen])


  return (
    <Hamburger toggled={isOpen} toggle={setOpen} color="#22D3EE"  />
  )
}

export default ToggleHamburger