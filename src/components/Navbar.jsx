import { Link, NavLink } from "react-router-dom"
import { assets } from "../assets/assets"
import { useState } from "react"

const Navbar = () => {
    const [visible, setVisible] = useState(false)
    const [sidebar, setSideBar] = useState(false)
    return (
        <div>
            <div className="flex justify-between items-center py-5 font-medium">
                <Link className="sm:block hidden" to='/'><img src={assets.logo} className="w-14" alt="" /></Link>
                <img src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden" onClick={() => setVisible(true)} alt="" />
                <p className="text-blue-600 sm:hidden">Tech DRX</p>
                <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
                    <NavLink to='/' className='flex flex-col items-center gap-1'>
                        <p>Home</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-blue-500 sm:hidden" />
                    </NavLink>
                    <NavLink to='/products' className='flex flex-col items-center gap-1'>
                        <p>Products</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-blue-500 sm:hidden" />
                    </NavLink>
                    <NavLink to='/blog' className='flex flex-col items-center gap-1'>
                        <p>Blog</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-blue-500 sm:hidden" />
                    </NavLink>
                    <NavLink to='/faq' className='flex flex-col items-center gap-1'>
                        <p>FAQ</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-blue-500 sm:hidden" />
                    </NavLink>
                    <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                        <p>Contact</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-blue-500 sm:hidden" />
                    </NavLink>
                </ul>

                <div className="flex items-center gap-6">
                    <img src={assets.search_icon} className="cursor-pointer w-4 sm:block hidden" alt="" />
                    <Link to='/cart'><img src={assets.cart_icon} className="cursor-pointer w-4" alt="" /></Link>
                    <Link to='/login'><img src={assets.profile_icon} className="cursor-pointer w-4" alt="" /></Link>
                </div>
                {/* Navigation menu for small screnns */}
                <div className={`absolute top-0 left-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-[70%]' : 'w-0'}`}>
                    <div className="flex flex-col px-4 pt-5">
                        <div className="flex justify-between items-center">
                            <img src={assets.logo} className="w-14" alt="" />
                            <img onClick={() => setVisible(false)} src={assets.cross_icon} className="w-4 h-fit" alt="" />
                        </div>
                        <div className="flex flex-col justify-center gap-2 items-start pt-9 text-gray-500">

                            <div onClick={() => setSideBar(!sidebar)} className={`flex items-center justify-between cursor-pointer  w-full transition-all ${sidebar ? 'text-blue-500' : ''}`}>
                                <p>Products</p>
                                {sidebar ? <assets.FaAngleUp /> : <assets.FaAngleDown />}
                            </div>
                            <div className={`pl-4 flex flex-col justify-center items-center gap-2  ${sidebar ? 'block' : 'hidden'}`}>
                                <div className="flex items-center justify-start w-full cursor-pointer hover:text-blue-500 gap-2"><assets.PiMonitor size={17} /> <p>Mobile Phones</p></div>
                                <div className="flex items-center justify-start w-full cursor-pointer hover:text-blue-500 gap-2"><assets.CiMobile2 size={17} /> <p>Laptops & Computers</p> </div>
                                <div className="flex items-center justify-start w-full cursor-pointer hover:text-blue-500 gap-2"><assets.PiDeviceTabletCamera size={17} /> <p>Tablets & E-reader</p></div>
                                <div className="flex items-center justify-start w-full cursor-pointer hover:text-blue-500 gap-2"><assets.PiWatchThin size={17} /> Wearables</div>
                                <div className="flex items-center justify-start w-full cursor-pointer hover:text-blue-500 gap-2"><assets.CiHeadphones size={17} />  Audio</div>
                                <div className="flex items-center justify-start w-full cursor-pointer hover:text-blue-500 gap-2"><assets.CiCamera size={17} />  Cameras</div>
                                <div className="flex items-center justify-start w-full cursor-pointer hover:text-blue-500 gap-2"><assets.SlGameController size={17} />  Gaming</div>
                                <div className="flex items-center justify-start w-full cursor-pointer hover:text-blue-500 gap-2"><assets.PiNetworkLight size={17} />  Networking</div>
                                <div className="flex items-center justify-start w-full cursor-pointer hover:text-blue-500 gap-2"> <assets.TbBrandAndroid size={17} /> Accessories</div>
                            </div>
                            <NavLink className='hover:text-blue-500' to='/blog'> <p>Blog</p></NavLink>
                            <NavLink className='hover:text-blue-500' to='/faq'> <p>FAQ</p></NavLink>
                            <NavLink className='hover:text-blue-500' to='/contact'> <p>Contact Us</p></NavLink>

                        </div>
                    </div>
                </div>
                <div className={`absolute top-0 right-0 opacity-20 bottom-0 overflow-hidden bg-gray-800  ${visible ? 'w-[30%]' : 'w-0'}`}>
                </div>

            </div>
            <div className="inline-flex items-center  w-full bg-gray-200 text-center rounded-md  px-5 py-2  my-5 sm:hidden">
                <input type="text" className='flex-1 outline-none bg-inherit text-sm  ' placeholder="What can we help you to find ?" />
                <img src={assets.search_icon} className="w-3" alt="" />
            </div>
        </div>
    )
}

export default Navbar
