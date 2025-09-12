import './Navbar.css'
import React from 'react'
import Mobile from './Mobile'
import Desktop from './Desktop'
import WhatsApp from './WhatsApp'

function Navbar() {
  return (
    <>
      <Mobile />
      <Desktop />
      <WhatsApp />
    </>
  )
}

export default Navbar
