import { prisma } from '@/lib/prisma';
import React from 'react'

const Footer = async () => {

  let visitors = await prisma.visitor.count();

  return (
    <footer className='flex items-center text-[#FFFFFF] w-full h-24 sm:h-1/5 justify-center bg-[#403F3F]'>
      <p>{visitors}</p>
    </footer>
  )
}

export default Footer
