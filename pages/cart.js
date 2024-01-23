import Script from 'next/script'
import React, { useEffect, useState } from 'react'

const cart = ({cart}) => {
  const [subTotal , setSubTotal] = useState(0)
  const [form, setForm] = useState({name: "", phone: "",email: "",address: ""})
  useEffect(()=>{
    console.log(cart)
    let myTotal = 0
    for (let index = 0; index < cart.length; index++) {
      const element = cart[index];
      myTotal = myTotal + cart[index][1]
    }
    setSubTotal(myTotal)
  },[])
  const handleChange = (e) =>{
    console.log(e)
    setForm({...form, [e.target.name]: e.target.value})
  }
  return ( 
      <div>
        {/* <Script type="application/javascript" src={`https://securegw.paytm.in/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_MID}.js`} onload="onScriptLoad();" crossorigin="anonymous"></Script>
<Script>
  function onScriptLoad(){
      var config = {
        "root": "",
        "flow": "DEFAULT",
        "data": {
          "orderId": "", // update order id 
          "token": "", // update token value 
          "tokenType": "TXN_TOKEN",
          "amount": "" //update amount 
        },
        "handler": {
          "notifyMerchant": function(eventName,data){
            console.log("notifyMerchant handler function called");
            console.log("eventName => ",eventName);
            console.log("data => ",data);
          } 
        }
      };

      if(window.Paytm && window.Paytm.CheckoutJS){
          window.Paytm.CheckoutJS.onLoad(function excecuteAfterCompleteLoad() {
              // initialze configuration using init method 
              window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
                  // after successfully updating configuration, invoke JS Checkout
                  window.Paytm.CheckoutJS.invoke();
              }).catch(function onError(error){
                  console.log("error => ",error);
              });
          });
      } 
  }
</Script> */}
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto min-h-screen">
            <div className="flex flex-col w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">CheckOut</h1>
              <h1 className="text-2xl font-blod">Cart</h1>
              <div className="cart">{cart.length? `Your cart details as follows:`: `Cart is empty`}</div>
              <ul className='px-8 list-decimal'>

              {cart.map((item)=>{
                return <li key={item} className=''>
                  {item[0]} with price of {item[1]}
                </li>
              })}
              </ul>
              SubTotal: {subTotal}
            </div>
            <div className="lg:w-10/12 md:w-full mx-auto md:mx-20">
              <div className="m-2">
                <div className=" p-2 w-1/2 md:w-full mb-0">
                  <div className="relative">
                    <label htmlFor="Name" className="leading-7 text-lg text-blue-800"> Name</label>
                    
                  <input onChange={handleChange} value={form.name} type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-sm outline- text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className=" p-2 w-1/2 md:w-full mb-0">
                  <div className="relative">
                    <label htmlFor="phone" className="leading-7 text-lg text-blue-800">Contact No.</label>
                    <input onChange={handleChange} value={form.Mobile} type="mobile no." id="" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className=" p-2 w-1/2 md:w-full mb-0">
                  <div className="relative">
                    <label htmlFor="phone" className="leading-7 text-lg text-blue-800">E-Mail</label>
                    <input onChange={handleChange} value={form.Mobile}type="email" id="" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="address" className="leading-7 text-lg text-blue-800">Address</label>
                    <textarea onChange={handleChange} value={form.message} id="address" name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                  </div>
                </div>
                <div className="mx-20 p-2 w-full">
                  <button className="flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add More</button>
                  <button className="md:flex-none flex md:my-0 my-1 md:mx-auto  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">CheckOut</button>
                </div>
                
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default cart