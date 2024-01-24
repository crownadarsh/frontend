import React from 'react'
import { useRouter } from 'next/router'

const Slug = ({ product , addToCart , cart }) => {
  const router = useRouter()
  console.log(cart)
  const { slug } = router.query
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap h-22">
            <img alt="image" className="lg:w-35 w-35 lg:h-100 md:h-80 object-cover object-center rounded " src={product.attributes.image.data[0].attributes.name} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h3 className="text-sm title-font text-gray-500 tracking-widest">ECCOME</h3>
              <h2 className="text-sm title-font text-black-500 tracking-widest">{product.attributes.category}</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.attributes.name}</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
              </div>
              <p className="leading-relaxed">{product.attributes.description }</p>
              
              <div className="flex">
                <span className="flex mx-2 py-2 title-font font-big font-extrabold text-2xl text-gray-900">₹{product.attributes.price}</span>
                <button onClick={()=>{addToCart(slug,product.attributes.price,1)}} className="my-2 text-white bg-indigo-500 border-0 py-1 m-5 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm" src="https::">Add to Cart</button>
                <button onClick={()=>{router.push('/cart')}} className="my-2 text-white bg-indigo-500 border-0 py-1 m-5 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm" src="https::">CheckOut</button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export async function getServerSideProps(context) {
  console.log(context.query)
  let headers = { Authorization: "Bearer 29cf77865c9e8d10efac0d6b134a01dc7ad980477be673caa5f5f7e98b28cb8efbbf820f0e0028ae65c08779b58f487fe5dc15979a67f3f0bc0de5e3dde76b6b590cb6827e2cdd849cf3d09955ba0a646e0fea0a271382d0046e9507d2334f87637c40cb0dd6fc7e273187d36d4748942986dce8f42aa0320ed2487daee73567" }

  let a = await fetch("https://ecart-3xwd.onrender.com/api/products?filters[slug]=" + context.query.slug +"&populate=*")
  let product = await a.json()
  console.log(product)
  return {
    props: { product: product.data[0] },
  }
}

export default Slug
