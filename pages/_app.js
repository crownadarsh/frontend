import '@/styles/globals.css'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './footer'
import products from './products'
import Head from 'next/head'

function App({ Component, pageProps }) {

  <Head>
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/>
  </Head>

  useEffect(() => {
    
  
    return () => {
      
    }
  }, [])
  const [ cart , setCart ] = useState([])

  const [reloadKey, setreloadKey] = useState(1)

  const addToCart = (item , price , qty) => {
    let newCart = cart
    let tempCart = []
    tempCart.push(item,price,qty)
    newCart.push(tempCart)
    setCart(newCart)
    setreloadKey(Math.random())
  }
  const removeFromCart = (item , qty) => {
    let newCart = cart
    let index = newCart.indexOf(item)
    newCart.splice(index)
    setCart(newCart)
  }
  const clearCart = (item) => {
    setCart([])
  }

  

  return <><NavBar key={reloadKey} cart={cart}/><Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} {...pageProps} /><Footer/></>
}
export default App
