import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

const products = (props,{cart}) => {
    const router = useRouter()
    console.log(cart)
  return (

    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto md:m-4">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Product List - ECOMME</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>

            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Welcome to ECOMME – where your shopping experience is our top priority! 🌟 Dive into a world of endless possibilities, curated just for you. Explore, indulge, and discover a seamless journey through quality, variety, and unbeatable deals. Your satisfaction is our mission, and we're thrilled to have you with us on this exciting shopping adventure.

              Happy shopping! 🛍️✨
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {props.products.data.map((item) => {

              return (

                <div key={item.attributes.slug} className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img className={`h-60 aspect-ratio-${item.attributes.image.data[0].attributes.height/item.attributes.image.data[0].attributes.width} rounded aspect-auto w-full m-auto mb-6`} src={item.attributes.image.data[0].attributes.name} alt="content" />'

                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.attributes.category}</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font ">{item.attributes.name}</h2>
                    <h2 className="text-lg text-gray-900 font-medium title-font ">₹{item.attributes.price}</h2>
                    <p className="h-76 leading-fixed m-auto text-sm ">{item.attributes.shortDescription}</p>
                    <Link href={`/product/${item.attributes.slug}`}><button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm" src="https::">Buy Now</button></Link>
                    <button  className="my-2 text-white bg-indigo-500 border-0 py-1 m-5 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm" src="https::">Add to Cart</button>
                  </div>

                </div>  

              )

            })}
          </div>
        </div>

      </section>

    </div>

  )

}

export async function getServerSideProps(context) {
  let headers = { Authorization: "Bearer 29cf77865c9e8d10efac0d6b134a01dc7ad980477be673caa5f5f7e98b28cb8efbbf820f0e0028ae65c08779b58f487fe5dc15979a67f3f0bc0de5e3dde76b6b590cb6827e2cdd849cf3d09955ba0a646e0fea0a271382d0046e9507d2334f87637c40cb0dd6fc7e273187d36d4748942986dce8f42aa0320ed2487daee73567" }

  let a = await fetch("https://ecart-3xwd.onrender.com/api/products?populate=*")
  let products = await a.json()
  console.log(products)
  return {
    props: { products: products },
  }
}

export default products