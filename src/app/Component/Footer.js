import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
     <div className='bg-secondary mt-5 p-5 '>
      <ul className='d-flex gap-2 '>
        <li style={{listStyle:"none"}}><Link href={"#"}className='text-decoration-none text-warning'>Priacy</Link></li>|
        <li style={{listStyle:"none"}}><Link href={"#"}className='text-decoration-none text-warning '>Contact Us</Link></li>
      </ul>
      <p className='fs-5 ms-4'>Copyright © 2023 bestschool.net.in; All Rights Reserved </p>
     </div>
    </>
  )
}

export default Footer