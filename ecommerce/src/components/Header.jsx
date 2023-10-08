import React, {useContext, useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import Logo from "../img/logo.svg"

import {SidebarContext} from "../contexts/SidebarContext"
import {CartContext} from "../contexts/CartContext"
import {BsBag} from "react-icons/bs"

const Header = () => {
  const [isActive, setisActive] = useState(false)
  const {itemAmount} = useContext(CartContext)
  const {isOpen, setIsOpen} = useContext(SidebarContext)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setisActive(true) : setisActive(false)
    })
  })
  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : "bg-none py-5"} fixed w-full z-10 transition-all`}>
      <div className="container flex mx-auto items-center justify-between h-full">
          <Link to={`/`}>
            <div>
              <img src={Logo} alt="" className="w-[40px]"/>
            </div>
        </Link>
        <div  className="cursor-pointer flex relative" onClick={() => setIsOpen(!isOpen)}>
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center ">{itemAmount}</div>
        </div>
      </div>
  </header>
  )
}

export default Header