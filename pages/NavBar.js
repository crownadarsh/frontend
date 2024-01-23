import React, { useEffect, useState } from "react"


const NavBar = ({cart}) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState(null);

  const submenuData1 = [
    { id: 1, name: "Home Care", doc_count: 12 },
    { id: 2, name: "Personal care", doc_count: 12 },
    { id: 3, name: "Health Care", doc_count: 12 },
    { id: 4, name: "Beauty Care", doc_count: 12 },
  ];
  const submenuData2 = [
    { id: 1, name: "Persona", doc_count: 12 },
    { id: 2, name: "G&H", doc_count: 12 },
    { id: 3, name: "Nutrilite", doc_count: 12 },
    { id: 4, name: "Attitude", doc_count: 12 },
    { id: 5, name: "Amway Home", doc_count: 12 },
    { id: 6, name: "Dynamite", doc_count: 12 },
    { id: 7, name: "Satinque", doc_count: 12 },
  ];

  return (
    <div>
        <header className="text-gray-600 bg-blue body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row bg-blue-800 items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='/'>
        <img width ={80} src = "/logo.svg"/>
        <span className="ml-3 text-xl">ECOMME</span>
      </a>
      <nav className="md:ml-auto text-white flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:text-gray-900" href="/">Home</a>
        <a className="mr-5 hover:text-gray-900" href="/products">Products</a>
        <a className="mr-5 hover:text-gray-900" href="/contactUs">Contact Us</a>
        <a className="mr-5 hover:text-gray-900" href="/cart">Cart({cart.length})</a>
      </nav>
      <button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 justify-center focus:outline-none hover:bg-indigo-600 rounded text-sm" src="https::">Login</button>
    </div>
  </header>
    </div>
  )
}

export default NavBar