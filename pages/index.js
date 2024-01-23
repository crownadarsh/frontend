import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import products from './products'
import { useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [show, setShow] = useState("translate-y-0");
  return (
    <div className='containe mx-auto px-4'>

      <products className={`w-full h-full bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>
        {products}
      </products>

    </div>
  )
}
