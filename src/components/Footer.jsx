import { useState } from "react"
import { assets } from "../assets/assets"
import { Link } from "react-router-dom"
const Footer = () => {

  const [contact,setContact] = useState(false)
  const [info,setInfo] = useState(false)
  const [company,setCompany] = useState(false)
  

  return (
    <div className="relative bg-[#021736]">
      <div className="absolute bottom-14  "><img src={assets.bgblur} alt="" /></div>
      <div className="md:px-[130px]  sm:px-[45px] px-[20px] pt-10 sm:h-[250px] h-[fit]  flex flex-col-reverse  sm:grid  grid-cols-[0.5fr_1fr_2fr_1fr_0.2fr] gap-x-2 gap-y-2 lg:gap-x-14 sm:gap-y-14  mt-40 text-sm">
        <div className="relative">
          <div onClick={()=> setCompany(!company)} className="flex justify-between items-center text-white">
            <p className=" font-medium mb-2 text-white">Company</p>
           {company ? <assets.FaAngleUp className="sm:hidden" />: <assets.FaAngleDown className="sm:hidden" />  }
          </div>
          <ul className={` flex-col gap-1 sm:px-0 px-4 text-xs text-gray-400 sm:flex  ${company ? "flex" : "hidden"}`}>
            <Link to='/about-us'>  <li>about us</li></Link>
            <li>blog</li>
            <li>returns</li>
            <li>order status</li>
          </ul>
          <div className="text-white pt-[70px] hidden items-center gap-2 cursor-pointer sm:flex">
            <assets.FaCcPaypal size={20} />
            <assets.SiAmericanexpress size={17} />
            <assets.FaCcVisa size={20} />
            <assets.FaCcMastercard size={20} />
          </div>

        </div>
        <div className="relative">
          <div onClick={()=> setInfo(!info)} className="flex justify-between items-center text-white">
            <p className="text-md font-medium mb-2 text-white">Info</p>
            {info ? <assets.FaAngleUp className="sm:hidden" />: <assets.FaAngleDown className="sm:hidden" />  }
          </div>
          <ul className={`flex-col text-xs gap-1 text-gray-400 sm:px-0 px-4 sm:flex  ${info ? "flex" : "hidden"}`}>
            <Link to='/'><li>How it works?</li></Link>
            <li>our promises</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="relative">
          <div onClick={()=> setContact(!contact)} className="flex justify-between items-center text-white">
            <p className=" font-medium mb-2 text-white">Contact us</p>
            {contact ? <assets.FaAngleUp className="sm:hidden" />: <assets.FaAngleDown className="sm:hidden" />  }
          </div>
          <div className={`flex-col gap-1 text-xs text-gray-400 sm:flex ${contact ? "flex" : "hidden"}`}>
            <div className="flex gap-1 items-center sm:px-0 px-4"><assets.CiLocationOn /><p>123 Main Street, Anytown,USA</p></div>
            <div className="flex gap-1 items-center sm:px-0 px-4"><assets.CiPhone /><p>+1 (555) 123-4567</p></div>
            <div className="flex gap-1 items-center sm:px-0 px-4"><assets.CiMail /><p>DrxTeamSupport@gmail.com</p></div>
          </div>
        </div>
        <div className="bg-none relative mx-auto sm:mx-0">
          <p className=" font-medium mb-2 text-white">Sign up for News and updates</p>
          <div className="inline-flex items-center   text-center rounded-md relative   py-2  ">
            <div className="absolute text-white left-2 top-[18px]"><assets.CiUser size={17} /></div>
            <input type="text" placeholder="E-mail Address" className="text-sm bg-inherit text-white border outline-none px-5 py-2 pl-7 border-white rounded-lg " />
            <div className="absolute z-20 top-5 right-2 text-white cursor-pointer"><assets.CiSearch /></div>
          </div>
          <div className="gap-2  hidden items-center text-white cursor-pointer sm:flex">
            <assets.FaFacebookSquare size={17} />
            <assets.CiTwitter size={17} />
            <assets.FaInstagram size={17} />
            <assets.FaYoutube size={17} />
          </div>
        </div>
        <div className="flex justify-between sm:flex-col gap-y-20 sm:justify-normal ">
          <div className="bg-[#AECDFB] flex items-center justify-center cursor-pointer rounded-full w-9 h-9"><assets.CiSquareQuestion size={22} /></div>
          <div className="bg-[#AECDFB] flex items-center justify-center cursor-pointer rounded-full w-9 h-9"><assets.FaAngleUp size={14} /></div>
        </div>
      </div>
      <div className="hidden sm:flex justify-between    px-[128px] pb-5  items-center">
        <div className="text-[10px] text-white">
          Copyright 2024@ Tech DRX
        </div>
        <ul className="flex items-center text-[10px] gap-x-6 text-gray-500">
          <li>cookie settings</li>
          <li>Privacy Policy</li>
          <li>Terms and Conditions </li>
          <li>Imprint </li>
        </ul>
      </div>
      <div className="flex sm:hidden justify-between pt-4 px-5  pb-5  items-center">
        <div className="text-white   items-center gap-2 cursor-pointer flex">
          <assets.FaCcPaypal size={20} />
          <assets.SiAmericanexpress size={17} />
          <assets.FaCcVisa size={20} />
          <assets.FaCcMastercard size={20} />
        </div>

        <div className="gap-2   items-center text-white cursor-pointer flex">
          <assets.FaFacebookSquare size={17} />
          <assets.CiTwitter size={17} />
          <assets.FaInstagram size={17} />
          <assets.FaYoutube size={17} />
        </div>
      </div>
    </div>
  )
}

export default Footer
